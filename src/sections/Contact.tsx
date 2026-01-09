import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(2, { message: 'Subject must be at least 2 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });
  
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(ref, { threshold: 0.1 });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Create Gmail mailto link
      const emailTo = 'rizwanriyaz321@gmail.com';
      const subject = encodeURIComponent(data.subject || `New Message from ${data.name}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n\n` +
        `Message:\n${data.message}`
      );
      
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&su=${subject}&body=${body}`;
      
      // Open Gmail in a new tab
      window.open(gmailUrl, '_blank');
      
      // Also save to database for record keeping
      const apiEndpoint = '/api/contact';
        
      await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      toast({
        title: 'Draft Created!',
        description: 'Opening Gmail with your message details...',
      });
      
      form.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      
      toast({
        title: 'Error',
        description: 'There was a problem processing your request.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#08080a] relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants} className="text-center mb-24">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6 tracking-tight">Direct Access</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-10 rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Ready to initiate a high-level digital collaboration? Reach out below.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 glass-morphism p-10 rounded-3xl border border-white/5">
              <h3 className="font-heading font-semibold text-3xl mb-10 text-white tracking-tight">Intelligence</h3>
              
              <div className="space-y-10">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-blue-600/10 text-blue-400 rounded-full flex items-center justify-center mr-4 shrink-0 border border-blue-500/10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <i className="fas fa-envelope text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1 text-gray-300">Email</h4>
                    <a href="mailto:rizwanriyaz321@gmail.com" className="text-blue-500 hover:text-blue-400 transition-colors font-light">rizwanriyaz321@gmail.com</a>
                  </div>
                </div>
                

                
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-blue-600/10 text-blue-400 rounded-full flex items-center justify-center mr-4 shrink-0 border border-blue-500/10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <i className="fas fa-map-marker-alt text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1 text-gray-300">Location</h4>
                    <p className="text-gray-500 font-light">Kochi, Kerala, India</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-blue-600/10 text-blue-400 rounded-full flex items-center justify-center mr-4 shrink-0 border border-blue-500/10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <i className="fas fa-globe text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1 text-gray-300">Social Media</h4>
                    <div className="flex space-x-4 mt-2">
                      <a 
                        href="https://www.linkedin.com/in/rizwanriyaz321" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 text-gray-700 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label="LinkedIn"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a 
                        href="https://www.facebook.com/rizwanachoo123" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 text-gray-700 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label="Facebook"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a 
                        href="https://www.instagram.com/_.rizwanachu123._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 text-gray-700 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label="Instagram"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3 glass-morphism p-10 rounded-3xl border border-white/5">
              <h3 className="font-heading font-semibold text-3xl mb-10 text-white tracking-tight">Send a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-400 font-medium text-sm uppercase tracking-widest mb-3 block">Your Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              className="w-full p-4 bg-black/40 border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-white placeholder:text-gray-600 h-14"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-400 font-medium text-sm uppercase tracking-widest mb-3 block">Your Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="john@example.com" 
                              className="w-full p-4 bg-black/40 border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-white placeholder:text-gray-600 h-14"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400 font-medium text-sm uppercase tracking-widest mb-3 block">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Project Inquiry" 
                            className="w-full p-4 bg-black/40 border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-white placeholder:text-gray-600 h-14"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400 font-medium text-sm uppercase tracking-widest mb-3 block">Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Hello, I'd like to discuss a project..." 
                            className="w-full p-4 bg-black/40 border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-white placeholder:text-gray-600 min-h-[180px] resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <motion.div
                    whileHover={ { scale: 1.02 } }
                    whileTap={ { scale: 0.98 } }
                  >
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-10 py-7 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center gap-3 border border-blue-400/20 uppercase tracking-widest text-xs"
                    >
                      {isSubmitting ? 'Processing Email...' : (
                        <>
                          Send Message <i className="fas fa-paper-plane ml-2"></i>
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

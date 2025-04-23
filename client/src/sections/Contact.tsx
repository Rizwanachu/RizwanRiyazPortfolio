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
      // Use Netlify function endpoint for deployment
      const apiEndpoint = import.meta.env.DEV 
        ? '/api/contact' 
        : '/.netlify/functions/contactform';
        
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }
      
      toast({
        title: 'Message sent!',
        description: 'Thanks for your message. I will get back to you soon.',
      });
      
      form.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      
      toast({
        title: 'Error',
        description: 'There was a problem sending your message. Please try again.',
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
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="section-reveal"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 bg-white p-8 rounded-lg shadow-custom">
              <h3 className="font-heading font-semibold text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4 shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email</h4>
                    <a href="mailto:rizwanriyaz321@gmail.com" className="text-primary hover:underline">rizwanriyaz321@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4 shrink-0">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Phone</h4>
                    <a href="tel:+917356856485" className="text-primary hover:underline">+91 7356856485</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4 shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Location</h4>
                    <p className="text-gray-700">Kochi, Kerala, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4 shrink-0">
                    <i className="fas fa-globe"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Social Media</h4>
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
                        href="#" 
                        className="w-10 h-10 bg-gray-100 text-gray-700 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label="Facebook"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-gray-100 text-gray-700 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label="Instagram"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-gray-100 text-gray-700 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label="Pinterest"
                      >
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3 bg-white p-8 rounded-lg shadow-custom">
              <h3 className="font-heading font-semibold text-2xl mb-6">Send a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Your Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                          <FormLabel className="text-gray-700 font-medium">Your Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="john@example.com" 
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                        <FormLabel className="text-gray-700 font-medium">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Project Inquiry" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                        <FormLabel className="text-gray-700 font-medium">Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Hello, I'd like to discuss a project..." 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message <i className="fas fa-paper-plane ml-2"></i>
                      </>
                    )}
                  </Button>
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

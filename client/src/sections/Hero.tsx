import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[#0a0a0c] overflow-hidden min-h-[95vh] flex items-center"
    >
      {/* Premium Dark Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <motion.div 
          animate={ { 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          } }
          transition={ { duration: 10, repeat: Infinity, ease: "linear" } }
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={ { 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          } }
          transition={ { duration: 12, repeat: Infinity, ease: "linear" } }
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[120px]" 
        />
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center relative z-10">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial={ { opacity: 0, x: -50 } }
          animate={ { opacity: 1, x: 0 } }
          style={ { opacity, scale } }
          transition={ { duration: 0.8, ease: "easeOut" } }
        >
          <motion.div
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { delay: 0.2, duration: 0.6 } }
          >
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-8xl mb-6 leading-tight tracking-tighter text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500 inline-block animate-gradient">Rizwan Riyaz</span>
            </h1>
          </motion.div>
          
          <motion.h2 
            className="text-xl md:text-3xl text-gray-400 mb-8 font-light tracking-wide leading-relaxed"
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { delay: 0.4, duration: 0.6 } }
          >
            Web Designer <span className="text-blue-500 mx-2 hidden sm:inline">|</span> <br className="sm:hidden" /> Digital Marketing & Social Media Manager <span className="text-blue-500 mx-2 hidden sm:inline">|</span> <br className="sm:hidden" /> Data Entry Specialist <span className="text-blue-500 mx-2 hidden sm:inline">|</span> <br className="sm:hidden" /> Certified in Google Digital Marketing & E-Commerce
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-700 mb-8 max-w-lg"
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { delay: 0.6, duration: 0.6 } }
          >
            Turning creative ideas into professional digital experiences. Let's work together to bring your vision to life!
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { delay: 0.8, duration: 0.6 } }
          >
            <motion.a 
              href="#contact" 
              whileHover={ { scale: 1.05, translateY: -2 } }
              whileTap={ { scale: 0.95 } }
              className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-primary/20"
            >
              Get In Touch
            </motion.a>
            <motion.a 
              href="#portfolio" 
              whileHover={ { scale: 1.05, translateY: -2 } }
              whileTap={ { scale: 0.95 } }
              className="px-8 py-4 bg-white text-primary font-semibold rounded-xl border-2 border-primary hover:bg-blue-50 transition-colors shadow-md"
            >
              View My Work
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="mt-10 flex space-x-6"
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { delay: 1, duration: 0.6 } }
          >
            {[
              { href: "https://www.linkedin.com/in/rizwanriyaz321", icon: "fab fa-linkedin", label: "LinkedIn" },
              { href: "https://www.facebook.com/rizwanachoo123", icon: "fab fa-facebook", label: "Facebook" },
              { href: "https://www.instagram.com/_.rizwanachu123._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: "fab fa-instagram", label: "Instagram" }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={ { scale: 1.2, color: "var(--primary)" } }
                className="text-gray-400 hover:text-primary text-2xl transition-colors"
                aria-label={social.label}
              >
                <i className={social.icon}></i>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center perspective-1000"
          initial={ { opacity: 0, scale: 0.8, rotateY: 30 } }
          animate={ { opacity: 1, scale: 1, rotateY: 0 } }
          transition={ { duration: 1, ease: "easeOut" } }
        >
          <motion.div 
            className="relative"
            whileHover={ { rotateY: 15, rotateX: -5, scale: 1.05 } }
            transition={ { type: "spring", stiffness: 300, damping: 20 } }
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-xl animate-pulse" style={ { animationDelay: '1s' } }></div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Rizwan Riyaz" 
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-8 border-[#1a1a1e] shadow-[0_0_50px_rgba(59,130,246,0.3)] z-10 relative grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Floating badges */}
              <motion.div 
                animate={ { y: [0, -10, 0] } }
                transition={ { duration: 3, repeat: Infinity, ease: "easeInOut" } }
                className="absolute -right-4 top-10 bg-white p-3 rounded-2xl shadow-xl z-20 flex items-center gap-2"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                <span className="text-sm font-bold text-[#292a31]">Available for Hire</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const About = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(ref, { threshold: 0.1 });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
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
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0c] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants} className="text-center mb-24">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6 tracking-tight">About Me</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <motion.div 
              variants={itemVariants} 
              className="md:w-1/2 perspective-1000"
            >
              <div className="card-3d p-2 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Rizwan working" 
                  className="rounded-xl shadow-2xl w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
            
            <div className="md:w-1/2">
              <motion.h3 variants={itemVariants} className="font-heading font-semibold text-3xl mb-6 text-blue-400">
                Web Architect & Digital Strategist
              </motion.h3>
              <motion.p variants={itemVariants} className="text-gray-400 mb-6 text-lg font-light leading-relaxed">
                I specialize in bridging the gap between complex business requirements and high-end digital execution. My approach combines technical precision with creative strategy.
              </motion.p>
              <motion.p variants={itemVariants} className="text-gray-700 mb-6">
                My journey began with a passion for creativity and technology. Over the years, I've developed expertise in WordPress, Microsoft Office, and various digital marketing strategies while maintaining a keen eye for detail in my data entry and organizational work.
              </motion.p>
              
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              >
                <motion.div variants={itemVariants}>
                  <p className="font-medium"><i className="far fa-envelope mr-2 text-primary"></i> rizwanriyaz321@gmail.com</p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <p className="font-medium"><i className="fas fa-map-marker-alt mr-2 text-primary"></i> Kochi, Kerala, India</p>
                </motion.div>
              </motion.div>
              
              <motion.a 
                variants={itemVariants}
                href="#contact" 
                className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Let's Connect
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { technicalSkills, softSkills } from '@/lib/data';

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(ref, { threshold: 0.1 });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
      
      // Animate progress bars when section comes into view
      const progressBars = document.querySelectorAll('.skills-section .progress-bar-animation');
      progressBars.forEach(bar => {
        if (bar instanceof HTMLElement) {
          const targetWidth = bar.style.width;
          bar.style.width = '0';
          
          setTimeout(() => {
            bar.style.width = targetWidth;
          }, 200);
        }
      });
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
    <section id="skills" className="py-24 md:py-32 bg-[#08080a] skills-section relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] -z-10"></div>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants} className="text-center mb-24">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6 tracking-tight">Core Expertise</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-10 rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Specialized skill set focused on digital acceleration and structural efficiency.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Technical Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="font-heading font-semibold text-3xl mb-10 flex items-center text-white tracking-tight">
                <span className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center mr-5 shadow-inner">
                  <i className="fas fa-laptop-code text-xl"></i>
                </span>
                Technical Stack
              </h3>
              
              <div className="space-y-10">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-4 items-end">
                      <span className="font-medium text-lg text-gray-300 group-hover:text-blue-400 transition-colors">{skill.name}</span>
                      <span className="text-sm font-bold text-gray-500">{skill.percentage}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden backdrop-blur-md border border-white/5">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 progress-bar-animation shadow-[0_0_10px_rgba(37,99,235,0.5)]" 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Soft Skills & Certificates */}
            <div className="space-y-10">
              {/* Soft Skills */}
              <motion.div variants={itemVariants}>
                <h3 className="font-heading font-semibold text-2xl mb-6 flex items-center">
                  <span className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-user-tie"></i>
                  </span>
                  Soft Skills
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 text-primary rounded-full flex items-center justify-center mr-3">
                        <i className={skill.icon}></i>
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Certificates */}
              <motion.div variants={itemVariants}>
                <h3 className="font-heading font-semibold text-2xl mb-6 flex items-center">
                  <span className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-certificate"></i>
                  </span>
                  Certificates
                </h3>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="mr-4 text-3xl text-blue-500">
                      <i className="fab fa-python"></i>
                    </div>
                    <div>
                      <h4 className="font-heading font-medium text-lg">100 Days of Code: The Complete Python Pro Bootcamp</h4>
                      <p className="text-gray-600 text-sm mb-1">Udemy</p>
                      <p className="text-primary font-medium mb-2">Certificate ID: UC-f27e995f</p>
                      <a href="#" className="text-sm text-blue-600 hover:underline">View Certificate</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

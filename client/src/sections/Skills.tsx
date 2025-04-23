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
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 skills-section" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="section-reveal"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are the tools and technologies I specialize in to deliver high-quality solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="font-heading font-semibold text-2xl mb-6 flex items-center">
                <span className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-laptop-code"></i>
                </span>
                Technical Skills
              </h3>
              
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary progress-bar-animation" 
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

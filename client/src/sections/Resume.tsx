import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Button } from '@/components/ui/button';

// In development and production, use the API endpoint to serve the attached asset
const resumePdfPath = '/api/resume';

const Resume = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(ref, { threshold: 0.1 });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
      
      // Animate progress bars
      const progressBars = document.querySelectorAll('.progress-bar-animation');
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
    <section id="resume" className="py-24 md:py-32 bg-[#0a0a0c] relative" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] -z-10"></div>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants} className="text-center mb-24">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6 tracking-tight">Experience</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex justify-center mb-16">
            <motion.div
              whileHover={ { scale: 1.05 } }
              whileTap={ { scale: 0.95 } }
            >
              <Button className="px-10 py-6 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center gap-3 border border-blue-400/20 uppercase tracking-widest text-xs">
                <a href={resumePdfPath} download="RIZWAN_RIYAZ_RESUME_2026.pdf" className="text-white flex items-center">
                  <i className="fas fa-download mr-2"></i> DOWNLOAD RESUME
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Experience */}
            <motion.div variants={itemVariants} className="glass-morphism p-10 rounded-3xl border border-white/5">
              <h3 className="font-heading font-semibold text-3xl mb-10 flex items-center text-white tracking-tight">
                <span className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center mr-5 shadow-inner">
                  <i className="fas fa-briefcase text-xl"></i>
                </span>
                Professional Path
              </h3>
              
              <div className="space-y-12">
                {/* Experience 1 */}
                <div className="border-l-2 border-blue-600/30 pl-8 relative">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0 shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
                  <h4 className="font-heading font-bold text-2xl text-white mb-1 tracking-tight">Web Designer & Digital Marketer</h4>
                  <p className="text-blue-400 font-medium mb-2 tracking-wide text-sm uppercase">Glam Gustoz</p>
                  <p className="text-gray-500 font-bold mb-4 text-xs tracking-widest uppercase">04/2023 — Present</p>
                  <ul className="text-gray-400 space-y-4 font-light leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3">/</span>
                      <span>Designed and managed WordPress and WooCommerce websites for personal brands and e-commerce clients.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3">/</span>
                      <span>Founded Glam Gustoz, a self-care and fashion brand merging mental health awareness with modern design.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3">/</span>
                      <span>Improved SEO, load speed, and overall website performance by 20% using Airlift Software.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3">/</span>
                      <span>Planned and executed Google-certified digital marketing campaigns across search and social platforms.</span>
                    </li>
                  </ul>
                </div>
                
                {/* Experience 2 */}
                <div className="border-l-2 border-blue-600/30 pl-8 relative">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0 shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
                  <h4 className="font-heading font-bold text-2xl text-white mb-1 tracking-tight">Billing Executive</h4>
                  <p className="text-blue-400 font-medium mb-2 tracking-wide text-sm uppercase">Oh Baby</p>
                  <p className="text-gray-500 font-bold mb-4 text-xs tracking-widest uppercase">Jun 2021 — Mar 2023</p>
                  <ul className="text-gray-400 space-y-4 font-light leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3">/</span>
                      <span>Managing billing, pricing, and client records while ensuring compliance and accuracy.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3">/</span>
                      <span>Strengthened customer relationships leading to a 25% reduction in repeat complaints.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3">/</span>
                      <span>Reduced acquisition costs through effective negotiation and pricing adjustment.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Education & Languages */}
            <div className="space-y-10">
              {/* Education */}
              <motion.div variants={itemVariants} className="glass-morphism p-10 rounded-3xl border border-white/5">
                <h3 className="font-heading font-semibold text-3xl mb-10 flex items-center text-white tracking-tight">
                  <span className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center mr-5 shadow-inner">
                    <i className="fas fa-graduation-cap text-xl"></i>
                  </span>
                  Education
                </h3>
                
                <div className="space-y-12">
                  {/* Education 1 */}
                  <div className="border-l-2 border-purple-600/30 pl-8 relative">
                    <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-0 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
                    <h4 className="font-heading font-bold text-2xl text-white mb-1 tracking-tight">Bachelors in Business Management</h4>
                    <p className="text-purple-400 font-medium mb-2 tracking-wide text-sm uppercase">Warsaw University of Economics, Poland</p>
                    <p className="text-gray-500 font-bold mb-4 text-xs tracking-widest uppercase">Nov 2025 — Jun 2028</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Languages */}
              <motion.div variants={itemVariants} className="glass-morphism p-10 rounded-3xl border border-white/5">
                <h3 className="font-heading font-semibold text-3xl mb-10 flex items-center text-white tracking-tight">
                  <span className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center mr-5 shadow-inner">
                    <i className="fas fa-language text-xl"></i>
                  </span>
                  Linguistic Profile
                </h3>
                
                <div className="space-y-8">
                  {[
                    { name: 'English', level: 'Proficient (B2)', width: '90%' },
                    { name: 'Malayalam', level: 'Native', width: '100%' },
                    { name: 'Hindi', level: 'Fluent', width: '85%' },
                    { name: 'Tamil', level: 'Conversational', width: '60%' }
                  ].map((lang, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-3 items-end">
                        <span className="font-medium text-lg text-gray-300">{lang.name}</span>
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{lang.level}</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500/50 progress-bar-animation" style={ { width: lang.width } }></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;

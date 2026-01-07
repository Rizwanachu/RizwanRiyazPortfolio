import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Button } from '@/components/ui/button';

// In development, use the imported PDF
// In production, use the path to the deployed asset
const resumePdfPath = import.meta.env.DEV 
  ? '/src/assets/Rizwan Riyaz Resume (1).pdf'
  : '/assets/Rizwan Riyaz Resume (1).pdf';

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
      <div className="container mx-auto px-4 relative z-10">
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
                <a href={resumePdfPath} download="Rizwan_Riyaz_Resume.pdf" className="text-white flex items-center">
                  <i className="fas fa-download mr-2"></i> Download Dossier
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
                  <h4 className="font-heading font-bold text-2xl text-white mb-1 tracking-tight">Data Strategy & Translation</h4>
                  <p className="text-blue-400 font-medium mb-2 tracking-wide text-sm uppercase">Space Dot Private Limited</p>
                  <p className="text-gray-500 font-bold mb-4 text-xs tracking-widest uppercase">2024 — Present</p>
                  <ul className="text-gray-400 space-y-4 font-light leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3">/</span>
                      <span>High-precision data architecture and multi-format translation efficiency.</span>
                    </li>
                  </ul>
                </div>
                
                {/* Experience 2 */}
                <div className="border-l-4 border-primary pl-5 relative">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-0"></div>
                  <h4 className="font-heading font-medium text-xl">Billing Executive</h4>
                  <p className="text-gray-600 mb-1">Oh Baby, India</p>
                  <p className="text-primary font-medium mb-3">Jun 2021 - Mar 2023</p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                      <span>Built and strengthened long-lasting client relationships based on accurate price quotes and customer-centric terms.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                      <span>Addressed problems with accounting, billing, and service delivery to maintain and enhance client satisfaction.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                      <span>Skilled in preparing periodic financial reports to track income and expenses.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                      <span>Negotiated prices for products and freights to reduce cost of acquisition by achieving lower price.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Education & Languages */}
            <div className="space-y-10">
              {/* Education */}
              <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-custom">
                <h3 className="font-heading font-semibold text-2xl mb-6 flex items-center">
                  <span className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-graduation-cap"></i>
                  </span>
                  Education
                </h3>
                
                <div className="space-y-8">
                  {/* Education 1 */}
                  <div className="border-l-4 border-secondary pl-5 relative">
                    <div className="absolute w-4 h-4 bg-secondary rounded-full -left-[10px] top-0"></div>
                    <h4 className="font-heading font-medium text-xl">The Complete Python Pro Bootcamp</h4>
                    <p className="text-gray-600 mb-1">Udemy, Online</p>
                    <p className="text-secondary font-medium mb-3">Oct 2023 - Jan 2024</p>
                    <p className="text-gray-700">Certified Python course covering programming fundamentals and advanced concepts.</p>
                  </div>
                  
                  {/* Education 2 */}
                  <div className="border-l-4 border-secondary pl-5 relative">
                    <div className="absolute w-4 h-4 bg-secondary rounded-full -left-[10px] top-0"></div>
                    <h4 className="font-heading font-medium text-xl">Computer Science</h4>
                    <p className="text-gray-600 mb-1">Govt. HSS Central Calvathy, Kochi</p>
                    <p className="text-secondary font-medium mb-3">Jun 2019 - Mar 2021</p>
                    <p className="text-gray-700">Pre-Degree program with focus on Computer Science fundamentals.</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Languages */}
              <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-custom">
                <h3 className="font-heading font-semibold text-2xl mb-6 flex items-center">
                  <span className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-language"></i>
                  </span>
                  Languages
                </h3>
                
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">English</span>
                      <span>Proficient</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary progress-bar-animation" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Malayalam</span>
                      <span>Native</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary progress-bar-animation" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Hindi</span>
                      <span>Intermediate</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary progress-bar-animation" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Tamil</span>
                      <span>Basic</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary progress-bar-animation" style={{ width: '40%' }}></div>
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

export default Resume;

import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Button } from '@/components/ui/button';
import resumePdf from '@assets/Rizwan Riyaz Resume (1).pdf';

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
    <section id="resume" className="py-16 md:py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="section-reveal"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark mb-4">Resume</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex justify-center mb-10">
            <Button asChild>
              <a href={resumePdf} download className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md flex items-center">
                <i className="fas fa-download mr-2"></i> Download Resume
              </a>
            </Button>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Experience */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-custom">
              <h3 className="font-heading font-semibold text-2xl mb-6 flex items-center">
                <span className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-briefcase"></i>
                </span>
                Work Experience
              </h3>
              
              <div className="space-y-8">
                {/* Experience 1 */}
                <div className="border-l-4 border-primary pl-5 relative">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-0"></div>
                  <h4 className="font-heading font-medium text-xl">Data Entry Typist, Translator</h4>
                  <p className="text-gray-600 mb-1">Space Dot Private Limited, India</p>
                  <p className="text-primary font-medium mb-3">Jan 2024 - Present</p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                      <span>Completed data entry tasks with accuracy and efficiency.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                      <span>Organized, sorted, and checked input data against original documents.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                      <span>Verified accuracy of data entered into the system to produce error-free reports.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                      <span>Developed data entry policies and procedures in compliance with company standards.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                      <span>Sorted documents and maintained organized filing process.</span>
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

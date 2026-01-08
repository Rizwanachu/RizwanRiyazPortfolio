import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { projects } from '@/lib/data';

type FilterCategory = 'All' | 'Web Design' | 'Digital Marketing' | 'Content Creation';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(ref, { threshold: 0.1 });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.categories.includes(activeFilter)
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);
  
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

  const filters: FilterCategory[] = ['All', 'Web Design', 'Digital Marketing', 'Content Creation'];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#0a0a0c]" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants} className="text-center mb-24">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6 tracking-tight">Curated Work</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-10 rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              A collection of high-impact digital experiences across multiple industries.
            </p>
          </motion.div>
          
          {/* Portfolio Filter Removed */}
          
          {/* Portfolio Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                className="group card-3d rounded-2xl overflow-hidden"
              >
                <div className="relative overflow-hidden h-72">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="p-8">
                  <h3 className="font-heading font-semibold text-2xl mb-3 text-white tracking-tight">{project.title}</h3>
                  <p className="text-gray-400 text-base mb-6 font-light line-clamp-2 leading-relaxed">{project.description}</p>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-blue-500/5 text-blue-400/70 border border-blue-500/10 rounded-lg text-[10px] font-medium uppercase tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link || "#contact"} 
                      target={project.link ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-white text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 group/btn hover:text-blue-400 transition-colors"
                    >
                      Explore <i className="fas fa-arrow-right text-[10px] group-hover/btn:translate-x-1 transition-transform"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Interested in working together?
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

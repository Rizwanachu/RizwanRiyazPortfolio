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
    <section id="portfolio" className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="section-reveal"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark mb-4">My Portfolio</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here's a showcase of my recent web design projects, content creation, and digital marketing work.
            </p>
          </motion.div>
          
          {/* Portfolio Filter */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full hover:bg-blue-700 transition-colors ${
                  activeFilter === filter 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
          
          {/* Portfolio Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                className="group card-hover shadow-custom rounded-lg overflow-hidden"
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 flex items-center justify-center transition-opacity duration-300">
                    <div className="text-center p-4">
                      <h3 className="text-white font-heading font-semibold text-lg">{project.title}</h3>
                      <p className="text-white/90 text-sm mt-2">{project.technologies}</p>
                      <a 
                        href={project.link} 
                        className="mt-4 inline-block px-4 py-2 bg-white text-primary rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-blue-100 text-primary rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
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

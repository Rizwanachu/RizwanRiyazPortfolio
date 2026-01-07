import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Shop = () => {
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
    <section id="shop" className="py-24 md:py-32 bg-[#0a0a0c]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants} className="text-center mb-24">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6 tracking-tight">Merchandise</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-10 rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Premium apparel and digital assets under the <span className="text-white font-medium">Glam Gustoz</span> banner.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {/* Redbubble Store */}
            <motion.div variants={itemVariants} className="card-3d rounded-2xl overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Redbubble Store" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-semibold text-xl">Redbubble Store</h3>
                  <svg className="h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                  </svg>
                </div>
                <p className="text-gray-700 mb-6">
                  Discover my unique designs on various products from apparel to home decor on Redbubble.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-xs">T-Shirts</span>
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-xs">Stickers</span>
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-xs">Posters</span>
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-xs">Home Decor</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/profile.php?id=100093311292280" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a href="https://www.instagram.com/glam_gustoz" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="https://www.pinterest.com/glamgustoz" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                    <i className="fab fa-pinterest text-xl"></i>
                  </a>
                </div>
                <a 
                  href="https://www.redbubble.com/people/Glam-Gustoz/shop?asc=u" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md w-full text-center"
                >
                  Visit Redbubble Store
                </a>
              </div>
            </motion.div>
            
            {/* TeePublic Store */}
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-custom overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="TeePublic Store" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-[#18181d]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-semibold text-xl">TeePublic Store</h3>
                  <svg className="h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z"/>
                    <path d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"/>
                  </svg>
                </div>
                <p className="text-gray-700 mb-6">
                  Explore my creative t-shirt designs and other apparel collections on TeePublic.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-xs">T-Shirts</span>
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-xs">Hoodies</span>
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-xs">Phone Cases</span>
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-xs">Mugs</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/profile.php?id=100093311292280" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a href="https://www.instagram.com/glam_gustoz" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="https://www.pinterest.com/glamgustoz" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                    <i className="fab fa-pinterest text-xl"></i>
                  </a>
                </div>
                <a 
                  href="https://www.teepublic.com/user/glam-gustoz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md w-full text-center"
                >
                  Visit TeePublic Store
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Shop;

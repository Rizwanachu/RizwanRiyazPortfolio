import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { featuredProducts } from '@/lib/data';

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
    <section id="shop" className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="section-reveal"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark mb-4">My Shop</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out my brand "Glam Gustoz" featuring unique designs available on Redbubble and TeePublic.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Redbubble Store */}
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-custom overflow-hidden">
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
              <div className="p-6">
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
          
          {/* Featured Products */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="font-heading font-semibold text-2xl mb-8 text-center">Featured Products</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-sm overflow-hidden card-hover"
                >
                  <div className="h-44 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-base mb-1">{product.name}</h4>
                    <p className="text-gray-500 text-sm mb-2">{product.store}</p>
                    <p className="text-primary font-medium">{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a 
              href="https://www.redbubble.com/people/Glam-Gustoz/shop?asc=u" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-orange-600 transition-colors shadow-md"
            >
              Explore All Products <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Shop;

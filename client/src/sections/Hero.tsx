import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            Hi, I'm <span className="text-primary">Rizwan Riyaz</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Web Designer | Data Entry Specialist | Digital Marketing Professional
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            Turning creative ideas into professional digital experiences. Let's work together to bring your vision to life!
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Get In Touch
            </a>
            <a 
              href="#portfolio" 
              className="px-6 py-3 bg-white text-primary font-medium rounded-lg border border-primary hover:bg-blue-50 transition-colors"
            >
              View My Work
            </a>
          </div>
          
          <div className="mt-10 flex space-x-5">
            <a 
              href="https://www.linkedin.com/in/rizwanriyaz321" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary text-xl transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://www.facebook.com/rizwanachoo123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary text-xl transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a 
              href="https://www.instagram.com/_.rizwanachu123._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary text-xl transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-secondary/20 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Rizwan Riyaz" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl z-10 relative"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

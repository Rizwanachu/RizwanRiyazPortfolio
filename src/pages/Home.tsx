import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Portfolio from '@/sections/Portfolio';
import Shop from '@/sections/Shop';
import Contact from '@/sections/Contact';

const Home = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = 'Rizwan Riyaz | Portfolio';
    
    // Scroll to top on initial load
    window.scrollTo(0, 0);
    
    // Update section reveal on scroll
    const revealSections = () => {
      const sections = document.querySelectorAll('.section-reveal');
      sections.forEach(section => {
        const elementTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 150) {
          section.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealSections);
    revealSections(); // Initial check on load
    
    return () => {
      window.removeEventListener('scroll', revealSections);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-body selection:bg-blue-500/30">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Shop />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;

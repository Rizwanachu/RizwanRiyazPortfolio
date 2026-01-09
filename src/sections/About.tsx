import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { CheckCircle2, Target, HelpCircle, Rocket } from 'lucide-react';

const About = () => {
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

  const cards = [
    {
      title: "Who I Help",
      icon: <Target className="w-8 h-8 text-blue-500" />,
      content: (
        <div className="space-y-4">
          <ul className="space-y-2 text-sm text-gray-500 font-light">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Consulting firms</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Wellness centers</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Service businesses without a website</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Businesses losing online leads</li>
          </ul>
        </div>
      )
    },
    {
      title: "The Problem",
      icon: <HelpCircle className="w-8 h-8 text-purple-500" />,
      content: (
        <div className="space-y-4">
          <ul className="space-y-2 text-sm text-gray-500 font-light">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> People find you on Google, but there's nowhere to send them</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Losing trust before the first conversation</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Relying only on calls or referrals</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Competitors look more professional</li>
          </ul>
        </div>
      )
    },
    {
      title: "My Solution",
      icon: <Rocket className="w-8 h-8 text-emerald-500" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            I build simple, professional websites that work on mobile and turn visitors into inquiries.
          </p>
          <ul className="space-y-2 text-sm text-gray-500 font-light">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Build trust in seconds</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Clearly explain your services</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Turn visitors into inquiries</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0c] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6 tracking-tight">Strategy & Value</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              I build <span className="text-white font-medium">simple, professional websites</span> for small businesses that don't have one yet, so they can get found on Google and receive more inquiries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-morphism p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500 group"
              >
                <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-heading font-semibold text-white mb-4 tracking-tight">{card.title}</h3>
                {card.content}
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-20 p-8 md:p-12 glass-morphism rounded-[2.5rem] border border-white/5 relative overflow-hidden text-center">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>
             <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">Ready to fix your online presence?</h3>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">Stop losing leads to competitors who look more professional online. Let's build a site that works for you.</p>
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 uppercase tracking-widest text-xs">
                  Start your project
                </a>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
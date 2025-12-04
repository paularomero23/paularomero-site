import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { FloatingStars } from './FloatingStars';

interface HeroProps {
  onViewCaseStudy: () => void;
}

export function Hero({ onViewCaseStudy }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 pt-32 relative overflow-hidden">
      {/* Large asterisks only on hero */}
      <FloatingStars />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl relative z-10"
      >
        {/* Name in hybrid font - P and R in pixelscript, rest in Instrument Sans */}
        <motion.h1 
          className="text-5xl md:text-7xl mb-6 text-black tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span style={{ fontFamily: 'pf-pixelscript, sans-serif', letterSpacing: '-3px' }}>P</span>
          <span style={{ fontFamily: '"Instrument Sans", sans-serif', textTransform: 'uppercase', letterSpacing: '-4px' }}>aula</span>
          <span style={{ display: 'inline-block', width: '0.3em' }}></span>
          <span style={{ fontFamily: 'pf-pixelscript, sans-serif', letterSpacing: '-3px' }}>R</span>
          <span style={{ fontFamily: '"Instrument Sans", sans-serif', textTransform: 'uppercase', letterSpacing: '-4px' }}>omero</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6"
        >
          <motion.p 
            className="text-xl md:text-2xl text-black/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Hi! I'm a 2nd year @ Brown University, passionate about creating intuitive interfaces and meaningful user experiences.
          </motion.p>

          <motion.div 
            className="flex gap-4 justify-center flex-wrap pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="#work"
              className="bg-[#3D2817] text-white px-8 py-3 rounded-full hover:bg-[#2a1a0f] transition-colors"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#find-me"
              className="bg-white text-black px-8 py-3 rounded-full hover:bg-[#A8D8EA] hover:text-white transition-colors border-2 border-black"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-black/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
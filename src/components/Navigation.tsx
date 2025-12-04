import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => scrollToSection('home')}
          className="tracking-tight hover:opacity-70 transition-opacity"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span style={{ fontFamily: 'pf-pixelscript, sans-serif' }}>P</span>
          <span style={{ fontFamily: 'pf-pixelscript, sans-serif' }}>R</span>
        </motion.button>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {['work', 'about', 'find-me'].map((item, index) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-black hover:text-[#A8D8EA] transition-colors relative"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item === 'find-me' ? 'find me' : item}
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
}
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    title: 'Email',
    subtitle: 'paularomero2511@gmail.com',
    href: 'mailto:paularomero2511@gmail.com',
    color: '#A8D8EA'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    subtitle: 'Connect with me',
    href: 'https://www.linkedin.com/in/paularomero23',
    color: '#3D2817'
  },
  {
    icon: FileText,
    title: 'Resume',
    subtitle: 'Download CV',
    href: '/resume.pdf',
    color: '#A8D8EA'
  }
];

export function Contact() {
  return (
    <section id="find-me" className="py-16 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl mb-6" 
            style={{ fontFamily: '"Instrument Sans", sans-serif', fontWeight: 440, letterSpacing: '-3px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>
          <motion.div 
            className="w-24 h-2 bg-[#A8D8EA] rounded-full mx-auto mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.p 
            className="text-xl text-black/80 mb-16 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Thanks for stopping by! Interested in collaborating on a project or just want to chat? Let's connect!
          </motion.p>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.title}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group p-8 border-2 border-black rounded-3xl transition-all relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    rotate: index % 2 === 0 ? 2 : -2
                  }}
                >
                  <div className="relative z-10">
                    <Icon className="w-8 h-8 mb-4 mx-auto text-black" />
                    <h3 className="mb-2">{link.title}</h3>
                    <p className="text-sm text-black/70">
                      {link.subtitle}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Footer */}
          <motion.div 
            className="pt-16 border-t border-black/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-sm text-black/50">
              © 2025 Paula Romero • Designed & built with care :D
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
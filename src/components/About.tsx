import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const professionalPhoto = "/images/professional-photo.png";
const personalityPhoto = "/images/personality-photo.png";

export function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="about"
      className="pt-32 pb-24 md:pt-48 md:pb-40 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center text-center md:text-left">
          {/* Left side - Photo with hover effect */}
          <motion.div
            className="w-full max-w-[350px] md:max-w-[500px] aspect-square mx-auto rounded-3xl relative overflow-hidden cursor-pointer group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Professional Photo (default) */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 1 }}
              animate={{ opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.4 }}
            >
              <ImageWithFallback
                src={professionalPhoto}
                alt="Paula Romero - Professional"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Personality Photo (on hover) */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <ImageWithFallback
                src={personalityPhoto}
                alt="Paula Romero - Personality"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right side - About content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-5xl md:text-6xl mb-4"
                style={{
                  fontFamily: '"Instrument Sans", sans-serif',
                  fontWeight: 440,
                  letterSpacing: "-3px",
                }}
              >
                About Me
              </h2>
              <motion.div
                className="w-24 h-2 bg-[#3D2817] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>

            <motion.div
              className="space-y-6 text-black/80 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p>
                Hi! I'm Paula, a second-year at Brown University
                studying Design Engineering and Computer
                Science, and I’m passionate about creating
                thoughtful, accessible, and intuitive digital
                experiences.
              </p>

              <p>
                I grew up in Miami in a tight-knit Latino
                community, where noticing the little things—the
                care, the intention,{" "}
                <span className="relative inline-block group font-semibold underline cursor-help">
                  los detallitos
                  <span className="absolute left-1/2 -translate-x-1/2 -top-8 md:-top-8 -top-12 bg-[#3D2817] text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                    the details ⊹ ࣪ ˖
                  </span>
                </span>{" "}
                behind something—was part of everyday life. That
                perspective shapes how I approach design:
                understanding how people think, what they feel,
                and how small details can quietly shape their
                experiences.
              </p>

              <p>
                I focus on building intentional, human-centered
                digital products through product design, UX/UI,
                and 0-to-1 product thinking. I’m especially
                excited by work that makes someone's day
                smoother, clearer, or even the tiniest bit more
                delightful.
              </p>

              <p>
                When I'm not designing, you can find me playing with nail art,
                scrolling through Pinterest, or making yogurt
                bowls that are 90% toppings.
              </p>
            </motion.div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {/* <h3 className="text-xl mb-4">Skills & Tools</h3> */}
              {/* <div className="flex flex-wrap gap-3">
                {['Figma', 'React', 'Python', 'User Research', 'Prototyping', 'Product Strategy', 'Design Systems', 'Data Analysis'].map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 border-2 border-black text-black rounded-full hover:bg-[#A8D8EA] hover:border-[#A8D8EA] hover:text-white transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div> */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
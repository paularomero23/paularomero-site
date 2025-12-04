import { motion } from 'motion/react';

export function FloatingStars() {
  // Small asterisks
  const smallStars = [
    { id: 1, x: '10%', y: '20%', delay: 0, size: 28, rotation: 45, color: '#000' },
    { id: 2, x: '85%', y: '15%', delay: 1, size: 24, rotation: -30, color: '#000' },
    { id: 3, x: '75%', y: '45%', delay: 2, size: 26, rotation: 60, color: '#000' },
    { id: 4, x: '20%', y: '80%', delay: 1.5, size: 30, rotation: -15, color: '#000' },
    { id: 5, x: '90%', y: '70%', delay: 0.5, size: 24, rotation: 90, color: '#000' },
    { id: 6, x: '45%', y: '10%', delay: 2.5, size: 22, rotation: -45, color: '#000' },
  ];

  // Large colored asterisks for landing page
  const largeStars = [
    { id: 'large-1', x: '15%', y: '30%', size: 80, color: '#A8D8EA', rotation: 0 },
    { id: 'large-2', x: '82%', y: '35%', size: 70, color: '#3D2817', rotation: 45 },
    { id: 'large-3', x: '25%', y: '65%', size: 65, color: '#3D2817', rotation: -30 },
    { id: 'large-4', x: '78%', y: '75%', size: 75, color: '#A8D8EA', rotation: 20 },
  ];

  return (
    <>
      {/* Small floating asterisks throughout the page */}
      <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
        {smallStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute"
            style={{
              left: star.x,
              top: star.y,
              fontSize: `${star.size}px`,
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter', sans-serif",
              color: star.color,
            }}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              rotate: [0, star.rotation, star.rotation * 2],
            }}
            transition={{
              duration: 4,
              delay: star.delay,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          >
            *
          </motion.div>
        ))}
      </div>

      {/* Large colored asterisks on landing page only */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {largeStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute opacity-40"
            style={{
              left: star.x,
              top: star.y,
              fontSize: `${star.size}px`,
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter', sans-serif",
              color: star.color,
            }}
            initial={{ rotate: star.rotation, scale: 0.8 }}
            animate={{
              y: [0, -20, 0],
              rotate: [star.rotation, star.rotation + 15, star.rotation],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            *
          </motion.div>
        ))}
      </div>
    </>
  );
}
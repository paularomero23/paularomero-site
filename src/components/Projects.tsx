import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
const monaWelcome = '/images/mona-welcome.png';
const monaHome = '/images/mona-home.png';
const monaAI = '/images/mona-ai.png';
const shuttleStops = '/images/shuttle-stops.png';
const shuttleRoutes = '/images/shuttle-routes.png';
const shuttleOnCall = '/images/shuttle-oncall.png';

const projects = [
  {
    id: 1,
    title: 'Mona',
    description: 'AI-powered financial wellness app for Gen Z',
    tags: ['UX Research', 'Mobile Design', 'AI Integration'],
    images: [monaWelcome, monaHome, monaAI],
  },
  {
    id: 2,
    title: 'Brown University Shuttle',
    description: 'Redesign of Brown\'s transit experience',
    tags: ['Product Management', 'Product Design', 'UX Research'],
    images: [shuttleStops, shuttleRoutes, shuttleOnCall],
  },
];

interface ProjectsProps {
  onProjectClick: (projectId: number) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  return (
    <section id="work" className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="mb-16 text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-5xl md:text-6xl mb-4" 
            style={{ fontFamily: '"Instrument Sans", sans-serif', fontWeight: 440, letterSpacing: '-3px' }}
          >
            Selected Works
          </h2>
          <motion.div 
            className="w-24 h-2 bg-[#A8D8EA] rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              onClick={() => onProjectClick(project.id)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
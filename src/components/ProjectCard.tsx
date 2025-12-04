import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  images?: string[] | null;
  image?: string | null;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      {/* Project Image */}
      <motion.div 
        className="relative aspect-[4/3] bg-gray-100 mb-6 overflow-hidden rounded-3xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {project.images && project.images.length > 0 ? (
          <div className="w-full h-full flex items-center justify-center gap-2 p-4 bg-white">
            {project.images.map((img, i) => (
              <div key={i} className="flex-1 h-full">
                <ImageWithFallback
                  src={img}
                  alt={`${project.title} screen ${i + 1}`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        ) : project.image ? (
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            <motion.div 
              className="text-center"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              <div 
                className="text-6xl mb-2" 
                style={{ fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter', sans-serif" }}
              >
                {project.id}
              </div>
              <p className="text-sm text-gray-400">Project Image</p>
            </motion.div>
          </div>
        )}
        
        {/* Hover Overlay */}
        <motion.div 
          className="absolute inset-0 bg-[#3D2817]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-3xl"
          initial={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileHover={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ArrowUpRight className="w-12 h-12 text-white" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Project Info */}
      <div>
        <h3 className="text-2xl mb-2 group-hover:text-[#A8D8EA] transition-colors">
          {project.title}
        </h3>
        <p className="text-black/70 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              className="text-xs px-3 py-1.5 bg-black/5 text-black/70 rounded-full"
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: 'rgba(168, 216, 234, 0.2)',
                transition: { duration: 0.2 }
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
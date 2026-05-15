import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiChevronRight } from 'react-icons/fi'
import SectionReveal from '../components/SectionReveal'
import SectionHeading from '../components/SectionHeading'
import projectsData from '../data/projects.json'

type Project = (typeof projectsData.projects)[number]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="glass-card-solid rounded-2xl overflow-hidden group hover:border-amber/20 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {/* Image Area */}
      <div className="relative h-48 bg-petrol/30 overflow-hidden">
        {/* Background Image or Gradient Placeholder */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className={`absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110 ${
              (project as any).imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'
            }`}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, 
                hsl(${190 + index * 15}, 40%, ${20 + index * 3}%) 0%, 
                hsl(${200 + index * 10}, 35%, ${15 + index * 2}%) 100%)`,
            }}
          />
        )}
        {/* Project number overlay */}
        <div className="absolute top-4 left-4">
          <span className="heading-italic text-6xl text-cream/5">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Hover overlay with links */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm flex items-center justify-center gap-4"
            >
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-cream/10 text-cream hover:bg-amber hover:text-navy transition-all duration-300"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.05, type: 'spring', stiffness: 300 }}
                  aria-label="Ver código"
                >
                  <FiGithub size={20} />
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-cream/10 text-cream hover:bg-amber hover:text-navy transition-all duration-300"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
                  aria-label="Ver demo"
                >
                  <FiExternalLink size={20} />
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="heading-italic text-xl text-cream mb-2 group-hover:text-amber transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-cream/50 font-body font-light text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] font-body font-medium tracking-wider uppercase rounded-full bg-navy/50 text-cream/40 border border-cream/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View More Link */}
        <a
          href={project.live || project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-amber text-xs font-body font-medium tracking-wider uppercase group/link"
        >
          Ver proyecto
          <FiChevronRight
            size={14}
            className="group-hover/link:translate-x-1 transition-transform duration-300"
          />
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const featured = projectsData.projects.filter((p) => p.featured)
  const displayProjects = showAll ? projectsData.projects : featured

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #EBB068 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionReveal>
          <SectionHeading
            label="Proyectos"
            title="Trabajo destacado"
            subtitle="Una selección de proyectos que reflejan mi enfoque y habilidades."
          />
        </SectionReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Show More Button */}
        {projectsData.projects.length > featured.length && (
          <SectionReveal delay={0.3}>
            <div className="text-center mt-12">
              <motion.button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 rounded-full border border-cream/15 text-cream/60 font-body text-sm font-medium tracking-wider hover:border-amber/30 hover:text-amber transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showAll ? 'Ver menos' : 'Ver todos los proyectos'}
              </motion.button>
            </div>
          </SectionReveal>
        )}
      </div>
    </section>
  )
}

import {
  SiReact, SiNextdotjs, SiRedux, SiVite, SiTypescript, SiTailwindcss, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiNestjs, SiPython, SiPostgresql, SiMysql, SiSupabase,
  SiGit, SiDocker, SiJest, SiPostman, SiSelenium, SiOpenai, SiN8N, SiJira,
} from 'react-icons/si'
import { HiCode, HiServer, HiCog } from 'react-icons/hi'
import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'
import SectionHeading from '../components/SectionHeading'
import skillsData from '../data/skills.json'
import profile from '../data/profile.json'

/* ── Icon Map ── */
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  SiReact, SiNextdotjs, SiRedux, SiVite, SiTypescript, SiTailwindcss, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiNestjs, SiPython, SiPostgresql, SiMysql, SiSupabase,
  SiGit, SiDocker, SiJest, SiPostman, SiSelenium, SiOpenai, SiN8N, SiJira,
}

const categoryIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  frontend: HiCode,
  backend: HiServer,
  tools: HiCog,
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3A6D7E 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionReveal>
          <SectionHeading
            label="Sobre mí"
            title="La historia"
            subtitle="Un poco sobre quién soy y las herramientas que uso día a día."
          />
        </SectionReveal>

        {/* Bio Block */}
        <SectionReveal delay={0.15}>
          <div className="glass-card rounded-2xl p-8 sm:p-10 mb-20 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Avatar placeholder */}
              <div className="shrink-0 w-20 h-20 rounded-2xl bg-petrol/40 border border-cream/10 flex items-center justify-center">
                <span className="heading-italic text-3xl text-amber">M</span>
              </div>
              <div>
                <h3 className="heading-italic text-2xl text-cream mb-1">{profile.name}</h3>
                <p className="text-amber text-sm font-body font-medium mb-4">{profile.role} • {profile.location}</p>
                <p className="text-cream/60 font-body font-light leading-relaxed text-sm sm:text-base">
                  {profile.bio}
                </p>
                {/* Methodologies line */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {['Architectures', 'Design Patterns', 'Scrum / Kanban', 'MVPs', 'Scalable Systems', 'Data Analytics', 'Tester QA'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-body font-medium tracking-wider uppercase rounded-full bg-amber/5 text-amber/60 border border-amber/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Tech Stack */}
        <SectionReveal delay={0.2}>
          <div className="text-center mb-12">
            <h3 className="heading-italic text-3xl sm:text-4xl text-cream">
              Mi caja de herramientas
            </h3>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.categories.map((category, catIndex) => {
            const CategoryIcon = categoryIconMap[category.icon]
            return (
              <SectionReveal key={category.title} delay={0.1 * catIndex} direction={catIndex === 0 ? 'left' : catIndex === 2 ? 'right' : 'up'}>
                <div className="glass-card-solid rounded-2xl p-6 sm:p-8 h-full group hover:border-amber/20 transition-all duration-500">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    {CategoryIcon && (
                      <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center group-hover:bg-amber/20 transition-colors duration-300">
                        <CategoryIcon size={20} className="text-amber" />
                      </div>
                    )}
                    <h4 className="heading-italic text-xl text-cream">{category.title}</h4>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const Icon = iconMap[skill.icon]
                      return (
                        <motion.div
                          key={skill.name}
                          className="flex items-center gap-2.5 p-2.5 rounded-xl bg-navy/30 hover:bg-navy/50 border border-transparent hover:border-cream/5 transition-all duration-300 cursor-default"
                          whileHover={{ x: 4 }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * skillIndex, duration: 0.3 }}
                        >
                          {Icon && <Icon size={16} className="text-amber/80 shrink-0" />}
                          <span className="text-cream/70 text-xs sm:text-sm font-body font-light">
                            {skill.name}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

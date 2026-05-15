import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import profile from '../data/profile.json'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-navy border-t border-cream/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a href="#hero" className="heading-italic text-2xl text-cream tracking-wide">
              MA<span className="text-amber">.</span>
            </a>
            <p className="mt-2 text-cream/40 text-sm font-body font-light max-w-xs">
              {profile.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/50 hover:text-amber transition-colors duration-300 text-xl"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/50 hover:text-amber transition-colors duration-300 text-xl"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-cream/50 hover:text-amber transition-colors duration-300 text-xl"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-cream/40 hover:text-amber text-sm font-body transition-colors duration-300 group"
            aria-label="Volver arriba"
          >
            <span className="hidden sm:inline">Volver a arriba</span>
            <FiArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-cream/5 text-center">
          <p className="text-cream/30 text-xs font-body font-light tracking-wider">
            © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

import { useState, useRef, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiCheckCircle, FiCopy, FiCheck, FiAlertCircle, FiDownload } from 'react-icons/fi'
import SectionReveal from '../components/SectionReveal'
import SectionHeading from '../components/SectionHeading'
import profileData from '../data/profile.json'
const { github, linkedin, location } = profileData

// Email split into parts — assembled only at runtime, never in plain HTML
const EMAIL_PARTS = ['mirko.alvarez01', '@', 'gmail', '.', 'com']

const EJS_SERVICE  = 'service_bv1910p'
const EJS_TEMPLATE = 'template_inwm3fk'
const EJS_KEY      = 'bC6dkf7g_jz5cv13K'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [emailCopied, setEmailCopied] = useState(false)
  const [emailRevealed, setEmailRevealed] = useState(false)
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleCopyEmail = () => {
    const address = EMAIL_PARTS.join('')
    navigator.clipboard.writeText(address).then(() => {
      setEmailRevealed(true)
      setEmailCopied(true)
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
      copyTimeoutRef.current = setTimeout(() => setEmailCopied(false), 2500)
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')

    emailjs.sendForm(EJS_SERVICE, EJS_TEMPLATE, formRef.current, { publicKey: EJS_KEY })
      .then(() => {
        setStatus('sent')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      })
      .catch(() => {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      })
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3A6D7E 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionReveal>
          <SectionHeading
            label="Contacto"
            title="Hablemos"
            subtitle="¿Tenés un proyecto en mente o simplemente querés saludar? Escribime."
          />
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <SectionReveal delay={0.1} direction="left" className="lg:col-span-2">
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="glass-card rounded-2xl p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center shrink-0">
                    <FiMail className="text-amber" size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-cream/40 text-xs font-body font-medium tracking-wider uppercase mb-2">Email</p>
                    <div className="flex items-center gap-2">
                      {/* Email shown only after user reveals it — never in raw HTML */}
                      <span className="text-cream text-sm font-body truncate">
                        {emailRevealed ? EMAIL_PARTS.join('') : '●●●●●●●●@●●●●●.com'}
                      </span>
                      <motion.button
                        type="button"
                        onClick={handleCopyEmail}
                        title="Copiar email"
                        className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-body font-medium transition-all duration-300 ${emailCopied
                            ? 'bg-green-500/15 text-green-400 border border-green-500/20'
                            : 'bg-amber/10 text-amber border border-amber/20 hover:bg-amber/20'
                          }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {emailCopied ? <FiCheck size={12} /> : <FiCopy size={12} />}
                        {emailCopied ? 'Copiado' : 'Copiar'}
                      </motion.button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center shrink-0">
                    <FiDownload className="text-amber" size={18} />
                  </div>
                  <div>
                    <p className="text-cream/40 text-xs font-body font-medium tracking-wider uppercase mb-2">Currículum</p>
                    <a
                      href="/CV_Mirko_Alvarez.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber/10 border border-amber/20 text-amber text-sm font-body font-medium hover:bg-amber/20 transition-all duration-300"
                    >
                      <FiDownload size={14} />
                      Ver CV
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center shrink-0">
                    <FiMapPin className="text-amber" size={18} />
                  </div>
                  <div>
                    <p className="text-cream/40 text-xs font-body font-medium tracking-wider uppercase mb-1">Ubicación</p>
                    <p className="text-cream text-sm font-body">{location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card rounded-2xl p-6">
                <p className="text-cream/40 text-xs font-body font-medium tracking-wider uppercase mb-4">También en</p>
                <div className="flex gap-3">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy/30 border border-cream/5 text-cream/60 hover:text-amber hover:border-amber/20 transition-all duration-300 text-sm font-body"
                  >
                    <FiGithub size={16} />
                    GitHub
                  </a>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy/30 border border-cream/5 text-cream/60 hover:text-amber hover:border-amber/20 transition-all duration-300 text-sm font-body"
                  >
                    <FiLinkedin size={16} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Contact Form */}
          <SectionReveal delay={0.2} direction="right" className="lg:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card-solid rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-cream/40 text-xs font-body font-medium tracking-wider uppercase mb-2">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="from_name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-navy/40 border border-cream/8 text-cream text-sm font-body placeholder-cream/20 focus:outline-none focus:border-amber/40 focus:ring-1 focus:ring-amber/20 transition-all duration-300"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-cream/40 text-xs font-body font-medium tracking-wider uppercase mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="from_email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-navy/40 border border-cream/8 text-cream text-sm font-body placeholder-cream/20 focus:outline-none focus:border-amber/40 focus:ring-1 focus:ring-amber/20 transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-cream/40 text-xs font-body font-medium tracking-wider uppercase mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-navy/40 border border-cream/8 text-cream text-sm font-body placeholder-cream/20 focus:outline-none focus:border-amber/40 focus:ring-1 focus:ring-amber/20 transition-all duration-300 resize-none"
                  placeholder="Contame sobre tu proyecto..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'sent' || status === 'error'}
                className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-body font-semibold text-sm transition-all duration-300 ${
                  status === 'sent'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : status === 'error'
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : 'bg-amber text-navy hover:bg-amber-dark hover:shadow-lg hover:shadow-amber/20'
                }`}
                whileHover={status === 'idle' ? { scale: 1.03 } : {}}
                whileTap={status === 'idle' ? { scale: 0.97 } : {}}
              >
                {status === 'idle' && (
                  <>
                    <FiSend size={16} />
                    Enviar mensaje
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <motion.div
                      className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Enviando...
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <FiCheckCircle size={16} />
                    ¡Mensaje enviado!
                  </>
                )}
                {status === 'error' && (
                  <>
                    <FiAlertCircle size={16} />
                    Error al enviar
                  </>
                )}
              </motion.button>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

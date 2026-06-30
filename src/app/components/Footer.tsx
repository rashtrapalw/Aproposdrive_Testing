'use client'

import { useRef } from 'react'
import { usePathname } from 'next/navigation'
import { motion, useInView } from 'motion/react'
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const footerLinks = {
  Product: ['VoltDrive X1', 'Specifications', 'Test Drive', 'Compare'],
  Company: ['About Us', 'Careers', 'Press Kit', 'Blog'],
  Support: ['Help Center', 'Warranty', 'Service Centers', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'],
}

const socialLinks = [
  { icon: Facebook,  href: '#', label: 'Facebook'  },
  { icon: Twitter,   href: '#', label: 'Twitter'   },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin,  href: '#', label: 'LinkedIn'  },
  { icon: Youtube,   href: '#', label: 'YouTube'   },
]

const badges = ['Made in India', '100% Eco-Friendly', '5-Star Safety Rating']

const contactItems = [
  { icon: Mail,   href: 'mailto:contact@aproposdrive.com', text: 'contact@aproposdrive.com' },
  { icon: Phone,  href: 'https://www.aproposdrive.com',    text: 'www.aproposdrive.com'     },
  { icon: MapPin, href: null,                               text: 'India'                   },
]

// ─── Link item with animated arrow ───────────────────────────────────────────
function FooterLink({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: '-5% 0px' }}
      transition={{ delay, duration: 0.35 }}
    >
      <a
        href="#"
        className="group inline-flex items-center gap-1 text-xs transition-colors duration-200"
        style={{ color: 'rgba(255,255,255,0.38)', fontFamily: "'DM Sans',sans-serif" }}
        onMouseEnter={e => e.currentTarget.style.color = '#00C853'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
      >
        {text}
        <ArrowRight
          className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
          style={{ color: '#00C853' }}
        />
      </a>
    </motion.li>
  )
}

// ─── Social icon button ───────────────────────────────────────────────────────
function SocialBtn({ icon: Icon, href, label, delay }: { icon: LucideIcon; href: string; label: string; delay: number }) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: '-5% 0px' }}
      transition={{ delay, type: 'spring', stiffness: 200, damping: 18 }}
      whileHover={{ y: -4, scale: 1.1 }}
      className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
        color: 'rgba(255,255,255,0.45)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(0,200,83,0.12)'
        e.currentTarget.style.borderColor = 'rgba(0,200,83,0.35)'
        e.currentTarget.style.color = '#00C853'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
        e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
      }}
    >
      <Icon className="w-4 h-4" />
    </motion.a>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
export function Footer() {
  const pathname = usePathname()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-5% 0px' })

  if (pathname.startsWith('/admin')) {
    return null
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700;9..40,900&display=swap');
        @keyframes gradShift{0%{background-position:0%}100%{background-position:200%}}
      `}</style>

      <footer
        ref={ref}
        className="relative overflow-hidden"
        style={{ background: '#0A0F1C', fontFamily: "'DM Sans',sans-serif" }}
      >
        {/* ── Background — matches site ── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          {/* Green blob — bottom-left */}
          <div
            className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full"
            style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.13 }}
          />
          {/* Cyan blob — top-right */}
          <div
            className="absolute -top-16 right-0 w-72 h-72 rounded-full"
            style={{ background: '#00E5FF', filter: 'blur(128px)', opacity: 0.08 }}
          />
        </div>

        {/* ── Top divider line ── */}
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(0,200,83,0.4),rgba(0,229,255,0.3),transparent)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">

          {/* ── Main grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">

            {/* Brand col */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              {/* Logo */}
              <a href="#home" className="flex items-center gap-2.5 self-start group">
                <motion.div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg,#00C853,#00E5FF)',
                    boxShadow: '0 0 16px rgba(0,229,255,0.3)',
                  }}
                  whileHover={{ rotate: 10, scale: 1.08 }}
                  transition={{ duration: 0.22 }}
                >
                  <Zap className="w-5 h-5 text-white" />
                </motion.div>
                <span className="font-black text-lg tracking-tight">
                  <span className="text-white">Apropos</span>
                  <span
                    style={{
                      background: 'linear-gradient(90deg,#00C853,#00E5FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    drive
                  </span>
                </span>
              </a>

              {/* Tagline */}
              <p
                className="text-xs leading-relaxed max-w-[240px]"
                style={{ color: 'rgba(255,255,255,0.38)' }}
              >
                Powering Smarter Electric Mobility. Building sustainable and scalable EV powertrain solutions for a greener India.
              </p>

              {/* Contact items */}
              <div className="flex flex-col gap-2.5">
                {contactItems.map(({ icon: Icon, href, text }, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: i * 0.08 + 0.2, duration: 0.35 }}
                  >
                    {href ? (
                      <a
                        href={href}
                        className="group flex items-center gap-2.5 text-xs transition-colors duration-200"
                        style={{ color: 'rgba(255,255,255,0.38)' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#00C853'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
                      >
                        <div
                          className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(0,200,83,0.1)', border: '1px solid rgba(0,200,83,0.2)' }}
                        >
                          <Icon className="w-3 h-3" style={{ color: '#00C853' }} />
                        </div>
                        {text}
                      </a>
                    ) : (
                      <div
                        className="flex items-center gap-2.5 text-xs"
                        style={{ color: 'rgba(255,255,255,0.38)' }}
                      >
                        <div
                          className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(0,200,83,0.1)', border: '1px solid rgba(0,200,83,0.2)' }}
                        >
                          <Icon className="w-3 h-3" style={{ color: '#00C853' }} />
                        </div>
                        {text}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links], ci) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ delay: ci * 0.07 + 0.15, duration: 0.45 }}
              >
                {/* Category heading */}
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-1 h-3 rounded-full"
                    style={{ background: ci % 2 === 0 ? '#00C853' : '#00E5FF', boxShadow: `0 0 6px ${ci % 2 === 0 ? '#00C853' : '#00E5FF'}` }}
                  />
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.22em]"
                    style={{ color: ci % 2 === 0 ? '#00C853' : '#00E5FF' }}
                  >
                    {category}
                  </span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link, li) => (
                    <FooterLink key={link} text={link} delay={li * 0.05 + ci * 0.04 + 0.2} />
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* ── Divider ── */}
          <div
            className="h-px w-full mb-8"
            style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)' }}
          />

          {/* ── Bottom bar ── */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-[11px] text-center md:text-left"
              style={{ color: 'rgba(255,255,255,0.28)' }}
            >
              © 2024 Aproposdrive Technologies Pvt. Ltd. All rights reserved.{' '}
              <span style={{ color: 'rgba(255,255,255,0.18)' }}>Powering Smarter Electric Mobility.</span>
            </motion.p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s, i) => (
                <SocialBtn key={s.label} icon={s.icon} href={s.href} label={s.label} delay={i * 0.06 + 0.25} />
              ))}
            </div>
          </div>

          {/* ── Badges ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mt-7"
          >
            {badges.map((badge, i) => (
              <motion.div
                key={badge}
                whileHover={{ y: -2, scale: 1.04 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-1.5 rounded-full text-[11px] font-semibold"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${i === 0 ? 'rgba(0,200,83,0.22)' : i === 1 ? 'rgba(0,229,255,0.18)' : 'rgba(255,255,255,0.1)'}`,
                  color: i === 0 ? '#00C853' : i === 1 ? '#00E5FF' : 'rgba(255,255,255,0.45)',
                }}
              >
                {i === 0 && <span className="mr-1">🇮🇳</span>}
                {i === 1 && <span className="mr-1">🌿</span>}
                {i === 2 && <span className="mr-1">⭐</span>}
                {badge}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </footer>
    </>
  )
}

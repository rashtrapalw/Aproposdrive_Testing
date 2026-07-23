'use client'

import { useRef, useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { motion, useInView } from 'motion/react'
import { Mail, Phone, MapPin, Linkedin, Youtube, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ─── DATA ─────────────────────────────────────────────────────────────────────

// CHANGED: updated + expanded link sections to match the actual project pages
const footerLinks = {
  Company: [
    { label: 'About Us',   href: '/contact'    },
    // { label: 'Our Team',   href: '/contact'    },
    { label: 'Careers',    href: '/contact'    },
    { label: 'Blog',       href: '/blogs'      },
    { label: 'Technology',      href: '/technology'},
  ],
  // Products: [
  //   { label: 'EV Powertrain',   href: '/products' },
  //   { label: 'Motor Controller',href: '/products' },
    // { label: 'Specifications',  href: '/products' },
    // { label: 'Technology',      href: '/technology'},
  // ],
  Support: [
    { label: 'Contact Us',  href: '/contact' },
    { label: 'FAQ',         href: '/faq'     },
    // { label: 'Partnership', href: '/contact' },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube,  href: '#', label: 'YouTube'  },
]

const badges = ['Made in India']

const contactItems = [
  { icon: Mail,   href: 'mailto:contact@aproposdrive.com', text: 'contact@aproposdrive.com' },
  { icon: Phone,  href: 'https://www.aproposdrive.com',    text: 'www.aproposdrive.com'     },
  { icon: MapPin, href: null,                              text: 'Pune, India'               },
]

// ─── FOOTER LINK ──────────────────────────────────────────────────────────────
function FooterLink({ text, href, delay }: { text: string; href: string; delay: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: '-5% 0px' }}
      transition={{ delay, duration: 0.35 }}
    >
      <a
        href={href}
        className="group inline-flex items-center gap-1 transition-colors duration-200"
        style={{
          // CHANGED: text-xs → text-sm, darker color rgba 0.5 → 0.65
          fontSize: 13,
          fontWeight: 500,
          color: 'rgba(13,27,42,0.65)',
          fontFamily: 'DM Sans, sans-serif',
          textDecoration: 'none',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = '#00a550' }}
        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(13,27,42,0.65)' }}
      >
        {text}
        <ArrowRight
          className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
          style={{ color: '#00a550' }}
        />
      </a>
    </motion.li>
  )
}

// ─── SOCIAL BUTTON ────────────────────────────────────────────────────────────
function SocialBtn({ icon: Icon, href, label, delay }: {
  icon: LucideIcon; href: string; label: string; delay: number
}) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: '-5% 0px' }}
      transition={{ delay, type: 'spring', stiffness: 200, damping: 18 }}
      whileHover={{ y: -4, scale: 1.1 }}
      className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 flex-shrink-0"
      style={{ background: 'rgba(0,165,80,0.06)', border: '1px solid rgba(0,165,80,0.16)', color: 'rgba(13, 27, 42, 0.98)' }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(0,165,80,0.14)'
        e.currentTarget.style.borderColor = 'rgba(0,165,80,0.4)'
        e.currentTarget.style.color = '#00a550'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(0,165,80,0.06)'
        e.currentTarget.style.borderColor = 'rgba(0,165,80,0.16)'
        e.currentTarget.style.color = 'rgba(13,27,42,0.5)'
      }}
    >
      <Icon className="w-4 h-4" />
    </motion.a>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
export function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-5% 0px' })
  const [showTech, setShowTech] = useState(false)
  useEffect(() => {
  if (!inView) {
    setShowTech(false)
    return
  }

  const firstDelay = setTimeout(() => {
    setShowTech(true)
  }, 2000) // change after 2 sec

  const interval = setInterval(() => {
    setShowTech(prev => !prev)
  }, 2000) // change every 2 sec

  return () => {
    clearTimeout(firstDelay)
    clearInterval(interval)
  }
}, [inView])

  const [badgeText, setBadgeText] = useState('Made in India')
  useEffect(() => {
    if (!inView) {
      setBadgeText('Made in India')
      return
    }

    const timer = setTimeout(() => {
      setBadgeText('Technology from India')
    }, 1800) // change after 1.8 sec

    return () => clearTimeout(timer)
  }, [inView])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700;9..40,900&display=swap');
      `}</style>

      <footer
        ref={ref}
        className="relative overflow-hidden w-full"
        style={{ background: '#FAF9F6', fontFamily: 'DM Sans, sans-serif', borderTop: '1px solid #e2eaf2' }}
      >
        {/* Background blobs — unchanged */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full"
            style={{ background: '#00a550', filter: 'blur(128px)', opacity: 0.08 }} />
          <div className="absolute -top-16 right-0 w-72 h-72 rounded-full"
            style={{ background: '#00a550', filter: 'blur(128px)', opacity: 0.05 }} />
        </div>

        {/* Top accent line — unchanged */}
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(0,165,80,0.4),rgba(0,165,80,0.2),transparent)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-7 w-full">

          {/*
           * CHANGED: grid layout
           * Desktop: logo col (2 cols) + 3 link sections = lg:grid-cols-5
           * Tablet (sm): 2 columns
           * Mobile: SINGLE column (no multi-col) to prevent excess scroll
           *   — but we collapse all 3 link sections into a 2-col sub-grid
           *     so they sit side by side even on mobile, halving scroll depth
           */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">

            {/* ── Brand / contact col ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-2 flex flex-col gap-5 min-w-0"
            >
              {/* Logo */}
              <a href="#home" className="flex items-center gap-2.5 self-start group">
                <motion.div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 10, scale: 1.08 }}
                  transition={{ duration: 0.22 }}
                >
                  <img src="/photos/logo2.png" alt="Aproposdrive Logo" style={{ width: 40, height: 30 }} />
                </motion.div>
                <span className="font-black text-lg tracking-tight whitespace-nowrap">
                  <span style={{ color: '#0d1b2a' }}>Apropos</span>
                  <span style={{ color: '#00a550' }}>drive</span>
                </span>
              </a>

              {/* Tagline */}
              {/* <p style={{ fontSize: 12.5, color: 'rgba(13,27,42,0.5)', lineHeight: 1.6, maxWidth: 260 }}>
                Rare earth-free EV powertrain technology — built for India's roads.
              </p> */}

              {/* Contact items */}
              <div className="flex flex-col gap-2.5 min-w-0">
                {contactItems.map(({ icon: Icon, href, text }, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: i * 0.08 + 0.2, duration: 0.35 }}
                    className="min-w-0"
                  >
                    {href ? (
                      <a
                        href={href}
                        className="flex items-center gap-2.5 transition-colors duration-200 min-w-0"
                        // CHANGED: text-xs → 12.5px, darker color
                        style={{ fontSize: 12.5, color: 'rgba(13,27,42,0.6)', textDecoration: 'none' }}
                        onMouseEnter={e => { e.currentTarget.style.color = '#00a550' }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(13,27,42,0.6)' }}
                      >
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(0,165,80,0.1)', border: '1px solid rgba(0,165,80,0.2)' }}>
                          <Icon className="w-3 h-3" style={{ color: '#00a550' }} />
                        </div>
                        <span className="break-all">{text}</span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-2.5 min-w-0"
                        style={{ fontSize: 12.5, color: 'rgba(13,27,42,0.6)' }}>
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(0,165,80,0.1)', border: '1px solid rgba(0,165,80,0.2)' }}>
                          <Icon className="w-3 h-3" style={{ color: '#00a550' }} />
                        </div>
                        <span>{text}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/*
             * CHANGED: on mobile, all 3 link columns sit inside a 2-col sub-grid
             * so they take up less vertical space. On sm+ they spread naturally.
             * sm:col-span-1 lg:col-span-1 keeps desktop layout identical.
             *
             * We wrap all 3 link groups in a single div on mobile (col-span-1)
             * that uses a 2-col inner grid — so Company+Products are side by side,
             * Support sits below them (not a separate full-width row).
             */}
            <div className="col-span-1 sm:contents lg:contents">
              {/*
               * Mobile sub-grid wrapper — 2 cols on mobile, then each section
               * becomes its own grid cell on sm/lg via sm:contents
               */}
              <div className="grid grid-cols-2 gap-6 sm:contents lg:contents">
                {Object.entries(footerLinks).map(([category, links], ci) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ delay: ci * 0.07 + 0.15, duration: 0.45 }}
                    className="min-w-0"
                  >
                    {/* Section label */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-3 rounded-full"
                        style={{ background: '#00a550', boxShadow: '0 0 6px rgba(0,165,80,0.4)' }} />
                      {/* CHANGED: tracking slightly reduced, font slightly bigger */}
                      <span style={{ fontSize: 11, fontWeight: 800, color: '#00a550', textTransform: 'uppercase', letterSpacing: '0.18em' }}>
                        {category}
                      </span>
                    </div>

                    <ul className="flex flex-col gap-2">
                      {links.map((link, li) => (
                        <FooterLink
                          key={link.label}
                          text={link.label}
                          href={link.href}
                          delay={li * 0.05 + ci * 0.04 + 0.2}
                        />
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* Divider — unchanged */}
          <div className="h-px w-full mb-7"
            style={{ background: 'linear-gradient(90deg,transparent,rgba(13,27,42,0.1),transparent)' }} />

          {/* Bottom row — unchanged structure */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              // CHANGED: text slightly bigger and darker
              style={{ fontSize: 12, color: 'rgba(13, 27, 42, 0.91)', textAlign: 'center' }}
            >
              © 2026 Aproposdrive Technologies Pvt. Ltd. All rights reserved.
            </motion.p>

            <div className="flex items-center gap-2.5 flex-wrap justify-center">
              {socialLinks.map((s, i) => (
                <SocialBtn key={s.label} icon={s.icon} href={s.href} label={s.label} delay={i * 0.06 + 0.25} />
              ))}
            </div>
          </div>

          {/* Badge — unchanged */}
              {/* Badge */}
{/* Badge */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
  transition={{ delay: 0.4, duration: 0.5 }}
  className="flex justify-center mt-6"
>
  <div
    style={{
      perspective: '1000px',
    }}
  >
    <AnimatePresence mode="wait">
      <motion.div
        key={showTech ? 'tech' : 'india'}
        initial={{
          rotateX: -90,
          opacity: 0,
        }}
        animate={{
          rotateX: 0,
          opacity: 1,
        }}
        exit={{
          rotateX: 90,
          opacity: 0,
        }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
        whileHover={{
          y: -2,
          scale: 1.04,
        }}
        className="px-5 py-2 rounded-full text-[11px] font-semibold whitespace-nowrap"
        style={{
          background: 'rgba(0,165,80,0.05)',
          border: '1px solid rgba(0,165,80,0.18)',
          color: '#00a550',
          minWidth: 210,
          textAlign: 'center',
          transformStyle: 'preserve-3d',
        }}
      >
        {showTech ? (
          <>
           Technology from India
          </>
        ) : (
          <>
             Made in India
          </>
        )}
      </motion.div>
    </AnimatePresence>
  </div>
</motion.div>
        </div>
      </footer>
    </>
  )
}
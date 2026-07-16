'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const footerLinks = {
  Product: ['VoltDrive X1', 'Specifications', 'Test Drive', 'Compare'],
  Company: ['About Us', 'Careers',  'Blog'],
  // Support: ['Help Center', 'Warranty', 'Service Centers', 'Contact'],
  // Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'],
}

const socialLinks = [
  // { icon: Facebook, href: '#', label: 'Facebook' },
  // { icon: Twitter, href: '#', label: 'Twitter' },
  // { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

const badges = ['Made in India']

const contactItems = [
  { icon: Mail, href: 'mailto:contact@aproposdrive.com', text: 'contact@aproposdrive.com' },
  { icon: Phone, href: 'https://www.aproposdrive.com', text: 'www.aproposdrive.com' },
  { icon: MapPin, href: null, text: 'India' },
]

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
        style={{ color: 'rgba(13,27,42,0.5)', fontFamily: 'DM Sans, sans-serif' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#00a550'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'rgba(13,27,42,0.5)'
        }}
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

function SocialBtn({
  icon: Icon,
  href,
  label,
  delay,
}: {
  icon: LucideIcon
  href: string
  label: string
  delay: number
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
      style={{
        background: 'rgba(0,165,80,0.06)',
        border: '1px solid rgba(0,165,80,0.16)',
        color: 'rgba(13,27,42,0.5)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(0,165,80,0.14)'
        e.currentTarget.style.borderColor = 'rgba(0,165,80,0.4)'
        e.currentTarget.style.color = '#00a550'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(0,165,80,0.06)'
        e.currentTarget.style.borderColor = 'rgba(0,165,80,0.16)'
        e.currentTarget.style.color = 'rgba(13,27,42,0.5)'
      }}
    >
      <Icon className="w-4 h-4" />
    </motion.a>
  )
}

export function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-5% 0px' })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700;9..40,900&display=swap');
      `}</style>

      <footer
        ref={ref}
        className="relative overflow-hidden overflow-x-hidden w-full"
        style={{ background: '#FAF9F6', fontFamily: 'DM Sans, sans-serif', borderTop: '1px solid #e2eaf2' }}
      >
        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute inset-0"/>
          <div
            className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full"
            style={{ background: '#00a550', filter: 'blur(128px)', opacity: 0.08 }}
          />
          <div
            className="absolute -top-16 right-0 w-72 h-72 rounded-full"
            style={{ background: '#00a550', filter: 'blur(128px)', opacity: 0.05 }}
          />
        </div>

        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background: 'linear-gradient(90deg,transparent,rgba(0,165,80,0.4),rgba(0,165,80,0.2),transparent)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-2 flex flex-col gap-5 min-w-0"
            >
              <a href="#home" className="flex items-center gap-2.5 self-start group">
                <motion.div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    // background: '#00a550',
                    // boxShadow: '0 2px 12px rgba(0,165,80,0.25)',
                  }}
                  whileHover={{ rotate: 10, scale: 1.08 }}
                  transition={{ duration: 0.22 }}
                >
                  {/* <Zap className="w-5 h-5 text-white" /> */}
                  <img src="/photos/logo2.png" alt="Aproposdrive Logo" style={{ width: 55, height: 40 }} />
                </motion.div>
                <span className="font-black text-lg tracking-tight whitespace-nowrap">
                  <span style={{ color: '#0d1b2a' }}>Apropos</span>
                  <span style={{ color: '#00a550' }}>drive</span>
                </span>
              </a>


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
                        className="group flex items-center gap-2.5 text-xs transition-colors duration-200 min-w-0"
                        style={{ color: 'rgba(13,27,42,0.5)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#00a550'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'rgba(13,27,42,0.5)'
                        }}
                      >
                        <div
                          className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(0,165,80,0.1)', border: '1px solid rgba(0,165,80,0.2)' }}
                        >
                          <Icon className="w-3 h-3" style={{ color: '#00a550' }} />
                        </div>
                        <span className="break-words">{text}</span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-2.5 text-xs min-w-0" style={{ color: 'rgba(13,27,42,0.5)' }}>
                        <div
                          className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(0,165,80,0.1)', border: '1px solid rgba(0,165,80,0.2)' }}
                        >
                          <Icon className="w-3 h-3" style={{ color: '#00a550' }} />
                        </div>
                        <span className="break-words">{text}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {Object.entries(footerLinks).map(([category, links], ci) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ delay: ci * 0.07 + 0.15, duration: 0.45 }}
                className="min-w-0"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-1 h-3 rounded-full"
                    style={{ background: '#00a550', boxShadow: '0 0 6px rgba(0,165,80,0.4)' }}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00a550' }}>
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

          <div
            className="h-px w-full mb-8"
            style={{ background: 'linear-gradient(90deg,transparent,rgba(13,27,42,0.1),transparent)' }}
          />

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-[11px] text-center md:text-left px-2"
              style={{ color: 'rgba(13,27,42,0.4)' }}
            >
              © 2024 Aproposdrive Technologies Pvt. Ltd. All rights reserved.{' '}
              {/* <span style={{ color: 'rgba(13,27,42,0.28)' }}>Powering Smarter Electric Mobility.</span> */}
            </motion.p>

            <div className="flex items-center gap-2.5 flex-wrap justify-center">
              {socialLinks.map((s, i) => (
                <SocialBtn key={s.label} icon={s.icon} href={s.href} label={s.label} delay={i * 0.06 + 0.25} />
              ))}
            </div>
          </div>

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
                className="px-4 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap"
                style={{
                  background: 'rgba(0,165,80,0.05)',
                  border: '1px solid rgba(0,165,80,0.18)',
                  color: '#00a550',
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
'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'motion/react'
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowUpRight, Zap, MessageSquare } from 'lucide-react'

const contactInfo = [
  { icon: Mail,   title: 'Email',    text: 'contact@aproposdrive.com', accent: '#00C853', href: 'mailto:contact@aproposdrive.com' },
  { icon: Phone,  title: 'Phone',    text: '+91 12345 67890',           accent: '#00E5FF', href: 'tel:+911234567890'               },
  { icon: MapPin, title: 'Location', text: 'Bengaluru, Karnataka, IN',  accent: '#00C853', href: null                              },
]

// ─── Compact Input ─────────────────────────────────────────────────────────────
function Input({ accent = '#00C853', as = 'input', ...props }) {
  const [focus, setFocus] = useState(false)
  const shared = {
    onFocus: () => setFocus(true),
    onBlur:  () => setFocus(false),
    style: {
      width: '100%',
      background: focus ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)',
      border: `1px solid ${focus ? accent + '55' : 'rgba(255,255,255,0.09)'}`,
      borderRadius: 10,
      fontSize: 12,
      color: '#fff',
      outline: 'none',
      fontFamily: "'DM Sans',sans-serif",
      boxShadow: focus ? `0 0 0 3px ${accent}10` : 'none',
      transition: 'all 0.18s ease',
      padding: as === 'textarea' ? '9px 12px' : '0 12px',
      height: as === 'textarea' ? 'auto' : 38,
      resize: as === 'textarea' ? 'none' : undefined,
    },
  }
  return as === 'textarea'
    ? <textarea {...shared} {...props} />
    : <input    {...shared} {...props} />
}

// ═══════════════════════════════════════════════════════════════════════════════
export default function ContactPage() {
  const [sent, setSent]   = useState(false)
  const ref               = useRef(null)
  const inView            = useInView(ref, { once: false, margin: '-6% 0px' })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700;9..40,900&display=swap');
        @keyframes gradShift{0%{background-position:0%}100%{background-position:200%}}
        *{box-sizing:border-box}
        input::placeholder,textarea::placeholder{color:rgba(255,255,255,0.25)!important}
      `}</style>

      <main
        className="relative overflow-hidden py-20"
        style={{ background: '#0A0F1C', fontFamily: "'DM Sans',sans-serif", minHeight: '100vh' }}
      >
        {/* ── Background ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }} />
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full" style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.15 }} />
          <div className="absolute top-10 right-[-60px] w-96 h-96 rounded-full" style={{ background: '#00E5FF', filter: 'blur(128px)', opacity: 0.1  }} />
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full" style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.07 }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section header ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
              style={{ background: 'rgba(0,200,83,0.08)', border: '1px solid rgba(0,200,83,0.22)' }}>
              <motion.span className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#00C853', boxShadow: '0 0 5px #00C853' }}
                animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              <span style={{ color: '#00C853', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em' }}>
                Contact Us
              </span>
            </div>
            <h2 className="font-black leading-none tracking-tight mb-3"
              style={{ fontSize: 'clamp(34px,5vw,58px)' }}>
              <span className="text-white">Let's </span>
              <span style={{
                background: 'linear-gradient(90deg,#00C853,#00E5FF,#00C853)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradShift 4s linear infinite',
              }}>Connect</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.36)', fontSize: 13, maxWidth: 360, margin: '0 auto', lineHeight: 1.65 }}>
              Questions, demos, or partnerships — we're ready to talk.
            </p>
          </motion.div>

          {/* ── Two-column layout ── */}
          <div ref={ref} className="grid lg:grid-cols-2 gap-6 items-stretch">

            {/* ══ LEFT: Contact details ══ */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="flex flex-col gap-4"
            >
              {/* Header card */}
              <div className="p-5 rounded-2xl flex flex-col gap-4"
                style={{
                  background: 'linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(14px)',
                }}>
                {/* Top shimmer */}
                <div className="h-px -mt-1" style={{ background: 'linear-gradient(90deg,transparent,rgba(0,200,83,0.5),rgba(0,229,255,0.35),transparent)' }} />

                {/* Brand row */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg,#00C853,#00E5FF)', boxShadow: '0 0 14px rgba(0,229,255,0.28)' }}>
                    <Zap style={{ width: 17, height: 17, color: '#0A0F1C' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 900, fontSize: 15, color: '#fff', lineHeight: 1.2 }}>Aproposdrive</p>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>EV Powertrain Solutions</p>
                  </div>
                </div>

                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.38)', lineHeight: 1.65 }}>
                  Building India's future of electric mobility. Reach us for product demos, investment opportunities, or technical partnerships.
                </p>

                {/* Contact rows */}
                <div className="flex flex-col gap-2">
                  {contactInfo.map((item, i) => {
                    const Icon = item.icon
                    const Tag  = item.href ? 'a' : 'div'
                    return (
                      <motion.div key={item.title}
                        initial={{ opacity: 0, x: -12 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                        transition={{ delay: i * 0.08 + 0.25, duration: 0.38 }}
                      >
                        <Tag
                          href={item.href || undefined}
                          className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-200"
                          style={{
                            background: 'rgba(255,255,255,0.025)',
                            border: `1px solid rgba(255,255,255,0.06)`,
                            textDecoration: 'none',
                            display: 'flex',
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = `${item.accent}0c`
                            e.currentTarget.style.borderColor = `${item.accent}30`
                            e.currentTarget.style.transform = 'translateX(4px)'
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                            e.currentTarget.style.transform = 'translateX(0)'
                          }}
                        >
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: `${item.accent}16`, border: `1px solid ${item.accent}30` }}>
                            <Icon style={{ width: 13, height: 13, color: item.accent }} strokeWidth={2.2} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.28)', marginBottom: 1 }}>
                              {item.title}
                            </p>
                            <p className="truncate" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 700, color: '#fff' }}>
                              {item.text}
                            </p>
                          </div>
                          <ArrowUpRight style={{ width: 12, height: 12, color: item.accent, opacity: 0, transition: 'opacity 0.15s', flexShrink: 0 }}
                            className="group-hover:opacity-100" />
                        </Tag>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Reply time */}
                <div className="flex items-center gap-2 pt-1">
                  <motion.div className="w-1.5 h-1.5 rounded-full" style={{ background: '#00C853', boxShadow: '0 0 5px #00C853' }}
                    animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.32)' }}>
                    We typically reply within 24 hours
                  </span>
                </div>
              </div>

              {/* Mini stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[['24h','Response'],['500+','Clients'],['100%','Satisfaction']].map(([v, l], i) => (
                  <motion.div key={l}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: i * 0.07 + 0.4, duration: 0.38 }}
                    className="flex flex-col items-center py-3 rounded-xl text-center"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{
                      fontFamily: "'DM Sans',sans-serif", fontWeight: 900, fontSize: 18,
                      background: i % 2 === 0 ? 'linear-gradient(90deg,#00C853,#00E5FF)' : 'linear-gradient(90deg,#00E5FF,#00C853)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>{v}</span>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.28)', marginTop: 2 }}>{l}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ══ RIGHT: Compact Form ══ */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 16px 50px rgba(0,0,0,0.4)',
              }}
            >
              {/* Top shimmer */}
              <div className="h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(0,200,83,0.55),rgba(0,229,255,0.4),transparent)' }} />

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {sent ? (
                    /* ── Success ── */
                    <motion.div key="ok"
                      initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                    >
                      {/* Ripple + check */}
                      <div className="relative flex items-center justify-center">
                        {[1.7, 1.35].map((s, i) => (
                          <motion.div key={i} className="absolute rounded-full"
                            style={{ width: 52 * s, height: 52 * s, border: '1px solid rgba(0,200,83,0.18)' }}
                            animate={{ opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}
                          />
                        ))}
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 220, delay: 0.1 }}
                          className="relative w-14 h-14 rounded-2xl flex items-center justify-center"
                          style={{ background: 'rgba(0,200,83,0.14)', border: '1px solid rgba(0,200,83,0.35)' }}>
                          <CheckCircle style={{ width: 24, height: 24, color: '#00C853' }} />
                        </motion.div>
                      </div>
                      <div>
                        <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 900, fontSize: 18, color: '#fff', marginBottom: 5 }}>Message Sent!</h3>
                        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>We'll get back to you within 24 hours.</p>
                      </div>
                      <button onClick={() => setSent(false)}
                        style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 700, color: '#00C853', background: 'none', border: 'none', cursor: 'pointer' }}>
                        Send another →
                      </button>
                    </motion.div>

                  ) : (
                    /* ── Form ── */
                    <motion.form key="form"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      onSubmit={e => { e.preventDefault(); setSent(true) }}
                      style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
                    >
                      {/* Header */}
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                          style={{ background: 'rgba(0,200,83,0.14)', border: '1px solid rgba(0,200,83,0.28)' }}>
                          <MessageSquare style={{ width: 12, height: 12, color: '#00C853' }} />
                        </div>
                        <div>
                          <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 900, fontSize: 14, color: '#fff', lineHeight: 1.2 }}>Send a Message</p>
                          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.32)' }}>All fields required unless marked optional</p>
                        </div>
                      </div>

                      {/* Name + Email */}
                      <div className="grid grid-cols-2 gap-3">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                          <label style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.4)' }}>Name</label>
                          <Input type="text" placeholder="Your name" required accent="#00C853" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                          <label style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.4)' }}>Email</label>
                          <Input type="email" placeholder="you@email.com" required accent="#00E5FF" />
                        </div>
                      </div>

                      {/* Phone */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                        <label style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.4)' }}>Phone <span style={{ color: 'rgba(255,255,255,0.22)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
                        <Input type="tel" placeholder="+91 00000 00000" accent="#00C853" />
                      </div>

                      {/* Subject */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                        <label style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.4)' }}>Subject</label>
                        <Input as="input" type="text" placeholder="How can we help?" required accent="#00C853" />
                      </div>

                      {/* Message */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                        <label style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.4)' }}>Message</label>
                        <Input as="textarea" rows={4} placeholder="Tell us about your project..." required accent="#00C853" />
                      </div>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, boxShadow: '0 0 24px rgba(0,200,83,0.3)' }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                          width: '100%', height: 44, borderRadius: 12,
                          background: 'linear-gradient(90deg,#00C853,#00E5FF)',
                          border: 'none', color: '#0A0F1C',
                          fontFamily: "'DM Sans',sans-serif", fontWeight: 900, fontSize: 13,
                          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                          boxShadow: '0 4px 18px rgba(0,200,83,0.22)', marginTop: 2,
                        }}
                      >
                        Send Message <Send style={{ width: 13, height: 13 }} />
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
    </>
  )
}
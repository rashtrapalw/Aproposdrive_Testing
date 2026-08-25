'use client'

import type { CSSProperties } from 'react'
import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'motion/react'
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowUpRight, Zap, MessageSquare } from 'lucide-react'
import emailjs from '@emailjs/browser'

const contactInfo = [
  { icon: Mail, title: 'Email', text: 'contact@aproposdrive.com', accent: '#00a550', href: 'mailto:contact@aproposdrive.com' },
  // { icon: Phone, title: 'Phone', text: '+91 12345 67890', accent: '#0077b6', href: 'tel:+911234567890' },
  { icon: MapPin, title: 'Location', text: 'Pune, Maharashtra, IN', accent: '#00a550', href: null },
]

// ─── Compact Input ─────────────────────────────────────────────────────────────
function Input({ accent = '#00a550', as = 'input', ...props }: any) {
  const [focus, setFocus] = useState(false)
  const shared = {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      background: focus ? '#ffffff' : '#f4f7f6',
      border: `1.5px solid ${focus ? accent : '#dde6e2'}`,
      borderRadius: 10,
      fontSize: 15,
      color: '#0d1b2a',
      outline: 'none',
      fontFamily: 'DM Sans, sans-serif',
      boxShadow: focus ? `0 0 0 3px ${accent}18` : 'none',
      transition: 'border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease',
      padding: as === 'textarea' ? '12px 14px' : '0 14px',
      height: as === 'textarea' ? 'auto' : 46,
      resize: (as === 'textarea' ? 'none' : undefined) as CSSProperties['resize'],
    },
  }
  return as === 'textarea' ? <textarea {...shared} {...props} /> : <input {...shared} {...props} />
}

// ═══════════════════════════════════════════════════════════════════════════════
export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-6% 0px' })

  // ── EmailJS: controlled form state ──
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  // ── EmailJS: submit handler ──
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          name,
          email,
          phone,
          subject,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      setSent(true)
      setName('')
      setEmail('')
      setPhone('')
      setSubject('')
      setMessage('')
      setLoading(false)
    } catch (error) {
      setLoading(false)
      alert('Failed to send message. Please try again.')
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700;9..40,900&display=swap');
        *{box-sizing:border-box}
        input::placeholder,textarea::placeholder{color:rgba(13,27,42,0.32)!important}
      `}</style>

      <main
        className="relative overflow-hidden py-16 sm:py-20 w-full"
        style={{ background: '#fafcfb', fontFamily: 'DM Sans, sans-serif', minHeight: '100vh' }}
      >
        {/* ── Background ── */}
        <div className="absolute inset-0 pointer-events-none">
          
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full" style={{ background: '#00a550', filter: 'blur(128px)', opacity: 0.1 }} />
          <div className="absolute top-10 right-[-60px] w-96 h-96 rounded-full" style={{ background: '#0077b6', filter: 'blur(128px)', opacity: 0.08 }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* ── Section header ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-14"
          >
            {/* <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(0,165,80,0.08)', border: '1px solid rgba(0,165,80,0.28)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#00a550' }} />
              <span style={{ color: '#00a550', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em' }}>
                Contact Us
              </span>
            </div> */}
            <h2 className="font-black leading-none tracking-tight mb-4" style={{ fontSize: 'clamp(36px,6vw,64px)' }}>
              <span style={{ color: '#0d1b2a' }}>Let&apos;s </span>
              <span style={{ color: '#00a550' }}>Connect</span>
            </h2>
            <p style={{ color: 'rgba(13,27,42,0.55)', fontSize: 16, maxWidth: 420, margin: '0 auto', lineHeight: 1.65 }}>
              Questions, demos, or partnerships — we&apos;re ready to talk.
            </p>
          </motion.div>

          {/* ── Two-column layout ── */}
          <div ref={ref} className="grid lg:grid-cols-2 gap-6 items-stretch">
            {/* ══ LEFT: Contact details ══ */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="flex flex-col gap-5 min-w-0"
            >
              {/* Header card */}
              <div
                className="p-6 rounded-2xl flex flex-col gap-5"
                style={{ background: '#ffffff', border: '1px solid #e2eaf2', boxShadow: '0 2px 16px rgba(13,27,42,0.05)' }}
              >
                {/* Brand row */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    // style={{ background: '#00a550', boxShadow: '0 2px 12px rgba(0,165,80,0.28)' }}
                  >
                    {/* <Zap style={{ width: 19, height: 19, color: '#fff' }} /> */}
                    <img src="/photos/logo2.png" alt="Aproposdrive Logo" style={{ width: 45, height: 40 }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 900, fontSize: 17, color: '#0d1b2a', lineHeight: 1.2 }}>Aproposdrive</p>
                    <p style={{ fontSize: 13, color: 'rgba(13,27,42,0.5)' }}>EV Powertrain Solutions</p>
                  </div>
                </div>

                <p style={{ fontSize: 15, color: 'rgba(13,27,42,0.6)', lineHeight: 1.7 }}>
                  Building India&apos;s future of electric mobility. Reach us for product demos, investment
                  opportunities, or technical partnerships.
                </p>

                {/* Contact rows */}
                <div className="flex flex-col gap-2.5">
                  {contactInfo.map((item) => {
                    const Icon = item.icon
                    const Tag: any = item.href ? 'a' : 'div'
                    return (
                      <Tag
                        key={item.title}
                        href={item.href || undefined}
                        className="group flex items-center gap-3 p-3.5 rounded-xl transition-colors duration-150"
                        style={{
                          background: '#f4f7f6',
                          border: '1px solid #e2eaf2',
                          textDecoration: 'none',
                          display: 'flex',
                        }}
                        onMouseEnter={(e: any) => {
                          e.currentTarget.style.background = `${item.accent}12`
                          e.currentTarget.style.borderColor = `${item.accent}40`
                        }}
                        onMouseLeave={(e: any) => {
                          e.currentTarget.style.background = '#f4f7f6'
                          e.currentTarget.style.borderColor = '#e2eaf2'
                        }}
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: `${item.accent}16`, border: `1px solid ${item.accent}35` }}
                        >
                          <Icon style={{ width: 15, height: 15, color: item.accent }} strokeWidth={2.2} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            style={{
                              fontSize: 10,
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.18em',
                              color: 'rgba(13,27,42,0.4)',
                              marginBottom: 2,
                            }}
                          >
                            {/* {item.title} */}
                          </p>
                          <p className="truncate" style={{ fontSize: 15, fontWeight: 700, color: '#0d1b2a' }}>
                            {item.text}
                          </p>
                        </div>
                        <ArrowUpRight
                          style={{ width: 14, height: 14, color: item.accent, opacity: 0, transition: 'opacity 0.15s', flexShrink: 0 }}
                          className="group-hover:opacity-100"
                        />
                      </Tag>
                    )
                  })}
                </div>

                {/* Reply time */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#00a550' }} />
                  <span style={{ fontSize: 13, color: 'rgba(13,27,42,0.5)' }}>We typically reply within 24 hours</span>
                </div>
              </div>

            </motion.div>

            {/* ══ RIGHT: Form ══ */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-2xl overflow-hidden min-w-0"
              style={{ background: '#ffffff', border: '1px solid #e2eaf2', boxShadow: '0 4px 24px rgba(13,27,42,0.06)' }}
            >
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {sent ? (
                    /* ── Success ── */
                    <motion.div
                      key="ok"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ background: 'rgba(0,165,80,0.1)', border: '1px solid rgba(0,165,80,0.32)' }}
                      >
                        <CheckCircle style={{ width: 28, height: 28, color: '#00a550' }} />
                      </div>
                      <div>
                        <h3 style={{ fontWeight: 900, fontSize: 20, color: '#0d1b2a', marginBottom: 6 }}>Message Sent!</h3>
                        <p style={{ fontSize: 14, color: 'rgba(13,27,42,0.5)' }}>We&apos;ll get back to you within 24 hours.</p>
                      </div>
                      <button
                        onClick={() => setSent(false)}
                        style={{ fontSize: 14, fontWeight: 700, color: '#00a550', background: 'none', border: 'none', cursor: 'pointer' }}
                      >
                        Send another →
                      </button>
                    </motion.div>
                  ) : (
                    /* ── Form ── */
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
                    >
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-1">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(0,165,80,0.1)', border: '1px solid rgba(0,165,80,0.3)' }}
                        >
                          <MessageSquare style={{ width: 15, height: 15, color: '#00a550' }} />
                        </div>
                        <div>
                          <p style={{ fontWeight: 900, fontSize: 17, color: '#0d1b2a', lineHeight: 1.2 }}>Send a Message</p>
                          <p style={{ fontSize: 12, color: 'rgba(13,27,42,0.45)' }}>All fields required unless marked optional</p>
                        </div>
                      </div>

                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(13,27,42,0.55)' }}>
                            Name
                          </label>
                          <Input
                            type="text"
                            placeholder="Your name"
                            required
                            accent="#00a550"
                            value={name}
                            onChange={(e: any) => setName(e.target.value)}
                          />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(13,27,42,0.55)' }}>
                            Email
                          </label>
                          <Input
                            type="email"
                            placeholder="you@email.com"
                            required
                            accent="#0077b6"
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(13,27,42,0.55)' }}>
                          Phone{' '}
                          <span style={{ color: 'rgba(13,27,42,0.32)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
                            (optional)
                          </span>
                        </label>
                        <Input
                          type="tel"
                          placeholder="+91 00000 00000"
                          accent="#00a550"
                          value={phone}
                          onChange={(e: any) => setPhone(e.target.value)}
                        />
                      </div>

                      {/* Subject */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(13,27,42,0.55)' }}>
                          Subject
                        </label>
                        <Input
                          type="text"
                          placeholder="How can we help?"
                          required
                          accent="#00a550"
                          value={subject}
                          onChange={(e: any) => setSubject(e.target.value)}
                        />
                      </div>

                      {/* Message */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(13,27,42,0.55)' }}>
                          Message
                        </label>
                        <Input
                          as="textarea"
                          rows={4}
                          placeholder="Tell us about your project..."
                          required
                          accent="#00a550"
                          value={message}
                          onChange={(e: any) => setMessage(e.target.value)}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        style={{
                          width: '100%',
                          height: 50,
                          borderRadius: 12,
                          background: '#00a550',
                          border: 'none',
                          color: '#ffffff',
                          fontWeight: 900,
                          fontSize: 15,
                          cursor: loading ? 'not-allowed' : 'pointer',
                          opacity: loading ? 0.75 : 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 8,
                          boxShadow: '0 2px 14px rgba(0,165,80,0.25)',
                          marginTop: 2,
                          transition: 'background 0.15s ease',
                        }}
                        onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = '#008f45' }}
                        onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = '#00a550' }}
                      >
                        {loading ? 'Sending...' : 'Send Message'} <Send style={{ width: 15, height: 15 }} />
                      </button>
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
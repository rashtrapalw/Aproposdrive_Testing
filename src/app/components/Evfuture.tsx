import { Users, ArrowRight } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

// ─── EV FUTURE — hero banner + partner CTA bar ────────────────────────────────
export function EvFuture() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-6% 0px' })

  const [isMobile, setIsMobile] = useState(false)
  const [isSmall, setIsSmall] = useState(false)
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 900)
      setIsSmall(window.innerWidth < 600)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const accent = '#8ee000'
  const barGreen = '#6fb52c'

  return (
    <section ref={ref}>
      {/* ── Hero banner ── */}
      <div
        style={{
          position: 'relative',
          // minHeight: isSmall ? 300 : isMobile ? 320 : 'clamp(320px, 34vw, 420px)',
          minHeight: isSmall ? 360 : isMobile ? 420 : 'clamp(450px, 45vw, 600px)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: '#0a0a0a',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('/photos/EvFuture.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: isMobile
              ? 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(5,5,5,0.85) 55%, #050505 100%)'
              : 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 38%, rgba(5,5,5,0.92) 58%, #050505 75%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: 1300,
            margin: '0 auto',
            padding: isMobile ? '30px 24px' : 'clamp(32px, 4vw, 56px) clamp(24px, 4vw, 40px)',
        
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-end',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              maxWidth: 460,
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            <h1
              style={{
                color: '#ffffff',
                fontSize: isSmall ? 24 : isMobile ? 26 : 'clamp(26px, 2.4vw, 32px)',
                fontWeight: 700,
                lineHeight: 1.25,
                margin: 0,
                marginBottom: 16,
              }}
            >
              The <span style={{ color: accent }}>Future</span> of EV Motors
            </h1>
            <p
              style={{
                color: '#c7c7c7',
                fontSize: isSmall ? 13 : 14,
                lineHeight: 1.7,
                margin: 0,
                marginBottom: 14,
              }}
            >
              The future of electric mobility will be defined by smarter, more sustainable and more independent Application technologies.
            </p>
            <p
              style={{
                color: '#c7c7c7',
                fontSize: isSmall ? 13 : 14,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              AproposDrive is committed to engineering the next generation of electric drive systems that power a cleaner, stronger and self-reliant India.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Partner CTA bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          background: barGreen,
          display: 'flex',
          flexDirection: isSmall ? 'column' : 'row',
          alignItems: isSmall ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: isSmall ? 18 : 20,
          padding: isMobile ? '22px 24px' : 'clamp(20px, 2vw, 26px) clamp(24px, 4vw, 40px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Users size={22} color="#ffffff" strokeWidth={1.8} />
          </div>
          <div>
            <h2
              style={{
                color: '#ffffff',
                fontSize: isSmall ? 18 : 20,
                fontWeight: 700,
                margin: 0,
                marginBottom: 4,
              }}
            >
              Partner With Us
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: 13,
                fontWeight: 400,
                margin: 0,
              }}
            >
              Let's build the future of electric mobility together.
            </p>
          </div>
        </div>

<Link href="/contact">
  <button
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: 'transparent',
      border: '1.5px solid rgba(255,255,255,0.8)',
      color: '#ffffff',
      fontSize: 14,
      fontWeight: 600,
      padding: '12px 26px',
      borderRadius: 6,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      width: isSmall ? '100%' : 'auto',
      justifyContent: isSmall ? 'center' : 'flex-start',
      fontFamily: 'inherit',
    }}
  >
    Talk To Our Team
    <ArrowRight size={16} />
  </button>
</Link>
      </motion.div>
    </section>
  )
}
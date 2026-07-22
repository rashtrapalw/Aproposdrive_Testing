'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import {
  Leaf, Zap, ShieldCheck, Puzzle,
  AlertTriangle, TrendingDown, Globe, Ban,
} from 'lucide-react'

// ─── DATA ─────────────────────────────────────────────────────────────────────
const problems = [
  { icon: AlertTriangle, label: 'Limited global\navailability'        },
  { icon: TrendingDown,  label: 'High & fluctuating\nraw material costs' },
  { icon: Globe,         label: 'Supply chain\ndependency'            },
  { icon: Ban,           label: 'Geopolitical risk\n& price volatility' },
]

const solutionFeatures = [
  { icon: Leaf,       text: 'Rare Earth Free',       sub: 'No permanent magnets'           },
  { icon: ShieldCheck,text: 'Built to Last',          sub: 'Rugged. Reliable. Road-ready.'  },
  { icon: Zap,        text: 'High Performance',       sub: 'More power. Better efficiency.' },
  { icon: Puzzle,     text: 'Seamless Integration',   sub: 'Designed for today\'s EV platforms.' },
]

// ─── CHALLENGES SECTION ───────────────────────────────────────────────────────
export function ChallengesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-6% 0px' })
  const solRef = useRef(null)
  const solInView = useInView(solRef, { once: true, margin: '-6% 0px' })

  return (
    <section ref={ref} style={{ fontFamily: 'DM Sans, sans-serif', overflow: 'hidden' }}>

      {/* ══ TOP HALF — white ══════════════════════════════════════════════════ */}
      <div style={{ background: '#ffffff', padding: 'clamp(40px,6vw,72px) clamp(16px,5vw,64px)' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(28px,4vw,48px)' }}
        >
          <h2 style={{ fontSize: 'clamp(22px,3.2vw,36px)', fontWeight: 800, color: '#0d1b2a', margin: '0 0 10px', lineHeight: 1.2 }}>
            The <span style={{ color: '#00a550' }}>Challenge</span> Behind Electric Mobility
          </h2>
          <p style={{ fontSize: 'clamp(13px,1.1vw,15px)', color: 'rgba(13,27,42,0.55)', maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>
            While EV adoption is accelerating, the technology that powers it still faces a major challenge.
          </p>
        </motion.div>

        {/* 4 cards row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'clamp(10px,1.5vw,18px)',
          alignItems: 'stretch',
        }}>

          {/* Card 1 — dark: What Are Rare Earth Materials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.07, duration: 0.45 }}
            style={{
              borderRadius: 16,
              background: '#0d1b2a',
              padding: 'clamp(18px,2.5vw,28px)',
              display: 'flex', flexDirection: 'column', gap: 12,
            }}
          >
            <h3 style={{ fontSize: 'clamp(14px,1.3vw,17px)', fontWeight: 800, color: '#ffffff', lineHeight: 1.3, margin: 0 }}>
              What Are Rare Earth Materials?
            </h3>
            <p style={{ fontSize: 'clamp(13px,1.1vw,15px)', color: 'rgba(255,255,255,0.68)', lineHeight: 1.7, margin: 0 }}>
              Elements like Neodymium (Nd), Dysprosium (Dy) and Terbium (Tb) are used in permanent magnets inside conventional motors.
            </p>
          </motion.div>

          {/* Card 2 — light grey: Problems */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.13, duration: 0.45 }}
            whileHover={{ y: -5, boxShadow: '0 16px 36px rgba(0,0,0,0.09)' }}
            style={{
              borderRadius: 16,
              background: '#f4f6f5',
              border: '1px solid #e2eaf2',
              padding: 'clamp(22px,3vw,34px)',
              display: 'flex', flexDirection: 'column', gap: 16,
              minHeight: 'clamp(200px, 22vw, 280px)',
            }}
          >
            <h3 style={{ fontSize: 'clamp(14.5px,1.3vw,18px)', fontWeight: 800, color: '#0d1b2a', lineHeight: 1.3, margin: 0 }}>
              The Problems With<br />Rare Earth Dependency
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 14px' }}>
              {problems.map(({ icon: Icon, label }, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 5 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 9,
                    background: 'rgba(0,165,80,0.1)', border: '1px solid rgba(0,165,80,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={15} color="#00a550" strokeWidth={2} />
                  </div>
                  <span style={{ fontSize: 12.5, color: 'rgba(13,27,42,0.7)', lineHeight: 1.45, whiteSpace: 'pre-line' }}>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3 — white border: Industry Needs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.19, duration: 0.45 }}
            whileHover={{ y: -5, boxShadow: '0 16px 36px rgba(0,165,80,0.10)', borderColor: 'rgba(0,165,80,0.35)' }}
            style={{
              borderRadius: 16,
              background: '#ffffff',
              border: '1.5px solid #e2eaf2',
              padding: 'clamp(22px,3vw,34px)',
              display: 'flex', flexDirection: 'column', gap: 14,
              minHeight: 'clamp(200px, 22vw, 280px)',
            }}
          >
            <h3 style={{ fontSize: 'clamp(14.5px,1.3vw,18px)', fontWeight: 800, color: '#0d1b2a', lineHeight: 1.3, margin: 0 }}>
              The Industry Needs<br />A Better Way
            </h3>
            <p style={{ fontSize: 'clamp(13px,1.1vw,15px)', color: 'rgba(13,27,42,0.6)', lineHeight: 1.7, margin: 0 }}>
              As EV demand grows, the world needs motors that are efficient, reliable, cost-effective and independent of rare earth materials.
            </p>
          </motion.div>

          {/* Card 4 — dark green: Engineering Question */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.45 }}
            whileHover={{ y: -5, scale: 1.02, boxShadow: '0 16px 36px rgba(0,165,80,0.32)' }}
            style={{
              borderRadius: 16,
              background: '#00a550',
              padding: 'clamp(22px,3vw,34px)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20,
              minHeight: 'clamp(200px, 22vw, 280px)',
            }}
          >
            <div>
              <h3 style={{ fontSize: 'clamp(14.5px,1.3vw,18px)', fontWeight: 800, color: '#ffffff', lineHeight: 1.3, margin: '0 0 12px' }}>
                Our Engineering<br />Question
              </h3>
              <p style={{ fontSize: 'clamp(13px,1.1vw,15px)', color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>
                Can we build world-class electric motors without depending on rare earth materials?
              </p>
            </div>
            {/* Big question mark */}
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 32, color: '#ffffff', fontWeight: 900, lineHeight: 1,
            }}>
              ?
            </div>
          </motion.div>

        </div>
      </div>

      {/* ══ BOTTOM HALF — dark green ══════════════════════════════════════════ */}
      <div
        ref={solRef}
        style={{
          background: '#0d2b1a',
          padding: 'clamp(36px,5vw,64px) clamp(16px,5vw,64px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle glow */}
        <div style={{
          position: 'absolute', right: '10%', top: '50%', transform: 'translateY(-50%)',
          width: 'clamp(200px,30vw,380px)', height: 'clamp(200px,30vw,380px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,165,80,0.35) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(28px,4vw,56px)',
          alignItems: 'center',
          position: 'relative', zIndex: 1,
        }}>

          {/* Left: solution text + features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={solInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            <div>
              <p style={{ fontSize: 'clamp(18px,2vw,24px)', fontWeight: 900, color: '#ffffff', margin: '0 0 6px' }}>
                <span style={{ color: '#00a550' }}>Our </span>Solution
              </p>
              <p style={{ fontSize: 'clamp(12px,1.05vw,14px)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0, maxWidth: 400 }}>
                At AproposDrive, we engineer rare earth-free motor and controller technologies that deliver outstanding performance, high efficiency, and long-term reliability.
              </p>
            </div>

            {/* 2×2 feature chips */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {solutionFeatures.map(({ icon: Icon, text, sub }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={solInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.38 }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    padding: '10px 12px', borderRadius: 12,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div style={{
                    width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(0,165,80,0.18)', border: '1px solid rgba(0,165,80,0.3)',
                  }}>
                    <Icon size={13} color="#4ade80" strokeWidth={2} />
                  </div>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', margin: '0 0 2px' }}>{text}</p>
                    <p style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.48)', margin: 0, lineHeight: 1.4 }}>{sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: product image on glow disc */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={solInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Glow disc */}
              <div style={{
                position: 'absolute',
                width: 'clamp(220px,28vw,340px)',
                height: 'clamp(220px,28vw,340px)',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,165,80,0.4) 0%, rgba(0,165,80,0.15) 45%, transparent 72%)',
                filter: 'blur(4px)',
              }} />
              <motion.img
                src="/photos/tech_hero-removebg.png"
                alt="AproposDrive Motor & Controller"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: 'clamp(200px,26vw,320px)',
                  height: 'auto',
                  objectFit: 'contain',
                  position: 'relative', zIndex: 1,
                  filter: 'drop-shadow(0 12px 32px rgba(0,165,80,0.35))',
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
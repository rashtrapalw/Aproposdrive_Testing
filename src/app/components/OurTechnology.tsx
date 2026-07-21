import {
  BarChart2, Thermometer, Wrench, Settings, TrendingUp,
  Zap, Gauge, Cpu, ShieldCheck, ArrowRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useState, useEffect, useRef } from 'react'

type Feature = { icon: LucideIcon; label: string }

type Technology = {
  key: string
  title: string
  tagline: string
  description: string
  image: string
  accent: string
  ctaLabel: string
  features: Feature[]
}

const TECHNOLOGIES: Technology[] = [
  {
    key: 'srm',
    title: 'Switched Reluctance Motor (SRM) Technology',
    tagline: 'Rare Earth-Free. High Efficiency. Robust.',
    description:
      'SRMs use magnetic reluctance and intelligent stator switching instead of permanent magnets or rotor windings. Their simple laminated steel rotor design delivers high reliability, low cost, minimal maintenance, and eliminates the need for rare-earth materials.',
    image: '/photos/srm3.png',
    accent: '#00a550',
    ctaLabel: 'Engineering Behind Our SRM',
    features: [
      { icon: Zap, label: 'Magnet-Free\nTechnology' },
      { icon: Gauge, label: 'High Reliability\n& Efficiency' },
      { icon: Settings, label: 'No Rotor\nWindings' },
      { icon: TrendingUp, label: 'High Efficiency\nLow Maintenance' },
      { icon: Cpu, label: 'Sensorless\nOperation' },
      { icon: ShieldCheck, label: 'Rare-Earth-Free\nDesign' },
    ],
  },
  {
    key: 'pmsm',
    title: 'Permanent Magnet Synchronous Motor (PMSM) Technology',
    tagline: 'Rare Earth-Free. High Efficiency. Robust.',
    description:
      'PMSM technology eliminates rare earth materials entirely, delivering outstanding efficiency, superior fault tolerance, and dependable performance across all operating conditions — ideal for next-generation electric mobility.',
    image: '/photos/pmsm2.jpeg',
    accent: '#0077b6',
    ctaLabel: 'Engineering Behind Our PMSM',
    features: [
      { icon: Zap, label: 'High Power\nDensity' },
      { icon: Gauge, label: 'Superior\nEfficiency' },
      { icon: Settings, label: 'Smooth &\nQuiet Operation' },
      { icon: TrendingUp, label: 'High Speed\nCapability' },
      { icon: Cpu, label: 'Excellent Torque\nControl' },
      { icon: ShieldCheck, label: 'Sensorless\nControl' },
    ],
  },
]

// ─── TECH CARD — image+title, description, feature icon strip, CTA button ────
function TechCard({ tech, index, inView, isMobile, isSmall }: { tech: Technology; index: number; inView: boolean; isMobile: boolean; isSmall: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.14, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        background: `linear-gradient(180deg, ${tech.accent}0d 0%, #ffffff 45%)`,
        border: `1px solid ${tech.accent}30`,
        borderRadius: 20,
        padding: isMobile ? '22px' : 'clamp(28px, 2.6vw, 40px)',
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? 18 : 22,
        boxShadow: '0 4px 24px rgba(13,27,42,0.06)',
      }}
    >
      {/* Image (left) + title/tagline/description (right) — stacks on very narrow screens */}
      <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', gap: isMobile ? 16 : 24, alignItems: 'flex-start' }}>
        <div style={{
          width: isSmall ? '100%' : isMobile ? '42%' : '40%',
          height: isSmall ? 200 : isMobile ? 180 : 'clamp(220px, 20vw, 360px)',
          borderRadius: 18, overflow: 'hidden', flexShrink: 0,
          background: '#ffffff',
        }}>
          <img
            src={tech.image}
            alt={tech.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: isMobile ? 10 : 13 }}>
          <h3 style={{
            fontSize: isMobile ? 17 : 'clamp(19px, 2vw, 28px)', fontWeight: 900, color: '#0d1b2a',
            lineHeight: 1.25, margin: 0,
          }}>
            {tech.title}
          </h3>
          <p style={{ fontSize: isMobile ? 12.5 : 15, fontWeight: 700, color: tech.accent, margin: 0 }}>
            {tech.tagline}
          </p>
          <p style={{
            fontSize: isMobile ? 13 : 15, color: '#4a5a6a', lineHeight: 1.65, margin: 0,
          }}>
            {tech.description}
          </p>
        </div>
      </div>

      {/* Feature icon strip */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${isMobile ? 3 : 6}, 1fr)`,
        gap: isMobile ? 14 : 12,
      }}>
        {tech.features.map((f, i) => {
          const Icon = f.icon
          return (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + index * 0.14 + i * 0.04, duration: 0.32 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center' }}
            >
              <div style={{
                width: isMobile ? 42 : 'clamp(42px, 3.6vw, 58px)',
                height: isMobile ? 42 : 'clamp(42px, 3.6vw, 58px)',
                borderRadius: '50%', background: `${tech.accent}12`,
                border: `1px solid ${tech.accent}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Icon size={isMobile ? 18 : 22} color={tech.accent} strokeWidth={1.8} />
              </div>
              <p style={{
                fontSize: isMobile ? 11 : 'clamp(11px, 0.95vw, 13px)', color: '#4a5a6a',
                lineHeight: 1.35, whiteSpace: 'pre-line', margin: 0,
              }}>
                {f.label}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* CTA button */}
      {/* <button
        style={{
          marginTop: 2,
          alignSelf: 'flex-start',
          display: 'flex', alignItems: 'center', gap: 6,
          background: tech.accent, color: '#ffffff', border: 'none',
          borderRadius: 999, padding: isMobile ? '8px 14px' : '9px 16px',
          fontSize: isMobile ? 11 : 11.5, fontWeight: 700, cursor: 'pointer',
          fontFamily: 'inherit',
        }}
      >
        {tech.ctaLabel}
        <ArrowRight size={13} />
      </button> */}
    </motion.div>
  )
}

// ─── OUR TECHNOLOGY — merged SRM + PMSM section ───────────────────────────────
export function OurTechnology() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-6% 0px' })

  const [isMobile, setIsMobile] = useState(false)
  const [isSmall, setIsSmall] = useState(false)
  const [isDesktopGrid, setIsDesktopGrid] = useState(true)
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768)
      setIsSmall(window.innerWidth < 480)
      // Cards only sit side-by-side once there's enough room for each one to
      // stay comfortable (~500px+). Below that, even "desktop-style" cards
      // stack one-per-row instead of being squeezed into a narrow column.
      setIsDesktopGrid(window.innerWidth >= 1024)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section ref={ref} className="py-10 sm:py-14 lg:py-16" style={{ background: '#f8fafb' }}>
      <div style={{ width: '100%', paddingLeft: 'clamp(16px, 4vw, 64px)', paddingRight: 'clamp(16px, 4vw, 64px)' }}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: 'center', marginBottom: isMobile ? 28 : 40 }}
        >
          <h2 style={{
            fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 900, letterSpacing: '-0.5px',
            margin: 0, lineHeight: 1.2,
          }}>
            <span style={{ color: '#0d1b2a' }}>Our </span>
            <span style={{ color: '#00a550' }}>Technology</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktopGrid ? 'repeat(2, 1fr)' : '1fr',
          gap: isMobile ? 20 : 'clamp(24px, 2.4vw, 40px)',
        }}>
          {TECHNOLOGIES.map((tech, i) => (
            <TechCard key={tech.key} tech={tech} index={i} inView={inView} isMobile={isMobile} isSmall={isSmall} />
          ))}
        </div>

      </div>
    </section>
  )
}
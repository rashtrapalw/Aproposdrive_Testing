'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'
import { Zap, Shield, Target, Link2, Wifi, ChevronLeft, ChevronRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ─── DATA ─────────────────────────────────────────────────────────────────────
type Card = {
  icon: LucideIcon
  title: string
  description: string
}

const CARDS: Card[] = [
  {
    icon: Zap,
    title: 'High Efficiency',
    description:
      'Optimized motor design and intelligent control maximize energy conversion while minimizing power losses. This delivers higher performance with lower operating costs.',
  },
  {
    icon: Shield,
    title: 'Robust & Reliable',
    description:
      'Engineered with a simple, durable architecture that performs consistently even in demanding environments. Built for long service life with minimal downtime.',
  },
  {
    icon: Target,
    title: 'Intelligent Control',
    description:
      'Advanced motor controllers provide precise torque, speed, and position control with real-time diagnostics. Ensures smooth operation, improved safety, and superior driving performance.',
  },
  {
    icon: Link2,
    title: 'Integrated Powertrain',
    description:
      'Motor, controller, and gearbox are seamlessly integrated into a compact, optimized system. This simplifies vehicle integration, reduces complexity, and improves overall efficiency.',
  },
  {
    icon: Wifi,
    title: 'Connected & Future Ready',
    description:
      'IoT-enabled architecture supports remote monitoring, predictive maintenance, over-the-air updates, and data-driven optimization — making the platform ready for next-generation electric mobility.',
  },
]

const N = CARDS.length

// ─── HELPERS ──────────────────────────────────────────────────────────────────
// Wraps index within [0, N)
const wrap = (i: number) => ((i % N) + N) % N

// Given activeIndex, return props for each slot position (-2 … +2)
// function getSlotProps(slot: number) {
//   // slot: -2=far-left  -1=left  0=center  +1=right  +2=far-right
//   const absSlot = Math.abs(slot)
//   return {
//     scale:   slot === 0 ? 1.08 : absSlot === 1 ? 0.9 : 0.76,
//     x:       slot * 54,       // percent of container width per slot
//     zIndex:  10 - absSlot * 2,
//     opacity: slot === 0 ? 1  : absSlot === 1 ? 0.72 : 0.4,
//     blur:    absSlot === 2 ? 1.5 : 0,
//   }
// }
function getSlotProps(slot: number) {
  const isMobile =
    typeof window !== 'undefined' && window.innerWidth < 768

  const absSlot = Math.abs(slot)

  if (isMobile) {
    // Mobile: only show 3 visible positions
    return {
      scale: slot === 0 ? 1 : 0.82,
      x: slot * 34,
      zIndex: slot === 0 ? 10 : 8,
      opacity: slot === 0 ? 1 : 0.45,
      blur: 0,
    }
  }

  // Desktop (existing behavior)
  return {
    scale: slot === 0 ? 1.08 : absSlot === 1 ? 0.9 : 0.76,
    x: slot * 54,
    zIndex: 10 - absSlot * 2,
    opacity: slot === 0 ? 1 : absSlot === 1 ? 0.72 : 0.4,
    blur: absSlot === 2 ? 1.5 : 0,
  }
}

// ─── SINGLE CAROUSEL CARD ─────────────────────────────────────────────────────
function CarouselCard({
  card,
  slot,
  onClick,
}: {
  card: Card
  slot: number         // -2 … +2
  onClick: () => void
}) {
  const [hov, setHov] = useState(false)
  const Icon = card.icon
  const isCenter = slot === 0
  const { scale, x, zIndex, opacity, blur } = getSlotProps(slot)

  const isMobile =
  typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      animate={{
        x: `${x}%`,
        scale: isCenter && hov ? scale * 1.02 : scale,
        opacity,
        filter: blur ? `blur(${blur}px)` : 'none',
        zIndex,
      }}
      transition={{
        x:      { type: 'spring', stiffness: 320, damping: 36 },
        scale:  { type: 'spring', stiffness: 320, damping: 36 },
        opacity:{ duration: 0.35 },
        filter: { duration: 0.35 },
      }}
    //   style={{
    //     position: 'absolute',
    //     width: '36%',           // card width relative to track
    //     left: '32%',            // centered start position
    //     cursor: isCenter ? 'default' : 'pointer',
    //     willChange: 'transform',
    //   }}


style={{
  position: 'absolute',
  width: isMobile ? '72%' : '36%',
  left: isMobile ? '14%' : '32%',
  cursor: isCenter ? 'default' : 'pointer',
  willChange: 'transform',
}}



    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: 24,
          border: isCenter && hov
            ? '1.5px solid rgba(0,165,80,0.5)'
            : isCenter
            ? '1.5px solid rgba(0,165,80,0.2)'
            : '1.5px solid #e8eef4',
          boxShadow: isCenter
            ? hov
              ? '0 20px 48px rgba(0,165,80,0.14), 0 6px 20px rgba(0,0,0,0.08)'
              : '0 12px 40px rgba(0,0,0,0.1)'
            : '0 4px 16px rgba(0,0,0,0.05)',
          padding: 'clamp(24px, 3vw, 40px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          minHeight: 280,
          transition: 'border-color 0.25s, box-shadow 0.25s',
          transform: isCenter && hov ? 'translateY(-6px)' : 'translateY(0)',
        }}
      >
        {/* Icon */}
        <motion.div
          animate={{ scale: isCenter && hov ? 1.14 : 1 }}
          transition={{ duration: 0.22 }}
          style={{
            width: 58,
            height: 58,
            borderRadius: '50%',
            background: isCenter ? 'rgba(0,165,80,0.1)' : 'rgba(0,165,80,0.06)',
            border: '1.5px solid rgba(0,165,80,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Icon size={24} color="#00a550" strokeWidth={1.8} />
        </motion.div>

        {/* Title */}
        <h3 style={{
          fontSize: 'clamp(15px, 1.4vw, 20px)',
          fontWeight: 800,
          color: '#0d1b2a',
          lineHeight: 1.2,
          margin: 0,
        }}>
          {card.title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: 'clamp(12px, 0.95vw, 14px)',
          color: '#4a5a6a',
          lineHeight: 1.75,
          margin: 0,
          flex: 1,
        }}>
          {card.description}
        </p>

        {/* Bottom accent — visible only on center */}
        {isCenter && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              height: 3,
              borderRadius: 99,
              background: 'linear-gradient(90deg, #00a550, #4ade80)',
              transformOrigin: 'left',
            }}
          />
        )}
      </div>
    </motion.div>
  )
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export function AptBenefits() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-8% 0px' })

  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [dir, setDir] = useState<1 | -1>(1)  // for dot indicator

  // Touch swipe
  const touchX = useRef<number | null>(null)

  const go = useCallback((offset: 1 | -1) => {
    setDir(offset)
    setActive(prev => wrap(prev + offset))
  }, [])

  const goTo = useCallback((i: number) => {
    setDir(i > active ? 1 : -1)
    setActive(i)
  }, [active])

  // Auto-rotate every 3.5s — fast enough to see the swipe
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => go(1), 3500)
    return () => clearInterval(id)
  }, [paused, go])

  // Build slot positions for all N cards
  // slot = (cardIndex - active + N) % N, mapped to range -2…+2
  const slotsFor = (cardIdx: number) => {
    let slot = ((cardIdx - active) % N + N) % N
    if (slot > N / 2) slot -= N   // map to -2…+2 centered on 0
    return slot
  }

  return (
    <section
  ref={sectionRef}
  style={{
    position: 'relative',
    padding: 'clamp(48px, 7vw, 96px) 0',
    overflow: 'hidden',
  }}
    >

             {/* Background image */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: "url('/photos/benifitsOfApt.jpeg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 0,
    }}
  />

  {/* Dark overlay so text stays readable */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      background: 'rgba(4, 14, 19, 0.78)',  // adjust opacity 0.7–0.95 to taste
      zIndex: 1,
    }}
  />



      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)', position: 'relative', zIndex: 2 }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 72px)' }}
        >
          {/* <p style={{
            fontSize: 11, fontWeight: 800, color: '#00a550',
            letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 14,
          }}>
            Benefits of APT Technology
          </p> */}
          <h2 style={{
            fontSize: 'clamp(24px, 3.5vw, 40px)',
            fontWeight: 900, color: '#dee3e8',
            lineHeight: 1.15, marginBottom: 14, letterSpacing: '-0.01em',
          }}>
            Benefits of <span style={{ color: '#00a550' }}>APT Technology</span>
          </h2>
          <p style={{
            fontSize: 'clamp(13px, 1.1vw, 15.5px)',
            color: '#e4eaf0', lineHeight: 1.7,
            maxWidth: 520, margin: '0 auto',
          }}>
            A complete electric powertrain ecosystem built for performance, reliability,
            and the future of intelligent mobility.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            style={{
              height: 3, width: 48, borderRadius: 99,
              background: 'linear-gradient(90deg, #00a550, #4ade80)',
              margin: '20px auto 0', transformOrigin: 'center',
            }}
          />
        </motion.div>

        {/* ── Carousel track ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.18, duration: 0.6 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={e => { touchX.current = e.touches[0].clientX }}
          onTouchEnd={e => {
            if (touchX.current === null) return
            const delta = touchX.current - e.changedTouches[0].clientX
            if (Math.abs(delta) > 40) go(delta > 0 ? 1 : -1)
            touchX.current = null
          }}
          style={{
            position: 'relative',
            height: 'clamp(300px, 32vw, 420px)',   // fixed height so cards don't shift layout
            overflow: 'visible',
          }}
        >
          {CARDS.map((card, i) => {
            const slot = slotsFor(i)
            // Only render visible slots (-2…+2)
            // if (slot < -2 || slot > 2) return null
            const isMobile =
  typeof window !== 'undefined' && window.innerWidth < 768

if (isMobile) {
  if (slot < -1 || slot > 1) return null
} else {
  if (slot < -2 || slot > 2) return null
}
            return (
              <CarouselCard
                key={i}
                card={card}
                slot={slot}
                onClick={() => {
                  if (slot !== 0) goTo(i)
                }}
              />
            )
          })}
        </motion.div>

        {/* ── Controls ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          marginTop: 'clamp(20px, 3vw, 36px)',
        }}>
          {/* Prev */}
          <NavBtn onClick={() => go(-1)} aria-label="Previous">
            <ChevronLeft size={18} strokeWidth={2.2} />
          </NavBtn>

          {/* Dots */}
          <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
            {CARDS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to card ${i + 1}`}
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  borderRadius: 99,
                  background: i === active ? '#00a550' : '#d1dce8',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'width 0.35s ease, background 0.35s ease',
                }}
              />
            ))}
          </div>

          {/* Next */}
          <NavBtn onClick={() => go(1)} aria-label="Next">
            <ChevronRight size={18} strokeWidth={2.2} />
          </NavBtn>
        </div>

      </div>
    </section>
  )
}

// ─── NAV BUTTON ───────────────────────────────────────────────────────────────
function NavBtn({ children, onClick, 'aria-label': label }: {
  children: React.ReactNode
  onClick: () => void
  'aria-label': string
}) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      aria-label={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 42, height: 42,
        borderRadius: '50%',
        border: hov ? '1.5px solid #00a550' : '1.5px solid #e2eaf2',
        background: '#ffffff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
        color: hov ? '#00a550' : '#0d1b2a',
        boxShadow: hov
          ? '0 4px 16px rgba(0,165,80,0.2)'
          : '0 2px 8px rgba(0,0,0,0.06)',
        transition: 'all 0.22s ease',
        flexShrink: 0,
      }}
    >
      {children}
    </button>
  )
}
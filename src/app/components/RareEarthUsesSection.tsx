'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import {
  Smartphone, WashingMachine, Wind, Zap,
  Car, Radio, HardDrive, Bot,
  Magnet, Maximize2, Shield,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type UseCard = {
  num: number
  icon: LucideIcon
  title: string
  description: string
  tag: string
  image: string
  imageAlt: string
}

const USE_CARDS: UseCard[] = [
  { num: 1, icon: Smartphone,    title: 'Mixer',       description: 'Tiny powerful magnets drive speakers, vibration motors and camera autofocus.',                    tag: 'Compact · Powerful',  image: '/photos/mixer.png',       imageAlt: 'Smartphone'        },
  { num: 2, icon: WashingMachine,title: 'Washing Machines',  description: 'Direct-drive motors use powerful magnets for quieter and more efficient operation.',              tag: 'Efficient Motor',     image: '/photos/WashingMachine.png',  imageAlt: 'Washing Machine'   },
  { num: 3, icon: Wind,          title: 'Air Conditioners',  description: 'Compressors and fan motors use rare earth magnets for higher efficiency.',                        tag: 'Energy Efficient',    image: '/photos/AC-removebg-preview.png',  imageAlt: 'Air Conditioner'   },
  { num: 4, icon: Zap,           title: 'Vacuum Cleaners',   description: 'Compact high-speed motors generate powerful suction.',                                            tag: 'High-Speed Motor',    image: '/photos/vacume-cleaner.png',   imageAlt: 'Vacuum Cleaner'    },
  { num: 5, icon: Car,           title: 'Electric Vehicles', description: 'Permanent magnets create strong torque with high efficiency.',                                    tag: 'Traction Motor',      image: '/photos/electric_car_PNG.png', imageAlt: 'Electric Vehicle'  },
  { num: 6, icon: Radio,         title: 'Chimneys',     description: 'Powerful generators convert wind energy into electricity.',                                       tag: 'Renewable Energy',    image: '/photos/chimney.png',     imageAlt: 'Wind Turbine'      },
  { num: 7, icon: Bot,           title: 'Industrial Robots', description: 'Servo motors use rare earth magnets for precise movement and positioning.',                       tag: 'Precision Motion',    image: '/photos/industrial-robot.png', imageAlt: 'Industrial Robot'  },
  { num: 8, icon: HardDrive,     title: 'HVLS Fans',  description: 'Tiny magnets move the read/write head with extreme accuracy.',                                    tag: 'Precision Control',   image: '/photos/HVLS.png',        imageAlt: 'Hard Disk Drive'   },
]

const WHY_FEATURES = [
  { icon: Magnet,    label: 'Extremely\nStrong'     },
  { icon: Maximize2, label: 'Compact\nSize'         },
  { icon: Zap,       label: 'High\nEfficiency'      },
  { icon: Shield,    label: 'Reliable\nPerformance' },
]

// ─── SINGLE USE CARD ──────────────────────────────────────────────────────────
function UseCard({ card, delay }: { card: UseCard; delay: number }) {
  const Icon = card.icon
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: 'relative',
        overflow: 'visible', // allows image to bleed out
      }}
    >
      {/* Card body */}
      <div
        style={{
          background: '#ffffff',
          border: '1px solid #e8edf0',
          borderRadius: 20,
          padding: '18px 16px 16px 18px',
          position: 'relative',
          overflow: 'hidden',      // clip image that's INSIDE the card
          height: 200,
          boxShadow: '0 2px 14px rgba(0,0,0,0.06)',
          transition: 'box-shadow 0.22s, border-color 0.22s',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.boxShadow = '0 12px 36px rgba(0,165,80,0.14)'
          el.style.borderColor = 'rgba(0,165,80,0.35)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.boxShadow = '0 2px 14px rgba(0,0,0,0.06)'
          el.style.borderColor = '#e8edf0'
        }}
      >
        {/*
         * Product image — absolutely positioned to the right.
         * overflow:hidden on the parent clips it at the card edge,
         * but the image is large enough to dominate the right side.
         */}
        <img
          src={card.image}
          alt={card.imageAlt}
          style={{
            position: 'absolute',
            right: -20,          // bleeds slightly past card right edge
            top: 0,
            height: '100%',      // taller than the card — bleeds top and bottom too
            width: 'auto',
            objectFit: 'contain',
            objectPosition: 'top right',
            filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.13))',
            pointerEvents: 'none',
          }}
          onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = '0' }}
        />

        {/* Top section: icon + title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, zIndex: 1, position: 'relative' }}>
          {/* Dark green icon circle */}
          {/* <div style={{
            width: 46,
            height: 46,
            borderRadius: '50%',
            background: 'linear-gradient(145deg, #005c28, #00a550)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 4px 14px rgba(0,90,36,0.32)',
          }}>
            <Icon size={22} color="#ffffff" strokeWidth={2} />
          </div> */}

          {/* Title */}
          <h3 style={{
            fontSize: 'clamp(13.5px,1.1vw,15px)',
            fontWeight: 800,
            color: '#0d1b2a',
            margin: 0,
            lineHeight: 1.25,
          }}>
            {card.num}. {card.title}
          </h3>

          {/* Description — only left ~55% width so image is clear */}
          <p style={{
            fontSize: 'clamp(11px,0.9vw,12.5px)',
            color: 'rgba(13,27,42,0.58)',
            lineHeight: 1.65,
            margin: 0,
            maxWidth: '58%',
          }}>
            {card.description}
          </p>
        </div>

        {/* Bottom: tag pill */}
        {/* <div style={{ zIndex: 1, position: 'relative' }}>
          <span style={{
            display: 'inline-block',
            fontSize: 11,
            fontWeight: 700,
            color: '#00a550',
            background: 'rgba(0,165,80,0.09)',
            border: '1px solid rgba(0,165,80,0.25)',
            borderRadius: 20,
            padding: '4px 12px',
          }}>
            {card.tag}
          </span>
        </div> */}

      </div>
    </motion.div>
  )
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export function RareEarthUsesSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-6% 0px' })
  const bannerRef = useRef(null)
  const bannerInView = useInView(bannerRef, { once: true, margin: '-6% 0px' })

  return (
    <section style={{
      background: '#ffffff',
      padding: 'clamp(44px,6vw,80px) clamp(16px,4vw,56px)',
      fontFamily: 'DM Sans, sans-serif',
      overflow: 'hidden',
    }}>

      {/* ── Header ── */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 18 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: 'clamp(28px,4vw,44px)' }}
      >
        {/* Gear pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
          {/* <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            fontSize: 10.5, fontWeight: 800, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: '#00a550',
            background: 'rgba(0,165,80,0.07)',
            border: '1px solid rgba(0,165,80,0.2)',
            borderRadius: 99, padding: '5px 14px',
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00a550" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            Powering the Modern World
          </span> */}
        </div>

        <h2 style={{
          fontSize: 'clamp(24px,4.2vw,52px)',
          fontWeight: 900,
          color: '#0d1b2a',
          lineHeight: 1.1,
          margin: '0 0 14px',
          letterSpacing: '-0.02em',
        }}>
          Rare Earth Magnets{' '}
          <span style={{ color: '#00a550' }}>Are Everywhere</span>
        </h2>

        {/* <p style={{
          fontSize: 'clamp(13px,1.1vw,15px)',
          color: 'rgba(13,27,42,0.52)',
          lineHeight: 1.7,
          maxWidth: 540,
          margin: '0 auto',
        }}>
          From everyday home appliances to electric vehicles and industrial machines,<br />
          rare earth magnets power many technologies because they are incredibly strong and compact.
        </p> */}
      </motion.div>

      {/* ── 4×2 Card Grid ──
          desktop: 4 cols | tablet: 2 cols | mobile: 2 cols (as specified)
          overflow: visible on the wrapper so images can bleed outside cards
      */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'clamp(10px,1.6vw,20px)',
        marginBottom: 'clamp(18px,3vw,32px)',
        maxWidth: 1320,
        margin: '0 auto clamp(18px,3vw,32px)',
        /* key: overflow visible so product images bleed outside each cell */
        overflow: 'visible',
      }}
      className="rare-earth-grid"
      >
        <style>{`
          @media (max-width: 900px) {
            .rare-earth-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}</style>

        {USE_CARDS.map((card, i) => (
          <UseCard key={card.num} card={card} delay={Math.min(i * 0.055, 0.35)} />
        ))}
      </div>

      {/* ── Bottom Banner ── */}
      

    </section>
  )
}
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
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
    >
      {/* Card body — single row: content 65% / image 35% */}
      <div
        style={{
          background: '#ffffff',
          border: '1px solid #e8edf0',
          borderBottom: '3px solid #00a550',
          borderRadius: 16,
          padding: '18px 16px 14px 18px',
          position: 'relative',
          overflow: 'hidden',
          height: 210,
          boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
          transition: 'box-shadow 0.22s ease, transform 0.22s ease',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          gap: 8,
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.boxShadow = '0 12px 30px rgba(0,165,80,0.14)'
          el.style.transform = 'translateY(-3px)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.boxShadow = '0 2px 14px rgba(0,0,0,0.05)'
          el.style.transform = 'translateY(0)'
        }}
      >
        {/* Left: content — 50% */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          flex: '0 0 50%',
          maxWidth: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <div>
            <h3 style={{
              fontSize: 'clamp(14px,1.1vw,15.5px)',
              fontWeight: 800,
              color: '#0d1b2a',
              margin: '0 0 8px',
              lineHeight: 1.25,
            }}>
              {card.title}
            </h3>

            <p style={{
              fontSize: 'clamp(11.5px,0.9vw,13px)',
              color: 'rgba(13,27,42,0.58)',
              lineHeight: 1.6,
              margin: 0,
            }}>
              {card.description}
            </p>
          </div>
        </div>

        {/* Right: image — 50%, fills full card height */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          flex: '0 0 50%',
          maxWidth: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'stretch',
        }}>
          <img
            src={card.image}
            alt={card.imageAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center',
              filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.12))',
              pointerEvents: 'none',
            }}
            onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = '0' }}
          />
        </div>
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
      */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'clamp(10px,1.6vw,20px)',
        marginBottom: 'clamp(18px,3vw,32px)',
        maxWidth: 1320,
        margin: '0 auto clamp(18px,3vw,32px)',
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
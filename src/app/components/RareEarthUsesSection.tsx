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
  {
    num: 1,
    icon: Smartphone,
    title: 'Mixer',
    description: 'Tiny powerful magnets drive speakers, vibration motors and camera autofocus.',
    tag: 'Compact Â· Powerful',
    image: '/photos/mixer.png',
    imageAlt: 'Mixer appliance using compact electric motor components',
  },
  {
    num: 2,
    icon: WashingMachine,
    title: 'Washing Machines',
    description: 'Direct-drive motors use powerful magnets for quieter and more efficient operation.',
    tag: 'Efficient Motor',
    image: '/photos/WashingMachine.png',
    imageAlt: 'Washing machine using a direct-drive electric motor',
  },
  {
    num: 3,
    icon: Wind,
    title: 'Air Conditioners',
    description: 'Compressors and fan motors use rare earth magnets for higher efficiency.',
    tag: 'Energy Efficient',
    image: '/photos/AC-removebg-preview.png',
    imageAlt: 'Air conditioner compressor and fan motor application',
  },
  {
    num: 4,
    icon: Zap,
    title: 'Vacuum Cleaners',
    description: 'Compact high-speed motors generate powerful suction.',
    tag: 'High-Speed Motor',
    image: '/photos/vacume-cleaner.png',
    imageAlt: 'Vacuum cleaner with compact high-speed electric motor',
  },
  {
    num: 5,
    icon: Car,
    title: 'Electric Vehicles',
    description: 'Permanent magnets create strong torque with high efficiency.',
    tag: 'Traction Motor',
    image: '/photos/electric_car_PNG.png',
    imageAlt: 'Electric vehicle traction motor application',
  },
  {
    num: 6,
    icon: Radio,
    title: 'Chimneys',
    description: 'Powerful generators convert wind energy into electricity.',
    tag: 'Renewable Energy',
    image: '/photos/chimney.png',
    imageAlt: 'Kitchen chimney appliance using electric motor technology',
  },
  {
    num: 7,
    icon: Bot,
    title: 'Industrial Robots',
    description: 'Servo motors use rare earth magnets for precise movement and positioning.',
    tag: 'Precision Motion',
    image: '/photos/industrial-robot.png',
    imageAlt: 'Industrial robot using precision servo motor technology',
  },
  {
    num: 8,
    icon: HardDrive,
    title: 'HVLS Fans',
    description: 'Tiny magnets move the read/write head with extreme accuracy.',
    tag: 'Precision Control',
    image: '/photos/HVLS.png',
    imageAlt: 'HVLS fan application using electric motor technology',
  },
]

const WHY_FEATURES = [
  { icon: Magnet, label: 'Extremely\nStrong' },
  { icon: Maximize2, label: 'Compact\nSize' },
  { icon: Zap, label: 'High\nEfficiency' },
  { icon: Shield, label: 'Reliable\nPerformance' },
]

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
          const img = el.querySelector('[data-use-card-image]') as HTMLImageElement | null
          el.style.boxShadow = '0 12px 30px rgba(0,165,80,0.14)'
          el.style.transform = 'translateY(-3px)'
          if (img) {
            img.style.transform = 'scale(1.12)'
          }
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement
          const img = el.querySelector('[data-use-card-image]') as HTMLImageElement | null
          el.style.boxShadow = '0 2px 14px rgba(0,0,0,0.05)'
          el.style.transform = 'translateY(0)'
          if (img) {
            img.style.transform = 'scale(1)'
          }
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            flex: '0 0 50%',
            maxWidth: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 'clamp(14px,1.1vw,15.5px)',
                fontWeight: 800,
                color: '#0d1b2a',
                margin: '0 0 8px',
                lineHeight: 1.25,
              }}
            >
              {card.title}
            </h3>

            <p
              style={{
                fontSize: 'clamp(11.5px,0.9vw,13px)',
                color: 'rgba(13,27,42,0.58)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {card.description}
            </p>
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            flex: '0 0 50%',
            maxWidth: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'stretch',
          }}
        >
          <img
            data-use-card-image
            src={card.image}
            alt={card.imageAlt}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center',
              filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.12))',
              pointerEvents: 'none',
              transition: 'transform 0.28s ease',
            }}
            onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = '0' }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export function RareEarthUsesSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-6% 0px' })

  return (
    <section style={{
      background: '#ffffff',
      padding: 'clamp(44px,6vw,80px) clamp(16px,4vw,56px)',
      fontFamily: 'DM Sans, sans-serif',
      overflow: 'hidden',
    }}>
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 18 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: 'clamp(28px,4vw,44px)' }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }} />

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
      </motion.div>

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
    </section>
  )
}

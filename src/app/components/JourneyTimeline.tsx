'use client'

import { motion, useScroll, useSpring, useInView } from 'motion/react'
import { Calendar, MapPin, Award, Users, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useRef, useState } from 'react'

type Milestone = {
  year: string
  title: string
  description: string
  icon: LucideIcon
  stats: string
}

const milestones: Milestone[] = [
  {
    year: '2020', title: 'Foundation',
    description: 'VoltDrive founded with a mission to revolutionize the Indian EV market. 10 engineers, 1 bold vision.',
    icon: Users, stats: '10 Team Members',
  },
  {
    year: '2021', title: 'R&D Phase',
    description: 'Built proprietary battery management system and next-gen motor tech entirely in-house.',
    icon: Award, stats: '3 Patents Filed',
  },
  {
    year: '2022', title: 'Prototype Testing',
    description: "Completed 100,000 km of real-world testing across India's most demanding terrains.",
    icon: MapPin, stats: '100K km Tested',
  },
  {
    year: '2023', title: 'Manufacturing',
    description: 'Opened a gigafactory in Gujarat with fully automated assembly lines running at scale.',
    icon: Zap, stats: '50K Units/Year',
  },
  {
    year: '2024', title: 'Market Launch',
    description: 'VoltDrive X1 launched to overwhelming demand — redefining Indian EV expectations.',
    icon: Calendar, stats: '500+ Delivered',
  },
]

// ── Milestone Card ─────────────────────────────────────────────────────────────
function MilestoneCard({ milestone, index }: { milestone: Milestone; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-10% 0px' })
  const isEven = index % 2 === 0
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Card side */}
      <div className={`flex-1 ${isEven ? 'md:pr-14' : 'md:pl-14'} pl-16 md:pl-0`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -36 : 36 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -36 : 36 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={isEven ? 'md:flex md:justify-end' : ''}
        >
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative w-full md:max-w-[370px] rounded-2xl p-5 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))',
              border: hovered
                ? '1px solid rgba(0,229,255,0.32)'
                : '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(10px)',
              boxShadow: hovered
                ? '0 0 28px rgba(0,229,255,0.1),0 12px 36px rgba(0,0,0,0.45)'
                : '0 4px 20px rgba(0,0,0,0.3)',
              transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
            }}
          >
            {/* Year pill */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
                style={{
                  background: 'linear-gradient(90deg,rgba(0,200,83,0.14),rgba(0,229,255,0.14))',
                  border: '1px solid rgba(0,229,255,0.22)',
                  color: '#00E5FF',
                  fontFamily: "'DM Sans',sans-serif",
                }}
              >
                {milestone.year}
              </span>
              <motion.span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#00C853', boxShadow: '0 0 5px #00C853' }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
              />
            </div>

            <h3
              className="text-lg font-black tracking-tight mb-1.5"
              style={{
                fontFamily: "'DM Sans',sans-serif",
                background: 'linear-gradient(90deg,#fff,rgba(255,255,255,0.7))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {milestone.title}
            </h3>

            <p
              className="text-sm leading-relaxed mb-3"
              style={{ color: 'rgba(255,255,255,0.42)', fontFamily: "'DM Sans',sans-serif" }}
            >
              {milestone.description}
            </p>

            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: 'rgba(0,200,83,0.09)',
                border: '1px solid rgba(0,200,83,0.2)',
                color: '#00C853',
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              ▲ {milestone.stats}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Center node */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.12, type: 'spring', stiffness: 220, damping: 18 }}
        >
          <div
            className="absolute inset-0 rounded-full blur-md"
            style={{ background: 'linear-gradient(135deg,#00C853,#00E5FF)', opacity: 0.45 }}
          />
          <div
            className="relative w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg,#00C853,#00E5FF)',
              boxShadow: '0 0 12px rgba(0,229,255,0.45)',
            }}
          >
            <milestone.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
        </motion.div>
      </div>

      {/* Desktop spacer */}
      <div className="hidden md:block flex-1" />
    </div>
  )
}

// ── Exported component ─────────────────────────────────────────────────────────
export function JourneyTimeline() {
  const timelineRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 20%'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })

  return (
    <>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-8% 0px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p
          className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3"
          style={{ color: '#00C853' }}
        >
          EST. 2020 &bull; INDIA
        </p>
        <h2
          className="font-black leading-none tracking-tight mb-4"
          style={{ fontSize: 'clamp(40px,5.5vw,68px)' }}
        >
          <span className="text-white">Our </span>
          <span
            style={{
              background: 'linear-gradient(90deg,#00C853,#00E5FF,#00C853)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradShift 4s linear infinite',
            }}
          >
            Journey
          </span>
        </h2>
        <p
          className="text-sm max-w-sm mx-auto leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.38)' }}
        >
          From concept to India's most anticipated EV — every milestone, every breakthrough.
        </p>
      </motion.div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative">
        {/* Dim base line */}
        <div
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        >
          {/* Scroll-fill */}
          <motion.div
            className="absolute inset-0 origin-top"
            style={{
              scaleY,
              background: 'linear-gradient(to bottom,#00C853,#00E5FF,#00C853)',
              boxShadow: '0 0 8px rgba(0,229,255,0.55)',
            }}
          />
          {/* Shimmer bead */}
          <motion.div
            className="absolute w-full"
            style={{
              height: 50,
              background: 'linear-gradient(to bottom,transparent,rgba(0,229,255,0.65),transparent)',
            }}
            animate={{ top: ['-8%', '108%'] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <div className="space-y-9 md:space-y-12">
          {milestones.map((m, i) => (
            <MilestoneCard key={m.year} milestone={m} index={i} />
          ))}
        </div>
      </div>
    </>
  )
}

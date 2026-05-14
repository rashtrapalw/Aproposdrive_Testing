'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { Eye, Lightbulb, TrendingUp, Sparkles, ArrowRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

// ─── Data ─────────────────────────────────────────────────────────────────────
const visionCards = [
  {
    icon: Eye,
    tag: 'Vision',
    title: 'Our Vision',
    description: 'Building a sustainable transportation ecosystem for a greener India by 2030.',
    image: 'https://images.unsplash.com/photo-1770319969068-d51c3854436e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGdyZWVuJTIwZW5lcmd5JTIwaW5kaWF8ZW58MXx8fHwxNzc1MTI5Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    accent: '#00C853',
    accent2: '#00E5FF',
  },
  {
    icon: Lightbulb,
    tag: 'Technology',
    title: 'Technology',
    description: 'Pioneering AI-driven battery management and autonomous driving capabilities.',
    image: 'https://images.unsplash.com/photo-1760842543713-108c3cadbba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMGNpcmN1aXQlMjBib2FyZHxlbnwxfHx8fDE3NzUwMzA5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    accent: '#00E5FF',
    accent2: '#00C853',
  },
  {
    icon: TrendingUp,
    tag: 'Future',
    title: 'Future Trends',
    description: 'Expanding charging infrastructure and introducing autonomous EV fleets.',
    image: 'https://images.unsplash.com/photo-1707758283398-7df21adba23a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBjaGFyZ2luZyUyMHN0YXRpb24lMjBmdXR1cmlzdGljfGVufDF8fHx8MTc3NTEyOTY5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    accent: '#00C853',
    accent2: '#00E5FF',
  },
]

const stats = [
  { value: '2030', label: 'Carbon Neutral Target', accent: '#00C853' },
  { value: '1M+',  label: 'EVs on Indian Roads',   accent: '#00E5FF' },
  { value: '10K+', label: 'Charging Stations',      accent: '#00C853' },
]

// ─── Vision Card ──────────────────────────────────────────────────────────────
function VisionCard({ card, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-8% 0px' })
  const [hov, setHov] = useState(false)
  const Icon = card.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      whileHover={{ y: -8 }}
      style={{ perspective: 900 }}
    >
      <div
        className="relative rounded-2xl overflow-hidden flex flex-col h-full cursor-default transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.018))',
          border: `1px solid ${hov ? card.accent + '50' : 'rgba(255,255,255,0.07)'}`,
          backdropFilter: 'blur(14px)',
          boxShadow: hov
            ? `0 0 32px ${card.accent}18, 0 20px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)`
            : '0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
        }}
      >
        {/* Animated top accent line */}
        <motion.div
          className="absolute top-0 inset-x-0 h-[2px] origin-left z-20"
          style={{ background: `linear-gradient(90deg,${card.accent},${card.accent2})` }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.7, ease: 'easeOut' }}
        />

        {/* Image */}
        <div className="relative h-44 overflow-hidden flex-shrink-0">
          <ImageWithFallback
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: hov ? 'scale(1.07)' : 'scale(1)' }}
          />
          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to bottom, rgba(6,10,22,0.1), rgba(6,10,22,0.75))` }}
          />
          {/* Accent color overlay on hover */}
          <div
            className="absolute inset-0 transition-opacity duration-400"
            style={{
              background: `linear-gradient(135deg,${card.accent}22,${card.accent2}11)`,
              opacity: hov ? 1 : 0,
            }}
          />

          {/* Tag pill — floats over image */}
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
            style={{
              background: 'rgba(6,10,22,0.75)',
              border: `1px solid ${card.accent}40`,
              backdropFilter: 'blur(8px)',
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: card.accent, boxShadow: `0 0 5px ${card.accent}` }} />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: card.accent, fontFamily: "'DM Sans',sans-serif" }}>
              {card.tag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col flex-1 p-5 gap-3">
          {/* Hover inner glow */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-400"
            style={{
              background: `radial-gradient(ellipse at 20% 0%,${card.accent}0e,transparent 60%)`,
              opacity: hov ? 1 : 0,
            }}
          />

          {/* Icon */}
          <motion.div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10"
            style={{
              background: `linear-gradient(135deg,${card.accent}22,${card.accent2}14)`,
              border: `1px solid ${card.accent}35`,
            }}
            animate={hov ? { scale: 1.1, rotate: 6 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.22 }}
          >
            <Icon className="w-4.5 h-4.5" style={{ width: 18, height: 18, color: card.accent }} strokeWidth={2.2} />
          </motion.div>

          {/* Text */}
          <div className="relative z-10">
            <h3
              className="font-black text-base leading-snug mb-1.5"
              style={{ color: '#fff', fontFamily: "'DM Sans',sans-serif" }}
            >
              {card.title}
            </h3>
            <p
              className="text-xs leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.42)', fontFamily: "'DM Sans',sans-serif" }}
            >
              {card.description}
            </p>
          </div>

          {/* CTA arrow */}
          <div className="relative z-10 mt-auto pt-3 flex items-center justify-between"
            style={{ borderTop: `1px solid ${card.accent}18` }}>
            <span
              className="text-[10px] font-bold uppercase tracking-[0.18em]"
              style={{ color: card.accent, fontFamily: "'DM Sans',sans-serif" }}
            >
              Learn More
            </span>
            <motion.div
              className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{
                background: `${card.accent}14`,
                border: `1px solid ${card.accent}28`,
                opacity: hov ? 1 : 0,
                transition: 'opacity 0.2s',
              }}
              animate={hov ? { x: 0 } : { x: -4 }}
            >
              <ArrowRight style={{ width: 11, height: 11, color: card.accent }} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ stat, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1 + 0.15, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative flex flex-col items-center justify-center p-6 rounded-2xl text-center cursor-default overflow-hidden"
      style={{
        background: 'linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))',
        border: `1px solid ${stat.accent}28`,
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%,${stat.accent}10,transparent 65%)` }}
      />
      {/* Shimmer top line */}
      <div
        className="absolute top-0 inset-x-6 h-px"
        style={{ background: `linear-gradient(90deg,transparent,${stat.accent}50,transparent)` }}
      />
      <span
        className="font-black leading-none mb-2 relative z-10"
        style={{
          fontSize: 'clamp(32px,4vw,44px)',
          fontFamily: "'DM Sans',sans-serif",
          background: `linear-gradient(90deg,${stat.accent},${stat.accent === '#00C853' ? '#00E5FF' : '#00C853'})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {stat.value}
      </span>
      <span
        className="text-xs uppercase tracking-[0.15em] relative z-10"
        style={{ color: 'rgba(255,255,255,0.38)', fontFamily: "'DM Sans',sans-serif" }}
      >
        {stat.label}
      </span>
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
export function VisionSection() {
  const headerRef  = useRef(null)
  const bottomRef  = useRef(null)
  const headerInView = useInView(headerRef,  { once: false, margin: '-8% 0px' })
  const bottomInView = useInView(bottomRef,  { once: false, margin: '-8% 0px' })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700;9..40,900&display=swap');
        @keyframes gradShift{0%{background-position:0%}100%{background-position:200%}}
      `}</style>

      <section
        id="vision"
        className="relative py-20 overflow-hidden"
        style={{ background: '#0A0F1C', fontFamily: "'DM Sans',sans-serif" }}
      >
        {/* ── Background — exact site match ── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          {/* Green blob — top-left */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full"
            style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.16 }} />
          {/* Cyan blob — top-right */}
          <div className="absolute top-10 right-[-60px] w-96 h-96 rounded-full"
            style={{ background: '#00E5FF', filter: 'blur(128px)', opacity: 0.11 }} />
          {/* Green blob — bottom */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full"
            style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.08 }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 22 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{ background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.22)' }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#00E5FF', boxShadow: '0 0 6px #00E5FF' }}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: '#00E5FF' }}>
                Vision &amp; Technology
              </span>
            </div>

            <h2
              className="font-black leading-none tracking-tight mb-4"
              style={{ fontSize: 'clamp(38px,5.5vw,68px)' }}
            >
              <span className="text-white">Shaping the </span>
              <span
                style={{
                  background: 'linear-gradient(90deg,#00C853,#00E5FF,#00C853)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradShift 4s linear infinite',
                }}
              >
                Future
              </span>
            </h2>

            <p
              className="text-sm max-w-md mx-auto leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.38)' }}
            >
              Shaping the future of electric mobility through bold innovation and deep sustainability.
            </p>
          </motion.div>

          {/* ── Vision Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {visionCards.map((card, i) => (
              <VisionCard key={card.title} card={card} index={i} />
            ))}
          </div>

          {/* ── Imagination / Bottom Section ── */}
          <div ref={bottomRef}>

            {/* Imagination pill + headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={bottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              {/* Pill */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Sparkles className="w-4 h-4" style={{ color: '#00E5FF' }} />
                </motion.div>
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.22em]"
                  style={{ color: 'rgba(255,255,255,0.55)', fontFamily: "'DM Sans',sans-serif" }}
                >
                  Imagination Drives Innovation
                </span>
              </div>

              {/* Headline */}
              <h3
                className="font-black leading-tight max-w-3xl mx-auto mb-0"
                style={{ fontSize: 'clamp(22px,3.5vw,38px)', fontFamily: "'DM Sans',sans-serif" }}
              >
                <span className="text-white">Envisioning a world where </span>
                <span
                  style={{
                    background: 'linear-gradient(90deg,#00C853,#00E5FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  every journey
                </span>
                <span className="text-white"> contributes to a </span>
                <span style={{ color: '#00E5FF' }}>healthier planet</span>
              </h3>
            </motion.div>

            {/* ── Stat Cards ── */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {stats.map((s, i) => (
                <StatCard key={s.label} stat={s} index={i} inView={bottomInView} />
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
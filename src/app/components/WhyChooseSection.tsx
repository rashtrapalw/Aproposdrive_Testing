'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'
import { DollarSign, Wrench, Leaf, Zap, Shield, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

// ─── Data ─────────────────────────────────────────────────────────────────────
type Benefit = {
  icon: LucideIcon
  title: string
  description: string
  longDescription: string
  stat: string
  statLabel: string
  accent: string
  image: string
  details: string[]
  cta: string
}

const benefits: Benefit[] = [
  {
    icon: TrendingUp,
    title: '10–15% Extended Range',
    description: 'High-efficiency vector control delivers superior range per charge cycle compared to conventional systems.',
    longDescription: 'Our vector field-oriented control algorithm optimizes motor efficiency at every speed and load condition, delivering consistent performance improvements.',
    stat: '15%',
    statLabel: 'Range Gain',
    accent: '#00C853',
    image: '/photos/no-bg-controller.png',
    details: ['94–95% Motor Efficiency', 'Real-time Thermal Management', 'Advanced Current Profiling'],
    cta: 'Explore Range Features',
  },
  {
    icon: Zap,
    title: 'Compact 3-in-1 Design',
    description: 'Motor, controller, and gearbox integrated into a single unit — reducing assembly time and space requirements.',
    longDescription: 'All-in-one integration simplifies manufacturing, reduces weight, and cuts assembly complexity while maintaining maximum reliability.',
    stat: '3-in-1',
    statLabel: 'Integration',
    accent: '#00E5FF',
    image: '/photos/motor-removebg.png',
    details: ['Unified Housing', 'Reduced Assembly Time', '40% Lighter System'],
    cta: 'Learn About Integration',
  },
  {
    icon: DollarSign,
    title: 'Lower Cost Architecture',
    description: 'Rare earth-free technology eliminates dependency on scarce materials — cutting system and ownership costs.',
    longDescription: 'By eliminating rare earth magnets, we reduce material costs, supply chain complexity, and environmental impact without compromising performance.',
    stat: '30%',
    statLabel: 'Cost Reduction',
    accent: '#00C853',
    image: '/photos/no-bg-controller.png',
    details: ['No Rare Earth Dependency', 'Optimized Material Cost', 'Mass Adoption Ready'],
    cta: 'See Cost Breakdown',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'IP67 sealed, low-heating design with natural air cooling ensures consistent performance in all conditions.',
    longDescription: 'Engineered for durability with comprehensive IP67 protection and intelligent thermal management for extreme Indian climate conditions.',
    stat: 'IP67',
    statLabel: 'Protection',
    accent: '#00E5FF',
    image: '/photos/motor-removebg.png',
    details: ['Extreme Weather Tested', 'Natural Air Cooling', 'Extended Lifespan'],
    cta: 'Durability Specs',
  },
  {
    icon: Wrench,
    title: 'India-First Engineering',
    description: 'Every component tested for Indian roads, temperature extremes, and real-world driving conditions.',
    longDescription: 'Designed, engineered, and tested specifically for Indian roads, monsoons, traffic patterns, and temperature variations.',
    stat: '100%',
    statLabel: 'India Ready',
    accent: '#00C853',
    image: '/photos/no-bg-controller.png',
    details: ['Real Road Testing', 'Monsoon Rated', 'Urban & Terrain Ready'],
    cta: 'Localization Details',
  },
  {
    icon: Leaf,
    title: 'Zero Rare Earths',
    description: 'Eco-conscious motors with no rare earth dependency — cleaner supply chain, cleaner mobility.',
    longDescription: 'True sustainable mobility with eco-friendly magnets, recyclable components, and zero rare earth extraction impact.',
    stat: '0',
    statLabel: 'Rare Earths Used',
    accent: '#00E5FF',
    image: '/photos/motor-removebg.png',
    details: ['Sustainable Materials', '100% Recyclable', 'Carbon Neutral'],
    cta: 'Sustainability Report',
  },
]

// ─── useWindowWidth ────────────────────────────────────────────────────────────
function useWindowWidth() {
  const [w, setW] = useState(1200)
  useEffect(() => {
    setW(window.innerWidth)
    const fn = () => setW(window.innerWidth)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return w
}

// ─── Image Carousel Slide ──────────────────────────────────────────────────────
function CarouselImage({ src }: { src: string }) {
  return (
    <motion.div
      key={src}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="absolute inset-0"
    >
      <ImageWithFallback
        src={src}
        alt="Product showcase"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />
    </motion.div>
  )
}

// ─── Carousel Navigation Dots ──────────────────────────────────────────────────
function CarouselDots({ total, active, onDotClick }: { total: number; active: number; onDotClick: (i: number) => void }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <motion.button
          key={i}
          onClick={() => onDotClick(i)}
          className="rounded-full transition-all"
          animate={{
            width: i === active ? 28 : 8,
            height: 8,
            background: i === active ? '#00C853' : 'rgba(255,255,255,0.2)',
          }}
          whileHover={{ opacity: 0.8 }}
          style={{
            border: 'none',
            cursor: 'pointer',
            boxShadow: i === active ? '0 0 12px #00C853' : 'none',
          }}
        />
      ))}
    </div>
  )
}

// ─── Carousel Navigation Button ────────────────────────────────────────────────
function NavButton({ direction, onClick, disabled = false }: { direction: 'prev' | 'next'; onClick: () => void; disabled?: boolean }) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
      whileHover={{ scale: disabled ? 1 : 1.1 }}
      style={{
        background: disabled ? 'rgba(255,255,255,0.08)' : 'rgba(0,200,83,0.15)',
        border: `1px solid ${disabled ? 'rgba(255,255,255,0.06)' : 'rgba(0,200,83,0.3)'}`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <Icon size={18} color={disabled ? 'rgba(255,255,255,0.3)' : '#00C853'} />
    </motion.button>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
export function WhyChooseSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: false, margin: '-8% 0px' })
  const carouselRef = useRef(null)
  const carouselInView = useInView(carouselRef, { once: false, margin: '-8% 0px' })
  const w = useWindowWidth()
  const isMobile = w < 768
  const isTablet = w < 1024

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  const currentBenefit = benefits[currentSlide]

  // Auto-slide effect
  useEffect(() => {
    if (!autoplay || isPaused) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % benefits.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoplay, isPaused])

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700;9..40,900&display=swap');
        @keyframes gradShift{0%{background-position:0%}100%{background-position:200%}}
      `}</style>

      <section
        className="relative py-12 overflow-hidden"
        style={{ background: '#0A0F1C', fontFamily: "'DM Sans',sans-serif" }}
      >
        {/* ── Background ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full" style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.16 }} />
          <div className="absolute top-10 right-[-60px] w-96 h-96 rounded-full" style={{ background: '#00E5FF', filter: 'blur(128px)', opacity: 0.11 }} />
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full" style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.08 }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3"
              style={{ background: 'rgba(0,200,83,0.08)', border: '1px solid rgba(0,200,83,0.22)' }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#00C853', boxShadow: '0 0 6px #00C853' }}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: '#00C853' }}>
                Why Us
              </span>
            </div>

            <h2
              className="font-black leading-none tracking-tight mb-3"
              style={{ fontSize: 'clamp(32px,5vw,56px)' }}
            >
              <span className="text-white">Why Choose </span>
              <br className={isMobile ? 'block' : 'hidden'} />
              <span
                style={{
                  background: 'linear-gradient(90deg,#00C853,#00E5FF,#00C853)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradShift 4s linear infinite',
                }}
              >
                Aproposdrive
              </span>
              <span className="text-white">?</span>
            </h2>

            <p
              className="text-xs max-w-md mx-auto leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.38)' }}
            >
              Cutting-edge EV technology built for India's roads — engineered for performance, longevity, and sustainability.
            </p>
          </motion.div>

          {/* ── Split-Screen Carousel ── */}
          <motion.div
            ref={carouselRef}
            initial={{ opacity: 0, y: 32 }}
            animate={carouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="grid gap-6 mb-8"
            style={{ gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1.2fr' : '0.95fr 1.35fr' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* LEFT: Image Carousel */}
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))',
                border: `1px solid rgba(${currentBenefit.accent === '#00C853' ? '0,200,83' : '0,229,255'},0.25)`,
                backdropFilter: 'blur(16px)',
                minHeight: isMobile ? 200 : 280,
                aspectRatio: isMobile ? '16/9' : '4/3',
              }}
            >
              {/* Carousel background glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${currentBenefit.accent}15 0%, transparent 70%)`,
                }}
              />

              {/* Image slides - Only render active image */}
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  <CarouselImage key={currentBenefit.image} src={currentBenefit.image} />
                </AnimatePresence>
              </div>

              {/* Navigation buttons */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 pointer-events-auto">
                <NavButton direction="prev" onClick={goToPrevious} />
                <NavButton direction="next" onClick={goToNext} />
              </div>

              {/* Bottom gradient overlay */}
              <div
                className="absolute bottom-0 inset-x-0 h-16 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(10,15,28,0.95), transparent)',
                }}
              />

              {/* Slide counter */}
              <div className="absolute bottom-4 left-4 text-[12px] font-bold uppercase tracking-[0.15em]" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Sans',sans-serif" }}>
                {(currentSlide + 1).toString().padStart(2, '0')} / {benefits.length.toString().padStart(2, '0')}
              </div>

              {/* Carousel dots */}
              <div className="absolute bottom-4 right-4 pointer-events-auto">
                <CarouselDots total={benefits.length} active={currentSlide} onDotClick={goToSlide} />
              </div>
            </motion.div>

            {/* RIGHT: Content Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: isMobile ? 0 : 24, y: isMobile ? 16 : 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: isMobile ? 0 : 24, y: isMobile ? 16 : 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex flex-col justify-center"
              >
                {/* Icon + Badge */}
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${currentBenefit.accent}16`,
                      border: `1px solid ${currentBenefit.accent}35`,
                    }}
                    animate={{ rotate: 6 }}
                    transition={{ duration: 0.6 }}
                  >
                    {(() => {
                      const Icon = currentBenefit.icon
                      return <Icon className="w-5 h-5" style={{ color: currentBenefit.accent }} strokeWidth={2} />
                    })()}
                  </motion.div>
                  <div
                    className="px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.18em]"
                    style={{
                      background: `${currentBenefit.accent}14`,
                      color: currentBenefit.accent,
                      border: `1px solid ${currentBenefit.accent}28`,
                    }}
                  >
                    Feature {(currentSlide + 1).toString().padStart(2, '0')}
                  </div>
                </div>

                {/* Title */}
                <motion.h3
                  className="font-black leading-tight mb-2"
                  style={{
                    fontSize: 'clamp(20px,2.5vw,30px)',
                    color: '#fff',
                  }}
                >
                  {currentBenefit.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-xs leading-relaxed mb-4"
                  style={{ color: 'rgba(255,255,255,0.48)' }}
                >
                  {currentBenefit.longDescription}
                </motion.p>

                {/* Key Details */}
                <motion.div className="flex flex-col gap-1.5 mb-4">
                  {currentBenefit.details.map((detail, i) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: currentBenefit.accent }} />
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        {detail}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Stat Highlight */}
                <motion.div
                  className="p-3 rounded-lg mb-4"
                  style={{
                    background: `${currentBenefit.accent}08`,
                    border: `1px solid ${currentBenefit.accent}20`,
                  }}
                >
                  <div className="flex items-baseline gap-2">
                    <span
                      className="font-black leading-none"
                      style={{
                        fontSize: 28,
                        color: currentBenefit.accent,
                      }}
                    >
                      {currentBenefit.stat}
                    </span>
                    <span
                      className="text-[10px] uppercase tracking-[0.15em]"
                      style={{ color: 'rgba(255,255,255,0.35)' }}
                    >
                      {currentBenefit.statLabel}
                    </span>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  className="w-full py-2.5 px-4 rounded-lg font-black uppercase text-[10px] tracking-[0.18em] transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${currentBenefit.accent}, ${currentBenefit.accent === '#00C853' ? '#00E5FF' : '#00C853'})`,
                    color: '#0A0F1C',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: `0 8px 24px ${currentBenefit.accent}40`,
                  }}
                  whileHover={{ scale: 1.02, boxShadow: `0 12px 32px ${currentBenefit.accent}60` }}
                  whileTap={{ scale: 0.98 }}
                >
                  {currentBenefit.cta}
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* ── Info Footer ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={carouselInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-[11px] uppercase tracking-[0.15em]"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            Use navigation buttons or dots to explore features · Auto-play on hover
          </motion.div>

        </div>
      </section>
    </>
  )
}

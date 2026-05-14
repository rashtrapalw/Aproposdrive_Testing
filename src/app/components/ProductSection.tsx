'use client'

import Link from 'next/link'
import { motion, useInView } from 'motion/react'
import { ArrowRight, Zap, Cpu } from 'lucide-react'
import { useRef, useState } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const products = [
  {
    id: 1,
    tag: 'Powertrain',
    title: 'Integrated EV Powertrain Platform',
    description:
      'Compact integrated motor, controller, and gearbox — rare-earth-free, air-cooled, and purpose-built for electric scooters.',
    image: '/photos/no-bg-controller.png',
    href: '/products',
    accent: '#00C853',
    icon: Zap,
    stats: [
      { label: 'Peak Power',  value: '6.5 kW' },
      { label: 'Peak Torque', value: '200 Nm'  },
      { label: 'Efficiency',  value: '95%'     },
    ],
  },
  {
    id: 2,
    tag: 'Controller',
    title: 'EV Motor Controller',
    description:
      'High-performance motor controller with vector field-oriented control, thermal stability, and smooth torque delivery.',
    image: '/photos/motor-removebg.png',
    href: '/products',
    accent: '#00E5FF',
    icon: Cpu,
    stats: [
      { label: 'Peak Current', value: '280A'   },
      { label: 'Power Range',  value: '3–7 kW' },
      { label: 'Protection',   value: 'IP67'   },
    ],
  },
]

// ── Single Product Card ───────────────────────────────────────────────────────
function ProductCard({ product, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-8% 0px' })
  const [hovered, setHovered] = useState(false)
  const Icon = product.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ delay: index * 0.12, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={product.href} className="block h-full group">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative h-full rounded-2xl overflow-hidden flex flex-col sm:flex-row transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))',
            border: hovered
              ? `1px solid ${product.accent}50`
              : '1px solid rgba(255,255,255,0.07)',
            backdropFilter: 'blur(12px)',
            boxShadow: hovered
              ? `0 0 32px ${product.accent}18, 0 16px 48px rgba(0,0,0,0.5)`
              : '0 4px 24px rgba(0,0,0,0.35)',
            transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
          }}
        >
          {/* Top shimmer line */}
          <div
            className="absolute top-0 inset-x-8 h-px pointer-events-none"
            style={{
              background: `linear-gradient(90deg,transparent,${product.accent}55,transparent)`,
              opacity: hovered ? 1 : 0.4,
              transition: 'opacity 0.3s',
            }}
          />

          {/* Hover glow */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
            style={{
              background: `radial-gradient(ellipse at 50% 0%,${product.accent}0d 0%,transparent 60%)`,
              opacity: hovered ? 1 : 0,
            }}
          />

          {/* ── Left: image panel ── */}
          <div
            className="relative w-full sm:w-[200px] flex-shrink-0 flex items-center justify-center p-8"
            style={{
              background: `linear-gradient(145deg,${product.accent}08,${product.accent}12)`,
              borderRight: `1px solid ${product.accent}18`,
            }}
          >
            {/* Glow disc */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 160, height: 160,
                background: `radial-gradient(circle,${product.accent}22 0%,transparent 70%)`,
                filter: 'blur(20px)',
              }}
            />

            {/* Tag badge */}
            <div
              className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
              style={{
                background: `${product.accent}12`,
                border: `1px solid ${product.accent}30`,
              }}
            >
              <Icon className="w-3 h-3" style={{ color: product.accent }} />
              <span
                className="text-[10px] uppercase tracking-widest font-bold"
                style={{ color: product.accent, fontFamily: "'DM Sans',sans-serif" }}
              >
                {product.tag}
              </span>
            </div>

            {/* Floating image */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5 + index * 0.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.8 }}
              className="relative z-10"
            >
              <ImageWithFallback
                src={product.image}
                alt={product.title}
                className="w-[130px] h-[130px] object-contain transition-transform duration-500 group-hover:scale-110"
                style={{
                  filter: `drop-shadow(0 8px 24px ${product.accent}60)`,
                  transform: 'scale(1.45)',
                }}
              />
            </motion.div>
          </div>

          {/* ── Right: content panel ── */}
          <div className="flex flex-col justify-between p-6 flex-1 min-w-0">
            <div>
              <h3
                className="font-black text-[1.1rem] leading-snug mb-2.5"
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  background: 'linear-gradient(90deg,#fff,rgba(255,255,255,0.75))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {product.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Sans',sans-serif" }}
              >
                {product.description}
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {product.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center py-2.5 rounded-xl transition-colors duration-200"
                    style={{
                      background: hovered ? `${product.accent}10` : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${hovered ? product.accent + '28' : 'rgba(255,255,255,0.07)'}`,
                    }}
                  >
                    <span
                      className="font-black text-sm leading-none mb-1"
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        background: `linear-gradient(90deg,${product.accent},#fff)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-[10px] uppercase tracking-wide leading-none text-center px-1"
                      style={{ color: 'rgba(255,255,255,0.32)', fontFamily: "'DM Sans',sans-serif" }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className="inline-flex items-center gap-2 text-sm font-bold"
              style={{ color: product.accent, fontFamily: "'DM Sans',sans-serif" }}
            >
              Explore Product
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
                style={{
                  background: `${product.accent}15`,
                  border: `1px solid ${product.accent}35`,
                }}
              >
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Bottom shimmer on hover */}
          <div
            className="absolute bottom-0 inset-x-8 h-px pointer-events-none transition-opacity duration-500"
            style={{
              background: `linear-gradient(90deg,transparent,${product.accent}45,transparent)`,
              opacity: hovered ? 1 : 0,
            }}
          />
        </div>
      </Link>
    </motion.div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────
export function ProductSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: false, margin: '-8% 0px' })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700;9..40,900&display=swap');
        @keyframes gradShift{0%{background-position:0%}100%{background-position:200%}}
      `}</style>

      <section
        id="products"
        className="relative py-20 overflow-hidden"
        style={{ fontFamily: "'DM Sans',sans-serif", background: '#0A0F1C' }}
      >
        {/* ── Background — matches HeroSection & JourneySection exactly ── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Same 64px grid overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          {/* Green blob — top left */}
          <div
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full"
            style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.17 }}
          />
          {/* Cyan blob — top right */}
          <div
            className="absolute top-10 right-[-60px] w-96 h-96 rounded-full"
            style={{ background: '#00E5FF', filter: 'blur(128px)', opacity: 0.12 }}
          />
          {/* Green blob — bottom center */}
          <div
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full"
            style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.09 }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section Header ── */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            {/* Pill badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{
                background: 'rgba(0,200,83,0.09)',
                border: '1px solid rgba(0,200,83,0.22)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#00C853', boxShadow: '0 0 6px #00C853' }}
              />
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[10px] font-bold uppercase tracking-[0.25em]"
                style={{ color: '#00C853' }}
              >
                Our Solutions
              </motion.span>
            </div>

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
                Products
              </span>
            </h2>

            <p
              className="text-sm max-w-sm mx-auto leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.38)' }}
            >
              Advanced EV solutions designed for performance, efficiency, and reliability.
            </p>
          </motion.div>

          {/* ── Product Cards ── */}
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
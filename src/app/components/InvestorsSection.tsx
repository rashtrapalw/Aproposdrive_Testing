'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { TrendingUp, Users, Target, DollarSign, ArrowRight, BarChart2, Globe, Zap } from 'lucide-react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'

// ─── Data ─────────────────────────────────────────────────────────────────────
const growthData = [
  { year: '2020', revenue: 0,    units: 0    },
  { year: '2021', revenue: 5,    units: 50   },
  { year: '2022', revenue: 25,   units: 250  },
  { year: '2023', revenue: 80,   units: 800  },
  { year: '2024', revenue: 200,  units: 2000 },
  { year: '2025', revenue: 500,  units: 5000 },
  { year: '2026', revenue: 1200, units: 12000},
]

const metrics = [
  {
    icon: TrendingUp,
    label: 'Revenue Growth',
    value: '425%',
    subtitle: 'Year-over-Year',
    accent: '#00C853',
    // Unsplash: finance / chart visual
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
  },
  {
    icon: Users,
    label: 'Market Share',
    value: '8.5%',
    subtitle: 'In Premium EV Segment',
    accent: '#00E5FF',
    // Unsplash: crowd / people
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
  },
  {
    icon: Target,
    label: 'Order Book',
    value: '₹450Cr',
    subtitle: 'Pre-orders Secured',
    accent: '#00C853',
    // Unsplash: target / success
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80',
  },
  {
    icon: DollarSign,
    label: 'Funding Raised',
    value: '$50M',
    subtitle: 'Series A Round',
    accent: '#00E5FF',
    // Unsplash: investment / money
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80',
  },
]

const highlights = [
  { icon: BarChart2, text: '425% YoY revenue growth since 2021', accent: '#00C853' },
  { icon: Globe,     text: 'Targeting 8.5% premium EV market share', accent: '#00E5FF' },
  { icon: Zap,       text: '₹450Cr pre-order book secured',          accent: '#00C853' },
  { icon: DollarSign,text: '$50M Series A — proven investor confidence', accent: '#00E5FF' },
]

// ─── Custom Tooltip ───────────────────────────────────────────────────────────
function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{
      background: 'rgba(6,10,22,0.95)',
      border: '1px solid rgba(0,200,83,0.3)',
      borderRadius: 10,
      padding: '10px 14px',
      backdropFilter: 'blur(12px)',
    }}>
      <p style={{ color: '#00C853', fontSize: 11, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", marginBottom: 4 }}>{label}</p>
      {payload.map(p => (
        <p key={p.name} style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, fontFamily: "'DM Sans',sans-serif" }}>
          {p.name === 'revenue' ? `Revenue: ₹${p.value}Cr` : `Units: ${p.value}`}
        </p>
      ))}
    </div>
  )
}

// ─── Metric Card (rectangle with photo) ──────────────────────────────────────
function MetricCard({ metric, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-8% 0px' })
  const [hov, setHov] = useState(false)
  const Icon = metric.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ delay: index * 0.09, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      whileHover={{ y: -6 }}
      className="relative rounded-2xl overflow-hidden cursor-default flex flex-col transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))',
        border: `1px solid ${hov ? metric.accent + '48' : 'rgba(255,255,255,0.07)'}`,
        backdropFilter: 'blur(12px)',
        boxShadow: hov
          ? `0 0 28px ${metric.accent}18, 0 16px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)`
          : '0 4px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
    >
      {/* Animated top line */}
      <motion.div
        className="absolute top-0 inset-x-0 h-[2px] origin-left z-20"
        style={{ background: `linear-gradient(90deg,${metric.accent},${metric.accent === '#00C853' ? '#00E5FF' : '#00C853'})` }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: index * 0.09 + 0.3, duration: 0.65, ease: 'easeOut' }}
      />

      {/* Photo section */}
      <div className="relative h-36 overflow-hidden flex-shrink-0">
        <img
          src={metric.image}
          alt={metric.label}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hov ? 'scale(1.07)' : 'scale(1)' }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom,rgba(6,10,22,0.2),rgba(6,10,22,0.72))' }} />
        {/* Accent tint on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-400"
          style={{ background: `linear-gradient(135deg,${metric.accent}20,transparent)`, opacity: hov ? 1 : 0 }}
        />
        {/* Floating value label over image */}
        <div className="absolute bottom-3 left-4">
          <span
            className="font-black leading-none"
            style={{
              fontSize: 32,
              fontFamily: "'DM Sans',sans-serif",
              background: `linear-gradient(90deg,${metric.accent},#fff)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: 'none',
            }}
          >
            {metric.value}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col flex-1 p-4 gap-2">
        {/* Inner glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-400"
          style={{ background: `radial-gradient(ellipse at 20% 0%,${metric.accent}0c,transparent 65%)`, opacity: hov ? 1 : 0 }}
        />

        {/* Icon + label */}
        <div className="relative z-10 flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: `${metric.accent}18`, border: `1px solid ${metric.accent}35` }}
          >
            <Icon style={{ width: 14, height: 14, color: metric.accent }} strokeWidth={2.3} />
          </div>
          <div>
            <p
              className="font-black text-sm leading-none mb-0.5"
              style={{ color: '#fff', fontFamily: "'DM Sans',sans-serif" }}
            >
              {metric.label}
            </p>
            <p
              className="text-[10px] leading-none"
              style={{ color: 'rgba(255,255,255,0.38)', fontFamily: "'DM Sans',sans-serif" }}
            >
              {metric.subtitle}
            </p>
          </div>
        </div>

        {/* Bottom CTA hint */}
        <div
          className="relative z-10 flex items-center gap-1.5 mt-1 pt-2.5"
          style={{ borderTop: `1px solid ${metric.accent}18` }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: metric.accent, boxShadow: `0 0 6px ${metric.accent}` }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
          />
          <span
            className="text-[9px] font-bold uppercase tracking-[0.18em]"
            style={{ color: metric.accent, fontFamily: "'DM Sans',sans-serif" }}
          >
            Live Metric
          </span>
          <motion.div
            className="ml-auto w-5 h-5 rounded-full flex items-center justify-center"
            style={{
              background: `${metric.accent}12`,
              border: `1px solid ${metric.accent}25`,
              opacity: hov ? 1 : 0,
              transition: 'opacity 0.2s',
            }}
          >
            <ArrowRight style={{ width: 10, height: 10, color: metric.accent }} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Highlight Row ────────────────────────────────────────────────────────────
function HighlightRow({ item, index, inView }) {
  const [hov, setHov] = useState(false)
  const Icon = item.icon
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 }}
      transition={{ delay: index * 0.08 + 0.1, duration: 0.4 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-220 cursor-default"
      style={{
        background: hov ? `${item.accent}0c` : 'rgba(255,255,255,0.025)',
        border: `1px solid ${hov ? item.accent + '30' : 'rgba(255,255,255,0.06)'}`,
        transform: hov ? 'translateX(5px)' : 'none',
      }}
    >
      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}35` }}>
        <Icon style={{ width: 12, height: 12, color: item.accent }} strokeWidth={2.2} />
      </div>
      <span style={{ fontSize: 12, color: hov ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.45)', fontFamily: "'DM Sans',sans-serif", transition: 'color 0.2s' }}>
        {item.text}
      </span>
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
export function InvestorsSection() {
  const headerRef = useRef(null)
  const chartRef  = useRef(null)
  const headerInView = useInView(headerRef, { once: false, margin: '-8% 0px' })
  const chartInView  = useInView(chartRef,  { once: false, margin: '-8% 0px' })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700;9..40,900&display=swap');
        @keyframes gradShift{0%{background-position:0%}100%{background-position:200%}}
      `}</style>

      <section
        id="investors"
        className="relative py-20 overflow-hidden"
        style={{ background: '#0A0F1C', fontFamily: "'DM Sans',sans-serif" }}
      >
        {/* ── Background ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }} />
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full" style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.16 }} />
          <div className="absolute top-10 right-[-60px] w-96 h-96 rounded-full" style={{ background: '#00E5FF', filter: 'blur(128px)', opacity: 0.11 }} />
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full" style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.08 }} />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{ background: 'rgba(0,200,83,0.08)', border: '1px solid rgba(0,200,83,0.22)' }}>
              <motion.span className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#00C853', boxShadow: '0 0 6px #00C853' }}
                animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: '#00C853' }}>
                Investment Opportunity
              </span>
            </div>

            <h2 className="font-black leading-none tracking-tight mb-4"
              style={{ fontSize: 'clamp(38px,5.5vw,68px)' }}>
              <span className="text-white">Our </span>
              <span style={{
                background: 'linear-gradient(90deg,#00C853,#00E5FF,#00C853)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradShift 4s linear infinite',
              }}>
                Supporters
              </span>
            </h2>

            <p className="text-sm max-w-md mx-auto leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.38)' }}>
              Driving sustainable growth in India's booming electric vehicle market — backed by conviction and capital.
            </p>
          </motion.div>

          {/* ── Metric Cards (4 rectangle cards with photos) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {metrics.map((m, i) => <MetricCard key={m.label} metric={m} index={i} />)}
          </div>

          {/* ── Chart + Highlights ── */}
          <div
            ref={chartRef}
            className="grid gap-8"
            style={{ gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,1fr)' }}
          >
            {/* Left: Area chart */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={chartInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -28 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-5 flex flex-col gap-4"
              style={{
                background: 'linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(14px)',
                boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
              }}
            >
              {/* Chart header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-black text-sm text-white" style={{ fontFamily: "'DM Sans',sans-serif" }}>Revenue Trajectory</p>
                  <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'DM Sans',sans-serif" }}>
                    2020 – 2026 · ₹ Crore
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {[['#00C853','Revenue'],['#00E5FF','Units']].map(([c,l]) => (
                    <div key={l} className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full" style={{ background: c }} />
                      <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.38)', fontFamily: "'DM Sans',sans-serif" }}>{l}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top shimmer */}
              <div className="h-px w-full" style={{ background: 'linear-gradient(90deg,transparent,rgba(0,200,83,0.4),rgba(0,229,255,0.3),transparent)' }} />

              {/* Chart */}
              <div style={{ height: 220 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growthData} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%"  stopColor="#00C853" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#00C853" stopOpacity={0}    />
                      </linearGradient>
                      <linearGradient id="unitGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%"  stopColor="#00E5FF" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#00E5FF" stopOpacity={0}    />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 4" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="year" tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 10, fontFamily: "'DM Sans',sans-serif" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 10, fontFamily: "'DM Sans',sans-serif" }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(0,200,83,0.2)', strokeWidth: 1 }} />
                    <Area type="monotone" dataKey="revenue" stroke="#00C853" strokeWidth={2} fill="url(#revGrad)" dot={false} activeDot={{ r: 4, fill: '#00C853', strokeWidth: 0 }} />
                    <Area type="monotone" dataKey="units" stroke="#00E5FF" strokeWidth={2} fill="url(#unitGrad)" dot={false} activeDot={{ r: 4, fill: '#00E5FF', strokeWidth: 0 }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Right: Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={chartInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 28 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="flex flex-col gap-4"
            >
              {/* Title */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
                  style={{ background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.22)' }}>
                  <motion.span className="w-1.5 h-1.5 rounded-full"
                    style={{ background: '#00E5FF', boxShadow: '0 0 5px #00E5FF' }}
                    animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: '#00E5FF' }}>Growth Highlights</span>
                </div>
                <h3 className="font-black leading-tight mb-2" style={{ fontSize: 'clamp(20px,2.5vw,28px)', color: '#fff', fontFamily: "'DM Sans',sans-serif" }}>
                  Why Invest in{' '}
                  <span style={{ background: 'linear-gradient(90deg,#00C853,#00E5FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Aproposdrive
                  </span>
                  ?
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)', fontFamily: "'DM Sans',sans-serif" }}>
                  Strong fundamentals, proven traction, and a massive addressable market in India's EV revolution.
                </p>
              </div>

              {/* Highlight rows */}
              <div className="flex flex-col gap-2">
                {highlights.map((h, i) => (
                  <HighlightRow key={h.text} item={h} index={i} inView={chartInView} />
                ))}
              </div>

              {/* CTA button */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                animate={chartInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(0,200,83,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-black text-sm self-start mt-auto"
                style={{
                  background: 'linear-gradient(90deg,#00C853,#00E5FF)',
                  color: '#0A0F1C',
                  fontFamily: "'DM Sans',sans-serif",
                  textDecoration: 'none',
                }}
              >
                Explore Investment Deck
                <ArrowRight style={{ width: 14, height: 14 }} />
              </motion.a>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  )
}
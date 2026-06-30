'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { Eye, Lightbulb, TrendingUp, Sparkles, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export type BlogSummary = {
  _id: string
  title: string
  slug: string
  category: string
  shortDescription: string
  content: string
  imageUrl: string
  published: boolean
  createdAt: string
}

type BlogCardData = BlogSummary

const categoryAccentMap: Record<string, { accent: string; accent2: string }> = {
  Technology: { accent: '#00E5FF', accent2: '#00C853' },
  Sustainability: { accent: '#00C853', accent2: '#00E5FF' },
  Future: { accent: '#00C853', accent2: '#00E5FF' },
  Innovation: { accent: '#00E5FF', accent2: '#00C853' },
}

function getAccentColors(category: string) {
  return categoryAccentMap[category] ?? { accent: '#00C853', accent2: '#00E5FF' }
}

function getCategoryIcon(category: string) {
  if (category === 'Technology') return Lightbulb
  if (category === 'Future' || category === 'Innovation') return TrendingUp
  return Eye
}

function BlogCard({ card, index }: { card: BlogCardData; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-8% 0px' })
  const [hov, setHov] = useState(false)
  const Icon = getCategoryIcon(card.category)
  const { accent, accent2 } = getAccentColors(card.category)

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
          border: `1px solid ${hov ? accent + '50' : 'rgba(255,255,255,0.07)'}`,
          backdropFilter: 'blur(14px)',
          boxShadow: hov
            ? `0 0 32px ${accent}18, 0 20px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)`
            : '0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
        }}
      >
        <motion.div
          className="absolute top-0 inset-x-0 h-[2px] origin-left z-20"
          style={{ background: `linear-gradient(90deg,${accent},${accent2})` }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.7, ease: 'easeOut' }}
        />

        <div className="relative h-44 overflow-hidden flex-shrink-0">
          <ImageWithFallback
            src={card.imageUrl}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: hov ? 'scale(1.07)' : 'scale(1)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(6,10,22,0.1), rgba(6,10,22,0.75))' }}
          />
          <div
            className="absolute inset-0 transition-opacity duration-400"
            style={{
              background: `linear-gradient(135deg,${accent}22,${accent2}11)`,
              opacity: hov ? 1 : 0,
            }}
          />
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
            style={{
              background: 'rgba(6,10,22,0.75)',
              border: `1px solid ${accent}40`,
              backdropFilter: 'blur(8px)',
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent, boxShadow: `0 0 5px ${accent}` }} />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: accent, fontFamily: "'DM Sans',sans-serif" }}>
              {card.category}
            </span>
          </div>
        </div>

        <div className="relative flex flex-col flex-1 p-5 gap-3">
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-400"
            style={{
              background: `radial-gradient(ellipse at 20% 0%,${accent}0e,transparent 60%)`,
              opacity: hov ? 1 : 0,
            }}
          />

          <motion.div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10"
            style={{
              background: `linear-gradient(135deg,${accent}22,${accent2}14)`,
              border: `1px solid ${accent}35`,
            }}
            animate={hov ? { scale: 1.1, rotate: 6 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.22 }}
          >
            <Icon className="w-4.5 h-4.5" style={{ width: 18, height: 18, color: accent }} strokeWidth={2.2} />
          </motion.div>

          <div className="relative z-10">
            <h3 className="font-black text-base leading-snug mb-1.5" style={{ color: '#fff', fontFamily: "'DM Sans',sans-serif" }}>
              {card.title}
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)', fontFamily: "'DM Sans',sans-serif" }}>
              {card.shortDescription}
            </p>
          </div>

          <div className="relative z-10 mt-auto pt-3 flex items-center justify-between" style={{ borderTop: `1px solid ${accent}18` }}>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: accent, fontFamily: "'DM Sans',sans-serif" }}>
              Read More
            </span>
            <Link href={`/blogs/${card.slug}`} className="relative z-10">
              <motion.div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{
                  background: `${accent}14`,
                  border: `1px solid ${accent}28`,
                  opacity: hov ? 1 : 0,
                  transition: 'opacity 0.2s',
                }}
                animate={hov ? { x: 0 } : { x: -4 }}
              >
                <ArrowRight style={{ width: 11, height: 11, color: accent }} />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function BlogsSection({ blogs }: { blogs: BlogSummary[] }) {
  const headerRef = useRef(null)
  const bottomRef = useRef(null)
  const headerInView = useInView(headerRef, { once: false, margin: '-8% 0px' })
  const bottomInView = useInView(bottomRef, { once: false, margin: '-8% 0px' })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700;9..40,900&display=swap');
        @keyframes gradShift{0%{background-position:0%}100%{background-position:200%}}
      `}</style>

      <section id="blogs" className="relative py-20 overflow-hidden" style={{ background: '#0A0F1C', fontFamily: "'DM Sans',sans-serif" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full" style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.16 }} />
          <div className="absolute top-10 right-[-60px] w-96 h-96 rounded-full" style={{ background: '#00E5FF', filter: 'blur(128px)', opacity: 0.11 }} />
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full" style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.08 }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div ref={headerRef} initial={{ opacity: 0, y: 22 }} animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5" style={{ background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.22)' }}>
              <motion.span className="w-1.5 h-1.5 rounded-full" style={{ background: '#00E5FF', boxShadow: '0 0 6px #00E5FF' }} animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: '#00E5FF' }}>
                Blogs & Insights
              </span>
            </div>

            <h2 className="font-black leading-none tracking-tight mb-4" style={{ fontSize: 'clamp(38px,5.5vw,68px)' }}>
              <span className="text-white">Shaping the </span>
              <span style={{ background: 'linear-gradient(90deg,#00C853,#00E5FF,#00C853)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'gradShift 4s linear infinite' }}>
                Future
              </span>
            </h2>

            <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
              Explore articles on sustainable mobility, emerging EV technology, and the business of a cleaner future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {blogs.length ? (
              blogs.map((blog, i) => <BlogCard key={blog._id} card={blog} index={i} />)
            ) : (
              <div className="lg:col-span-3 rounded-3xl border border-white/10 bg-slate-950/90 p-14 text-center text-slate-300">
                No published blog posts are available yet.
              </div>
            )}
          </div>

          <div ref={bottomRef}>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={bottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} transition={{ duration: 0.6 }} className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                  <Sparkles className="w-4 h-4" style={{ color: '#00E5FF' }} />
                </motion.div>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: "'DM Sans',sans-serif" }}>
                  Ideas That Move You
                </span>
              </div>
              <h3 className="font-black leading-tight max-w-3xl mx-auto mb-0" style={{ fontSize: 'clamp(22px,3.5vw,38px)', fontFamily: "'DM Sans',sans-serif" }}>
                <span className="text-white">Stories that explain how </span>
                <span style={{ background: 'linear-gradient(90deg,#00C853,#00E5FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  electric mobility
                </span>
                <span className="text-white"> is changing every journey.</span>
              </h3>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

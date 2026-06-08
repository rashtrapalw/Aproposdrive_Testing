'use client'

import type { MouseEvent } from 'react'
import { useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'motion/react'
import {
  Users, Target, Eye, Heart, Shield, Zap, Globe, Award,
  Lightbulb, TrendingUp, Star, Leaf, Building2, ArrowRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

type OverviewCard = { icon: LucideIcon; badge: string; title: string; body: string; accent: string }
type Founder      = { name: string; role: string; bio: string; extra: string; accent: string; image: string }
type Advisor      = { name: string; role: string; bio: string; accent: string; image: string }
type ValueItem    = { icon: LucideIcon; title: string; desc: string; accent: string }
type WhyItem      = { icon: LucideIcon; title: string; desc: string; stat: string; statLabel: string; accent: string }

// ─── Data ─────────────────────────────────────────────────────────────────────

const overviewCards: OverviewCard[] = [
  {
    icon: Building2, badge: 'About Us', title: 'Who We Are',
    body: "Aproposdrive is an Indian EV powertrain startup pioneering rare earth-free motor technology. Founded in Bengaluru, we make India's electric mobility sustainable, scalable, and built for the roads we all drive on.",
    accent: '#00C853',
  },
  {
    icon: Target, badge: 'Our Mission', title: 'Our Mission',
    body: "To accelerate India's transition to electric mobility by delivering advanced, affordable, and fully indigenous EV powertrain solutions — eliminating dependency on rare earth materials and imported components.",
    accent: '#00E5FF',
  },
  {
    icon: Eye, badge: 'Our Vision', title: 'Our Vision',
    body: "To become India's most trusted EV technology company — enabling two-wheeler and three-wheeler manufacturers across the country to build cleaner, smarter, and more efficient vehicles for a billion+ people.",
    accent: '#00C853',
  },
]

const highlights = [
  { val: '2020',   lbl: 'Founded',            accent: '#00C853' },
  { val: '50+',    lbl: 'Team Members',        accent: '#00E5FF' },
  { val: '₹450Cr', lbl: 'Order Book',          accent: '#00C853' },
  { val: '$50M',   lbl: 'Funding Raised',      accent: '#00E5FF' },
  { val: '3',      lbl: 'Patents Filed',        accent: '#00C853' },
  { val: '100%',   lbl: 'Client Satisfaction', accent: '#00E5FF' },
]

const founders: Founder[] = [
  {
    name: 'Arjun Mehta', role: 'Co-Founder & CEO',
    bio: "IIT Bombay alumnus with 12+ years in EV and powertrain engineering. Previously led R&D at Tata Motors EV division before founding Aproposdrive to build India's indigenous EV motor technology from the ground up.",
    extra: 'IIT Bombay · 12 Yrs EV Experience', accent: '#00C853',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Priya Nair', role: 'Co-Founder & CTO',
    bio: "Ph.D. in Electrical Engineering from IISc Bengaluru. Expert in rare earth-free motor design and vector control algorithms. Named among India's Top 40 Under 40 Innovators in 2023.",
    extra: 'IISc Ph.D. · Top 40 Under 40', accent: '#00E5FF',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Rahul Sharma', role: 'Co-Founder & COO',
    bio: "Former McKinsey consultant and ex-VP at Ola Electric. Brings deep expertise in EV manufacturing supply chains and strategic partnerships across India's automotive ecosystem.",
    extra: 'McKinsey · Ex Ola Electric VP', accent: '#00C853',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
]

const advisors: Advisor[] = [
  {
    name: 'Dr. Anand Kumar', role: 'Technical Advisor',
    bio: 'Former Chief Scientist at ISRO. Expert in advanced materials and motor design with 30+ years of deep R&D experience in aerospace and EV systems.',
    accent: '#00C853',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80',
  },
  {
    name: 'Sunita Verma', role: 'Strategic Advisor',
    bio: 'Ex-MD at SIDBI Ventures. Instrumental in scaling 15+ cleantech startups across India and Southeast Asia over a two-decade investment career.',
    accent: '#00E5FF',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80',
  },
  {
    name: 'James Chen', role: 'Global Markets Advisor',
    bio: 'Managing Director at Sequoia Capital India. Board member at multiple unicorn EV companies across Asia-Pacific with $2B+ in managed investments.',
    accent: '#00C853',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80',
  },
  {
    name: 'Meera Krishnan', role: 'Policy & Regulatory Advisor',
    bio: "Former Secretary, Ministry of Heavy Industries. Principal architect of India's FAME II EV subsidy scheme and automotive PLI policy framework.",
    accent: '#00E5FF',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=300&q=80',
  },
]

const values: ValueItem[] = [
  { icon: Lightbulb, title: 'Innovation First',        desc: 'We push the boundaries of EV technology, filing patents and building proprietary solutions that set new industry standards.',                          accent: '#00C853' },
  { icon: Heart,     title: 'India at Heart',           desc: "Every product is designed for Indian roads, climates, and consumers — built with an indigenous-first supply chain philosophy.",                       accent: '#00E5FF' },
  { icon: Shield,    title: 'Uncompromising Quality',   desc: 'IP67-rated components, 50+ testing parameters, and zero-defect manufacturing standards across all our product lines.',                              accent: '#00C853' },
  { icon: Leaf,      title: 'Sustainability Driven',    desc: 'Rare earth-free motors mean a cleaner supply chain, lower carbon footprint, and genuine planetary responsibility.',                                  accent: '#00E5FF' },
  { icon: Users,     title: 'People Powered',           desc: 'Our 50+ strong team of engineers and operators are the core of Aproposdrive — we invest in their growth relentlessly.',                             accent: '#00C853' },
  { icon: Globe,     title: 'Global Ambition',          desc: 'While rooted in India, our technology roadmap targets Southeast Asia, Africa, and emerging markets hungry for clean mobility.',                      accent: '#00E5FF' },
]

const whyItems: WhyItem[] = [
  { icon: Zap,        title: 'Indigenous Technology', desc: 'Fully India-made powertrain — zero dependency on imported rare earth motors or foreign IP.',                                           stat: '100%', statLabel: 'Made in India', accent: '#00C853' },
  { icon: TrendingUp, title: 'Proven Performance',    desc: '10–15% extended range over conventional systems, backed by 3+ years of real-world EV field data.',                                   stat: '+15%', statLabel: 'Range Gain',   accent: '#00E5FF' },
  { icon: Award,      title: 'Award Winning',         desc: 'Recognized at TechSparks, Startup India, and India EV Summit as one of the most innovative EV startups.',                            stat: '12+',  statLabel: 'Awards Won',   accent: '#00C853' },
  { icon: Star,       title: 'Customer First',        desc: '100% satisfaction rate from OEM partners with best-in-class after-sales support and 24h response SLA.',                             stat: '100%', statLabel: 'Satisfaction', accent: '#00E5FF' },
]

// ─── Shimmer Divider ──────────────────────────────────────────────────────────
function ShimmerDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className="h-px w-full"
      style={{
        background: flip
          ? 'linear-gradient(90deg,transparent,rgba(0,229,255,0.35),rgba(0,200,83,0.25),transparent)'
          : 'linear-gradient(90deg,transparent,rgba(0,200,83,0.4),rgba(0,229,255,0.3),transparent)',
      }}
    />
  )
}

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({
  badge, badgeAccent = '#00C853', headBefore, headGrad, headAfter, sub, inView,
}: {
  badge: string; badgeAccent?: string; headBefore: string; headGrad: string
  headAfter?: string; sub: string; inView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
        style={{ background: `${badgeAccent}12`, border: `1px solid ${badgeAccent}35` }}
      >
        <motion.span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: badgeAccent, boxShadow: `0 0 6px ${badgeAccent}` }}
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span
          className="text-[10px] font-bold uppercase tracking-[0.25em]"
          style={{ color: badgeAccent, fontFamily: "'DM Sans',sans-serif" }}
        >
          {badge}
        </span>
      </div>
      <h2
        className="font-black leading-none tracking-tight mb-4"
        style={{ fontSize: 'clamp(34px,4.5vw,58px)', fontFamily: "'DM Sans',sans-serif" }}
      >
        <span className="text-white">{headBefore} </span>
        <span style={{
          background: 'linear-gradient(90deg,#00C853,#00E5FF,#00C853)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradShift 4s linear infinite',
        }}>
          {headGrad}
        </span>
        {headAfter && <span className="text-white">{headAfter}</span>}
      </h2>
      <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)', fontFamily: "'DM Sans',sans-serif" }}>
        {sub}
      </p>
    </motion.div>
  )
}

// ─── Overview Card ────────────────────────────────────────────────────────────
function OverviewCard({ card, index }: { card: OverviewCard; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-8% 0px' })
  const [hov, setHov] = useState(false)
  const Icon = card.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      whileHover={{ y: -5 }}
      className="relative flex flex-col rounded-2xl overflow-hidden cursor-default"
      style={{
        background: hov
          ? 'linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))'
          : 'linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))',
        border: `1px solid ${hov ? card.accent + '45' : 'rgba(255,255,255,0.07)'}`,
        backdropFilter: 'blur(12px)',
        boxShadow: hov
          ? `0 0 28px ${card.accent}18, 0 16px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)`
          : '0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
        transition: 'background 0.25s, border-color 0.25s, box-shadow 0.25s',
      }}
    >
      <motion.div
        className="absolute top-0 inset-x-0 h-[2px] origin-left"
        style={{ background: `linear-gradient(90deg,${card.accent},${card.accent === '#00C853' ? '#00E5FF' : '#00C853'})` }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.6, ease: 'easeOut' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 20% 0%,${card.accent}10,transparent 60%)`, opacity: hov ? 1 : 0, transition: 'opacity 0.4s' }}
      />
      <div className="relative flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: `${card.accent}16`, border: `1px solid ${card.accent}35` }}>
            <Icon style={{ width: 14, height: 14, color: card.accent }} strokeWidth={2.2} />
          </div>
          <span className="text-[9px] font-bold uppercase tracking-[0.22em]"
            style={{ color: card.accent, fontFamily: "'DM Sans',sans-serif" }}>
            {card.badge}
          </span>
        </div>
        <h3 className="font-black text-base leading-snug"
          style={{ color: '#fff', fontFamily: "'DM Sans',sans-serif" }}>
          {card.title}
        </h3>
        <p className="text-xs leading-relaxed flex-1"
          style={{ color: 'rgba(255,255,255,0.42)', fontFamily: "'DM Sans',sans-serif" }}>
          {card.body}
        </p>
      </div>
    </motion.div>
  )
}

// ─── Founder Card ─────────────────────────────────────────────────────────────
function FounderCard({ person, index }: { person: Founder; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-8% 0px' })
  const [hov, setHov] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      whileHover={{ y: -6 }}
      className="relative rounded-2xl overflow-hidden cursor-default flex flex-col"
      style={{
        background: 'linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))',
        border: `1px solid ${hov ? person.accent + '48' : 'rgba(255,255,255,0.07)'}`,
        backdropFilter: 'blur(12px)',
        boxShadow: hov
          ? `0 0 28px ${person.accent}18, 0 16px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)`
          : '0 4px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
        transition: 'border-color 0.25s, box-shadow 0.25s',
      }}
    >
      <motion.div
        className="absolute top-0 inset-x-0 h-[2px] origin-left z-20"
        style={{ background: `linear-gradient(90deg,${person.accent},${person.accent === '#00C853' ? '#00E5FF' : '#00C853'})` }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.65, ease: 'easeOut' }}
      />

      {/* Photo */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img
          src={person.image}
          alt={person.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hov ? 'scale(1.07)' : 'scale(1)', objectPosition: 'center top' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom,rgba(6,10,22,0.1),rgba(6,10,22,0.72))' }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg,${person.accent}18,transparent)`, opacity: hov ? 1 : 0, transition: 'opacity 0.4s' }} />
      </div>

      {/* Content */}
      <div className="relative flex flex-col flex-1 p-4 gap-2">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 20% 0%,${person.accent}0c,transparent 65%)`, opacity: hov ? 1 : 0, transition: 'opacity 0.4s' }} />
        <div className="relative z-10">
          <p className="font-black text-sm leading-tight" style={{ color: '#fff', fontFamily: "'DM Sans',sans-serif" }}>{person.name}</p>
          <p className="text-[10px] font-bold mt-0.5" style={{ color: person.accent, fontFamily: "'DM Sans',sans-serif", letterSpacing: '0.05em' }}>{person.role}</p>
        </div>
        <p className="relative z-10 text-xs leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.42)', fontFamily: "'DM Sans',sans-serif" }}>
          {person.bio}
        </p>
        <div className="relative z-10 flex items-center gap-2 mt-1 pt-2.5"
          style={{ borderTop: `1px solid ${person.accent}18` }}>
          <motion.div
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: person.accent, boxShadow: `0 0 5px ${person.accent}` }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
          />
          <span className="text-[9px] font-bold uppercase tracking-[0.15em]"
            style={{ color: person.accent, fontFamily: "'DM Sans',sans-serif" }}>
            {person.extra}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Advisor Card ─────────────────────────────────────────────────────────────
function AdvisorCard({ person, index }: { person: Advisor; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-8% 0px' })
  const [hov, setHov] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      whileHover={{ y: -5 }}
      className="relative rounded-2xl overflow-hidden cursor-default"
      style={{
        background: 'linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))',
        border: `1px solid ${hov ? person.accent + '45' : 'rgba(255,255,255,0.07)'}`,
        backdropFilter: 'blur(12px)',
        boxShadow: hov
          ? `0 0 24px ${person.accent}15, 0 12px 36px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07)`
          : '0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
        transition: 'border-color 0.25s, box-shadow 0.25s',
      }}
    >
      <motion.div
        className="absolute top-0 inset-x-0 h-[2px] origin-left z-20"
        style={{ background: `linear-gradient(90deg,${person.accent},${person.accent === '#00C853' ? '#00E5FF' : '#00C853'})` }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: index * 0.08 + 0.28, duration: 0.6, ease: 'easeOut' }}
      />
      <div className="relative flex items-start gap-3 p-4">
        <div className="relative flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden"
          style={{ border: `1.5px solid ${person.accent}35` }}>
          <img
            src={person.image}
            alt={person.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500"
            style={{ transform: hov ? 'scale(1.08)' : 'scale(1)', objectPosition: 'center top' }}
          />
          <div className="absolute inset-0"
            style={{ background: `linear-gradient(135deg,${person.accent}16,transparent)`, opacity: hov ? 1 : 0, transition: 'opacity 0.3s' }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-black text-sm leading-tight" style={{ color: '#fff', fontFamily: "'DM Sans',sans-serif" }}>{person.name}</p>
          <p className="text-[10px] font-bold mt-0.5 mb-2"
            style={{ color: person.accent, fontFamily: "'DM Sans',sans-serif", letterSpacing: '0.05em' }}>
            {person.role}
          </p>
          <p className="text-[11px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Sans',sans-serif" }}>
            {person.bio}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Value Card (3-D tilt on hover) ──────────────────────────────────────────
function ValueCard({ item, index }: { item: ValueItem; index: number }) {
  const Icon = item.icon
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-8% 0px' })
  const [hov, setHov] = useState(false)
  const rotX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
  const rotY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    rotX.set(-((e.clientY - r.top) / r.height - 0.5) * 7)
    rotY.set(((e.clientX - r.left) / r.width - 0.5) * 7)
  }
  const resetMouse = () => { rotX.set(0); rotY.set(0) }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ delay: index * 0.07, duration: 0.52, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ perspective: 900 }}
    >
      <motion.div
        onMouseMove={handleMouse}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => { setHov(false); resetMouse() }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="relative flex flex-col h-full rounded-2xl overflow-hidden cursor-default p-5"
        style={{
          background: hov
            ? 'linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))'
            : 'linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))',
          border: `1px solid ${hov ? item.accent + '45' : 'rgba(255,255,255,0.07)'}`,
          backdropFilter: 'blur(12px)',
          boxShadow: hov
            ? `0 0 28px ${item.accent}18, 0 16px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)`
            : '0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
          transition: 'background 0.25s, border-color 0.25s, box-shadow 0.25s',
          rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d',
        }}
      >
        <motion.div
          className="absolute top-0 inset-x-0 h-[2px] origin-left"
          style={{ background: `linear-gradient(90deg,${item.accent},${item.accent === '#00C853' ? '#00E5FF' : '#00C853'})` }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: index * 0.07 + 0.28, duration: 0.58, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 20% 0%,${item.accent}10,transparent 60%)`, opacity: hov ? 1 : 0, transition: 'opacity 0.4s' }} />

        <div className="relative z-10 flex items-start justify-between mb-4">
          <motion.div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ background: `${item.accent}16`, border: `1px solid ${item.accent}35` }}
            animate={hov ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.22 }}
          >
            <Icon className="w-5 h-5" style={{ color: item.accent }} strokeWidth={2.2} />
          </motion.div>
          <div className="relative w-7 h-7 flex items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ background: `${item.accent}14`, border: `1px solid ${item.accent}28` }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
            />
            <div className="w-2 h-2 rounded-full" style={{ background: item.accent, boxShadow: `0 0 6px ${item.accent}` }} />
          </div>
        </div>
        <h3 className="relative z-10 font-black text-sm leading-snug mb-2"
          style={{ color: '#fff', fontFamily: "'DM Sans',sans-serif" }}>
          {item.title}
        </h3>
        <p className="relative z-10 text-xs leading-relaxed flex-1"
          style={{ color: 'rgba(255,255,255,0.42)', fontFamily: "'DM Sans',sans-serif" }}>
          {item.desc}
        </p>
      </motion.div>
    </motion.div>
  )
}

// ─── Why Card (with stat, mirrors BenefitCard) ────────────────────────────────
function WhyCard({ item, index }: { item: WhyItem; index: number }) {
  const Icon = item.icon
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-8% 0px' })
  const [hov, setHov] = useState(false)
  const rotX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
  const rotY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    rotX.set(-((e.clientY - r.top) / r.height - 0.5) * 8)
    rotY.set(((e.clientX - r.left) / r.width - 0.5) * 8)
  }
  const resetMouse = () => { rotX.set(0); rotY.set(0) }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ delay: index * 0.07, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ perspective: 900 }}
    >
      <motion.div
        onMouseMove={handleMouse}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => { setHov(false); resetMouse() }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="relative flex flex-col h-full rounded-2xl overflow-hidden cursor-default"
        style={{
          background: hov
            ? 'linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))'
            : 'linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))',
          border: `1px solid ${hov ? item.accent + '45' : 'rgba(255,255,255,0.07)'}`,
          backdropFilter: 'blur(12px)',
          boxShadow: hov
            ? `0 0 30px ${item.accent}18, 0 16px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)`
            : '0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
          transition: 'background 0.25s, border-color 0.25s, box-shadow 0.25s',
          rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d',
        }}
      >
        <motion.div
          className="absolute top-0 inset-x-0 h-[2px] origin-left"
          style={{ background: `linear-gradient(90deg,${item.accent},${item.accent === '#00C853' ? '#00E5FF' : '#00C853'})` }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: index * 0.07 + 0.3, duration: 0.6, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 20% 0%,${item.accent}10,transparent 60%)`, opacity: hov ? 1 : 0, transition: 'opacity 0.4s' }} />

        <div className="relative flex flex-col flex-1 p-5">
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: `${item.accent}16`, border: `1px solid ${item.accent}35` }}
              animate={hov ? { scale: 1.1, rotate: 6 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.22 }}
            >
              <Icon className="w-5 h-5" style={{ color: item.accent }} strokeWidth={2.2} />
            </motion.div>
            <div className="relative w-7 h-7 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: `${item.accent}14`, border: `1px solid ${item.accent}28` }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
              />
              <div className="w-2 h-2 rounded-full" style={{ background: item.accent, boxShadow: `0 0 6px ${item.accent}` }} />
            </div>
          </div>

          <h3 className="font-black text-sm leading-snug mb-2"
            style={{ color: '#fff', fontFamily: "'DM Sans',sans-serif" }}>
            {item.title}
          </h3>
          <p className="text-xs leading-relaxed flex-1 mb-4"
            style={{ color: 'rgba(255,255,255,0.42)', fontFamily: "'DM Sans',sans-serif" }}>
            {item.desc}
          </p>

          <div className="flex items-center justify-between pt-3"
            style={{ borderTop: `1px solid ${item.accent}1a` }}>
            <div className="flex flex-col">
              <motion.span
                className="font-black leading-none"
                style={{ fontSize: 24, fontFamily: "'DM Sans',sans-serif", color: item.accent }}
                initial={{ opacity: 0, y: 6 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                transition={{ duration: 0.5, delay: index * 0.07 + 0.25 }}
              >
                {item.stat}
              </motion.span>
              <span className="text-[9px] uppercase tracking-[0.15em] mt-0.5"
                style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'DM Sans',sans-serif" }}>
                {item.statLabel}
              </span>
            </div>
            <motion.div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{
                background: `${item.accent}14`,
                border: `1px solid ${item.accent}28`,
                opacity: hov ? 1 : 0,
                transition: 'opacity 0.2s',
              }}
              whileHover={{ x: 3 }}
            >
              <ArrowRight className="w-3 h-3" style={{ color: item.accent }} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
export function AboutSection() {
  const overviewRef  = useRef(null)
  const statsRef     = useRef(null)
  const foundersRef  = useRef(null)
  const advisorsRef  = useRef(null)
  const valuesRef    = useRef(null)
  const whyRef       = useRef(null)

  const overviewInView = useInView(overviewRef, { once: false, margin: '-8% 0px' })
  const statsInView    = useInView(statsRef,    { once: false, margin: '-8% 0px' })
  const foundersInView = useInView(foundersRef, { once: false, margin: '-8% 0px' })
  const advisorsInView = useInView(advisorsRef, { once: false, margin: '-8% 0px' })
  const valuesInView   = useInView(valuesRef,   { once: false, margin: '-8% 0px' })
  const whyInView      = useInView(whyRef,      { once: false, margin: '-8% 0px' })

  return (
    <>
      <style>{`@keyframes gradShift{0%{background-position:0%}100%{background-position:200%}}`}</style>

      <section
        id="about"
        className="relative overflow-hidden"
        style={{ background: '#0A0F1C', fontFamily: "'DM Sans',sans-serif" }}
      >
        {/* ── Background ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }} />
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full" style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.13 }} />
          <div className="absolute top-1/4 right-[-60px] w-96 h-96 rounded-full"  style={{ background: '#00E5FF', filter: 'blur(128px)', opacity: 0.09 }} />
          <div className="absolute bottom-1/3 -left-10 w-96 h-96 rounded-full"    style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.07 }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full"     style={{ background: '#00E5FF', filter: 'blur(128px)', opacity: 0.07 }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ══ 1. Company Overview ══ */}
          <div ref={overviewRef} className="pt-20 pb-16">
            <SectionHeader
              badge="About Us"
              headBefore="About"
              headGrad="Aproposdrive"
              sub="Pioneering India's electric mobility revolution with rare earth-free powertrain technology — built for performance, sustainability, and scale."
              inView={overviewInView}
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {overviewCards.map((c, i) => <OverviewCard key={c.badge} card={c} index={i} />)}
            </div>
          </div>

          <ShimmerDivider />

          {/* ══ 2. Company Highlights / Statistics ══ */}
          <div ref={statsRef} className="py-16">
            <SectionHeader
              badge="Company Highlights"
              badgeAccent="#00E5FF"
              headBefore="By the"
              headGrad="Numbers"
              sub="Milestones that define our journey — from a Bengaluru garage to India's leading EV powertrain company."
              inView={statsInView}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {highlights.map(({ val, lbl, accent }, i) => (
                <motion.div
                  key={lbl}
                  initial={{ opacity: 0, y: 18 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  transition={{ delay: i * 0.08 + 0.1, duration: 0.45 }}
                  className="flex flex-col items-center py-5 px-3 rounded-2xl text-center"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span
                    className="font-black leading-none mb-1.5"
                    style={{
                      fontSize: 26, fontFamily: "'DM Sans',sans-serif",
                      background: `linear-gradient(90deg,${accent},${accent === '#00C853' ? '#00E5FF' : '#00C853'})`,
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {val}
                  </span>
                  <span style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.3)', fontFamily: "'DM Sans',sans-serif" }}>
                    {lbl}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <ShimmerDivider flip />

          {/* ══ 3. Founders ══ */}
          <div ref={foundersRef} className="py-16">
            <SectionHeader
              badge="Our Founders"
              headBefore="Meet the"
              headGrad="Founders"
              sub="World-class engineers and operators united by a single mission — to build India's EV future from the ground up."
              inView={foundersInView}
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {founders.map((f, i) => <FounderCard key={f.name} person={f} index={i} />)}
            </div>
          </div>

          <ShimmerDivider />

          {/* ══ 4. Advisors ══ */}
          <div ref={advisorsRef} className="py-16">
            <SectionHeader
              badge="Advisory Board"
              badgeAccent="#00E5FF"
              headBefore="Our"
              headGrad="Advisors"
              sub="Guided by India's most respected minds in technology, policy, and global capital markets."
              inView={advisorsInView}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {advisors.map((a, i) => <AdvisorCard key={a.name} person={a} index={i} />)}
            </div>
          </div>

          <ShimmerDivider flip />

          {/* ══ 5. Company Values ══ */}
          <div ref={valuesRef} className="py-16">
            <SectionHeader
              badge="Core Values"
              headBefore="What We"
              headGrad="Believe In"
              sub="The principles that drive every decision, every design choice, and every hire at Aproposdrive."
              inView={valuesInView}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((v, i) => <ValueCard key={v.title} item={v} index={i} />)}
            </div>
          </div>

          <ShimmerDivider />

          {/* ══ 6. Why Choose Us ══ */}
          <div ref={whyRef} className="py-16 pb-24">
            <SectionHeader
              badge="Why Choose Us"
              badgeAccent="#00E5FF"
              headBefore="Why"
              headGrad="Aproposdrive"
              headAfter="?"
              sub="Four reasons industry leaders trust us for their EV powertrain needs."
              inView={whyInView}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {whyItems.map((c, i) => <WhyCard key={c.title} item={c} index={i} />)}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

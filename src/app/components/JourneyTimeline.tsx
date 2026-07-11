// 'use client'

// import { motion, useScroll, useSpring, useInView } from 'motion/react'
// import { Calendar, MapPin, Award, Users, Zap } from 'lucide-react'
// import type { LucideIcon } from 'lucide-react'
// import { useRef, useState } from 'react'
// import {
//   Building2,
//   Wrench,
//   Cpu,
//   Gauge,
//   Briefcase,
//   Rocket,
//   Settings,
//   ArrowRight,
//   Cog,
// } from 'lucide-react';

// type Milestone = {
//   year: string
//   title: string
//   description: string
//   icon: LucideIcon
//   stats: string
// }

// const milestones: Milestone[] = [
//   {
//     year: '2016',
//     title: 'Company Incorporation',
//     description:
//       'Aproposdrive was incorporated as a motor drives company, establishing the foundation for future innovation in electric mobility and motor technologies.',
//     icon: Users,
//     stats: 'Company Founded',
//   },
//   {
//     year: '2019',
//     title: 'Patent & Product Development',
//     description:
//       'Developed and patented a magnet-free SRM motor technology for ceiling fans and successfully launched the SRM ceiling fan product.',
//     icon: Award,
//     stats: 'Patent Granted',
//   },
//   {
//     year: '2022',
//     title: 'E-Mobility Design Services',
//     description:
//       'Expanded into e-mobility by providing motor design services and successfully implemented an SRM fan pilot project.',
//     icon: Zap,
//     stats: 'E-Mobility Entry',
//   },
//   {
//     year: '2023',
//     title: 'Controller R&D',
//     description:
//       'Established dedicated R&D efforts for motor controllers focused on electric mobility applications, strengthening the company’s technology portfolio.',
//     icon: Settings,
//     stats: 'Motor Controller R&D',
//   },
//   {
//     year: '2024',
//     title: 'Wheel Traction Drive',
//     description:
//       'Advanced electric two-wheeler development through wheel traction drive research and development, focusing on performance and efficiency.',
//     icon: Cog,
//     stats: 'EV2W R&D',
//   },
//   {
//     year: '2025',
//     title: 'Commercialization',
//     description:
//       'Commercialized EV two-wheeler controllers through a licensing model, enabling broader market adoption and technology deployment.',
//     icon: Briefcase,
//     stats: 'Licensing Model',
//   },
//   {
//     year: '2028',
//     title: 'E-Mobility Platform',
//     description:
//       'Vision to establish a comprehensive e-mobility platform, integrating advanced motor and controller technologies for future mobility solutions.',
//     icon: Rocket,
//     stats: 'Future Roadmap',
//   },
// ];

// // ── Milestone Card ─────────────────────────────────────────────────────────────
// function MilestoneCard({ milestone, index }: { milestone: Milestone; index: number }) {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: false, margin: '-10% 0px' })
//   const isEven = index % 2 === 0
//   const [hovered, setHovered] = useState(false)

//   return (
//     <div
//       ref={ref}
//       className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
//     >
//       {/* Card side */}
//       <div className={`flex-1 ${isEven ? 'md:pr-14' : 'md:pl-14'} pl-16 md:pl-0`}>
//         <motion.div
//           initial={{ opacity: 0, x: isEven ? -36 : 36 }}
//           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -36 : 36 }}
//           transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
//           className={isEven ? 'md:flex md:justify-end' : ''}
//         >
//           <div
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//             className="relative w-full md:max-w-[370px] rounded-2xl p-5 transition-all duration-300"
//             style={{
//               background: 'linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))',
//               border: hovered
//                 ? '1px solid rgba(0,229,255,0.32)'
//                 : '1px solid rgba(255,255,255,0.07)',
//               backdropFilter: 'blur(10px)',
//               boxShadow: hovered
//                 ? '0 0 28px rgba(0,229,255,0.1),0 12px 36px rgba(0,0,0,0.45)'
//                 : '0 4px 20px rgba(0,0,0,0.3)',
//               transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
//             }}
//           >
//             {/* Year pill */}
//             <div className="flex items-center gap-2 mb-3">
//               <span
//                 className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
//                 style={{
//                   background: 'linear-gradient(90deg,rgba(0,200,83,0.14),rgba(0,229,255,0.14))',
//                   border: '1px solid rgba(0,229,255,0.22)',
//                   color: '#00E5FF',
//                   fontFamily: "'DM Sans',sans-serif",
//                 }}
//               >
//                 {milestone.year}
//               </span>
//               <motion.span
//                 className="w-1.5 h-1.5 rounded-full"
//                 style={{ background: '#00C853', boxShadow: '0 0 5px #00C853' }}
//                 animate={{ opacity: [1, 0.3, 1] }}
//                 transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
//               />
//             </div>

//             <h3
//               className="text-lg font-black tracking-tight mb-1.5"
//               style={{
//                 fontFamily: "'DM Sans',sans-serif",
//                 background: 'linear-gradient(90deg,#fff,rgba(255,255,255,0.7))',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//               }}
//             >
//               {milestone.title}
//             </h3>

//             <p
//               className="text-sm leading-relaxed mb-3"
//               style={{ color: 'rgba(255,255,255,0.42)', fontFamily: "'DM Sans',sans-serif" }}
//             >
//               {milestone.description}
//             </p>

//             <span
//               className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
//               style={{
//                 background: 'rgba(0,200,83,0.09)',
//                 border: '1px solid rgba(0,200,83,0.2)',
//                 color: '#00C853',
//                 fontFamily: "'DM Sans',sans-serif",
//               }}
//             >
//               ▲ {milestone.stats}
//             </span>
//           </div>
//         </motion.div>
//       </div>

//       {/* Center node */}
//       <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-20">
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={isInView ? { scale: 1 } : { scale: 0 }}
//           transition={{ delay: 0.12, type: 'spring', stiffness: 220, damping: 18 }}
//         >
//           <div
//             className="absolute inset-0 rounded-full blur-md"
//             style={{ background: 'linear-gradient(135deg,#00C853,#00E5FF)', opacity: 0.45 }}
//           />
//           <div
//             className="relative w-10 h-10 rounded-full flex items-center justify-center"
//             style={{
//               background: 'linear-gradient(135deg,#00C853,#00E5FF)',
//               boxShadow: '0 0 12px rgba(0,229,255,0.45)',
//             }}
//           >
//             <milestone.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
//           </div>
//         </motion.div>
//       </div>

//       {/* Desktop spacer */}
//       <div className="hidden md:block flex-1" />
//     </div>
//   )
// }

// // ── Exported component ─────────────────────────────────────────────────────────
// export function JourneyTimeline() {
//   const timelineRef = useRef(null)

//   const { scrollYProgress } = useScroll({
//     target: timelineRef,
//     offset: ['start 80%', 'end 20%'],
//   })
//   const scaleY = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })

//   return (
//     <>
//       {/* Section Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: false, margin: '-8% 0px' }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-14"
//       >
//         <p
//           className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3"
//           style={{ color: '#00C853' }}
//         >
//           EST. 2020 &bull; INDIA
//         </p>
//         <h2
//           className="font-black leading-none tracking-tight mb-4"
//           style={{ fontSize: 'clamp(40px,5.5vw,68px)' }}
//         >
//           <span className="text-white">Our </span>
//           <span
//             style={{
//               background: 'linear-gradient(90deg,#00C853,#00E5FF,#00C853)',
//               backgroundSize: '200% 100%',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               animation: 'gradShift 4s linear infinite',
//             }}
//           >
//             Journey
//           </span>
//         </h2>
//         <p
//           className="text-sm max-w-sm mx-auto leading-relaxed"
//           style={{ color: 'rgba(255,255,255,0.38)' }}
//         >
//           From concept to India's most anticipated EV — every milestone, every breakthrough.
//         </p>
//       </motion.div>

//       {/* Timeline */}
//       <div ref={timelineRef} className="relative">
//         {/* Dim base line */}
//         <div
//           className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
//           style={{ background: 'rgba(255,255,255,0.06)' }}
//         >
//           {/* Scroll-fill */}
//           <motion.div
//             className="absolute inset-0 origin-top"
//             style={{
//               scaleY,
//               background: 'linear-gradient(to bottom,#00C853,#00E5FF,#00C853)',
//               boxShadow: '0 0 8px rgba(0,229,255,0.55)',
//             }}
//           />
//           {/* Shimmer bead */}
//           <motion.div
//             className="absolute w-full"
//             style={{
//               height: 50,
//               background: 'linear-gradient(to bottom,transparent,rgba(0,229,255,0.65),transparent)',
//             }}
//             animate={{ top: ['-8%', '108%'] }}
//             transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
//           />
//         </div>

//         <div className="space-y-9 md:space-y-12"> 
//           {milestones.map((m, i) => (
//             <MilestoneCard key={m.year} milestone={m} index={i} />
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }





'use client'

import { motion, useScroll, useSpring, useInView } from 'motion/react'
import { Users, Award, Zap, Settings, Cog, Briefcase, Rocket } from 'lucide-react'
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
    year: '2016',
    title: 'Company Incorporation',
    description: 'Aproposdrive was incorporated as a motor drives company, establishing the foundation for future innovation in electric mobility.',
    icon: Users,
    stats: 'Company Founded',
  },
  {
    year: '2019',
    title: 'Patent & Product Development',
    description: 'Developed and patented a magnet-free SRM motor technology for ceiling fans and successfully launched the product.',
    icon: Award,
    stats: 'Patent Granted',
  },
  {
    year: '2022',
    title: 'E-Mobility Design Services',
    description: 'Expanded into e-mobility by providing motor design services and successfully implemented an SRM fan pilot project.',
    icon: Zap,
    stats: 'E-Mobility Entry',
  },
  {
    year: '2023',
    title: 'Controller R&D',
    description: 'Established dedicated R&D for motor controllers focused on electric mobility applications.',
    icon: Settings,
    stats: 'Motor Controller R&D',
  },
  {
    year: '2024',
    title: 'Wheel Traction Drive',
    description: 'Advanced EV two-wheeler development through wheel traction drive R&D, focusing on performance and efficiency.',
    icon: Cog,
    stats: 'EV2W R&D',
  },
  {
    year: '2025',
    title: 'Commercialization',
    description: 'Commercialized EV two-wheeler controllers through a licensing model, enabling broader market adoption.',
    icon: Briefcase,
    stats: 'Licensing Model',
  },
  {
    year: '2028',
    title: 'E-Mobility Platform',
    description: 'Vision to establish a comprehensive e-mobility platform integrating advanced motor and controller technologies.',
    icon: Rocket,
    stats: 'Future Roadmap',
  },
]

// ── Milestone Card ─────────────────────────────────────────────────────────────
function MilestoneCard({ milestone, index }: { milestone: Milestone; index: number }) {
  const ref = useRef(null)
  // once: false — replays on every scroll up/down
  const isInView = useInView(ref, { once: false, margin: '-6% 0px' })
  const isEven = index % 2 === 0
  const Icon = milestone.icon
  const isFuture = parseInt(milestone.year) > 2025
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* ── Card ── */}
      <div className={`flex-1 ${isEven ? 'md:pr-10' : 'md:pl-10'} pl-10 md:pl-0`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -28 : 28 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -28 : 28 }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={isEven ? 'md:flex md:justify-end' : ''}
        >
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative w-full md:max-w-[300px] rounded-xl overflow-hidden"
            style={{
              background: hovered ? '#fafffe' : (isFuture ? '#f4fbf6' : '#ffffff'),
              border: hovered
                ? '1px solid rgba(0,165,80,0.4)'
                : isFuture ? '1px solid rgba(0,165,80,0.22)' : '1px solid #e2eaf2',
              boxShadow: hovered
                ? '0 12px 32px rgba(0,165,80,0.12), 0 2px 8px rgba(0,0,0,0.06)'
                : '0 2px 10px rgba(0,0,0,0.07)',
              transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
              transition: 'all 0.25s ease',
            }}
          >
            {/* Top accent line */}
            <motion.div
              className="h-[3px] w-full origin-left"
              style={{ background: 'linear-gradient(90deg, #00a550, #4ade80)' }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
            />

            <div className="flex items-start gap-4 px-4 py-4 sm:py-5">
              {/* Icon */}
              <motion.div
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
                style={{
                  background: isFuture ? 'rgba(0,165,80,0.08)' : '#00a550',
                  border: isFuture ? '1px solid rgba(0,165,80,0.22)' : 'none',
                }}
                animate={isInView ? { scale: [0.7, 1] } : { scale: 0.7 }}
                transition={{ delay: 0.1, duration: 0.35, ease: 'backOut' }}
              >
                <Icon size={16} strokeWidth={2.2} color={isFuture ? '#00a550' : '#ffffff'} />
              </motion.div>

              {/* Text block */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest"
                    style={{
                      background: 'rgba(0,165,80,0.08)',
                      border: isFuture ? '1px solid rgba(0,165,80,0.18)' : '1px solid rgba(107,126,143,0.18)',
                      color: isFuture ? '#00a550' : '#6b7e8f',
                    }}
                  >
                    {milestone.year}
                  </span>
                  {isFuture && (
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: '#00a550' }}
                      animate={{ opacity: [1, 0.2, 1], scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>
                <h3
                  className="font-bold leading-tight mb-1"
                  style={{ fontSize: 14, color: '#0d1b2a' }}
                >
                  {milestone.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: '#6b7e8f' }}>
                  {milestone.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Center node — mobile ── */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 md:hidden">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 0.08, type: 'spring', stiffness: 300, damping: 22 }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: 'rgba(0,165,80,0.2)', filter: 'blur(5px)' }}
            animate={isInView ? { scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] } : {}}
            transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
          />
          <div
            className="relative flex h-8 w-8 items-center justify-center rounded-full"
            style={{
              background: isFuture ? '#ffffff' : '#00a550',
              border: '2px solid #00a550',
              boxShadow: '0 0 0 3px rgba(0,165,80,0.12)',
            }}
          >
            <Icon size={14} strokeWidth={2.2} color={isFuture ? '#00a550' : '#ffffff'} />
          </div>
        </motion.div>
      </div>

      {/* ── Center node — desktop ── */}
      <div className="relative hidden md:flex flex-shrink-0 items-center justify-center" style={{ width: 44 }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 22 }}
          className="relative z-20"
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: 'rgba(0,165,80,0.18)', filter: 'blur(4px)' }}
            animate={isInView ? { scale: [1, 1.9, 1], opacity: [0.65, 0, 0.65] } : {}}
            transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.28 }}
          />
          <div
            className="relative flex h-9 w-9 items-center justify-center rounded-full"
            style={{
              background: isFuture ? '#ffffff' : '#00a550',
              border: '2.5px solid #00a550',
              boxShadow: '0 0 0 4px rgba(0,165,80,0.1)',
            }}
          >
            <Icon size={15} strokeWidth={2.2} color={isFuture ? '#00a550' : '#ffffff'} />
          </div>
        </motion.div>
      </div>

      {/* Desktop spacer */}
      <div className="hidden md:block flex-1" />
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────
export function JourneyTimeline() {
  const timelineRef = useRef(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: false, margin: '-5% 0px' })

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 85%', 'end 15%'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 55, damping: 22 })

  return (
    <section id="journey" className="relative overflow-hidden py-14 sm:py-18 lg:py-20">

      {/* Background image only — no colour overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/photos/journey-bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1,
        }}
      />

      {/* Light white wash so cards + text stay crisp */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(255,255,255,0.12)' }}
      />

      {/* Subtle green radial glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-80"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,165,80,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">

        {/* ── Header ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 18 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-12"
        >
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: '#00a550' }}>
            Est. 2016 · India
          </p>
          <h2
            className="font-bold leading-tight mb-2"
            style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: '#0d1b2a' }}
          >
            Our Journey
          </h2>
          <p className="mx-auto max-w-sm text-sm leading-relaxed" style={{ color: '#6b7e8f' }}>
            From concept to India's most anticipated EV powertrain — every milestone, every breakthrough.
          </p>
          <motion.div
            className="mx-auto mt-4 h-px w-14 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #00a550, transparent)' }}
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>

        {/* ── Timeline ── */}
        <div ref={timelineRef} className="relative">

          {/* Mobile line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px md:hidden"
            style={{ background: '#ddeaf4' }}
          >
            <motion.div
              className="absolute inset-0 origin-top"
              style={{ scaleY, background: 'linear-gradient(to bottom, #00a550, #4ade80)', boxShadow: '0 0 6px rgba(0,165,80,0.4)' }}
            />
            <motion.div
              className="absolute w-full"
              style={{ height: 50, background: 'linear-gradient(to bottom, transparent, rgba(0,165,80,0.5), transparent)' }}
              animate={{ top: ['-8%', '108%'] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Desktop line */}
          <div
            className="absolute hidden md:block top-0 bottom-0 w-px left-1/2 -translate-x-1/2"
            style={{ background: '#ddeaf4' }}
          >
            <motion.div
              className="absolute inset-0 origin-top"
              style={{ scaleY, background: 'linear-gradient(to bottom, #00a550, #4ade80)', boxShadow: '0 0 6px rgba(0,165,80,0.4)' }}
            />
            <motion.div
              className="absolute w-full"
              style={{ height: 70, background: 'linear-gradient(to bottom, transparent, rgba(0,165,80,0.5), transparent)' }}
              animate={{ top: ['-8%', '108%'] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="space-y-5 md:space-y-6">
            {milestones.map((m, i) => (
              <MilestoneCard key={m.year} milestone={m} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
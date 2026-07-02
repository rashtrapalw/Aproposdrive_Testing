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
    description:
      'Aproposdrive was incorporated as a motor drives company, establishing the foundation for future innovation in electric mobility and motor technologies.',
    icon: Users,
    stats: 'Company Founded',
  },
  {
    year: '2019',
    title: 'Patent & Product Development',
    description:
      'Developed and patented a magnet-free SRM motor technology for ceiling fans and successfully launched the SRM ceiling fan product.',
    icon: Award,
    stats: 'Patent Granted',
  },
  {
    year: '2022',
    title: 'E-Mobility Design Services',
    description:
      'Expanded into e-mobility by providing motor design services and successfully implemented an SRM fan pilot project.',
    icon: Zap,
    stats: 'E-Mobility Entry',
  },
  {
    year: '2023',
    title: 'Controller R&D',
    description:
      'Established dedicated R&D efforts for motor controllers focused on electric mobility applications, strengthening the company\'s technology portfolio.',
    icon: Settings,
    stats: 'Motor Controller R&D',
  },
  {
    year: '2024',
    title: 'Wheel Traction Drive',
    description:
      'Advanced electric two-wheeler development through wheel traction drive research and development, focusing on performance and efficiency.',
    icon: Cog,
    stats: 'EV2W R&D',
  },
  {
    year: '2025',
    title: 'Commercialization',
    description:
      'Commercialized EV two-wheeler controllers through a licensing model, enabling broader market adoption and technology deployment.',
    icon: Briefcase,
    stats: 'Licensing Model',
  },
  {
    year: '2028',
    title: 'E-Mobility Platform',
    description:
      'Vision to establish a comprehensive e-mobility platform, integrating advanced motor and controller technologies for future mobility solutions.',
    icon: Rocket,
    stats: 'Future Roadmap',
  },
]

// ── Milestone Card ─────────────────────────────────────────────────────────────
function MilestoneCard({ milestone, index }: { milestone: Milestone; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-6% 0px' })
  const isEven = index % 2 === 0
  const Icon = milestone.icon
  const isFuture = parseInt(milestone.year) > 2025
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* ── Card ── */}
      <div className={`flex-1 ${isEven ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -32 : 32, y: 10 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={isEven ? 'md:flex md:justify-end' : ''}
        >
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative w-full md:max-w-[400px] rounded-2xl p-5 sm:p-6"
            style={{
              background: hovered
                ? (isFuture ? '#ecf9f2' : '#fafcff')
                : (isFuture ? '#f4fbf6' : '#ffffff'),
              border: hovered
                ? '1px solid rgba(0,165,80,0.35)'
                : isFuture
                  ? '1px solid rgba(0,165,80,0.22)'
                  : '1px solid #e2eaf2',
              boxShadow: hovered
                ? '0 16px 40px rgba(0,165,80,0.12), 0 4px 16px rgba(0,0,0,0.06)'
                : '0 2px 12px rgba(0,0,0,0.05)',
              transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
              transition: 'all 0.3s ease',
            }}
          >
            {/* Animated top accent line */}
            <motion.div
              className="absolute top-0 inset-x-0 h-[2.5px] rounded-t-2xl origin-left"
              style={{ background: 'linear-gradient(90deg, #00a550, #00c853)' }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: index * 0.06 + 0.3, duration: 0.55, ease: 'easeOut' }}
            />

            {/* Year pill + pulse */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest"
                style={{
                  background: isFuture ? 'rgba(0,165,80,0.1)' : 'rgba(13,27,42,0.06)',
                  color: isFuture ? '#00a550' : '#4a5a6a',
                  border: isFuture ? '1px solid rgba(0,165,80,0.22)' : '1px solid #e2eaf2',
                }}
              >
                {milestone.year}
              </span>
              {isFuture && (
                <motion.span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#00a550', boxShadow: '0 0 6px #00a550' }}
                  animate={{ opacity: [1, 0.25, 1], scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              )}
            </div>

            {/* Title */}
            <h3
              className="font-bold leading-tight mb-2"
              style={{ fontSize: 17, color: '#0d1b2a' }}
            >
              {milestone.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#6b7e8f' }}>
              {milestone.description}
            </p>

            {/* Stats badge */}
            <motion.span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                background: 'rgba(0,165,80,0.08)',
                border: '1px solid rgba(0,165,80,0.2)',
                color: '#00a550',
              }}
              initial={{ opacity: 0, y: 6 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.06 + 0.25, duration: 0.4 }}
            >
              {isFuture ? '◎' : '✓'} {milestone.stats}
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* ── Center node — mobile: absolute left, desktop: true center ── */}
      {/* Mobile node */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 md:hidden">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.1, type: 'spring', stiffness: 280, damping: 22 }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: 'rgba(0,165,80,0.2)', filter: 'blur(6px)' }}
            animate={isInView ? { scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] } : {}}
            transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
          />
          <div
            className="relative flex h-9 w-9 items-center justify-center rounded-full"
            style={{
              background: isFuture ? '#ffffff' : '#00a550',
              border: '2px solid #00a550',
              boxShadow: '0 0 0 3px rgba(0,165,80,0.12)',
            }}
          >
            <Icon size={16} strokeWidth={2.2} color={isFuture ? '#00a550' : '#ffffff'} />
          </div>
        </motion.div>
      </div>

      {/* Desktop node — sits in the center of the row */}
      <div className="relative hidden md:flex flex-shrink-0 items-center justify-center" style={{ width: 48 }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.12, type: 'spring', stiffness: 280, damping: 22 }}
          className="relative z-20"
        >
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: 'rgba(0,165,80,0.18)', filter: 'blur(5px)' }}
            animate={isInView ? { scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] } : {}}
            transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.35 }}
          />
          <div
            className="relative flex h-10 w-10 items-center justify-center rounded-full"
            style={{
              background: isFuture ? '#ffffff' : '#00a550',
              border: '2.5px solid #00a550',
              boxShadow: '0 0 0 4px rgba(0,165,80,0.1), 0 4px 12px rgba(0,165,80,0.25)',
            }}
          >
            <Icon size={17} strokeWidth={2.2} color={isFuture ? '#00a550' : '#ffffff'} />
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
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-5% 0px' })

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 85%', 'end 15%'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 55, damping: 22 })

  return (
    <section id="journey" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">

      {/* ── Background ── */}
      <div className="absolute inset-0" style={{ background: '#f0f6ff' }} />

      {/* Subtle radial tint — top center */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,165,80,0.07) 0%, transparent 70%)',
        }}
      />
      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(240,246,255,0.9))' }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">

        {/* ── Section Header ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center sm:mb-16"
        >
          <p
            className="mb-2 text-[11px] font-bold uppercase tracking-[0.24em]"
            style={{ color: '#00a550' }}
          >
            Est. 2016 · India
          </p>
          <h2
            className="font-bold leading-tight mb-3"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)', color: '#0d1b2a' }}
          >
            Our Journey
          </h2>
          <p
            className="mx-auto max-w-md text-sm leading-relaxed"
            style={{ color: '#6b7e8f' }}
          >
            From concept to India's most anticipated EV powertrain — every milestone, every breakthrough.
          </p>

          {/* Decorative divider */}
          <motion.div
            className="mx-auto mt-5 h-px w-16 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #00a550, transparent)' }}
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        {/* ── Timeline ── */}
        <div ref={timelineRef} className="relative">

          {/* Mobile line — left edge */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px md:hidden"
            style={{ background: '#ddeaf4' }}
          >
            <motion.div
              className="absolute inset-0 origin-top"
              style={{
                scaleY,
                background: 'linear-gradient(to bottom, #00a550, #4ade80)',
                boxShadow: '0 0 8px rgba(0,165,80,0.5)',
              }}
            />
            {/* shimmer bead */}
            <motion.div
              className="absolute w-full"
              style={{
                height: 60,
                background: 'linear-gradient(to bottom, transparent, rgba(0,165,80,0.5), transparent)',
              }}
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Desktop line — center */}
          <div
            className="absolute hidden md:block top-0 bottom-0 w-px left-1/2 -translate-x-1/2"
            style={{ background: '#ddeaf4' }}
          >
            <motion.div
              className="absolute inset-0 origin-top"
              style={{
                scaleY,
                background: 'linear-gradient(to bottom, #00a550, #4ade80)',
                boxShadow: '0 0 8px rgba(0,165,80,0.45)',
              }}
            />
            {/* shimmer bead */}
            <motion.div
              className="absolute w-full"
              style={{
                height: 80,
                background: 'linear-gradient(to bottom, transparent, rgba(0,165,80,0.55), transparent)',
              }}
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="space-y-8 md:space-y-10 lg:space-y-12">
            {milestones.map((m, i) => (
              <MilestoneCard key={m.year} milestone={m} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
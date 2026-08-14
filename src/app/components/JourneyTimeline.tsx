
// 'use client'

// import { motion, useScroll, useSpring, useInView } from 'motion/react'
// import { Users, Award, Zap, Settings, Cog, Briefcase, Rocket } from 'lucide-react'
// import type { LucideIcon } from 'lucide-react'
// import { useRef, useState } from 'react'

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
//     description: 'Aproposdrive was incorporated as a motor drives company, establishing the foundation for future innovation in electric mobility.',
//     icon: Users,
//     stats: 'Company Founded',
//   },
//   {
//     year: '2019',
//     title: 'Patent & Product Development',
//     description: 'Developed and patented a magnet-free SRM motor technology for ceiling fans and successfully launched the product.',
//     icon: Award,
//     stats: 'Patent Granted',
//   },
//   {
//     year: '2022',
//     title: 'E-Mobility Design Services',
//     description: 'Expanded into e-mobility by providing motor design services and successfully implemented an SRM fan pilot project.',
//     icon: Zap,
//     stats: 'E-Mobility Entry',
//   },
//   {
//     year: '2023',
//     title: 'Controller R&D',
//     description: 'Established dedicated R&D for motor controllers focused on electric mobility applications.',
//     icon: Settings,
//     stats: 'Motor Controller R&D',
//   },
//   {
//     year: '2024',
//     title: 'Wheel Traction Drive',
//     description: 'Advanced EV two-wheeler development through wheel traction drive R&D, focusing on performance and efficiency.',
//     icon: Cog,
//     stats: 'EV2W R&D',
//   },
//   {
//     year: '2025',
//     title: 'Commercialization',
//     description: 'Commercialized EV two-wheeler controllers through a licensing model, enabling broader market adoption.',
//     icon: Briefcase,
//     stats: 'Licensing Model',
//   },
//   {
//     year: '2028',
//     title: 'E-Mobility Platform',
//     description: 'Vision to establish a comprehensive e-mobility platform integrating advanced motor and controller technologies.',
//     icon: Rocket,
//     stats: 'Future Roadmap',
//   },
// ]

// // ── Milestone Card ─────────────────────────────────────────────────────────────
// function MilestoneCard({ milestone, index }: { milestone: Milestone; index: number }) {
//   const ref = useRef(null)
//   // once: false — replays on every scroll up/down
//   const isInView = useInView(ref, { once: false, margin: '-6% 0px' })
//   const isEven = index % 2 === 0
//   const Icon = milestone.icon
//   const isFuture = parseInt(milestone.year) > 2025
//   const [hovered, setHovered] = useState(false)

//   return (
//     <div
//       ref={ref}
//       className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
//     >
//       {/* ── Card ── */}
//       <div className={`flex-1 ${isEven ? 'md:pr-10' : 'md:pl-10'} pl-10 md:pl-0`}>
//         <motion.div
//           initial={{ opacity: 0, x: isEven ? -28 : 28 }}
//           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -28 : 28 }}
//           transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
//           className={isEven ? 'md:flex md:justify-end' : ''}
//         >
//           <div
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//             className="relative w-full md:max-w-[300px] rounded-xl overflow-hidden"
//             style={{
//               background: hovered ? '#fafffe' : (isFuture ? '#f4fbf6' : '#ffffff'),
//               border: hovered
//                 ? '1px solid rgba(0,165,80,0.4)'
//                 : isFuture ? '1px solid rgba(0,165,80,0.22)' : '1px solid #e2eaf2',
//               boxShadow: hovered
//                 ? '0 12px 32px rgba(0,165,80,0.12), 0 2px 8px rgba(0,0,0,0.06)'
//                 : '0 2px 10px rgba(0,0,0,0.07)',
//               transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
//               transition: 'all 0.25s ease',
//             }}
//           >
//             {/* Top accent line */}
//             <motion.div
//               className="h-[3px] w-full origin-left"
//               style={{ background: 'linear-gradient(90deg, #00a550, #4ade80)' }}
//               initial={{ scaleX: 0 }}
//               animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
//               transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
//             />

//             <div className="flex items-start gap-4 px-4 py-4 sm:py-5">
//               {/* Icon */}
//               <motion.div
//                 className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
//                 style={{
//                   background: isFuture ? 'rgba(0,165,80,0.08)' : '#00a550',
//                   border: isFuture ? '1px solid rgba(0,165,80,0.22)' : 'none',
//                 }}
//                 animate={isInView ? { scale: [0.7, 1] } : { scale: 0.7 }}
//                 transition={{ delay: 0.1, duration: 0.35, ease: 'backOut' }}
//               >
//                 <Icon size={16} strokeWidth={2.2} color={isFuture ? '#00a550' : '#ffffff'} />
//               </motion.div>

//               {/* Text block */}
//               <div className="flex-1 min-w-0">
//                 <div className="flex items-center gap-2 mb-0.5">
//                   <span
//                     className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest"
//                     style={{
//                       background: 'rgba(0,165,80,0.08)',
//                       border: isFuture ? '1px solid rgba(0,165,80,0.18)' : '1px solid rgba(107,126,143,0.18)',
//                       color: isFuture ? '#00a550' : '#6b7e8f',
//                     }}
//                   >
//                     {milestone.year}
//                   </span>
//                   {isFuture && (
//                     <motion.span
//                       className="w-1.5 h-1.5 rounded-full flex-shrink-0"
//                       style={{ background: '#00a550' }}
//                       animate={{ opacity: [1, 0.2, 1], scale: [1, 1.4, 1] }}
//                       transition={{ duration: 2, repeat: Infinity }}
//                     />
//                   )}
//                 </div>
//                 <h3
//                   className="font-bold leading-tight mb-1"
//                   style={{ fontSize: 14, color: '#0d1b2a' }}
//                 >
//                   {milestone.title}
//                 </h3>
//                 <p className="text-xs leading-relaxed" style={{ color: '#6b7e8f' }}>
//                   {milestone.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* ── Center node — mobile ── */}
//       <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 md:hidden">
//         <motion.div
//           initial={{ scale: 0, opacity: 0 }}
//           animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
//           transition={{ delay: 0.08, type: 'spring', stiffness: 300, damping: 22 }}
//           className="relative"
//         >
//           <motion.div
//             className="absolute inset-0 rounded-full"
//             style={{ background: 'rgba(0,165,80,0.2)', filter: 'blur(5px)' }}
//             animate={isInView ? { scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] } : {}}
//             transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
//           />
//           <div
//             className="relative flex h-8 w-8 items-center justify-center rounded-full"
//             style={{
//               background: isFuture ? '#ffffff' : '#00a550',
//               border: '2px solid #00a550',
//               boxShadow: '0 0 0 3px rgba(0,165,80,0.12)',
//             }}
//           >
//             <Icon size={14} strokeWidth={2.2} color={isFuture ? '#00a550' : '#ffffff'} />
//           </div>
//         </motion.div>
//       </div>

//       {/* ── Center node — desktop ── */}
//       <div className="relative hidden md:flex flex-shrink-0 items-center justify-center" style={{ width: 44 }}>
//         <motion.div
//           initial={{ scale: 0, opacity: 0 }}
//           animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
//           transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 22 }}
//           className="relative z-20"
//         >
//           <motion.div
//             className="absolute inset-0 rounded-full"
//             style={{ background: 'rgba(0,165,80,0.18)', filter: 'blur(4px)' }}
//             animate={isInView ? { scale: [1, 1.9, 1], opacity: [0.65, 0, 0.65] } : {}}
//             transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.28 }}
//           />
//           <div
//             className="relative flex h-9 w-9 items-center justify-center rounded-full"
//             style={{
//               background: isFuture ? '#ffffff' : '#00a550',
//               border: '2.5px solid #00a550',
//               boxShadow: '0 0 0 4px rgba(0,165,80,0.1)',
//             }}
//           >
//             <Icon size={15} strokeWidth={2.2} color={isFuture ? '#00a550' : '#ffffff'} />
//           </div>
//         </motion.div>
//       </div>

//       {/* Desktop spacer */}
//       <div className="hidden md:block flex-1" />
//     </div>
//   )
// }

// // ── Main ──────────────────────────────────────────────────────────────────────
// export function JourneyTimeline() {
//   const timelineRef = useRef(null)
//   const headerRef = useRef(null)
//   const headerInView = useInView(headerRef, { once: false, margin: '-5% 0px' })

//   const { scrollYProgress } = useScroll({
//     target: timelineRef,
//     offset: ['start 85%', 'end 15%'],
//   })
//   const scaleY = useSpring(scrollYProgress, { stiffness: 55, damping: 22 })

//   return (
//     <section id="journey" className="relative overflow-hidden py-14 sm:py-18 lg:py-20">

//       {/* Background image only — no colour overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('/photos/journey-bg.jpeg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           opacity: 1,
//         }}
//       />

//       {/* Light white wash so cards + text stay crisp */}
//       <div
//         className="absolute inset-0"
//         style={{ background: 'rgba(255,255,255,0.12)' }}
//       />

//       {/* Subtle green radial glow */}
//       <div
//         className="pointer-events-none absolute inset-x-0 top-0 h-80"
//         style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,165,80,0.07) 0%, transparent 70%)' }}
//       />

//       <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">

//         {/* ── Header ── */}
//         <motion.div
//           ref={headerRef}
//           initial={{ opacity: 0, y: 18 }}
//           animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
//           transition={{ duration: 0.5 }}
//           className="mb-10 text-center sm:mb-12"
//         >
//           <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: '#00a550' }}>
//             Est. 2016 · India
//           </p>
//           <h2
//             className="font-bold leading-tight mb-2"
//             style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: '#0d1b2a' }}
//           >
//             Our Journey
//           </h2>
//           <p className="mx-auto max-w-sm text-sm leading-relaxed" style={{ color: '#6b7e8f' }}>
//             From concept to India's most anticipated EV powertrain — every milestone, every breakthrough.
//           </p>
//           <motion.div
//             className="mx-auto mt-4 h-px w-14 rounded-full"
//             style={{ background: 'linear-gradient(90deg, transparent, #00a550, transparent)' }}
//             initial={{ scaleX: 0 }}
//             animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           />
//         </motion.div>

//         {/* ── Timeline ── */}
//         <div ref={timelineRef} className="relative">

//           {/* Mobile line */}
//           <div
//             className="absolute left-4 top-0 bottom-0 w-px md:hidden"
//             style={{ background: '#ddeaf4' }}
//           >
//             <motion.div
//               className="absolute inset-0 origin-top"
//               style={{ scaleY, background: 'linear-gradient(to bottom, #00a550, #4ade80)', boxShadow: '0 0 6px rgba(0,165,80,0.4)' }}
//             />
//             <motion.div
//               className="absolute w-full"
//               style={{ height: 50, background: 'linear-gradient(to bottom, transparent, rgba(0,165,80,0.5), transparent)' }}
//               animate={{ top: ['-8%', '108%'] }}
//               transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
//             />
//           </div>

//           {/* Desktop line */}
//           <div
//             className="absolute hidden md:block top-0 bottom-0 w-px left-1/2 -translate-x-1/2"
//             style={{ background: '#ddeaf4' }}
//           >
//             <motion.div
//               className="absolute inset-0 origin-top"
//               style={{ scaleY, background: 'linear-gradient(to bottom, #00a550, #4ade80)', boxShadow: '0 0 6px rgba(0,165,80,0.4)' }}
//             />
//             <motion.div
//               className="absolute w-full"
//               style={{ height: 70, background: 'linear-gradient(to bottom, transparent, rgba(0,165,80,0.5), transparent)' }}
//               animate={{ top: ['-8%', '108%'] }}
//               transition={{ duration: 3.8, repeat: Infinity, ease: 'linear' }}
//             />
//           </div>

//           <div className="space-y-5 md:space-y-6">
//             {milestones.map((m, i) => (
//               <MilestoneCard key={m.year} milestone={m} index={i} />
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }




'use client'

import { motion, useScroll, useSpring, useInView } from 'motion/react'
import { Users, Award, Rocket, Wrench, Cpu, Bike, Layers } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useRef, useState } from 'react'

type Milestone = {
  year: string
  title: string
  points: string[]
  icon: LucideIcon
}

const milestones: Milestone[] = [
  {
    year: '2016',
    title: 'Incorporation',
    points: [
      'Incorporation',
      'Motor Design house operations',
    ],
    icon: Users,
  },
  {
    year: '2016-18',
    title: 'Magnet-Free Motor Tech',
    points: [
      'Magnet free motor Technology - SRM (Patented)',
      'PMSM designs',
    ],
    icon: Award,
  },
  {
    year: '2019',
    title: 'Drone Motors & Collaboration',
    points: [
      'Ultra lightweight drone motors',
      'Collaboration with Japanese AL coil company',
    ],
    icon: Wrench,
  },
  {
    year: '2022',
    title: 'SRM Pilots & E-Mobility R&D',
    points: [
      'SRM fan pilots ~200 fans, 2 years running',
      'MCU R&D: E-mobility',
      'PMSM designs E2W',
    ],
    icon: Cpu,
  },
  {
    year: '2023',
    title: 'E2W Pilots & Certification',
    points: [
      'E2W Pilots 100,000+ km tested',
      'ARAI certified Bikes',
    ],
    icon: Bike,
  },
  {
    year: '2024',
    title: 'MCU GEN2 Commercialization',
    points: [
      'E2W MCU GEN2 Commercialization',
      'Successful licensing: 600+ units',
    ],
    icon: Layers,
  },
  {
    year: '2024-25',
    title: 'Wheel Drive POC',
    points: [
      'Wheel Drive POC',
    ],
    icon: Cpu,
  },
  {
    year: '2025-26',
    title: 'MCU GEN3 Platform',
    points: [
      'MCU GEN3 platform',
      '2000 km+ tested',
      '+15% range, 10% higher torque',
      '30°C lower temperature',
    ],
    icon: Layers,
  },
  {
    year: '2028',
    title: 'E-Mobility Platform',
    points: [
      'E-Mobility Platform commercialization',
    ],
    icon: Rocket,
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
                  className="font-bold leading-tight mb-1.5"
                  style={{ fontSize: 14, color: '#0d1b2a' }}
                >
                  {milestone.title}
                </h3>

                {/* Bullet list of achievements, matching source image layout */}
            <ul className="space-y-1">
  {milestone.points.map((point, pi) => (
    <li
      key={pi}
      className="flex items-start gap-1.5 text-xs font-semibold leading-relaxed"
      style={{ color: '#00a550' }}
    >
      <span
        className="mt-[2px] flex-shrink-0 flex items-center justify-center rounded-full"
        style={{
          width: 14,
          height: 14,
          background: '#00a550',
        }}
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth={3.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span>{point}</span>
    </li>
  ))}
</ul>
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
          <p className="mx-auto max-w-sm text-xl font-bold leading-relaxed" style={{ color: '#00a550' }}>
           Traction and achievements
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
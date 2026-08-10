// 'use client'

// import type { MouseEvent } from 'react'
// import { useRef, useState, useEffect } from 'react'
// import { motion, useInView, useMotionValue, useSpring } from 'motion/react'
// import { DollarSign, Wrench, Leaf, Zap, Shield, TrendingUp, ArrowRight } from 'lucide-react'
// import type { LucideIcon } from 'lucide-react'

// // ─── Data ─────────────────────────────────────────────────────────────────────
// const benefits = [
//   {
//     icon: TrendingUp,
//     title: '10–15% Extended Range',
//     description: 'High-efficiency vector control delivers superior range per charge cycle compared to conventional systems.',
//     stat: '15%', statLabel: 'Range Gain',
//     accent: '#00C853',
//   },
//   {
//     icon: Zap,
//     title: 'Compact 3-in-1 Design',
//     description: 'Motor, controller, and gearbox integrated into a single unit — reducing assembly time and space requirements.',
//     stat: '3-in-1', statLabel: 'Integration',
//     accent: '#00E5FF',
//   },
//   {
//     icon: DollarSign,
//     title: 'Lower Cost Architecture',
//     description: 'Rare earth-free technology eliminates dependency on scarce materials — cutting system and ownership costs.',
//     stat: '30%', statLabel: 'Cost Reduction',
//     accent: '#00C853',
//   },
//   {
//     icon: Shield,
//     title: 'Built to Last',
//     description: 'IP67 sealed, low-heating design with natural air cooling ensures consistent performance in all conditions.',
//     stat: 'IP67', statLabel: 'Protection',
//     accent: '#00E5FF',
//   },
//   {
//     icon: Wrench,
//     title: 'India-First Engineering',
//     description: 'Every component tested for Indian roads, temperature extremes, and real-world driving conditions.',
//     stat: '100%', statLabel: 'India Ready',
//     accent: '#00C853',
//   },
//   {
//     icon: Leaf,
//     title: 'Zero Rare Earths',
//     description: 'Eco-conscious motors with no rare earth dependency — cleaner supply chain, cleaner mobility.',
//     stat: '0', statLabel: 'Rare Earths Used',
//     accent: '#00E5FF',
//   },
// ]

// const comparisons = [
//   { label: 'Fuel / Charge Cost',   ev: '₹1.5/km',   ice: '₹6/km',     savings: '75% cheaper', barW: '20%',  icon: DollarSign },
//   { label: 'Annual Maintenance',   ev: '₹8,000/yr',  ice: '₹20,000/yr',savings: '60% less',    barW: '35%',  icon: Wrench },
//   { label: 'CO₂ Emissions',        ev: '0 g/km',     ice: '120 g/km',  savings: '100% cleaner',barW: '4%',   icon: Leaf },
// ]

// const bigStats = [
//   { val: '75%',  lbl: 'Fuel Savings' },
//   { val: '60%',  lbl: 'Maintenance Cut' },
//   { val: '100%', lbl: 'Zero Emissions' },
// ]

// type Benefit = {
//   icon: LucideIcon
//   title: string
//   description: string
//   stat: string
//   statLabel: string
//   accent: string
// }

// type Comparison = {
//   label: string
//   ev: string
//   ice: string
//   savings: string
//   barW: string
//   icon: LucideIcon
// }

// // ─── useWindowWidth ────────────────────────────────────────────────────────────
// function useWindowWidth() {
//   const [w, setW] = useState(1200)
//   useEffect(() => {
//     setW(window.innerWidth)
//     const fn = () => setW(window.innerWidth)
//     window.addEventListener('resize', fn)
//     return () => window.removeEventListener('resize', fn)
//   }, [])
//   return w
// }

// // ─── Benefit Card ─────────────────────────────────────────────────────────────
// function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
//   const Icon = benefit.icon
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: false, margin: '-8% 0px' })
//   const [hov, setHov] = useState(false)
//   const rotX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
//   const rotY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })

//   const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
//     const r = e.currentTarget.getBoundingClientRect()
//     const x = (e.clientX - r.left) / r.width - 0.5
//     const y = (e.clientY - r.top)  / r.height - 0.5
//     rotX.set(-y * 8)
//     rotY.set(x * 8)
//   }
//   const resetMouse = () => { rotX.set(0); rotY.set(0) }

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 36 }}
//       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
//       transition={{ delay: index * 0.07, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
//       style={{ perspective: 900 }}
//     >
//       <motion.div
//         onMouseMove={handleMouse}
//         onMouseEnter={() => setHov(true)}
//         onMouseLeave={() => { setHov(false); resetMouse() }}
//         className="relative flex flex-col h-full rounded-2xl overflow-hidden cursor-default"
//         whileHover={{ y: -6 }}
//         transition={{ duration: 0.25 }}
//         style={{
//           background: hov
//             ? 'linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))'
//             : 'linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))',
//           border: `1px solid ${hov ? benefit.accent + '45' : 'rgba(255,255,255,0.07)'}`,
//           backdropFilter: 'blur(12px)',
//           boxShadow: hov
//             ? `0 0 30px ${benefit.accent}18, 0 16px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)`
//             : '0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
//           transition: 'background 0.25s, border-color 0.25s, box-shadow 0.25s',
//           rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d',
//         }}
//       >
//         {/* Animated top accent line */}
//         <motion.div
//           className="absolute top-0 inset-x-0 h-[2px] origin-left"
//           style={{ background: `linear-gradient(90deg,${benefit.accent},${benefit.accent === '#00C853' ? '#00E5FF' : '#00C853'})` }}
//           initial={{ scaleX: 0 }}
//           animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
//           transition={{ delay: index * 0.07 + 0.3, duration: 0.6, ease: 'easeOut' }}
//         />

//         {/* Hover inner glow */}
//         <div
//           className="absolute inset-0 pointer-events-none transition-opacity duration-400"
//           style={{
//             background: `radial-gradient(ellipse at 20% 0%, ${benefit.accent}10 0%, transparent 60%)`,
//             opacity: hov ? 1 : 0,
//           }}
//         />

//         <div className="relative flex flex-col flex-1 p-5">
//           {/* Icon row */}
//           <div className="flex items-start justify-between mb-4">
//             <motion.div
//               className="w-11 h-11 rounded-xl flex items-center justify-center"
//               style={{ background: `${benefit.accent}16`, border: `1px solid ${benefit.accent}35` }}
//               animate={hov ? { scale: 1.1, rotate: 6 } : { scale: 1, rotate: 0 }}
//               transition={{ duration: 0.22 }}
//             >
//               <Icon className="w-5 h-5" style={{ color: benefit.accent }} strokeWidth={2.2} />
//             </motion.div>

//             {/* Pulse dot */}
//             <div className="relative w-7 h-7 flex items-center justify-center">
//               <motion.div
//                 className="absolute inset-0 rounded-full"
//                 style={{ background: `${benefit.accent}14`, border: `1px solid ${benefit.accent}28` }}
//                 animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
//                 transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
//               />
//               <div className="w-2 h-2 rounded-full" style={{ background: benefit.accent, boxShadow: `0 0 6px ${benefit.accent}` }} />
//             </div>
//           </div>

//           {/* Text */}
//           <h3
//             className="font-black text-sm leading-snug mb-2"
//             style={{ color: '#fff', fontFamily: "'DM Sans',sans-serif" }}
//           >
//             {benefit.title}
//           </h3>
//           <p
//             className="text-xs leading-relaxed flex-1 mb-4"
//             style={{ color: 'rgba(255,255,255,0.42)', fontFamily: "'DM Sans',sans-serif" }}
//           >
//             {benefit.description}
//           </p>

//           {/* Bottom stat row */}
//           <div
//             className="flex items-center justify-between pt-3"
//             style={{ borderTop: `1px solid ${benefit.accent}1a` }}
//           >
//             <div className="flex flex-col">
//               <motion.span
//                 className="font-black leading-none"
//                 style={{ fontSize: 24, fontFamily: "'DM Sans',sans-serif", color: benefit.accent }}
//                 initial={{ opacity: 0, y: 6 }}
//                 animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
//                 transition={{ duration: 0.5, delay: index * 0.07 + 0.25 }}
//               >
//                 {benefit.stat}
//               </motion.span>
//               <span
//                 className="text-[9px] uppercase tracking-[0.15em] mt-0.5"
//                 style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'DM Sans',sans-serif" }}
//               >
//                 {benefit.statLabel}
//               </span>
//             </div>

//             <motion.div
//               className="w-7 h-7 rounded-full flex items-center justify-center"
//               style={{
//                 background: `${benefit.accent}14`,
//                 border: `1px solid ${benefit.accent}28`,
//                 opacity: hov ? 1 : 0,
//                 transition: 'opacity 0.2s',
//               }}
//               whileHover={{ x: 3 }}
//             >
//               <ArrowRight className="w-3 h-3" style={{ color: benefit.accent }} />
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }

// // ─── Comparison Row ───────────────────────────────────────────────────────────
// function ComparisonRow({ item, index }: { item: Comparison; index: number }) {
//   const Icon = item.icon
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: false, margin: '-5% 0px' })
//   const [hov, setHov] = useState(false)

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, x: -18 }}
//       animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
//       transition={{ delay: index * 0.1, duration: 0.45, ease: 'easeOut' }}
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       className="grid items-center gap-3 p-3 rounded-xl transition-all duration-250"
//       style={{
//         gridTemplateColumns: 'auto 1fr auto',
//         background: hov ? 'rgba(255,255,255,0.055)' : 'rgba(255,255,255,0.028)',
//         border: `1px solid ${hov ? 'rgba(0,200,83,0.22)' : 'rgba(255,255,255,0.06)'}`,
//         transform: hov ? 'translateX(4px)' : 'translateX(0)',
//         transition: 'all 0.22s ease',
//       }}
//     >
//       {/* Icon */}
//       <div
//         className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
//         style={{ background: 'rgba(0,200,83,0.12)', border: '1px solid rgba(0,200,83,0.25)' }}
//       >
//         <Icon className="w-3.5 h-3.5" style={{ color: '#00C853' }} strokeWidth={2.2} />
//       </div>

//       {/* Label + bar */}
//       <div className="min-w-0">
//         <div className="flex items-center justify-between mb-1.5 gap-2 flex-wrap">
//           <span
//             className="text-[10px] uppercase tracking-[0.15em] font-bold"
//             style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Sans',sans-serif" }}
//           >
//             {item.label}
//           </span>
//           <div className="flex items-center gap-2 text-[11px]" style={{ fontFamily: "'DM Sans',sans-serif" }}>
//             <span className="font-black" style={{ color: '#00C853' }}>{item.ev}</span>
//             <span style={{ color: 'rgba(255,255,255,0.2)' }}>vs</span>
//             <span className="line-through" style={{ color: 'rgba(255,255,255,0.22)' }}>{item.ice}</span>
//           </div>
//         </div>
//         {/* Progress bar */}
//         <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
//           <motion.div
//             className="h-full rounded-full"
//             style={{ background: 'linear-gradient(90deg,#00C853,#00E5FF)' }}
//             initial={{ width: 0 }}
//             animate={inView ? { width: item.barW } : { width: 0 }}
//             transition={{ delay: index * 0.1 + 0.4, duration: 0.9, ease: 'easeOut' }}
//           />
//         </div>
//       </div>

//       {/* Savings badge */}
//       <motion.div
//         className="flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] font-black whitespace-nowrap"
//         style={{
//           background: 'rgba(0,200,83,0.12)',
//           border: '1px solid rgba(0,200,83,0.28)',
//           color: '#00C853',
//           fontFamily: "'DM Sans',sans-serif",
//         }}
//         animate={{ scale: [1, 1.04, 1] }}
//         transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
//       >
//         {item.savings}
//       </motion.div>
//     </motion.div>
//   )
// }

// // ═══════════════════════════════════════════════════════════════════════════════
// export function WhyChooseSection() {
//   const headerRef = useRef(null)
//   const headerInView = useInView(headerRef, { once: false, margin: '-8% 0px' })
//   const compRef = useRef(null)
//   const compInView = useInView(compRef, { once: false, margin: '-8% 0px' })
//   const w = useWindowWidth()
//   const isMobile = w < 768

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700;9..40,900&display=swap');
//         @keyframes gradShift{0%{background-position:0%}100%{background-position:200%}}
//       `}</style>

//       <section
//         className="relative py-20 overflow-hidden"
//         style={{ background: '#0A0F1C', fontFamily: "'DM Sans',sans-serif" }}
//       >
//         {/* ── Background — matches site ── */}
//         <div className="absolute inset-0 pointer-events-none">
//           {/* Grid overlay */}
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
//               backgroundSize: '64px 64px',
//             }}
//           />
//           {/* Green blob top-left */}
//           <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full" style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.16 }} />
//           {/* Cyan blob top-right */}
//           <div className="absolute top-10 right-[-60px] w-96 h-96 rounded-full" style={{ background: '#00E5FF', filter: 'blur(128px)', opacity: 0.11 }} />
//           {/* Green blob bottom */}
//           <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full" style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.08 }} />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//           {/* ── Header ── */}
//           <motion.div
//             ref={headerRef}
//             initial={{ opacity: 0, y: 20 }}
//             animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-14"
//           >
//             {/* Badge */}
//             <div
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
//               style={{ background: 'rgba(0,200,83,0.08)', border: '1px solid rgba(0,200,83,0.22)' }}
//             >
//               <motion.span
//                 className="w-1.5 h-1.5 rounded-full"
//                 style={{ background: '#00C853', boxShadow: '0 0 6px #00C853' }}
//                 animate={{ opacity: [1, 0.4, 1] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               />
//               <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: '#00C853' }}>
//                 Why Us
//               </span>
//             </div>

//             <h2
//               className="font-black leading-none tracking-tight mb-4"
//               style={{ fontSize: 'clamp(38px,5.5vw,68px)' }}
//             >
//               <span className="text-white">Why Choose </span>
//               <br className={isMobile ? 'block' : 'hidden'} />
//               <span
//                 style={{
//                   background: 'linear-gradient(90deg,#00C853,#00E5FF,#00C853)',
//                   backgroundSize: '200% 100%',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   animation: 'gradShift 4s linear infinite',
//                 }}
//               >
//                 Aproposdrive
//               </span>
//               <span className="text-white">?</span>
//             </h2>

//             <p
//               className="text-sm max-w-md mx-auto leading-relaxed"
//               style={{ color: 'rgba(255,255,255,0.38)' }}
//             >
//               Cutting-edge EV technology built for India's roads — engineered for performance, longevity, and sustainability.
//             </p>
//           </motion.div>

//           {/* ── Benefits Grid ── */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
//             {benefits.map((b, i) => (
//               <BenefitCard key={b.title} benefit={b} index={i} />
//             ))}
//           </div>

//           {/* ── Comparison Section ── */}
//           <div
//             ref={compRef}
//             className="grid gap-8"
//             style={{ gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr' }}
//           >
//             {/* Left: heading + big stats */}
//             <motion.div
//               initial={{ opacity: 0, x: -28 }}
//               animate={compInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -28 }}
//               transition={{ duration: 0.55 }}
//               className="lg:sticky lg:top-28 flex flex-col gap-6"
//             >
//               {/* Sub-badge */}
//               <div
//                 className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full self-start"
//                 style={{ background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.22)' }}
//               >
//                 <motion.span
//                   className="w-1.5 h-1.5 rounded-full"
//                   style={{ background: '#00E5FF', boxShadow: '0 0 6px #00E5FF' }}
//                   animate={{ opacity: [1, 0.4, 1] }}
//                   transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
//                 />
//                 <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00E5FF' }}>
//                   Real Savings
//                 </span>
//               </div>

//               <div>
//                 <h3
//                   className="font-black leading-tight mb-3"
//                   style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontFamily: "'DM Sans',sans-serif", color: '#fff' }}
//                 >
//                   Aproposdrive vs{' '}
//                   <span
//                     style={{
//                       background: 'linear-gradient(90deg,#00C853,#00E5FF)',
//                       WebkitBackgroundClip: 'text',
//                       WebkitTextFillColor: 'transparent',
//                     }}
//                   >
//                     Traditional
//                   </span>
//                 </h3>
//                 <p
//                   className="text-sm leading-relaxed max-w-xs"
//                   style={{ color: 'rgba(255,255,255,0.38)', fontFamily: "'DM Sans',sans-serif" }}
//                 >
//                   The numbers speak for themselves. Switching to Aproposdrive means dramatically lower operating costs — zero compromise on performance.
//                 </p>
//               </div>

//               {/* Big stat call-outs */}
//               <div className="flex gap-5 flex-wrap">
//                 {bigStats.map(({ val, lbl }, i) => (
//                   <motion.div
//                     key={lbl}
//                     initial={{ opacity: 0, y: 16 }}
//                     animate={compInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
//                     transition={{ delay: i * 0.1 + 0.2, duration: 0.45 }}
//                     className="flex flex-col p-4 rounded-2xl"
//                     style={{
//                       background: 'rgba(255,255,255,0.04)',
//                       border: '1px solid rgba(255,255,255,0.07)',
//                       minWidth: 90,
//                     }}
//                   >
//                     <span
//                       className="font-black text-2xl leading-none mb-1"
//                       style={{
//                         fontFamily: "'DM Sans',sans-serif",
//                         background: 'linear-gradient(90deg,#00C853,#00E5FF)',
//                         WebkitBackgroundClip: 'text',
//                         WebkitTextFillColor: 'transparent',
//                       }}
//                     >
//                       {val}
//                     </span>
//                     <span
//                       className="text-[10px] uppercase tracking-[0.15em]"
//                       style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'DM Sans',sans-serif" }}
//                     >
//                       {lbl}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Right: comparison rows card */}
//             <motion.div
//               initial={{ opacity: 0, x: isMobile ? 0 : 28, y: isMobile ? 20 : 0 }}
//               animate={compInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isMobile ? 0 : 28, y: isMobile ? 20 : 0 }}
//               transition={{ duration: 0.55, delay: 0.08 }}
//               className="rounded-2xl p-5 flex flex-col gap-3"
//               style={{
//                 background: 'linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))',
//                 border: '1px solid rgba(255,255,255,0.08)',
//                 backdropFilter: 'blur(16px)',
//                 boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
//               }}
//             >
//               {/* Top shimmer */}
//               <div
//                 className="h-px w-full"
//                 style={{ background: 'linear-gradient(90deg,transparent,rgba(0,200,83,0.5),rgba(0,229,255,0.4),transparent)' }}
//               />

//               {/* Legend */}
//               <div className="flex items-center justify-end gap-4 pb-1">
//                 {[['#00C853','Aproposdrive'],['rgba(255,255,255,0.2)','Traditional']].map(([c, lbl]) => (
//                   <div key={lbl} className="flex items-center gap-1.5">
//                     <div className="w-2 h-2 rounded-full" style={{ background: c }} />
//                     <span
//                       className="text-[10px] uppercase tracking-[0.12em]"
//                       style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'DM Sans',sans-serif" }}
//                     >
//                       {lbl}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               {comparisons.map((item, i) => (
//                 <ComparisonRow key={item.label} item={item} index={i} />
//               ))}

//               {/* Bottom note */}
//               <p
//                 className="text-[10px] text-center pt-1"
//                 style={{ color: 'rgba(255,255,255,0.22)', fontFamily: "'DM Sans',sans-serif" }}
//               >
//                 Based on average Indian urban usage data · 2024
//               </p>
//             </motion.div>
//           </div>

//         </div>
//       </section>
//     </>
//   )
// }






'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ShieldCheck, Leaf, TrendingUp, Globe, Magnet, DollarSign, Puzzle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────────
const badges = [
  { icon: ShieldCheck, label: 'Proven\nPerformance' },
  { icon: Leaf,        label: 'Sustainable\nInnovation' },
  { icon: TrendingUp,  label: 'Built for\nthe Future' },
]

const features = [
   {
    icon: DollarSign,
    title: 'in-house R&D',
    body: 'We design motor and controller from electromagnetic designs to PCBs and software.',
  },
  {
    icon: Globe,
    title: 'Rare Earth-Free Technology',
    body: ' Eliminating Supply Chain Dependency, Efficient and Reliable Performance.',
  },

  {
    icon: ShieldCheck,
    title: 'Field-Test Ready',
    body: 'validated through extensive real-world testing and, real-world testing and real-time data for performance testing and in demanding conditions.',
  },
 
 
  {
    icon: Puzzle,
    title: 'Seamless Integration',
    body: 'Flexible solution design as a system rather than a individual component.',
  },
]



// ─── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const Icon = feature.icon as LucideIcon
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group flex flex-col gap-3 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.12)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Icon row */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
          style={{
            background: 'rgba(0,200,180,0.12)',
            border: '1px solid rgba(0,200,180,0.28)',
          }}
        >
          <Icon size={17} color="#00a550" strokeWidth={2} />
        </div>
        <h3
          className="text-base sm:text-lg font-black uppercase"
          style={{ color: '#ffffff', fontFamily: "'DM Sans',sans-serif" }}
        >
          {feature.title}
        </h3>
      </div>

      {/* Body */}
      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.52)' }}>
        {feature.body}
      </p>
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
export function WhyChooseSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-5% 0px' })

  return (
    <section className="relative overflow-hidden" style={{ background: '#060E1C' }}>

      {/* ── Full background image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/photos/why-choose-us.jpeg')",
          // opacity: 0.35,
        }}
      />

      {/* ── Left dark overlay — fades to transparent on the right ── */}
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background:
      'linear-gradient(105deg, rgba(6,14,28,0.72) 0%, rgba(10,22,40,0.55) 42%, rgba(10,22,40,0.32) 62%, rgba(10,22,40,0.15) 82%, transparent 100%)',
  }}
/>

      {/* ── Top + bottom edge fades ── */}
      <div className="absolute inset-x-0 top-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #060E1C, transparent)' }} />
      <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(to top, #060E1C, transparent)' }} />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-20">

        {/* ══ TOP ROW — left text column + right badges column ══════════════ */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">

          {/* ══ LEFT COLUMN ══════════════════════════════════════════════════ */}
          <div className="flex flex-col gap-6 sm:gap-8">

            {/* Eyebrow */}
            <motion.p
              ref={headerRef}
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sm font-bold  uppercase tracking-[0.22em]"
              style={{ color: '#00D4B4' }}
            >
              {/* Engineering Excellence */}
            </motion.p>

            {/* Hero heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08, duration: 0.55 }}
             className="font-['DM_Sans'] font-black leading-tight md:leading-[1.15]"
              
            >
              <h2
                className="font-black leading-none tracking-tight uppercase"
                style={{ fontSize: 'clamp(22px, 5vw, 60px)', color: '#ffffff', lineHeight: 0.95 }}
              >
               Your technology 
                <br />
                <span style={{ color: '#00a550' }}>partner</span>
              </h2>
            </motion.div>

            {/* Description */}
            {/* <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.16, duration: 0.5 }}
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              Innovative motor technology proven in the real world.
              <br />
              Built for performance. Designed for tomorrow.
            </motion.p> */}

            {/* ── Bottom bar ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-3 pt-2"
            >
              <ShieldCheck size={16} color="#00D4B4" strokeWidth={2} />
              <p
                className="text-xs font-bold  uppercase tracking-[0.2em]"
                style={{ color: 'rgba(255,255,255,0.9)' }}
              >
                Real-World Tested.{' '}
                <span style={{ color: '#00D4B4' }}>Built for What's Next.</span>
              </p>
            </motion.div>
          </div>

          {/* ══ RIGHT COLUMN — 3 badge icons ════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.55 }}
            // className="flex flex-row justify-center gap-6 lg:flex-col lg:justify-start lg:gap-8 lg:pt-24"
            // className="flex flex-row justify-center gap-6 lg:flex-col lg:justify-start lg:gap-8 lg:pt-24 lg:-ml-16 lg:-mt-12"
            className="flex flex-row justify-center gap-6 lg:flex-col lg:justify-start lg:gap-8 lg:pt-24 lg:-ml-110 lg:-mt-24" 
          >
            {badges.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                className="flex flex-col items-center gap-3 group cursor-default"
                initial={{ opacity: 0, y: 16 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.45 }}
              >
                {/* Circular icon badge */}
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-105 sm:h-20 sm:w-20"
                  style={{
                    background: 'rgba(6,14,28,0.7)',
                    border: '2px solid rgba(0,212,180,0.35)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 0 24px rgba(0,212,180,0.12)',
                  }}
                >
                  <Icon size={28} color="#00D4B4" strokeWidth={1.8} className="sm:hidden" />
                  <Icon size={34} color="#00D4B4" strokeWidth={1.8} className="hidden sm:block" />
                </div>
                {/* Label */}
                <p
                  className="text-center text-[9px] font-black uppercase tracking-[0.18em] leading-tight sm:text-[10px]"
                  style={{ color: 'rgba(255,255,255,0.75)', whiteSpace: 'pre-line' }}
                >
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ══ FEATURE CARDS — full-width row below, responsive grid ═════════ */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
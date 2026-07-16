
'use client';
import type { ReactNode } from 'react'
import { useState, useEffect, useRef,  } from 'react'
import { useInView } from 'framer-motion'
import { Settings } from 'lucide-react';
import { Wrench} from 'lucide-react'
import { motion } from 'motion/react'
import {
  ArrowRight,
  Cpu,
  CircuitBoard,
  Box,
  ShieldCheck,
  Cloud,
  Check,
  TrendingUp,
  Zap,
  Gauge,
  Thermometer,
  CalendarDays,
  Layers,
  Plug,
  Rocket,
  Leaf,
  Puzzle,
  Gauge as GaugeIcon,
  Magnet,
  CloudCog,
  BarChart2,
  ThermometerSun
} from 'lucide-react'


import {PmsmTechnology} from '@/app/components/pmsmTech'
import {SrmTechnology} from '@/app/components/srmTech'
import { AptBenefits } from '@/app/components/AptBenefits'

const themeStyles = {
  page: { backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' },
  section: { backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' },
  card: { backgroundColor: 'var(--color-card)', color: 'var(--color-card-foreground)', border: '1px solid var(--color-border)' },
  translucentCard: { backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--color-foreground)', border: '1px solid rgba(255,255,255,0.08)' },
  accentButton: { backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-foreground)' },
  muted: { color: 'var(--color-muted-foreground)' },
  foreground: { color: 'var(--color-foreground)' },
  border: { borderColor: 'var(--color-border)' },
  accentText: { color: 'var(--color-primary)' },
  accentSurface: { backgroundColor: 'rgba(0,200,83,0.14)' },
}

// Shared scroll-reveal variants — used only to fade/slide sections in, layout untouched
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: 'easeInOut' as const },
  }),
}

export default function TechnologyPage() {
  return (
    <main className="min-h-screen antialiased" style={themeStyles.page}>
      <Hero />
   
   
      <PmsmTechnology />
  
      <SrmTechnology />
      {/* <KeyTech /> */}
      <AptBenefits />
         {/* <TechnologyPillars /> */}
      {/* <SmartController /> */}
      {/* <IntegratedPlatform /> */}
      <CtaBanner />
    </main>
  )
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] shadow-sm" style={{ ...themeStyles.accentSurface, ...themeStyles.foreground, boxShadow: '0 1px 10px rgba(0,0,0,0.08)' }}>
      {children}
    </span>
  )
}
function Hero() {
  const features = [
    {
      icon: <Leaf size={20} strokeWidth={1.8} />,
      title: 'Rare Earth Free',
      subtitle: 'Sustainable by design',
    },
    {
      icon: <Gauge size={20} strokeWidth={1.8} />,
      title: 'High Performance',
      subtitle: 'More power. Better efficiency.',
    },
    {
      icon: <ShieldCheck size={20} strokeWidth={1.8} />,
      title: 'Built to Last',
      subtitle: 'Rugged. Reliable. Road-ready.',
    },
    {
      icon: <Puzzle size={20} strokeWidth={1.8} />,
      title: 'Seamless Integration',
      subtitle: "Designed for today's EV platforms.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#ffffff', borderBottom: '1px solid #e8eef4'}}
    >
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 mt-20">

        {/* ── Main two-col row ── */}
        <div className="grid items-center gap-8 pt-16 pb-10 lg:grid-cols-2 lg:pt-20 lg:pb-12">

          {/* LEFT */}
          <motion.div
            className="space-y-5"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <SectionLabel>Our Technology</SectionLabel>

            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              style={{ color: '#0d1b2a', lineHeight: 1.15 }}
            >
              Smarter Engineering.
              <br />
              {/* ↓ hardcoded green — bypasses any CSS var issue */}
              <span style={{ color: '#00a550' }}>Stronger Impact.</span>
            </h1>

            <p
              className="max-w-[420px] text-base leading-7"
              style={{ color: '#4a5a6a' }}
            >
              AproposDrive's rare earth-free technology delivers unmatched performance,
              efficiency, and reliability—powering India's mobility with homegrown innovation.
            </p>
          </motion.div>

          {/* RIGHT: circular orb */}
         {/* RIGHT: circular orb */}
<motion.div
  className="flex items-center justify-center pt-8 lg:pt-0 -mt-10 lg:mt-0"
  initial={{ opacity: 0, scale: 0.94 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.12 }}
>
  <div
    className="relative flex items-center justify-center
w-[240px] h-[240px]
sm:w-[300px] sm:h-[300px]
lg:w-[440px] lg:h-[440px]"
    style={{
      // width: 'clamp(220px, 55vw, 440px)',
      // height: 'clamp(220px, 55vw, 440px)',
      borderRadius: '50%',
      background:
        'radial-gradient(circle at 50% 45%, #ddf0e8 0%, #e8f5ff 40%, #f0f8ff 65%, transparent 80%)',
    }}
  >
    <motion.svg
      className="pointer-events-none absolute inset-0"
      width="100%"
      height="100%"
      viewBox="0 0 440 440"
      animate={{ rotate: 360 }}
      transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
    >
      <circle cx="220" cy="220" r="216" fill="none"
        stroke="rgba(0,165,80,0.2)" strokeWidth="1.2" strokeDasharray="5 9" />
      <circle cx="220" cy="220" r="196" fill="none"
        stroke="rgba(0,165,80,0.1)" strokeWidth="1" />
    </motion.svg>
    <motion.img
      src="/photos/tech_hero-removebg2.png"
      alt="AproposDrive Motor & Controller"
      className="relative z-10 h-auto w-[80%] object-contain"
      style={{ filter: 'drop-shadow(0 16px 32px rgba(0,40,80,0.15)) ' }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
</motion.div>
        </div>
      </div>

      {/* ── Feature strip — pulled OUTSIDE the padded container ── */}



      {/* ── Feature strip — left-aligned, confined to left half ── */}
<div
  className="-mt-12 sm:-mt-14 lg:-mt-[100px]"
  style={{
    borderTop: '1px solid #e0eaf2',
    background: '#ffffff',
  }}
>
<div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
  <div className="grid lg:grid-cols-2">
    <div>
  <div
    className="flex justify-between items-start text-center"
  >
      {features.map((f, i) => (
  <motion.div
    key={i}
    className="flex-1 flex flex-col items-center text-center"
    style={{
      padding: '12px 4px',
      // marginLeft:'-40px',
      gap: '6px',
    }}
    custom={i}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
  >
  <div
  style={{
    width: 46,
    height: 46,
    borderRadius: '50%',
    background: 'rgba(0,165,80,0.08)',
    color: '#00a550',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  {f.icon}
</div>
          <p
  style={{
    fontSize: 14,
    fontWeight: 600,
    color: '#0d1b2a',
    margin: 0,
  }}
>
  {f.title}
</p>

<p
  style={{
    fontSize: 12,
    color: '#6b7e8f',
    lineHeight: 1.3,
    margin: 0,
  }}
>
  {f.subtitle}
</p>
        </motion.div>
      ))}
    </div>
  </div>
</div>
</div>
</div>
    </section>
  );
}

function TechnologyPillars() {
  const pillars = [
    {
      icon: <Cpu size={60} strokeWidth={1.6} />,
      title: 'SRM Motor Technology',
      body: 'Proprietary Switched Reluctance Motor technology designed for high efficiency and robustness.',
    },
    {
      icon: <CircuitBoard size={60} strokeWidth={1.6} />,
      title: 'Advanced Control Systems',
      body: 'High performance motor controllers with precise control, analytics and real-time diagnostics.',
    },
    {
      icon: <Box size={60} strokeWidth={1.6} />,
      title: 'Integrated Powertrain',
      body: 'Fully integrated powertrain platforms that combine motor, gearbox and controller.',
    },
    {
      icon: <ShieldCheck size={60} strokeWidth={1.6} />,
      title: 'Functional Safety',
      body: 'Built with ISO 26262 compliant processes and advanced safety mechanisms.',
    },
    {
      icon: <CloudCog size={60} strokeWidth={1.6} />,
      title: 'Connectivity & IoT',
      body: 'IoT enabled systems for remote monitoring, predictive maintenance and OTA updates.',
    },
  ];

  return (
    <section
      style={{ background: '#ffffff' }}
      className="py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* ── Centered heading ── */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <p
            className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] mb-3"
            style={{ color: '#00a550' }}
          >
            Our Technology Pillars
          </p>

          <h2
            className="
              text-2xl
              sm:text-3xl
              lg:text-4xl
              font-bold
              leading-tight
            "
            style={{ color: '#0d1b2a' }}
          >
            Built on Deep Engineering. Driven by Innovation.
          </h2>
        </motion.div>

        {/* ── Responsive Grid ── */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-6
            mt-10
          "
        >
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="
                flex
                flex-col
                items-center
                text-center
                lg:items-start
                lg:text-left
                gap-3
                px-3
                py-5
              "
            >
              {/* Icon */}
              <div
                className="
                  w-16
                  h-16
                  sm:w-20
                  sm:h-20
                  rounded-full
                  flex
                  items-center
                  justify-center
                  transition-transform
                  duration-300
                  hover:scale-105
                "
                style={{
                  border: '1.5px solid #d0e8d8',
                  background: '#f4fbf6',
                  color: '#00a550',
                  flexShrink: 0,
                }}
              >
                {p.icon}
              </div>

              {/* Title */}
              <p
                className="text-base font-bold leading-snug m-0"
                style={{ color: '#0d1b2a' }}
              >
                {p.title}
              </p>

              {/* Description */}
              <p
                className="text-sm leading-6 m-0"
                style={{ color: '#6b7e8f' }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}




// ── SrmTechnology — replace existing function in TechnologyPage.tsx ───────────
// Imports needed (add to your existing imports if not present):
// import { Check, Cpu, Zap, Gauge, Shield, Settings, Layers, BarChart2, ThermometerSun, Magnet, Box, Wrench } from 'lucide-react'
// ── SrmTechnology — replace existing function in TechnologyPage.tsx ───────────
// Required additional imports (add if missing):
// import { BarChart2, Thermometer, Magnet, Wrench, Box, Settings, TrendingUp } from 'lucide-react'

// function SrmTechnology() {
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: '-6% 0px' })

//   // Simple breakpoint hook
//   const [isMobile, setIsMobile] = useState(false)
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 768)
//     check()
//     window.addEventListener('resize', check)
//     return () => window.removeEventListener('resize', check)
//   }, [])

//   const motorFeatures = [
//     { icon: Zap,         label: 'High Power\nDensity' },
//     { icon: Gauge,       label: 'Superior\nEfficiency' },
//     { icon: Settings,    label: 'Smooth &\nQuiet Operation' },
//     { icon: TrendingUp,  label: 'High Speed\nCapability' },
//     { icon: Cpu,         label: 'Excellent Torque\nControl' },
//     { icon: ShieldCheck, label: 'Sensorless\nControl' },
//   ]

//   const capabilities = [
//     { icon: Magnet,      label: 'Electromagnetic Design' },
//     { icon: BarChart2,   label: 'Finite Element Analysis (FEA)' },
//     { icon: Gauge,       label: 'Torque–Speed Optimization' },
//     { icon: Zap,         label: 'Core & Copper Loss Analysis' },
//     { icon: Thermometer, label: 'Thermal Simulation' },
//     { icon: Cpu,         label: 'Inductance & Flux Analysis' },
//     { icon: Box,         label: 'CAD & 3D Modeling' },
//     { icon: Wrench,      label: 'Prototype Development' },
//   ]

//   const colStyle: React.CSSProperties = isMobile
//     ? { padding: '28px 20px', borderTop: '1px solid #e8eef4' }
//     : { padding: 'clamp(28px, 3.5vw, 52px)', flex: 1 }

//   return (
//     <section
//       ref={ref}
//       className="py-4 sm:py-6 lg:py-8"
//       style={{ background: '#f8fafb' }}
//     >
//       <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-14">

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
//           style={{
//             background: '#ffffff',
//             border: '1px solid #e8eef4',
//             borderRadius: 20,
//             boxShadow: '0 4px 32px rgba(0,0,0,0.07)',
//             display: 'flex',
//             flexDirection: isMobile ? 'column' : 'row',
//             minHeight: isMobile ? 'auto' : 'clamp(380px, 40vw, 500px)',
//           }}
//         >

//           {/* ══ LEFT: image ══ */}
//           <motion.div
//             initial={{ opacity: 0, x: isMobile ? 0 : -20 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
//             style={{
//               flex: 1,
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               padding: 'clamp(28px, 4vw, 52px)',
//               background: 'linear-gradient(145deg, #f0faf5 0%, #eaf5ff 100%)',
//               borderRadius: isMobile ? '20px 20px 0 0' : '20px 0 0 20px',
//             }}
//           >
//             <div style={{
//               position: 'relative',
//               width: 'clamp(180px, 20vw, 280px)',
//               height: 'clamp(180px, 20vw, 280px)',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//               <div style={{
//                 position: 'absolute',
//                 inset: 0,
//                 borderRadius: '50%',
//                 background: 'radial-gradient(circle, rgba(0,165,80,0.10) 0%, transparent 72%)',
//                 border: '1.5px solid rgba(0,165,80,0.18)',
//               }} />
//               <div style={{
//                 position: 'absolute',
//                 width: '75%', height: '75%',
//                 borderRadius: '50%',
//                 border: '1px dashed rgba(0,165,80,0.25)',
//                 top: '50%', left: '50%',
//                 transform: 'translate(-50%,-50%)',
//               }} />
//               <motion.img
//                 src="/photos/srmtech.png"
//                 alt="SRM Motor"
//                 style={{
//                   width: '100%', height: '100%',
//                   objectFit: 'contain',
//                   position: 'relative', zIndex: 1,
//                   filter: 'drop-shadow(0 12px 28px rgba(0,0,0,0.14))',
//                 }}
//                 animate={{ y: [0, -8, 0] }}
//                 transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
//               />
//             </div>
//           </motion.div>

//           {/* ══ CENTER: content ══ */}
//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
//             style={{
//               ...colStyle,
//               borderLeft: isMobile ? 'none' : '1px solid #e8eef4',
//               borderRight: isMobile ? 'none' : '1px solid #e8eef4',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//             }}
//           >
//             <p style={{ fontSize: 'clamp(12px, 1.1vw, 15px)', fontWeight: 700, color: '#00a550', marginBottom: 8 }}>
//               01
//             </p>
//             <h2 style={{
//               fontSize: 'clamp(17px, 1.9vw, 26px)',
//               fontWeight: 900, color: '#0d1b2a',
//               textTransform: 'uppercase', lineHeight: 1.2,
//               marginBottom: 10, letterSpacing: '-0.01em',
//             }}>
//               Switched Reluctance<br />Motor (SRM)
//             </h2>
//             <p style={{ fontSize: 'clamp(11.5px, 1vw, 14px)', fontWeight: 600, color: '#00a550', marginBottom: 12 }}>
//               Rare Earth-Free. High Efficiency. Robust.
//             </p>
//             <p style={{
//               fontSize: 'clamp(12px, 1.05vw, 14px)',
//               color: '#4a5a6a', lineHeight: 1.75,
//               marginBottom: 'clamp(16px, 2vw, 28px)',
//             }}>
//               SRM technology eliminates rare earth materials entirely, delivering outstanding
//               efficiency, superior fault tolerance, and dependable performance across all
//               operating conditions — ideal for next-generation electric mobility.
//             </p>

//             {/* 3×2 feature grid */}
//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(3, 1fr)',
//               gap: 'clamp(10px, 1.4vw, 20px)',
//             }}>
//               {motorFeatures.map((f, i) => {
//                 const Icon = f.icon
//                 return (
//                   <motion.div
//                     key={f.label}
//                     initial={{ opacity: 0, y: 8 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.25 + i * 0.055, duration: 0.35 }}
//                     style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}
//                   >
//                     <div style={{
//                       width: 'clamp(30px, 2.8vw, 40px)',
//                       height: 'clamp(30px, 2.8vw, 40px)',
//                       borderRadius: '50%',
//                       background: 'rgba(0,165,80,0.07)',
//                       border: '1px solid rgba(0,165,80,0.2)',
//                       display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
//                     }}>
//                       <Icon size={13} color="#00a550" strokeWidth={1.8} />
//                     </div>
//                     <p style={{ fontSize: 'clamp(9px, 0.82vw, 11.5px)', color: '#4a5a6a', lineHeight: 1.4, whiteSpace: 'pre-line', margin: 0 }}>
//                       {f.label}
//                     </p>
//                   </motion.div>
//                 )
//               })}
//             </div>
//           </motion.div>

//           {/* ══ RIGHT: capabilities ══ */}
//           <motion.div
//             initial={{ opacity: 0, x: isMobile ? 0 : 20 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.18, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
//             style={{
//               ...colStyle,
//               borderRadius: isMobile ? '0 0 20px 20px' : '0 20px 20px 0',
//               display: 'flex', flexDirection: 'column', justifyContent: 'center',
//             }}
//           >
//             <p style={{
//               fontSize: 'clamp(9px, 0.82vw, 11px)',
//               fontWeight: 800, color: '#00a550',
//               letterSpacing: '0.14em', textTransform: 'uppercase',
//               marginBottom: 'clamp(12px, 1.4vw, 20px)',
//             }}>
//               Engineering Capabilities
//             </p>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 1vw, 14px)' }}>
//               {capabilities.map((c, i) => {
//                 const Icon = c.icon
//                 return (
//                   <motion.div
//                     key={c.label}
//                     initial={{ opacity: 0, x: 10 }}
//                     animate={inView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ delay: 0.28 + i * 0.05, duration: 0.32 }}
//                     style={{ display: 'flex', alignItems: 'center', gap: 10 }}
//                   >
//                     <div style={{
//                       width: 'clamp(22px, 1.8vw, 28px)',
//                       height: 'clamp(22px, 1.8vw, 28px)',
//                       borderRadius: 6,
//                       background: 'rgba(0,165,80,0.07)',
//                       border: '1px solid rgba(0,165,80,0.17)',
//                       display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
//                     }}>
//                       <Icon size={11} color="#00a550" strokeWidth={1.8} />
//                     </div>
//                     <span style={{ fontSize: 'clamp(11px, 1vw, 13.5px)', color: '#0d1b2a', lineHeight: 1.4 }}>
//                       {c.label}
//                     </span>
//                   </motion.div>
//                 )
//               })}
//             </div>
//           </motion.div>

//         </motion.div>
//       </div>
//     </section>
//   )
// }





function SmartController() {
  const points = [
    'High-performance MCU/DSP platform',
    'Advanced SRM control algorithms',
    'Real-time diagnostics and fault management',
    'CAN and CAN FD communication support',
    'OTA updates and remote calibration',
    'Functional safety compliant design',
  ]

  return (
    <section className="py-24 sm:py-28" style={themeStyles.section}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* Image now second in JSX order = right on desktop */}
          <motion.div
            className="rounded-[2rem] p-8 mt-10 shadow-[0_20px_40px_rgba(0,0,0,0.08)] sm:p-10 lg:order-2"
            style={themeStyles.translucentCard}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <img
              src="/photos/a-c-sytem.png"
              alt="AproposDrive Smart Controller"
              className="h-80 w-full rounded-[1.75rem] object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </motion.div>

          {/* Content now first in JSX order = left on desktop */}
          <motion.div
            className="space-y-8 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <SectionLabel>Advanced Control Systems</SectionLabel>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl" style={themeStyles.foreground}>
                Smarter Control. Superior Performance.
              </h2>
              <p className="max-w-xl text-base leading-8 sm:text-lg" style={themeStyles.muted}>
                Our in-house developed controllers are engineered for precision, safety, and connectivity.
              </p>
            </div>
            <ul className="space-y-4">
              {points.map((point, i) => (
                <motion.li
                  key={point}
                  className="flex gap-4 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.14)] hover:border-[#10B981] hover:bg-[#111827]"
                  style={{ ...themeStyles.card, border: '1px solid rgba(255,255,255,0.08)' }}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeUp}
                >
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-2xl shadow-sm" style={{ backgroundColor: 'rgba(0,200,83,0.14)', color: 'var(--color-primary)' }}>
                    <Check size={12} />
                  </span>
                  <span className="text-sm leading-7" style={{ color: 'var(--color-card-foreground)' }}>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          

        </div>
      </div>
    </section>
  )
}



function IntegratedPlatform() {
  const items = [
    {
      icon: Layers,
      title: 'Modular Architecture',
      body: 'Scalable design for various power and voltage requirements.',
    },
    {
      icon: Plug,
      title: 'Plug & Play Integration',
      body: 'Easy integration with vehicle systems and software.',
    },
    {
      icon: TrendingUp,
      title: 'Faster Time to Market',
      body: 'Pre-validated solutions reduce development time and risk.',
    },
  ]

  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* ── LEFT: content ── */}
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p style={{ fontSize: 12, fontWeight: 700, color: '#00a550', letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0 }}>
              Integrated Platform
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#0d1b2a', lineHeight: 1.2, margin: 0 }}>
              One Platform. Endless Possibilities.
            </h2>

            <p style={{ fontSize: 14, color: '#4a5a6a', lineHeight: 1.7, margin: 0, maxWidth: 420 }}>
              Our integrated powertrain platforms are flexible and scalable, designed to meet
              the needs of diverse vehicle segments.
            </p>

            {/* Flat 3-column row, no cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                marginTop: '12px',
              }}
            >
              {items.map(({ icon: Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  className="transition-transform duration-300 hover:-translate-y-1"
                  style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                >
                  <Icon size={70} strokeWidth={1.6} color="#00a550" />
                  <p style={{ fontSize: 13.5, fontWeight: 700, color: '#0d1b2a', margin: 0, lineHeight: 1.4 }}>
                    {title}
                  </p>
                  <p style={{ fontSize: 12, color: '#6b7e8f', margin: 0, lineHeight: 1.6 }}>
                    {body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: image, light grey box ── */}
          <motion.div
            className="rounded-[2rem] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] sm:p-10"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <img
              src="/photos/integreted-p.jpeg"
              alt="Integrated EV Powertrain Platform"
              className="transition-transform duration-500 hover:scale-[1.02]"
              style={{
                width: '100%',
                maxWidth: 800,
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '2rem',
                // paddingLeft: '10px',
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}




function CtaBanner() {
  return (
    <section className="bg-[#FFFDF7] py-8">
      <div className="w-full px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-green-100 bg-gradient-to-r from-[#FFFDF7] via-[#F7F3E9] to-[#EEF8F1] px-6 py-6 shadow-md transition-all duration-500 hover:shadow-xl lg:px-10 lg:py-7"
        >
          {/* Background Glow */}
          <div className="absolute -right-20 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-green-600/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Left Content */}
            <div className="flex-1 lg:pr-12">
              <span className="mb-2 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-700">
                Partner With Us
              </span>

              <h2 className="text-2xl font-bold leading-tight text-[#14361F] lg:text-3xl">
                Let's Build the Future of{" "}
                <span className="text-green-700">
                  Electric Mobility Together
                </span>
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5E6D60]">
                Collaborate with our engineering experts to create reliable,
                scalable, and innovative EV solutions that drive the future of
                sustainable transportation.
              </p>
            </div>

            {/* Right CTA */}
            <div className="flex w-full lg:w-auto lg:justify-end flex-shrink-0">
              <a
                href="/contact"
                className="group inline-flex min-w-[210px] items-center justify-center gap-2 rounded-full bg-[#00a550] px-7 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0F4725] hover:shadow-xl"
              >
                Talk To Our Team

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
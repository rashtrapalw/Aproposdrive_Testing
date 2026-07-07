
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Leaf, ShieldCheck, Zap, Globe } from 'lucide-react'
import SupportersSection from '../../src/app/components/SupporterSection'
import { JourneyTimeline } from '@/app/components/JourneyTimeline'


interface Feature {
  icon: React.ElementType
  title: string
  desc: string
}

const features: Feature[] = [
  { icon: Leaf,        title: 'Rare Earth Free',  desc: 'For a sustainable future' },
  { icon: ShieldCheck, title: 'Built to Last',     desc: 'Rugged. Reliable. Road-Ready.' },
  // { icon: Zap,         title: 'High Performance',  desc: 'Maximum efficiency, minimum compromise.' },
  { icon: Globe,       title: 'Made in India',     desc: 'Proudly designed and manufactured.' },
]

const goals = [
  {
    title: 'Our Mission & Goal',
    body: 'To drive the world towards a sustainable future by delivering innovative, efficient and cost-effective electric mobility solutions through rare earth-free technologies. To become India’s leading provider of rare earth-free EV powertrain technology — enabling a cleaner, more reliable, and self-reliant electric mobility ecosystem.',
  },
  // {
  //   title: 'Our Goal',
  //   body: "To become India's leading provider of rare earth-free EV powertrain technology — enabling a cleaner, more reliable, and self-reliant electric mobility ecosystem.",
  // },
]

// ── Feature Chip ──────────────────────────────────────────────────────────────
function FeatureChip({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ delay: 0.55 + index * 0.08, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col items-center sm:items-start gap-1.5 text-center sm:text-left"
    >
      <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0" style={{ color: '#10044c' }}>
        <Icon className="w-5 h-5 text-green-600" strokeWidth={1.8} />
      </div>
      <p className="text-sm font-semibold text-green-800 leading-tight" style={{ color: '#10044c' }}>
        {feature.title}
      </p>
      {/* <p className="text-xs text-gray-400 leading-snug max-w-[120px]">{feature.desc}</p> */}
    </motion.div>
  )
}



function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })
 
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: 580 }}>
 
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src="/photos/about-bg.jpeg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
      </div>
 
      {/* Left overlay — content readable, right image shows through */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.93) 28%, rgba(255,255,255,0.6) 52%, rgba(255,255,255,0.0) 78%)',
        }}
      />
 
      {/* Brand badge — bottom right, desktop */}
      {/* <div className="absolute bottom-8 right-8 z-10 hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-3.5 py-2 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse block" />
        <span className="text-xs font-bold text-gray-800 uppercase tracking-widest">AproposDrive</span>
      </div> */}
 
      {/* Content — left side only */}
      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12"
        style={{ paddingTop: 'clamp(100px, 13vw, 144px)', paddingBottom: 'clamp(56px, 8vw, 100px)' }}
      >
        <div style={{ maxWidth: 500 }}>
 
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-[11px] font-bold uppercase tracking-[0.24em] mb-4"
            style={{ color: '#00a550' }}
          >
            About AproposDrive
          </motion.p>
 
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-black leading-[1.08] tracking-tight text-gray-900 mb-5"
            style={{ fontSize: 'clamp(30px, 3.5vw, 50px)' }}
          >
            Powering Innovation<br />
            Through <span className="text-green-600" style={{ color: '#00a550' }}>Engineering.</span>
          </motion.h2>
 
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-sm sm:text-[15px] text-gray-600 leading-relaxed mb-8"
          >
            Our passion for engineering drives us to build high-performance motor and controller
            technologies that empower industries to embrace the future of electric mobility.
          </motion.p>
 
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            style={{ originX: 0, background: 'rgba(0,0,0,0.1)', height: 1, marginBottom: 32 }}
            transition={{ delay: 0.32, duration: 0.5, ease: 'easeOut' }}
          />
 
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-7">
            {features.map((f, i) => (
              <FeatureChip key={f.title} feature={f} index={i} />
            ))}
          </div>
 
        </div>
      </div>
 
    </section>
  )
}




// ── Mission Section ───────────────────────────────────────────────────────────
function MissionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: 620 }}>

      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src="/photos/mission-bg.jpeg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark overlay — heavier on left for readability */}
      {/* <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(5,12,30,0.92) 0%, rgba(5,12,30,0.82) 50%, rgba(5,12,30,0.55) 75%, rgba(5,12,30,0.35) 100%)',
        }}
      /> */}

      {/* Edge fades */}
      <div
        className="absolute inset-x-0 top-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(5,12,30,0.6), transparent)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(5,12,30,0.6), transparent)' }}
      />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="max-w-xl">

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-black leading-tight tracking-tight text-white mb-8 sm:mb-10"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
          >
            Our Mission &amp; Goal
          </motion.h2>

          {/* Mission + Goal blocks */}
          <div className="flex flex-col gap-7 sm:gap-8">
            {goals.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.15 + i * 0.12,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    className="flex-shrink-0 w-1 rounded-full"
                    style={{ background: '#00a550', height: 20 }}
                    initial={{ scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : {}}
                    transition={{ delay: 0.2 + i * 0.12, duration: 0.35, ease: 'easeOut' }}
                  />
                  <h3
                    className="font-bold text-white"
                    style={{ fontSize: 'clamp(16px, 2.5vw, 20px)' }}
                  >
                    {g.title}
                  </h3>
                </div>
                <p
                  className="text-sm leading-relaxed sm:text-[15px] sm:leading-7"
                  style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 460, paddingLeft: 16 }}
                >
                  {g.body}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}





// 

{/* ── Founders Section ── paste this inside your AboutPage, after <MissionSection /> ── */}

function FoundersSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  const founders = [
    {
      name: 'saurabh ',
      role: 'Founder & Principal',
      image: '/photos/saurabh-removebg-preview.png',
      side: 'left' as const,
    },
    {
      name: 'Nimish',
      role: 'Founder & Principal',
      image: '/photos/nimish-removebg-preview.png',
      side: 'right' as const,
    },
  ]

//   return (
//     <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

//         {/* ── Outer card ── */}
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 24 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
//           className="relative rounded-3xl overflow-hidden"
//           style={{
//             background: '#f5f0eb',
//             border: '1px solid #e8e0d8',
//             boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
//             minHeight: 340,
//           }}
//         >
//           {/* ── Three-column layout ── */}
//           <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-end min-h-[340px]">

//             {/* LEFT founder */}
//             <motion.div
//               initial={{ opacity: 0, x: -24 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
//               className="flex flex-col items-center sm:items-start"
//             >
//               {/* Photo — bottom-anchored, slightly cut */}
//               <div
//                 className="relative mx-auto sm:mx-0 sm:ml-6 lg:ml-10"
//                 style={{ width: 160, height: 220 }}
//               >
//                 <img
//                   src={founders[0].image}
//                   alt={founders[0].name}
//                   className="w-full h-full object-cover object-top rounded-t-2xl"
//                   style={{
//                     filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.12))',
//                   }}
//                 />
//               </div>
//               {/* Name below photo */}
//               <div className="pb-5 pt-3 pl-6 lg:pl-10 text-left hidden sm:block">
//                 <p className="font-black text-lg leading-tight" style={{ color: '#0d1b2a' }}>
//                   {founders[0].name}
//                 </p>
//                 <p className="text-[11px] font-bold uppercase tracking-widest mt-0.5" style={{ color: '#6b7e8f' }}>
//                   {founders[0].role}
//                 </p>
//               </div>
//             </motion.div>

//             {/* CENTER: heading + description */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
//               className="flex flex-col items-center justify-center text-center px-6 py-10 sm:py-0 sm:px-8 lg:px-12"
//               style={{ minWidth: 220, maxWidth: 320 }}
//             >
//               {/* Decorative element */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={inView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ delay: 0.25, duration: 0.4 }}
//                 className="mb-3"
//               >
//                 <div
//                   className="mx-auto rounded-full"
//                   style={{
//                     width: 36,
//                     height: 4,
//                     background: 'linear-gradient(90deg, #00a550, #4ade80)',
//                     borderRadius: 99,
//                   }}
//                 />
//               </motion.div>

//               <h2
//                 className="font-black uppercase leading-none tracking-tight mb-4"
//                 style={{
//                   fontSize: 'clamp(28px, 4vw, 42px)',
//                   color: '#0d1b2a',
//                   letterSpacing: '-0.01em',
//                 }}
//               >
//                 Meet the<br />Founders
//               </h2>

//               <p
//                 className="text-xs leading-relaxed"
//                 style={{ color: '#6b7e8f', maxWidth: 240 }}
//               >
//                 Our founders bring decades of expertise in motor technology, power electronics,
//                 and electric mobility — driving AproposDrive's vision from the ground up.
//               </p>

//               {/* Mobile: both names below description */}
//               <div className="flex flex-col gap-3 mt-6 w-full sm:hidden">
//                 {founders.map((f) => (
//                   <div key={f.name} className="text-center">
//                     <p className="font-black text-base" style={{ color: '#0d1b2a' }}>{f.name}</p>
//                     <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#6b7e8f' }}>{f.role}</p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* RIGHT founder */}
//             <motion.div
//               initial={{ opacity: 0, x: 24 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
//               className="flex flex-col items-center sm:items-end"
//             >
//               <div
//                 className="relative mx-auto sm:mx-0 sm:mr-6 lg:mr-10"
//                 style={{ width: 160, height: 220 }}
//               >
//                 <img
//                   src={founders[1].image}
//                   alt={founders[1].name}
//                   className="w-full h-full object-cover object-top rounded-t-2xl"
//                   style={{
//                     filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.12))',
//                   }}
//                 />
//               </div>
//               {/* Name below photo */}
//               <div className="pb-5 pt-3 pr-6 lg:pr-10 text-right hidden sm:block">
//                 <p className="font-black text-lg leading-tight" style={{ color: '#0d1b2a' }}>
//                   {founders[1].name}
//                 </p>
//                 <p className="text-[11px] font-bold uppercase tracking-widest mt-0.5" style={{ color: '#6b7e8f' }}>
//                   {founders[1].role}
//                 </p>
//               </div>
//             </motion.div>

//           </div>

//           {/* Subtle green bottom accent line */}
//           <motion.div
//             className="absolute bottom-0 inset-x-0 h-[3px]"
//             style={{ background: 'linear-gradient(90deg, transparent, #00a550, transparent)' }}
//             initial={{ scaleX: 0 }}
//             animate={inView ? { scaleX: 1 } : {}}
//             transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
//           />
//         </motion.div>

//       </div>
//     </section>
//   )
// }



return (
  <section className="relative w-full bg-white py-20 lg:py-28 overflow-hidden">
    <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-20">

      {/* Card */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative overflow-hidden rounded-[36px]"
        style={{
          background: "#f5f0eb",
          border: "1px solid #e8e0d8",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center min-h-[560px]">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: 0.15,
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="order-2 lg:order-1 flex flex-col items-center lg:items-start justify-end h-full py-10 lg:py-0 lg:pl-10 xl:pl-16"
          >
            <div
              className="
                relative
                w-[220px]
                h-[300px]
                sm:w-[260px]
                sm:h-[360px]
                lg:w-[300px]
                lg:h-[420px]
              "
            >
              <img
                src={founders[0].image}
                alt={founders[0].name}
                className="w-full h-full object-cover object-top rounded-3xl"
                style={{
                  filter: "drop-shadow(0 20px 35px rgba(0,0,0,.15))",
                }}
              />
            </div>

            <div className="hidden lg:block mt-6 text-left">
              <h3
                className="font-black text-3xl leading-tight"
                style={{ color: "#0d1b2a" }}
              >
                {founders[0].name}
              </h3>

              <p
                className="mt-2 text-sm uppercase tracking-[0.25em] font-semibold"
                style={{ color: "#6b7e8f" }}
              >
                {founders[0].role}
              </p>
            </div>
          </motion.div>

          {/* ================= CENTER ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.1,
              duration: 0.55,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="order-1 lg:order-2 flex flex-col items-center justify-center text-center px-6 md:px-10 lg:px-14 py-14"
          >
            {/* Accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.25 }}
              className="mb-5"
            >
              <div
                className="rounded-full mx-auto"
                style={{
                  width: 60,
                  height: 5,
                  background:
                    "linear-gradient(90deg,#00a550,#58e18f,#00a550)",
                }}
              />
            </motion.div>

            <h2
              className="font-black uppercase leading-[0.9] tracking-tight"
              style={{
                color: "#0d1b2a",
                fontSize: "clamp(40px,6vw,72px)",
              }}
            >
              Meet Two
              <br />
               visionaries
            </h2>

            <p
              className="mt-8 text-sm md:text-base leading-7 max-w-md"
              style={{ color: "#6b7e8f" }}
            >
              Our founders bring decades of expertise in motor technology,
              power electronics and electric mobility, leading
              AproposDrive's mission to build efficient, sustainable and
              next-generation electric drive solutions.
            </p>

            {/* Mobile Founder Names */}
            <div className="lg:hidden mt-10 flex flex-col gap-8 w-full">
              {founders.map((f) => (
                <div key={f.name}>
                  <h3
                    className="font-black text-2xl"
                    style={{ color: "#0d1b2a" }}
                  >
                    {f.name}
                  </h3>

                  <p
                    className="text-sm uppercase tracking-[0.25em] mt-2"
                    style={{ color: "#6b7e8f" }}
                  >
                    {f.role}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: 0.15,
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="order-3 flex flex-col items-center lg:items-end justify-end h-full py-10 lg:py-0 lg:pr-10 xl:pr-16"
          >
            <div
              className="
                relative
                w-[220px]
                h-[300px]
                sm:w-[260px]
                sm:h-[360px]
                lg:w-[300px]
                lg:h-[420px]
              "
            >
              <img
                src={founders[1].image}
                alt={founders[1].name}
                className="w-full h-full object-cover object-top rounded-3xl"
                style={{
                  filter: "drop-shadow(0 20px 35px rgba(0,0,0,.15))",
                }}
              />
            </div>

            <div className="hidden lg:block mt-6 text-right">
              <h3
                className="font-black text-3xl leading-tight"
                style={{ color: "#0d1b2a" }}
              >
                {founders[1].name}
              </h3>

              <p
                className="mt-2 text-sm uppercase tracking-[0.25em] font-semibold"
                style={{ color: "#6b7e8f" }}
              >
                {founders[1].role}
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Accent */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[4px]"
          style={{
            background:
              "linear-gradient(90deg,transparent,#00a550,transparent)",
          }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{
            delay: 0.5,
            duration: 0.7,
            ease: "easeOut",
          }}
        />
      </motion.div>

    </div>
  </section>
)
}





// #################################################################################################################################








// ── Page export ───────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main>
      <AboutSection />
      <MissionSection />
      <FoundersSection />
      <SupportersSection />
      <JourneyTimeline />
      {/* <SupportersSection /> */}
      {/* <InvestorsSection /> */}
    
    </main>
  )
}

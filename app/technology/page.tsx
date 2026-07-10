
'use client';
import type { ReactNode } from 'react'
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
} from 'lucide-react'

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
      {/* <TechnologyPillars /> */}
      <SrmTechnology />
      {/* <KeyTech /> */}
      <SmartController />
      <IntegratedPlatform />
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
      src="/photos/tech_hero-removebg.png"
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
  style={{
    borderTop: '1px solid #e0eaf2',
    background: '#ffffff',
  }}
 className="-mt-12 sm:-mt-14 lg:-mt-[100px]" 
>
  <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
    <div
      className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 w-full lg:max-w-[520px]"
    >
      {features.map((f, i) => (
        <motion.div
              key={i}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
              style={{
                gap: '8px',
                padding: '20px 10px',
              }}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
                    <div className="flex justify-center lg:justify-start w-full">
              <div
                className="transition-transform duration-300 hover:scale-110"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  background: 'rgba(0,165,80,0.08)',
                  color: '#00a550',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {f.icon}
              </div>
            </div>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#0d1b2a', margin: 0 }}>
            {f.title}
          </p>
          <p style={{ fontSize: 11.5, color: '#6b7e8f', lineHeight: 1.5, margin: 0 }}>
            {f.subtitle}
          </p>
        </motion.div>
      ))}
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
    <section style={{ background: '#ffffff' }} className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* ── Centered heading ── */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: '#00a550',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              margin: '0 0 12px',
            }}
          >
            Our Technology Pillars
          </p>
          <h2
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: '#0d1b2a',
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            Built on Deep Engineering. Driven by Innovation.
          </h2>
        </motion.div>

        {/* ── 5-column card row ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '16px',
            marginTop: '40px',
          }}
        >
          {pillars.map((p, i) => (
            <motion.div
              key={i}
             className="
flex flex-col
items-center text-center
lg:items-start lg:text-left
"
style={{
  gap: '8px',
  padding: '18px 10px',
}}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <div
                className="transition-transform duration-300 hover:scale-105"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  border: '1.5px solid #d0e8d8',
                  background: '#f4fbf6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00a550',
                  flexShrink: 0,
                }}
              >
                {p.icon}
              </div>

              <p style={{ fontSize: 14, fontWeight: 700, color: '#0d1b2a', margin: 0, lineHeight: 1.4 }}>
                {p.title}
              </p>
              <p style={{ fontSize: 12.5, color: '#6b7e8f', margin: 0, lineHeight: 1.6 }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}







function SrmTechnology() {
  const features = [
    'Scarce and expensive resources',
    'Environmentally intensive mining',
    'Supply chain vulnerabilities',
    'Strategic independence for India',
  ];

  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* ── LEFT: text content ── */}
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p style={{ fontSize: 12, fontWeight: 700, color: '#00a550', letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0 }}>
              Understanding Rare Earths
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#0d1b2a', lineHeight: 1.2, margin: 0 }}>
              Why Going Rare Earth-Free is the Future
            </h2>

            <p style={{ fontSize: 14, color: '#4a5a6a', lineHeight: 1.75, margin: 0, maxWidth: 360 }}>
              Rare earth elements are limited, geopolitically sensitive, and environmentally damaging
              to extract. We've built our technology to deliver the same—if not better—performance
              without relying on them.
            </p>

            {/* Checklist — no card boxes, just icon + text */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {features.map((f, i) => (
                <motion.li
                  key={f}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                >
                  <span
                    className="transition-transform duration-300 hover:scale-110"
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: '#00a550',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={13} color="#ffffff" strokeWidth={2.5} />
                  </span>
                  <span style={{ fontSize: 13.5, fontWeight: 600, color: '#0d1b2a' }}>{f}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── CENTER: floating image, no container box ── */}
          <motion.div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
             <motion.img
              src="/photos/w-rare-earth.jpeg"
              alt="Rare earth mineral"
              style={{
                width: '100%',
                maxWidth: 500,   // increase from 260
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 18px 36px rgba(0,0,0,0.18))',
                paddingTop: '30px',  // add some top padding
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* ── RIGHT: stat card ── */}
          
        </div>
      </div>
    </section>
  );
}



function KeyTech() {
  const stats = [
    { icon: <TrendingUp size={20} strokeWidth={1.8} />, value: '95%+', label: 'Peak Efficiency' },
    { icon: <Zap size={20} strokeWidth={1.8} />, value: '18 – 150 kW', label: 'Power Range' },
    { icon: <Gauge size={20} strokeWidth={1.8} />, value: '120 – 450 Nm', label: 'Torque Range' },
    { icon: <ShieldCheck size={20} strokeWidth={1.8} />, value: 'IP67', label: 'Protection Rating' },
    { icon: <Thermometer size={20} strokeWidth={1.8} />, value: '-40°C to 85°C', label: 'Operating Temp.' },
    { icon: <CalendarDays size={20} strokeWidth={1.8} />, value: '10+ Years', label: 'Design Life' },
  ];

  return (
    <section className="py-12 sm:py-14" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        <motion.p
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: '#00a550',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            margin: '0 0 16px',
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Key Technologies
        </motion.p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            borderTop: '1px solid #e8eef4',
            paddingTop: '24px',
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              style={{ display: 'flex', alignItems: 'center', flex: 1 }}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="transition-transform duration-300 hover:scale-110 lg:self-start"style={{ color: '#0d1b2a', flexShrink: 0 }}>
                  {s.icon}
                </div>
                <div>
                  <p style={{ fontSize: 16, fontWeight: 700, color: '#0d1b2a', margin: 0, lineHeight: 1.3 }}>
                    {s.value}
                  </p>
                  <p style={{ fontSize: 12, color: '#6b7e8f', margin: 0, lineHeight: 1.4 }}>
                    {s.label}
                  </p>
                </div>
              </div>

              {/* Vertical divider, skip after last */}
              {i < stats.length - 1 && (
                <div
                  style={{
                    width: 1,
                    height: 36,
                    background: '#e2eaf2',
                    margin: '0 20px',
                    flexShrink: 0,
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


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
    <section style={{ background: '#ffffff' }} className="py-10 sm:py-12 mb-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 20,
            background: '#f6f8f9',
            height: '100px',
            border: '1px solid #e8eef4',
          }}
          className="flex flex-col gap-6 px-8 py-8 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-9"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        >
          {/* Subtle background gradient accent on the right */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '35%',
              height: '100%',
              background:
                'radial-gradient(circle at 100% 50%, rgba(0,165,80,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Left: Heading */}
          <h2
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#0d1b2a',
              lineHeight: 1.3,
              margin: 0,
              maxWidth: 320,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Let's Build the Future of Electric Mobility Together
          </h2>

          {/* Middle: Description */}
          <p
            style={{
              fontSize: 13,
              color: '#6b7e8f',
              lineHeight: 1.6,
              margin: 0,
              maxWidth: 220,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Partner with us to bring next-generation mobility solutions to life.
          </p>

          {/* Right: Button */}
          <a
            href="#contact"
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              borderRadius: 999,
              padding: '12px 22px',
              fontSize: 13.5,
              fontWeight: 600,
              color: '#ffffff',
              background: '#0d3d20',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            className="transition-all duration-300 hover:gap-3 hover:opacity-90 hover:shadow-[0_8px_20px_rgba(13,61,32,0.35)]"
          >
            Talk To Our Team
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

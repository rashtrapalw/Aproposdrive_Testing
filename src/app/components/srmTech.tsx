import { BarChart2, Thermometer, Magnet, Wrench, Box, Settings, TrendingUp, Zap, Gauge, Cpu, ShieldCheck } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useState, useEffect, useRef } from 'react'

export function SrmTechnology() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-6% 0px' })

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const motorFeatures = [
    { icon: Zap,         label: 'Magnet-Free Technology' },
    { icon: Gauge,       label: 'High Reliability & Efficiency' },
    { icon: Settings,    label: 'No Rotor Windings' },
    { icon: TrendingUp,  label: 'High Efficiency \n Low maintenance' },
    { icon: Cpu,         label: 'Sensorless Operation' },
    { icon: ShieldCheck, label: 'Rare-Earth-Free Design' },
  ]

  const capabilities = [
  { icon: Settings,     label: 'Custom Rotor & Stator Design' },
  { icon: BarChart2,    label: 'Electromagnetic Simulation (FEA)' },
  { icon: Wrench,       label: 'In-House Prototyping' },
  { icon: Cpu,          label: 'Controller Optimization' },
  { icon: Thermometer,  label: 'Dyno & Thermal Testing' },
  { icon: ShieldCheck,  label: 'Reliability Validation' },
];

  /*
   * LAYOUT CHANGE: colStyle now uses flex instead of fixed padding-only.
   * Mobile keeps borderTop + padding as before.
   * Desktop uses flex: 1 as a base; each column overrides with its own flex value below.
   */
  const basePadding: React.CSSProperties = isMobile
    ? { padding: '28px 20px', borderTop: '1px solid #e8eef4' }
    : { padding: 'clamp(28px, 3.5vw, 52px)' }

  return (
    <section
      ref={ref}
      className="py-4 sm:py-6 lg:py-8"
      style={{ background: '#f8fafb' }}
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-14">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          
            style={{
                background: '#ffffff',
                border: '1px solid #e8eef4',
                borderRadius: 20,
                boxShadow: '0 4px 32px rgba(0,0,0,0.07)',

                display: isMobile ? 'flex' : 'grid',

                gridTemplateColumns: isMobile ? undefined : '30% 40% 30%',

                flexDirection: isMobile ? 'column' : undefined,

                minHeight: isMobile ? 'auto' : 'clamp(380px, 40vw, 500px)',
                }}
              >

   {/* ══ CAPABILITIES (desktop: third / flex:3 — mobile: third via order:3) ══ */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              /*
               * LAYOUT CHANGE:
               * flex: 3  → Capabilities takes 30% of the row (3 out of 10 parts)
               * order: 3 → on mobile column, capabilities appears last (bottom)
               * Matches Image width since both have flex: 3
               */
              // flex: 3,
              order: isMobile ? 3 : 0,
              ...basePadding,
              /*
               * LAYOUT CHANGE: right column gets rounded right corners on desktop.
               * Mobile gets no extra rounding (base borderTop from basePadding handles divider).
               */
              borderRadius: isMobile ? '0 0 20px 20px' : '0 20px 20px 0',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}
          >
            <p style={{
              fontSize: 'clamp(10px, 0.82vw, 15px)', fontWeight: 800, color: '#00a550',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              marginBottom: 'clamp(12px, 1.4vw, 20px)',
            }}>
              Engineering Behind Our SRM
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 1vw, 14px)' }}>
              {capabilities.map((c, i) => {
                const Icon = c.icon
                return (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.28 + i * 0.05, duration: 0.32 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                  >
                    <div style={{
                      width: 'clamp(22px, 1.8vw, 28px)', height: 'clamp(22px, 1.8vw, 28px)',
                      borderRadius: 6, background: 'rgba(0,165,80,0.07)',
                      border: '1px solid rgba(0,165,80,0.17)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <Icon size={11} color="#00a550" strokeWidth={1.8} />
                    </div>
                    <span style={{ fontSize: 'clamp(11px, 1vw, 13.5px)', color: '#0d1b2a', lineHeight: 1.4 }}>
                      {c.label}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* ══ CONTENT (desktop: second / flex:4 — mobile: first via order:1) ══ */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              /*
               * LAYOUT CHANGE:
               * flex: 4  → Content takes 40% of the row (4 out of 10 parts)
               * order: 1 → on mobile column, content appears first (top)
               */
              // flex: 4,
              order: isMobile ? 1 : 0,
              ...basePadding,
              /*
               * LAYOUT CHANGE: vertical dividers only on desktop row layout.
               * Mobile uses borderTop from basePadding instead.
               */
              borderLeft:  isMobile ? 'none' : '1px solid #e8eef4',
              borderRight: isMobile ? 'none' : '1px solid #e8eef4',
              borderTop:   isMobile ? 'none' : 'none', // first on mobile = no top border
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}
          >
            <h2 style={{
              fontSize: 'clamp(17px, 1.9vw, 26px)', fontWeight: 900, color: '#0d1b2a',
              textTransform: 'uppercase', lineHeight: 1.2, marginBottom: 10, letterSpacing: '-0.01em',
            }}>
              Switched Reluctance Motor <br /> (SRM) Technology
            </h2>
            <p style={{ fontSize: 'clamp(11.5px, 1vw, 14px)', fontWeight: 600, color: '#00a550', marginBottom: 12 }}>
              Rare Earth-Free. High Efficiency. Robust.
            </p>
            <p style={{
              fontSize: 'clamp(12px, 1.05vw, 14px)', color: '#4a5a6a', lineHeight: 1.75,
              marginBottom: 'clamp(16px, 2vw, 28px)',
            }}>
              Switched Reluctance Motors (SRMs) operate without permanent magnets or rotor windings, using magnetic reluctance and intelligent stator switching to generate motion.

With a laminated steel rotor and simple mechanical construction, SRMs offer exceptional reliability, lower manufacturing costs, minimal maintenance, and complete independence from rare-earth materials.


            </p>

            {/* 3×2 feature grid — unchanged */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(10px, 1.4vw, 20px)' }}>
              {motorFeatures.map((f, i) => {
                const Icon = f.icon
                return (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.25 + i * 0.055, duration: 0.35 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}
                  >
                    <div style={{
                      width: 'clamp(30px, 2.8vw, 40px)', height: 'clamp(30px, 2.8vw, 40px)',
                      borderRadius: '50%', background: 'rgba(0,165,80,0.07)',
                      border: '1px solid rgba(0,165,80,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <Icon size={13} color="#00a550" strokeWidth={1.8} />
                    </div>
                    <p style={{ fontSize: 'clamp(9px, 0.82vw, 11.5px)', color: '#4a5a6a', lineHeight: 1.4, whiteSpace: 'pre-line', margin: 0 }}>
                      {f.label}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>


                  {/* ══ IMAGE (desktop: first / flex:3 — mobile: second via order:2) ══ */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              /*
               * LAYOUT CHANGE:
               * flex: 3  → Image takes 30% of the row (3 out of 3+4+3=10 parts)
               * order: 2 → on mobile column, image appears second (after Content)
               */
              // flex: 3,
              order: isMobile ? 2 : 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              // padding: 'clamp(28px, 4vw, 52px)',
              padding: 0,
              overflow: 'hidden',
              background: 'linear-gradient(145deg, #f0faf5 0%, #eaf5ff 100%)',
              /*
               * LAYOUT CHANGE: border-radius adapts to position.
               * Desktop: left column → round left corners only.
               * Mobile:  middle column → no rounding (borderTop divider only).
               */
              borderRadius: isMobile ? 0 : '0 20px 20px 0',
              borderTop: isMobile ? '1px solid #e8eef4' : 'none',
            }}
          >

                <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    minHeight: isMobile ? '320px' : '100%',
                    overflow: 'hidden',
                }}
                >

              <motion.img
                src="/photos/srm3.png"
                alt="Switched Reluctance Motor (SRM) Technology"
                  style={{
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'cover',
                }}

                // animate={{ y: [0, -8, 0] }}
                // transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

         

        </motion.div>s
      </div>
    </section>
  )
}
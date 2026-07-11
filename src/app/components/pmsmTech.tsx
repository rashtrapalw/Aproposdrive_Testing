import { BarChart2, Thermometer, Magnet, Wrench, Box, Settings, TrendingUp, Zap, Gauge, Cpu, ShieldCheck } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useState, useEffect, useRef } from 'react'
// ── PmsmTechnology — replace existing function in TechnologyPage.tsx ───────────
// Required additional imports (add if missing):
// import { BarChart2, Thermometer, Magnet, Wrench, Box, Settings, TrendingUp } from 'lucide-react'

export function PmsmTechnology() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-6% 0px' })

  // Simple breakpoint hook
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)    
  }, [])

  const motorFeatures = [
    { icon: Zap,         label: 'High Power\nDensity' },
    { icon: Gauge,       label: 'Superior\nEfficiency' },
    { icon: Settings,    label: 'Smooth &\nQuiet Operation' },
    { icon: TrendingUp,  label: 'High Speed\nCapability' },
    { icon: Cpu,         label: 'Excellent Torque\nControl' },
    { icon: ShieldCheck, label: 'Sensorless\nControl' },
  ]

  const capabilities = [
    { icon: Magnet,      label: 'Electromagnetic Design' },
    { icon: BarChart2,   label: 'Finite Element Analysis (FEA)' },
    { icon: Gauge,       label: 'Torque–Speed Optimization' },
    { icon: Zap,         label: 'Core & Copper Loss Analysis' },
    { icon: Thermometer, label: 'Thermal Simulation' },
    { icon: Cpu,         label: 'Inductance & Flux Analysis' },
    { icon: Box,         label: 'CAD & 3D Modeling' },
    { icon: Wrench,      label: 'Prototype Development' },
  ]

  const colStyle: React.CSSProperties = isMobile
    ? { padding: '28px 20px', borderTop: '1px solid #e8eef4' }
    : { padding: 'clamp(28px, 3.5vw, 52px)', flex: 1 }

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
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            minHeight: isMobile ? 'auto' : 'clamp(380px, 40vw, 500px)',
          }}
        >

          
          {/* ══ RIGHT: capabilities ══ */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              ...colStyle,
              borderRadius: isMobile ? '0 0 20px 20px' : '0 20px 20px 0',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}
          >
            <p style={{
              fontSize: 'clamp(9px, 0.82vw, 11px)',
              fontWeight: 800, color: '#00a550',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              marginBottom: 'clamp(12px, 1.4vw, 20px)',
            }}>
              Engineering Capabilities
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
                      width: 'clamp(22px, 1.8vw, 28px)',
                      height: 'clamp(22px, 1.8vw, 28px)',
                      borderRadius: 6,
                      background: 'rgba(0,165,80,0.07)',
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

          {/* ══ CENTER: content ══ */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              ...colStyle,
              borderLeft: isMobile ? 'none' : '1px solid #e8eef4',
              borderRight: isMobile ? 'none' : '1px solid #e8eef4',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p style={{ fontSize: 'clamp(12px, 1.1vw, 15px)', fontWeight: 700, color: '#00a550', marginBottom: 8 }}>
              01
            </p>
            <h2 style={{
              fontSize: 'clamp(17px, 1.9vw, 26px)',
              fontWeight: 900, color: '#0d1b2a',
              textTransform: 'uppercase', lineHeight: 1.2,
              marginBottom: 10, letterSpacing: '-0.01em',
            }}>
              Permanent Magnet Synchronous<br />Motor (PMSM) Technology
            </h2>
            <p style={{ fontSize: 'clamp(11.5px, 1vw, 14px)', fontWeight: 600, color: '#00a550', marginBottom: 12 }}>
              Rare Earth-Free. High Efficiency. Robust.
            </p>
            <p style={{
              fontSize: 'clamp(12px, 1.05vw, 14px)',
              color: '#4a5a6a', lineHeight: 1.75,
              marginBottom: 'clamp(16px, 2vw, 28px)',
            }}>
              PMSM technology eliminates rare earth materials entirely, delivering outstanding
              efficiency, superior fault tolerance, and dependable performance across all
              operating conditions — ideal for next-generation electric mobility.
            </p>

            {/* 3×2 feature grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'clamp(10px, 1.4vw, 20px)',
            }}>
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
                      width: 'clamp(30px, 2.8vw, 40px)',
                      height: 'clamp(30px, 2.8vw, 40px)',
                      borderRadius: '50%',
                      background: 'rgba(0,165,80,0.07)',
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

            {/* ══ LEFT: image ══ */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(28px, 4vw, 52px)',
              background: 'linear-gradient(145deg, #f0faf5 0%, #eaf5ff 100%)',
              borderRadius: isMobile ? '20px 20px 0 0' : '20px 0 0 20px',
            }}
          >
            <div style={{
              position: 'relative',
              width: 'clamp(180px, 20vw, 280px)',
              height: 'clamp(180px, 20vw, 280px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,165,80,0.10) 0%, transparent 72%)',
                border: '1.5px solid rgba(0,165,80,0.18)',
              }} />
              <div style={{
                position: 'absolute',
                width: '75%', height: '75%',
                borderRadius: '50%',
                border: '1px dashed rgba(0,165,80,0.25)',
                top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
              }} />
              <motion.img
                src="/photos/pmsmtech.png"
                alt="PMSM Motor"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'contain',
                  position: 'relative', zIndex: 1,
                  filter: 'drop-shadow(0 12px 28px rgba(0,0,0,0.14))',
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
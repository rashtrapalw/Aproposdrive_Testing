'use client'

import { motion } from 'motion/react'
import { Play } from 'lucide-react'
import { JourneyTimeline } from './JourneyTimeline'

export function JourneySection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700;9..40,900&display=swap');
        @keyframes gradShift{0%{background-position:0%}100%{background-position:200%}}
      `}</style>

      <section
        id="journey"
        className="relative py-20 overflow-hidden"
        style={{ fontFamily: "'DM Sans',sans-serif", background: '#0A0F1C' }}
      >
        {/* ── Background ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full"
            style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.18 }}
          />
          <div
            className="absolute top-10 right-[-60px] w-96 h-96 rounded-full"
            style={{ background: '#00E5FF', filter: 'blur(128px)', opacity: 0.13 }}
          />
          <div
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full"
            style={{ background: '#00C853', filter: 'blur(128px)', opacity: 0.1 }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Journey Timeline ── */}
          {/* <JourneyTimeline /> */}

          {/* ── Video Section ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-8% 0px' }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="text-center mb-7">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.28em] mb-2"
                style={{ color: '#00C853' }}
              >
                Field Tested
              </p>
              <h3
                className="font-black tracking-tight"
                style={{
                  fontSize: 'clamp(26px,3.5vw,42px)',
                  background: 'linear-gradient(90deg,#fff,#00E5FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Real-World Testing
              </h3>
            </div>

            <div
              className="rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.004]"
              style={{
                background: 'linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              }}
            >
              {/* Screen */}
              <div
                className="relative flex items-center justify-center"
                style={{
                  aspectRatio: '16/9',
                  background: 'linear-gradient(135deg,#050c14,#0a1628 55%,#061410)',
                }}
              >
                {/* Subtle scan lines */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg,rgba(0,229,255,0.4) 0,transparent 1px,transparent 3px)',
                    backgroundSize: '100% 4px',
                    opacity: 0.022,
                  }}
                />
                {/* Ripple rings */}
                {[0, 1, 2].map(i => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{ width: 64, height: 64, border: '1.5px solid rgba(0,229,255,0.22)' }}
                    animate={{ width: [64, 200], height: [64, 200], opacity: [0.6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.85, ease: 'easeOut' }}
                  />
                ))}
                {/* Play button */}
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg,#00C853,#00E5FF)',
                    boxShadow: '0 0 20px rgba(0,229,255,0.45)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                </motion.button>
              </div>

              {/* Info bar */}
              <div
                className="px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                style={{ borderTop: '1px solid rgba(255,255,255,0.055)' }}
              >
                <div>
                  <p className="font-bold text-sm text-white" style={{ fontFamily: "'DM Sans',sans-serif" }}>
                    Testing Across India
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.38)', fontFamily: "'DM Sans',sans-serif" }}>
                    From Himalayan heights to coastal roads
                  </p>
                </div>
                <div className="flex gap-5">
                  {[['2.4M', 'Views'], ['100K', 'km Covered'], ['12+', 'Terrains']].map(([v, l]) => (
                    <div key={l} className="text-center">
                      <p
                        className="font-black text-base"
                        style={{
                          fontFamily: "'DM Sans',sans-serif",
                          background: 'linear-gradient(90deg,#00C853,#00E5FF)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {v}
                      </p>
                      <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.32)', fontFamily: "'DM Sans',sans-serif" }}>{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Scroll cue ── */}
          <div className="flex justify-center mt-10">
            <div
              className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1.5"
              style={{ borderColor: 'rgba(255,255,255,0.18)' }}
            >
              <motion.div
                className="w-1 h-2 rounded-full"
                style={{ background: '#00C853' }}
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

type Founder = {
  name: string
  role: string
  image: string
  description: string
}

const founders: Founder[] = [
  {
    name: 'Dr. Karun Malhotra',
    role: 'Business Advisor & MD. Pogli Co. Japan',
    image: '/photos/proff1.jpeg',
    description:
      "Our multidisciplinary expertise spans Japan’s semiconductor ecosystem, power electronics, electric motor and machine technology, manufacturing, and business strategy.",
  },
  {
    name: 'Prof. B. G. Fernandes',
    role: 'Technical Advisor & Professor. IIT Bombay',
    image: '/photos/BG-fernadis.png',
    description:
      "With over a decade of experience, we bridge the gap between laboratory-scale innovation and large-scale industrial commercialization.",
  },
]

const EASE = [0.25, 0.46, 0.45, 0.94] as const

// ─── ADVISOR CARD ─────────────────────────────────────────────────────────────
function AdvisorCard({ founder, delay }: { founder: Founder; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ delay, duration: 0.55, ease: EASE }}
      className="relative w-full"
      style={{ maxWidth: 560 }}
    >
      {/* Card body — ornate certificate-style border */}
      <div
        className="relative rounded-[30px] pt-32 sm:pt-36 pb-10 px-8 sm:px-10"
        style={{
          background: '#ffffff',
          border: '1px solid #dfe6e2',
          boxShadow: '0 6px 22px rgba(13,27,42,0.06)',
        }}
      >
        {/* Inner dashed border, inset — the "certificate" frame */}
        <div
          className="pointer-events-none absolute rounded-[20px]"
          style={{
            top: 16,
            left: 16,
            right: 16,
            bottom: 16,
            border: '1.5px dashed rgba(0,90,50,0.22)',
          }}
        />

        {/* Photo — overlaps the top edge of the card */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: -104 }}
        >
          <div
            className="w-[190px] h-[190px] sm:w-[220px] sm:h-[220px] rounded-2xl overflow-hidden"
            style={{
              background: '#f4f7f6',
              border: '4px solid #ffffff',
              boxShadow: '0 12px 30px rgba(13,27,42,0.18)',
            }}
          >
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative text-center flex flex-col items-center gap-3">
          <h3
            className="font-black leading-tight"
            style={{ color: '#0d1b2a', fontSize: 'clamp(21px,2.6vw,26px)' }}
          >
            {founder.name}
          </h3>

          <p
            className="text-[12px] sm:text-[13px] uppercase tracking-[0.14em] font-bold"
            style={{ color: '#00a550' }}
          >
            {founder.role}
          </p>

          <p
            className="text-[14.5px] sm:text-[15.5px] leading-[1.8] mt-1"
            style={{ color: 'rgba(13,27,42,0.62)' }}
          >
            {founder.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export function FoundersSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section
      className="relative w-full py-20 sm:py-24 lg:py-28 overflow-hidden"
      style={{ background: '#fafcfb' }}
    >
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="flex flex-col items-center text-center mb-14 sm:mb-20"
        >
          <h2
            className="font-black uppercase leading-[0.95] tracking-tight"
            style={{
              color: '#0d1b2a',
              fontSize: 'clamp(24px,4.5vw,40px)',
            }}
          >
            Our Advisors
          </h2>

          <div
            className="rounded-full mt-5"
            style={{
              width: 56,
              height: 4,
              background: 'linear-gradient(90deg,transparent,#00a550,transparent)',
            }}
          />
        </motion.div>

        {/* ── Cards ── */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-28 sm:gap-14 lg:gap-16 pt-20 sm:pt-24">
          {founders.map((founder, i) => (
            <AdvisorCard key={founder.name} founder={founder} delay={i * 0.12 + 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
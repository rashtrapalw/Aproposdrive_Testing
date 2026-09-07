'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

type Supporter = {
  name: string
  role: string
  image: string
  description: string
  linkedin: string
}

const supporters: Supporter[] = [
  {
    name: 'Dr. Karun Malhotra',
    role: 'Business Advisor & MD. Pogli Co. Japan',
    image: '/photos/proff1.jpeg',
    description:
      "Our multidisciplinary expertise spans Japan’s semiconductor ecosystem, power electronics, electric motor and machine technology, manufacturing, and business strategy.",
    linkedin: 'https://www.linkedin.com/in/karun-malhotra/',
  },
  {
    name: 'Prof. B. G. Fernandes',
    role: 'Technical Advisor & Professor. IIT Bombay',
    image: '/photos/BG-fernadis.png',
    description:
      "With over a decade of experience, we bridge the gap between laboratory-scale innovation and large-scale industrial commercialization.",
    linkedin: 'https://www.linkedin.com/in/bg-fernandes/',
  },
]

const EASE = [0.25, 0.46, 0.45, 0.94] as const

// ─── LINKEDIN BUTTON ────────────────────────────────────────────────────────
function LinkedInButton({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View LinkedIn profile"
      className="inline-flex items-center justify-center w-7 h-7 rounded-sm transition-transform duration-200 hover:scale-110 hover:shadow-md"
      style={{
        backgroundColor: '#0d3f8f',
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="#ffffff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    </a>
  )
}

// ─── ADVISOR CARD ─────────────────────────────────────────────────────────────
function SupporterCard({ supporter, delay }: { supporter: Supporter; delay: number }) {
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
              src={supporter.image}
              alt={supporter.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative text-center flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-2.5">
            <h3
              className="font-black leading-tight"
              style={{ color: '#0d1b2a', fontSize: 'clamp(21px,2.6vw,26px)' }}
            >
              {supporter.name}
            </h3>
            <LinkedInButton url={supporter.linkedin} />
          </div>

          <p
            className="text-[12px] sm:text-[13px] uppercase tracking-[0.14em] font-bold"
            style={{ color: '#00a550' }}
          >
            {supporter.role}
          </p>

          <p
            className="text-[14.5px] sm:text-[15.5px] leading-[1.8] mt-1"
            style={{ color: 'rgba(13,27,42,0.62)' }}
          >
            {supporter.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export function SupporterSection() {
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
          {supporters.map((supporter, i) => (
            <SupporterCard key={supporter.name} supporter={supporter} delay={i * 0.12 + 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
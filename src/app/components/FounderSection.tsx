'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

type Founder = {
  name: string
  role: string
  qualification: string
  image: string
  description: string
  linkedin: string
}

const founders: Founder[] = [
  {
    name: 'Mr. Nimish Kothari',
    role: 'Co-Founder',
    qualification: 'M.Tech, IIT Bombay',
    image: '/photos/Nimish.png',
    description:
      "A visionary leader and technical powerhouse, bringing advanced engineering expertise from one of India's premier institutions. With a deep specialisation in cutting-edge technology and robust systems design, they drive AproposDrive's core research, development, and technological breakthroughs — turning complex engineering challenges into scalable, real-world EV solutions.",
    linkedin: 'https://www.linkedin.com/in/nimish-kothari/',
  },
  {
    name: 'Dr. Saurabh Nikam',
    role: 'Co-Founder',
    qualification: 'Ph.D., IIT Bombay',
    image: '/photos/Sourabh.jpeg',
    description:
      "A deep-tech innovator leading AproposDrive's technological frontier. Leveraging doctoral expertise from IIT Bombay, they solve the complex material science and electromagnetic challenges fundamental to pioneering rare earth-free motor technology. Their rigorous academic foundation and hands-on engineering acumen bridge the gap between breakthrough research and mass-market viability.",
    linkedin: 'https://www.linkedin.com/in/saurabh-nikam-b3078713/',
  },
]

// ── LinkedIn Icon Button ────────────────────────────────────────────────
function LinkedInButton({ url, variant }: { url: string; variant: 'light' | 'dark' }) {
  const isLight = variant === 'light'
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View LinkedIn profile"
      className="inline-flex items-center justify-center w-7 h-7 rounded-sm transition-transform duration-200 hover:scale-110 hover:shadow-lg"
      style={{
        backgroundColor: isLight ? 'rgba(255,255,255,0.18)' : '#0d3f8f',
        border: isLight ? '1.5px solid rgba(255,255,255,0.6)' : 'none',
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={isLight ? '#ffffff' : '#ffffff'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    </a>
  )
}

// ── Founders Section ───────────────────────────────────────────────────
function FounderSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-6% 0px' })

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-white">

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center pt-14 sm:pt-16 pb-10 px-4"
      >
        <p
          className="text-[11px] font-bold uppercase tracking-[0.28em] mb-2"
          style={{ color: '#0d3f8f' }}
        >
          Our Founders
        </p>
        <h2
          className="font-black text-[#0a1e3f] leading-tight"
          style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
        >
          Meet The Two Visionaries
        </h2>
        <motion.div
          className="mx-auto mt-4 h-px w-14 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #0d3f8f, transparent)' }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.div>

      {/* Founders rows */}
      <div className="relative z-10">
        {founders.map((founder, i) => (
          <FounderRow key={founder.name} founder={founder} index={i} />
        ))}
      </div>
    </section>
  )
}

function FounderRow({ founder, index }: { founder: Founder; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-6% 0px' })


return (
  <div
    ref={ref}
    className="relative overflow-hidden border-b border-[#e7e9ee]"
  >
    <div className="relative">

      {/* ================= Desktop ================= */}
      <div className="hidden md:flex relative min-h-[420px]">

        {/* Left green */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            delay: 0.1,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="w-1/2 bg-[#00a550] flex items-center"
        >
          <div className="pl-12 pr-32">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.45 }}
              className="font-black text-white leading-tight ml-24"
              style={{
                fontSize: "clamp(24px,2.8vw,36px)",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}
            >
              {founder.name}
            </motion.h3>
          </div>
        </motion.div>

        {/* Right White */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            delay: 0.15,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="w-1/2 bg-white flex items-center"
        >
          <div className="pl-36 pr-14">

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18 }}
              className="font-bold text-lg text-[#111827]"
            >
              {founder.role}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.24 }}
              className="flex items-center gap-3 mt-1 mb-5"
            >
              <p className="font-semibold text-sm text-[#374151]">
                {founder.qualification}
              </p>
              <LinkedInButton url={founder.linkedin} variant="dark" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-[15px] leading-8 text-[#5b6472] max-w-xl"
            >
              {founder.description}
            </motion.p>

          </div>
        </motion.div>

        {/* Center Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.28, duration: 0.55 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="w-[230px] h-[330px] overflow-hidden rounded-2xl shadow-2xl bg-white">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

      </div>

      {/* ================= Mobile ================= */}
      <div className="md:hidden relative">

        {/* Green */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-[#00a550] pt-10 pb-44 px-6"
        >
          <h3
            className="text-white font-black text-2xl text-center"
          >
            {founder.name}
          </h3>
        </motion.div>

        {/* Center Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.25 }}
          className="absolute left-1/2 top-[135px] -translate-x-1/2 z-20"
        >
          <div className="w-[180px] h-[240px] rounded-2xl overflow-hidden shadow-2xl bg-white">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* White */}
        <div className="bg-white pt-36 pb-10 px-6">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-bold text-center text-lg text-[#111827]"
          >
            {founder.role}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.24 }}
            className="flex items-center justify-center gap-3 mt-1 mb-5"
          >
            <p className="text-sm font-semibold text-[#374151]">
              {founder.qualification}
            </p>
            <LinkedInButton url={founder.linkedin} variant="dark" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[14px] leading-7 text-center text-[#5b6472]"
          >
            {founder.description}
          </motion.p>

        </div>

      </div>

    </div>
  </div>
)
}

export default FounderSection
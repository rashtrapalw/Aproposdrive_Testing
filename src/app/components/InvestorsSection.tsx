'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

type Supporter = {
  name: string
  role: string
  qualification: string
  image: string
  description: string
}

const supporters: Supporter[] = [
  {
    name: 'Nimish Kothari',
    role: 'Co-Founder',
    qualification: 'M.Tech, IIT Bombay',
    image: '../photos/nimish-sir.png',
    description:
      "A visionary leader and technical powerhouse, bringing advanced engineering expertise from one of India's premier institutions. With a deep specialisation in cutting-edge technology and robust systems design, they drive AproposDrive's core research, development, and technological breakthroughs — turning complex engineering challenges into scalable, real-world EV solutions.",
  },
  {
    name: 'Dr. Saurabh Nikam',
    role: 'Co-Founder',
    qualification: 'Ph.D., IIT Bombay',
    image: '/photos/nimish-sir.png',
    description:
      "A deep-tech innovator leading AproposDrive's technological frontier. Leveraging doctoral expertise from IIT Bombay, they solve the complex material science and electromagnetic challenges fundamental to pioneering rare earth-free motor technology. Their rigorous academic foundation and hands-on engineering acumen bridge the gap between breakthrough research and mass-market viability.",
  },
]

// ── Investors Section ───────────────────────────────────────────────────
function InvestorsSection() {
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
          The People Behind AproposDrive
        </h2>
        <motion.div
          className="mx-auto mt-4 h-px w-14 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #0d3f8f, transparent)' }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.div>

      {/* Supporters rows */}
      <div className="relative z-10">
        {supporters.map((supporter, i) => (
          <SupporterRow key={supporter.name} supporter={supporter} index={i} />
        ))}
      </div>
    </section>
  )
}

function SupporterRow({ supporter, index }: { supporter: Supporter; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-6% 0px' })

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden border-b border-[#e7e9ee]"
    >
      {/* ── Layout: [blue block: name + small contained photo] + [white content] ── */}
      <div className="flex flex-row min-h-[190px] sm:min-h-[260px] lg:min-h-[320px] xl:min-h-[360px]">

        {/* Blue block — name fills most of it, photo is a small strip fading into white */}
        <motion.div
          className="relative flex-shrink-0 w-[58%] sm:w-[56%] lg:w-[54%] flex items-stretch overflow-hidden"
          style={{ background: '#134b98' }}
          initial={{ opacity: 0, x: -28 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Name — sits in the open blue space, vertically centered */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.28, duration: 0.5 }}
            className="flex items-center flex-1 min-w-0 pl-4 pr-2 sm:pl-8 sm:pr-3 lg:pl-12"
          >
            <h3
              className="font-black text-white leading-[1.15] break-words"
              style={{ fontSize: 'clamp(16px, 3.2vw, 30px)' }}
            >
              {supporter.name}
            </h3>
          </motion.div>

          {/* Photo — small, fixed-width, fades into the white panel on its right edge */}
          <div
            className="relative flex-shrink-0 h-full overflow-hidden"
            style={{ width: 'clamp(80px, 17vw, 220px)' }}
          >
            <img
              src={supporter.image}
              alt={supporter.name}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* fade to white so the photo blends into the content panel */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to right, transparent 55%, #ffffff 100%)' }}
            />
          </div>
        </motion.div>

        {/* Content column — white background */}
        <div className="flex flex-col justify-center flex-1 min-w-0 px-4 py-6 sm:px-8 sm:py-10 lg:px-14 xl:px-16 bg-white">

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.45 }}
            className="text-[13px] sm:text-base font-bold text-[#111827] mb-1"
          >
            {supporter.role}
          </motion.p>

          {/* Qualification */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.22, duration: 0.45 }}
            className="text-[11px] sm:text-sm font-bold text-[#111827] mb-3 sm:mb-4"
          >
            {supporter.qualification}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[12px] leading-relaxed sm:text-[14px] sm:leading-7 text-[#5b6472]"
            style={{ maxWidth: 480 }}
          >
            {supporter.description}
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default InvestorsSection
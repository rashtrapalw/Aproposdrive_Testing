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
    name: 'Mr. Nimish Kothari',
    role: 'Co-Founder',
    qualification: 'M.Tech, IIT Bombay',
    image: '/photos/Nimish.png',
    description:
      "A visionary leader and technical powerhouse, bringing advanced engineering expertise from one of India's premier institutions. With a deep specialisation in cutting-edge technology and robust systems design, they drive AproposDrive's core research, development, and technological breakthroughs — turning complex engineering challenges into scalable, real-world EV solutions.",
  },
  {
    name: 'Dr. Saurabh Nikam',
    role: 'Co-Founder',
    qualification: 'Ph.D., IIT Bombay',
    image: '/photos/Sourabh.jpeg',
    description:
      "A deep-tech innovator leading AproposDrive's technological frontier. Leveraging doctoral expertise from IIT Bombay, they solve the complex material science and electromagnetic challenges fundamental to pioneering rare earth-free motor technology. Their rigorous academic foundation and hands-on engineering acumen bridge the gap between breakthrough research and mass-market viability.",
  },
]

// ── Supporters Section ───────────────────────────────────────────────────
function SupportersSection() {
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
                
              }}
            >
              {supporter.name}
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
              {supporter.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.24 }}
              className="font-semibold text-sm text-[#374151] mt-1 mb-5"
            >
              {supporter.qualification}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-[15px] leading-8 text-[#5b6472] max-w-xl"
            >
              {supporter.description}
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
              src={supporter.image}
              alt={supporter.name}
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
            {supporter.name}
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
              src={supporter.image}
              alt={supporter.name}
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
            {supporter.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.24 }}
            className="text-center text-sm font-semibold text-[#374151] mt-1 mb-5"
          >
            {supporter.qualification}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[14px] leading-7 text-center text-[#5b6472]"
          >
            {supporter.description}
          </motion.p>

        </div>

      </div>

    </div>
  </div>
)
}

export default SupportersSection
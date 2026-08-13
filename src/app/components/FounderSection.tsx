'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

type Founder = {
  name: string
  role: string
  image: string
}

const founders: Founder[] = [
  {
    name: 'Dr. Karun Malhotra',
    role: 'Business Advisor & MD. Pogli Co. Japan',
    image: '/photos/proff1.jpeg',
  },
  {
    name: 'Prof. B. G. Fernandes',
    role: 'Technical Advisor & Professor, IIT Bombay',
    image: '/photos/proff2.jpeg',
  },
]

const EASE = [0.25, 0.46, 0.45, 0.94] as const

function FounderPhoto({ founder, align }: { founder: Founder; align: 'left' | 'right' }) {
  return (
    <div
      className={`flex flex-col items-center gap-4 ${
        align === 'left' ? 'lg:items-start' : 'lg:items-end'
      }`}
    >
      <div
        className="relative w-[170px] h-[230px] sm:w-[190px] sm:h-[260px] lg:w-[220px] lg:h-[300px] rounded-3xl overflow-hidden"
        style={{
          background: '#f4f7f6',
          border: '1px solid #e2eaf2',
        }}
      >
        <img
          src={founder.image}
          alt={founder.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div
        className={`text-center ${
          align === 'left' ? 'lg:text-left' : 'lg:text-right'
        }`}
      >
        <h3
          className="font-black text-xl lg:text-2xl leading-tight"
          style={{ color: '#0d1b2a' }}
        >
          {founder.name}
        </h3>

        <p
          className="mt-1 text-[11px] uppercase tracking-[0.18em] font-semibold"
          style={{ color: '#00a550' }}
        >
          {founder.role}
        </p>
      </div>
    </div>
  )
}

export function FoundersSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section
      className="relative w-full py-20 sm:py-24 lg:py-32 overflow-hidden"
      style={{ background: '#fafcfb' }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative overflow-hidden rounded-[32px]"
          style={{
            background: '#ffffff',
            border: '1px solid #e2eaf2',
            boxShadow: '0 4px 24px rgba(13,27,42,0.06)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-14 lg:gap-10 px-6 sm:px-12 lg:px-16 pt-14 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
            {/* CENTER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05, duration: 0.5, ease: EASE }}
              className="lg:order-2 flex flex-col items-center text-center"
            >
              <div
                className="rounded-full mb-5"
                style={{
                  width: 56,
                  height: 4,
                  background:
                    'linear-gradient(90deg,transparent,#00a550,transparent)',
                }}
              />

              <h2
                className="font-black uppercase leading-[0.95] tracking-tight"
                style={{
                  color: '#0d1b2a',
                  fontSize: 'clamp(20px,4.5vw,38px)',
                }}
              >
                Our
                <br />
                {/* <br /> */}
                Advisors
               
              </h2>

              <p
                className="mt-6 text-sm sm:text-base leading-7 max-w-md"
                style={{ color: 'rgba(13,27,42,0.6)' }}
              >
                Our founders bring decades of expertise in motor technology,
                power electronics and electric mobility, leading
                Aproposdrive&apos;s mission to build efficient, sustainable and
                next-generation electric drive solutions.
              </p>
            </motion.div>

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.55, ease: EASE }}
              className="lg:order-1 flex justify-center lg:justify-start pb-6 lg:pb-0"
            >
              <FounderPhoto founder={founders[0]} align="left" />
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.55, ease: EASE }}
              className="lg:order-3 flex justify-center lg:justify-end pb-6 lg:pb-0"
            >
              <FounderPhoto founder={founders[1]} align="right" />
            </motion.div>
          </div>

          {/* Bottom accent line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[4px]"
            style={{
              background:
                'linear-gradient(90deg,transparent,#00a550,transparent)',
            }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{
              delay: 0.4,
              duration: 0.6,
              ease: 'easeOut',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
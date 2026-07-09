'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'motion/react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'What is SRM technology?',
    answer:
      'Switched Reluctance Motor (SRM) technology uses the principle of magnetic reluctance to produce motion. It requires no permanent magnets or rare earth materials, making it cost-effective, robust, and highly efficient for electric vehicle applications.',
  },
  {
    question: 'How is SRM better than BLDC?',
    answer:
      'SRM motors are rare earth-free, more tolerant to high temperatures, have simpler construction with no rotor windings or magnets, and offer better fault tolerance. They can also achieve wide speed ranges with high efficiency, especially under partial load conditions common in real-world driving.',
  },
  {
    question: 'Are your products customizable?',
    answer:
      'Yes. Our modular design approach enables our technology to integrate across a wide range of electric mobility and industrial applications while meeting unique performance and form-factor requirements.',
  },
  {
    question: 'What applications are your products used in?',
    answer:
      'Our technology is suitable for electric two-wheelers, three-wheelers, commercial vehicles, industrial mobility solutions, agricultural equipment, and other customized electric applications.',
  },
  {
    question: 'What kind of support do you provide?',
    answer:
      'We provide end-to-end technical support including system integration guidance, calibration support, field diagnostics, and ongoing engineering assistance for OEM partners and fleet operators.',
  },
  {
    question: 'Where are your products manufactured?',
    answer:
      'All our products are designed, developed, and manufactured in India. Our engineering and production facilities are based in Pune, ensuring quality control and rapid iteration aligned with Indian road and climate conditions.',
  },
]

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

// ── Single accordion item — no individual scroll observer, driven by parent stagger ──
function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      variants={itemVariants}
      className="overflow-hidden rounded-xl transition-all duration-200"
      style={{
        border: open ? '1px solid rgba(0,165,80,0.35)' : '1px solid #e2eaf2',
        background: '#ffffff',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200"
        style={{ background: 'transparent' }}
      >
        <span
          className="text-sm font-semibold leading-snug sm:text-[15px]"
          style={{ color: open ? '#00a550' : '#0d1b2a' }}
        >
          {faq.question}
        </span>

        <span
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-all duration-200"
          style={{
            background: open ? 'rgba(0,165,80,0.1)' : '#f4f6f8',
            color: open ? '#00a550' : '#4a5a6a',
          }}
        >
          {open ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{ overflow: 'hidden' }}
          >
            <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: '#4a5a6a' }}>
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── Floating illustration — pure CSS keyframes, zero JS per frame ─────────────
function FloatingIllustration() {
  return (
    <div className="relative flex items-center justify-center w-full" style={{ maxWidth: 420, aspectRatio: '1 / 1' }}>
      <style>{`
        @keyframes faqFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes faqSpinCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes faqSpinCCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .faq-ring-outer { animation: faqSpinCW 28s linear infinite; }
        .faq-ring-inner { animation: faqSpinCCW 44s linear infinite; }
        .faq-float-img { animation: faqFloat 4s ease-in-out infinite; will-change: transform; }
        @media (prefers-reduced-motion: reduce) {
          .faq-ring-outer, .faq-ring-inner, .faq-float-img { animation: none; }
        }
      `}</style>

      {/* Outer glow ring */}
      <div
        className="absolute rounded-full faq-ring-outer"
        style={{
          width: '92%',
          height: '92%',
          background: 'radial-gradient(circle, rgba(0,165,80,0.07) 0%, transparent 70%)',
          border: '1px solid rgba(0,165,80,0.12)',
        }}
      />
      {/* Inner ring */}
      <div
        className="absolute rounded-full faq-ring-inner"
        style={{
          width: '70%',
          height: '70%',
          border: '1px dashed rgba(0,165,80,0.18)',
        }}
      />

      {/* Floating question mark image — CSS-driven float, GPU-composited */}
      <img
        src="/photos/question-mark-3d.png"
        alt="FAQ"
        className="relative z-10 faq-float-img"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          filter: 'drop-shadow(0 10px 20px rgba(0,165,80,0.22))',
        }}
      />
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
export function FAQSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-5% 0px' })

  return (
    <section id="faq" className="relative" style={{ background: '#f5f7f9' }}>
      {/* ── Main FAQ area ── */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ── LEFT: heading + accordion ── */}
          <div>
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="font-bold leading-tight mb-2" style={{ fontSize: 'clamp(26px, 4vw, 36px)', color: '#0d1b2a' }}>
                Frequently Asked Questions
              </h2>
              <p style={{ fontSize: 14, color: '#6b7e8f', lineHeight: 1.65 }}>
                Find answers to common questions about our technologies, products and services.
              </p>
            </motion.div>

            {/* Accordion list — single observer drives the whole staggered group */}
            <motion.div
              className="flex flex-col gap-3"
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              {faqs.map((faq) => (
                <FAQItem key={faq.question} faq={faq} />
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: floating illustration ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="hidden lg:flex items-center justify-center pt-8"
          >
            <FloatingIllustration />
          </motion.div>
        </div>
      </div>

      {/* ── Bottom accent bar ── */}
      <div style={{ background: 'rgba(0,165,80,0.14)' }}>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold" style={{ fontSize: 18, color: '#0d1b2a' }}>
                Still have questions?
              </p>
              <p style={{ fontSize: 13.5, color: '#4a5a6a' }}>Our team is here to help you.</p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_20px_rgba(0,165,80,0.35)] self-start sm:self-auto flex-shrink-0"
              style={{ background: '#00a550', minWidth: 140 }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
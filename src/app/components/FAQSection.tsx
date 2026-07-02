// 'use client'

// import { motion } from 'motion/react';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from './ui/accordion';

// export function FAQSection() {
//   const faqs = [
//   {
//     question: 'How do you ensure reliability in harsh operating conditions?',
//     answer:
//       'Our motors and controllers undergo extensive validation under demanding real-world environments. From challenging road conditions to continuous operational testing, every system is engineered to deliver consistent and dependable performance.',
//   },
//   {
//     question: 'Can your systems be customized for specific applications?',
//     answer:
//       'Yes. Our modular design approach enables our technology to integrate across a wide range of electric mobility and industrial applications while meeting unique performance requirements.',
//   },
//   {
//     question: 'How does your technology achieve higher efficiency than conventional systems?',
//     answer:
//       'Our advanced motor architecture, optimized controller algorithms, and rare earth-free design work together to maximize energy utilization, improve efficiency, and reduce overall system losses.',
//   },
//   {
//     question: 'What industries can your solutions support?',
//     answer:
//       'Our technology is suitable for electric two-wheelers, three-wheelers, commercial vehicles, industrial mobility solutions, agricultural equipment, and other customized electric applications.',
//   },
//   {
//     question: 'Are your products suitable for large-scale deployment?',
//     answer:
//       'Yes. Our solutions are developed with scalability, reliability, and manufacturing readiness in mind, making them suitable for both pilot programs and commercial production.',
//   },
//   {
//     question: 'What makes your technology different?',
//     answer:
//       'Our focus on rare earth-free engineering, real-world validation, lower system costs, and adaptable integration enables us to deliver high-performance solutions that are both sustainable and practical for diverse applications.',
//   },
// ];

//   return (
//     <section id="faq" className="relative py-24 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-[#F8FAFB]">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E5FF] rounded-full mix-blend-multiply filter blur-[200px]" />
//         </div>
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="font-['Poppins'] font-bold text-4xl md:text-5xl text-[#0A0F1C] mb-4">
//             Frequently Asked <span className="text-[#00C853]">Questions</span>
//           </h2>
//           <p className="font-['Inter'] text-lg text-[#0A0F1C]/70 max-w-2xl mx-auto">
//             Everything you need to know about VoltDrive electric vehicles
//           </p>
//         </motion.div>

//         {/* FAQ Accordion */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="p-8 rounded-3xl bg-white backdrop-blur-sm border border-[#00C853]/10 shadow-sm"
//         >
//           <Accordion type="single" collapsible className="space-y-4">
//             {faqs.map((faq, index) => (
//               <AccordionItem
//                 key={index}
//                 value={`item-${index}`}
//                 className="border border-[#00C853]/10 rounded-2xl overflow-hidden bg-white backdrop-blur-sm hover:border-[#00C853]/50 transition-all duration-300 shadow-sm"
//               >
//                 <AccordionTrigger className="px-6 py-4 text-left font-['Poppins'] font-semibold text-[#0A0F1C] hover:text-[#00C853] transition-colors duration-300 [&[data-state=open]]:text-[#00C853]">
//                   {faq.question}
//                 </AccordionTrigger>
//                 <AccordionContent className="px-6 pb-4 font-['Inter'] text-[#0A0F1C]/70 leading-relaxed">
//                   {faq.answer}
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-16 text-center"
//         >
//           <div className="inline-block p-8 rounded-3xl bg-white backdrop-blur-sm border border-[#00C853]/10 shadow-sm">
//             <h3 className="font-['Poppins'] font-bold text-2xl text-[#0A0F1C] mb-4">
//               Still have questions?
//             </h3>
//             <p className="font-['Inter'] text-[#0A0F1C]/70 mb-6">
//               Our team is here to help you make the switch to electric
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00C853] to-[#00E5FF] text-white font-['Inter'] font-semibold shadow-lg shadow-[#00C853]/30"
//               >
//                 Contact Support
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 rounded-full bg-white border border-[#00C853]/20 text-[#0A0F1C] font-['Inter'] font-semibold hover:border-[#00C853]/50 transition-all duration-300"
//               >
//                 Schedule Call
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


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

// ── Single accordion item ──────────────────────────────────────────────────────
function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-4% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="overflow-hidden rounded-xl transition-all duration-200"
      style={{
        border: open ? '1px solid rgba(0,165,80,0.35)' : '1px solid #e2eaf2',
        background: '#ffffff',
      }}
    >
      {/* Trigger row */}
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

      {/* Answer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="px-5 pb-5 text-sm leading-relaxed"
              style={{ color: '#4a5a6a' }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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
              <h2
                className="font-bold leading-tight mb-2"
                style={{ fontSize: 'clamp(26px, 4vw, 36px)', color: '#0d1b2a' }}
              >
                Frequently Asked Questions
              </h2>
              <p style={{ fontSize: 14, color: '#6b7e8f', lineHeight: 1.65 }}>
                Find answers to common questions about our technologies,
                products and services.
              </p>
            </motion.div>

            {/* Accordion list */}
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <FAQItem key={faq.question} faq={faq} index={i} />
              ))}
            </div>
          </div>

          {/* ── RIGHT: 3D question mark illustration ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="hidden lg:flex items-center justify-center pt-8"
          >
            <div className="relative flex items-center justify-center">
              {/* Outer glow ring */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 340,
                  height: 340,
                  background: 'radial-gradient(circle, rgba(0,165,80,0.07) 0%, transparent 70%)',
                  border: '1px solid rgba(0,165,80,0.12)',
                }}
              />
              {/* Inner ring */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 260,
                  height: 260,
                  border: '1px dashed rgba(0,165,80,0.18)',
                }}
              />

              {/* Floating 3D question mark image */}
              <motion.img
                src="/photos/question-mark-3d.png"
                alt="FAQ"
                className="relative z-10"
                style={{
                  width: 620,
                  height: 620,
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 16px 40px rgba(0,165,80,0.25))',
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Bottom dark navy bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        style={{ background: '#0d1b2a' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-white" style={{ fontSize: 18 }}>
                Still have questions?
              </p>
              <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.55)' }}>
                Our team is here to help you.
              </p>
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
      </motion.div>

    </section>
  )
}
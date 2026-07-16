'use client'

import Link from 'next/link'
import { motion, useInView } from 'motion/react'
import { ArrowRight, Check } from 'lucide-react'
import { useRef } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'

type Product = {
  id: number
  tag: string 
  title: string
  subtitle: string
  description: string
  image: string
  href: string
  features: string[]
}

const products: Product[] = [
  {
    id: 1,
    tag: 'Product 01',
    title: 'Powertrain',
    subtitle: 'High-Efficiency Mid Drive Motor with Integrated Controller',
    description: '',
    image: '/photos/motor-main.png',
    href: '/products#powertrain',
    features: [
      '1 – 7 kW Power Range',
      '94–95% Efficiency',
      'PMSM FOC Control',
      'IP67 Rated',
      'CAN + USB Diagnostics',
    ],
  },
  {
    id: 2,
    tag: 'Product 02',
    title: 'Controller',
    subtitle: 'Integrated Powertrain Control Unit',
    description: '',
    image: '/photos/controller-main.png',
    href: '/products#controller',
    features: [
      '3 – 7 kW Power Range',
      '200 Nm Peak Torque',
      '95% Efficiency',
      'Compact & Lightweight',
      'Air-Cooled Design',
    ],
  },
]

// ── Single Product Card ───────────────────────────────────────────────────────
function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-6% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ delay: index * 0.12, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group h-full shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] rounded-2xl"
    >
      <Link href={product.href} className="group block h-full" aria-label={`View details for ${product.title}`}>
        <div
          className="relative flex flex-col sm:flex-row h-full rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] cursor-pointer"
          style={{
            border: '1px solid #e2eaf2',
            background: '#ffffff',
            boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
          }}
        >
        {/* ── Left: content ── */}
        <div className="flex flex-col justify-between p-6 flex-1 min-w-0 sm:p-7">
          {/* Tag pill */}
          <div>
            <span
              className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest mb-4"
              style={{
                background: 'rgba(0,165,80,0.08)',
                color: '#00a550',
                border: '1px solid rgba(0,165,80,0.18)',
              }}
            >
              {product.tag}
            </span>

            <h3
              className="font-bold leading-tight mb-1"
              style={{ fontSize: 24, color: '#0d1b2a' }}
            >
              {product.title}
            </h3>

            <p
              className="text-sm leading-snug mb-5"
              style={{ color: '#4a5a6a' }}
            >
              {product.subtitle}
            </p>

            {/* Feature checklist */}
            <ul className="flex flex-col gap-2 mb-6">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <span
                    className="flex-shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: 18,
                      height: 18,
                      background: 'rgba(0,165,80,0.1)',
                    }}
                  >
                    <Check size={11} color="#00a550" strokeWidth={2.8} />
                  </span>
                  <span style={{ fontSize: 13, color: '#3a4a5a', fontWeight: 500 }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* View Details link */}
          <div className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200 group-hover:gap-3" style={{ color: '#00a550' , border: '1px solid #00a550', padding: '6px 12px', borderRadius: '40px'}}>
                View Details
            <ArrowRight size={15} />
          </div>
        </div>

        {/* ── Right: image on circular disc ── */}
        <div className="relative flex-shrink-0 flex items-center justify-center p-6 sm:w-[320px] lg:w-[360px]">
          {/* Circular green-tinted disc */}
          <div
            className="relative flex items-center justify-center rounded-full"
            style={{
              width: 330,
              height: 330,
              background: 'radial-gradient(circle, rgba(0,165,80,0.12) 0%, rgba(0,165,80,0.05) 55%, transparent 75%)',
            }}
          >
            {/* Floating product image */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 3.5 + index * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.6,
              }}
              className="relative z-10"
            >
              <ImageWithFallback
                src={product.image}
                alt={product.title}
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                style={{
                  width: 560,
                  height: 560,
                }}
              />
            </motion.div>
          </div>
        </div>
        </div>
      </Link>
    </motion.div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────
export function ProductSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-6% 0px' })

  return (
    <section
      id="products"
      className="relative py-16 sm:py-20"
      style={{ background: '#ffffff', borderBottom: '1px solid #e8eef4' }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* ── Section Header ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col gap-4 mb-10 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
        >
          {/* Left: label + heading + description */}
          <div className="max-w-lg">
            <p
              className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: '#00a550' }}
            >
              What We Build
            </p>
            <h2
              className="font-bold leading-tight mb-2"
              style={{ fontSize: 'clamp(26px,4vw,36px)', color: '#0d1b2a' }}
            >
              High - Performance.  &  Future-Ready.
            </h2>
            {/* <p style={{ fontSize: 14, color: '#4a5a6a', lineHeight: 1.7 }}>
              Precision-engineered EV powertrain solutions for two wheelers, three wheelers, and
              light electric vehicles.
            </p> */}
          </div>

          {/* Right: CTA button */}
          <div className="flex-shrink-0 self-start sm:self-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_20px_rgba(13,61,32,0.3)] hover:gap-3"
              style={{ background: '#0d3d20' }}
            >
              View All Products
              <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>

        {/* ── Product Cards — 2 col on md+, stacked on mobile ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
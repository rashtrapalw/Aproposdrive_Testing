'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-[clamp(6rem,8vw,8rem)]"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/video2.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[clamp(3rem,8vh,6rem)] w-full">
        <div className="grid lg:grid-cols-2 gap-[clamp(2rem,5vw,5rem)] items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-[clamp(1.2rem,2vw,2rem)]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="audiowide-regular text-[clamp(2.8rem,5vw,5.5rem)] leading-[1.1]"
            >
              <span className="text-white">Driving the </span>

              <span className="bg-gradient-to-r from-[#00C853] to-[#00E5FF] bg-clip-text text-transparent">
                Future
              </span>

              <br />

              <span className="text-white">of </span>

              <span className="text-[#00C853]">Green India</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[clamp(1rem,1.2vw,1.25rem)] text-white/70 leading-relaxed max-w-xl tracking-wide"
            >
              Revolutionizing Indian transportation with cutting-edge electric
              vehicle technology. Sustainable, powerful, and built for tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(0, 200, 83, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="px-[clamp(1.2rem,2vw,1.8rem)] py-[clamp(.7rem,1vw,.9rem)] rounded-full bg-gradient-to-r from-[#00C853] to-[#00E5FF] text-white font-['Inter'] font-medium text-sm flex items-center gap-2 shadow-lg shadow-[#00C853]/30"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00C853]/20 to-[#00E5FF]/20 blur-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div className="w-6 h-10 rounded-full border-2 border-[#0A0F1C]/30 dark:border-white/30 flex items-start justify-center p-2">
          <motion.div className="w-1 h-2 rounded-full bg-[#00C853]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
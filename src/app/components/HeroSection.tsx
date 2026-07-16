'use client'

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-30">

      {/* Background video overlay */}

      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/videos/video2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
           

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="audiowide-regular text-5xl md:text-6xl lg:text-7xl leading-tight"
            >
              <span className="text-white">Driving the </span>
              <span className="bg-gradient-to-r from-[#00C853] to-[#00E5FF] bg-clip-text text-transparent">
                Future
              </span>
              <br />
              <span className="text-white">of </span>
              <span className="text-[#00C853]"> Green India</span>
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl tracking-wide"
            >
              Revolutionizing Indian transportation with cutting-edge electric vehicle technology.
              Sustainable, powerful, and built for tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {/* <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 200, 83, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00C853] to-[#00E5FF] text-white font-['Inter'] font-medium text-sm flex items-center gap-2 shadow-lg shadow-[#00C853]/30"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </motion.button> */}
              <Link href="/products">
  <motion.button
    whileHover={{
      scale: 1.05,
      boxShadow: '0 0 40px rgba(0, 200, 83, 0.4)',
    }}
    whileTap={{ scale: 0.95 }}
    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00C853] to-[#00E5FF] text-white font-['Inter'] font-medium text-sm flex items-center gap-2 shadow-lg shadow-[#00C853]/30"
  >
    Explore Products
    <ArrowRight className="w-4 h-4" />
  </motion.button>
</Link>

            </motion.div>

        
          </motion.div>

          {/* Right Content - Hero Image */}
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
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00C853]/20 to-[#00E5FF]/20 rounded-3xl blur-3xl" />



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
          <motion.div className="w-1 h-2 bg-[#00C853] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

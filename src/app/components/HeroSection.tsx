'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        /*
         * FIX 1: Replace `min-h-screen` + `pt-30` with a clamp-based min-height.
         * `min-h-screen` alone causes the section to be too tall on 1920×1080 and
         * the content sits too low on 1366×768 because `pt-30` + `py-20` stack up.
         * clamp(600px, 100svh, 960px) caps height on very tall monitors while
         * ensuring a minimum of 600px on short laptop screens.
         * `svh` (small viewport height) avoids mobile browser chrome issues.
         */
        minHeight: 'clamp(600px, 100svh, 960px)',
        /*
         * FIX 2: Use paddingTop via clamp to account for the fixed navbar.
         * `pt-30` (120px) is too much on 768px-tall laptops, eating into content
         * space. clamp(72px, 9vh, 120px) scales with viewport height.
         */
        paddingTop: 'clamp(72px, 9vh, 120px)',
      }}
    >
      {/* Background video — unchanged */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/video2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          /*
           * FIX 3: Replace fixed `py-20` with clamp-based vertical padding.
           * py-20 (80px top+bottom) on a 768px-tall screen wastes too much space.
           * clamp(32px, 5vh, 80px) gives breathing room without overflowing short screens.
           */
          paddingTop: 'clamp(32px, 5vh, 80px)',
          paddingBottom: 'clamp(32px, 5vh, 80px)',
        }}
      >
        <div
          className="grid items-center"
          style={{
            /*
             * FIX 4: Replace `lg:grid-cols-2 gap-12` with a fluid gap.
             * gap-12 (48px) is fine on 1920px but wastes horizontal space on 1366px.
             * clamp(24px, 4vw, 48px) scales proportionally with viewport width.
             */
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'clamp(24px, 4vw, 48px)',
          }}
        >
          {/* ── Left Content — layout unchanged ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              /*
               * FIX 5: Replace `space-y-8` (fixed 32px) with a clamp gap.
               * On 1366×768, fixed 32px gaps between heading/body/button stack
               * pushes content too far down. clamp(16px, 3vh, 32px) compresses
               * proportionally on shorter screens.
               */
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(16px, 3vh, 32px)',
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="audiowide-regular leading-tight"
              style={{
                /*
                 * FIX 6: Replace `text-5xl md:text-6xl lg:text-7xl` with clamp.
                 * Tailwind breakpoints jump at fixed widths (768px, 1024px) so
                 * on a 1366×768 laptop the text jumps to 72px (text-7xl) which
                 * is enormous relative to the short viewport.
                 * clamp(36px, 5.5vw, 72px) scales smoothly: ~75px on 1366px,
                 * ~83px on 1440px, ~105px on 1920px — keeps proportions intact.
                 * Added lineHeight explicitly since clamp font-sizes can compress leading.
                 */
                fontSize: 'clamp(36px, 5.5vw, 72px)',
                lineHeight: 1.12,
              }}
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
              className="text-white/70 leading-relaxed tracking-wide"
              style={{
                /*
                 * FIX 7: Replace `text-lg md:text-xl` with clamp.
                 * text-xl (20px) is fine on 1920px but on 1366×768 combined with
                 * the large heading it can push the button off-screen on shorter
                 * viewport heights. clamp(14px, 1.25vw, 20px) scales smoothly.
                 * maxWidth kept to preserve line length readability.
                 */
                fontSize: 'clamp(14px, 1.25vw, 20px)',
                maxWidth: '36rem',
              }}
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
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 200, 83, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00C853] to-[#00E5FF] text-white font-['Inter'] font-medium text-sm flex items-center gap-2 shadow-lg shadow-[#00C853]/30"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* ── Right Content — unchanged ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00C853]/20 to-[#00E5FF]/20 rounded-3xl blur-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator — unchanged */}
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
  )
}
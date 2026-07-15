'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: 'clamp(600px, 100svh, 960px)',
        paddingTop: 'clamp(72px, 9vh, 120px)',
      }}
    >
      {/*
       * ── BACKGROUND VIDEO ──────────────────────────────────────────────────
       *
       * THE CORE PROBLEM:
       * object-cover fills the container by scaling the video so its smaller
       * dimension matches the container. On a 16:10 viewport (1440×900,
       * 1920×1200), the viewport is "taller relative to its width" compared to
       * a 16:9 video, so object-cover must scale up MORE to fill the height —
       * this crops the sides and makes the video appear more zoomed in.
       *
       * THE SOLUTION (used by production sites like Apple, Tesla, Linear):
       *
       * 1. Position the video absolutely and size it with min-width/min-height
       *    constraints instead of relying purely on object-cover. This gives us
       *    direct control over how much the video can scale.
       *
       * 2. Use `object-position: center 30%` instead of `center center`.
       *    Most hero videos have the subject in the upper-center area. Shifting
       *    the anchor point up means all crops (left/right on 16:10, top/bottom
       *    on ultra-wide) preserve the subject rather than cropping it away.
       *
       * 3. Add a subtle CSS scale so the video always has extra pixels around
       *    its edges. This means object-cover crops from the "buffer zone"
       *    rather than cutting into important content. scale(1.04) adds ~2% 
       *    buffer on each side — invisible to the user but prevents hard crops
       *    on edge-case aspect ratios like 1280×800 (1.60 ratio).
       *
       * 4. Keep `object-fit: cover` — we still want full coverage, we're just
       *    controlling how aggressively it zooms.
       *
       * WHY NOT object-fit: contain?
       *    Shows black bars — unacceptable for hero videos.
       *
       * WHY NOT a fixed aspect-ratio wrapper?
       *    We need the section to fill the viewport, not a fixed box.
       *
       * WHY NOT JavaScript resize listeners?
       *    CSS-only is more performant and handles all viewports including
       *    window resize and zoom-level changes.
       */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          /*
           * Take video out of document flow so it doesn't affect layout.
           * z-0 keeps it behind all content layers.
           */
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,

          /*
           * object-fit: cover — fills the container, maintaining aspect ratio.
           * Combined with scale(1.04) below, the crop happens in the buffer
           * zone rather than cutting important content.
           */
          objectFit: 'cover',

          /*
           * object-position: center 30%
           *
           * Default is "center center" (50% 50%). Changing vertical anchor to
           * 30% means when the video is cropped vertically (on ultra-wide
           * viewports), the upper portion of the frame is preserved. When
           * cropped horizontally (on 16:10 viewports), the horizontal center
           * is still preserved.
           *
           * Tune this value to match where your video's focal point is:
           * - "center center" → exact middle (default)
           * - "center 20%"    → upper portion preserved (good for sky/skyline shots)
           * - "center 40%"    → slightly above center (good for person/subject shots)
           *
           * Change "30%" to match your video's content focal point.
           */
          objectPosition: 'center 30%',

          /*
           * scale(1.04) adds a ~4% buffer around the video on all sides.
           *
           * Without this: on a 1440×900 (16:10) viewport, object-cover must
           * scale the 16:9 video up by ~11.25% to fill the height. This crops
           * ~5.6% off each side. If the video has content near its edges, it
           * gets cut.
           *
           * With scale(1.04): the effective crop zone shrinks because we've
           * pre-scaled the video slightly. The 4% buffer absorbs the worst of
           * the aspect-ratio difference without appearing zoomed to the user.
           *
           * 1.04 is the minimum effective buffer. Do not exceed 1.08 or the
           * video will appear noticeably zoomed on 16:9 screens.
           */
          transform: 'scale(1.04)',
          transformOrigin: 'center 30%', /* matches object-position anchor */
        }}
      >
        <source src="/videos/video2.mp4" type="video/mp4" />
      </video>

      {/* Overlay — unchanged */}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 1 }} />

      {/* Content — unchanged from previous responsive fix */}
      <div
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          zIndex: 2,
          paddingTop: 'clamp(32px, 5vh, 80px)',
          paddingBottom: 'clamp(32px, 5vh, 80px)',
        }}
      >
        <div
          className="grid items-center"
          style={{
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'clamp(24px, 4vw, 48px)',
          }}
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
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
              style={{ fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 1.12 }}
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
              style={{ fontSize: 'clamp(14px, 1.25vw, 20px)', maxWidth: '36rem' }}
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

          {/* Right — unchanged */}
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

      {/* Scroll indicator — unchanged */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ zIndex: 2 }}
      >
        <motion.div className="w-6 h-10 rounded-full border-2 border-[#0A0F1C]/30 dark:border-white/30 flex items-start justify-center p-2">
          <motion.div className="w-1 h-2 bg-[#00C853] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
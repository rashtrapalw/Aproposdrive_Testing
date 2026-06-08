'use client'

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-30">

      {/* Background video overlay */}

      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/videos/video2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Animated Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFB] via-[#E8F5E9] to-[#E0F7FA] dark:from-[#0A0F1C] dark:via-[#1A1F2E] dark:to-[#2A2F3E]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#00C853] rounded-full mix-blend-multiply filter blur-[128px] animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-[#00E5FF] rounded-full mix-blend-multiply filter blur-[128px] animate-pulse delay-700" />
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-[#00C853] rounded-full mix-blend-multiply filter blur-[128px] animate-pulse delay-1000" />
        </div>
      </div> */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,15,28,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,15,28,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#0A0F1C]/10 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#00E5FF]" />
              <span className="font-['Inter'] text-sm text-[#0A0F1C]/70">
                The Future of Electric Mobility
              </span>
            </motion.div> */}

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
            {/* 
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-['Inter'] text-lg md:text-xl text-[#0A0F1C]/60 text-white/70 leading-relaxed max-w-xl"
            >
              Revolutionizing Indian transportation with cutting-edge electric vehicle technology.
              Sustainable, powerful, and built for tomorrow.
            </motion.p> */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="overlock-regular text-lg md:text-xl text-white/70 leading-relaxed max-w-xl tracking-wide"
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

              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm border border-[#0A0F1C]/20 text-[#0A0F1C] font-['Inter'] font-semibold text-lg hover:bg-white transition-all duration-300 shadow-sm"
              >
                Watch Demo
              </motion.button> */}
            </motion.div>

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div>
                <div className="font-['Poppins'] font-bold text-3xl text-[#00C853]">500+</div>
                <div className="font-['Inter'] text-sm text-[#0A0F1C]/50">EVs Deployed</div>
              </div>
              <div>
                <div className="font-['Poppins'] font-bold text-3xl text-[#00E5FF]">100%</div>
                <div className="font-['Inter'] text-sm text-[#0A0F1C]/50">Electric</div>
              </div>
              <div>
                <div className="font-['Poppins'] font-bold text-3xl text-[#00C853]">50K+</div>
                <div className="font-['Inter'] text-sm text-[#0A0F1C]/50">CO₂ Saved</div>
              </div>
            </motion.div> */}
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

              {/* Image Container with Glassmorphism */}
              {/* <div className="relative rounded-3xl overflow-hidden border border-[#0A0F1C]/10 bg-white/80 backdrop-blur-sm shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1773096222232-d88bed5c1c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJpYyUyMGNhciUyMHNpZGUlMjB2aWV3fGVufDF8fHx8MTc3NTEyOTY5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern Electric Vehicle"
                  className="w-full h-auto"
                />
              </div> */}

              {/* Floating Info Card */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-[#0A0F1C]/10 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00C853] to-[#00E5FF] flex items-center justify-center">
                    <span className="font-['Poppins'] font-bold text-white">⚡</span>
                  </div>
                  <div>
                    <div className="font-['Poppins'] font-semibold text-[#0A0F1C]">Fast Charging</div>
                    <div className="font-['Inter'] text-sm text-[#0A0F1C]/50">0-80% in 30 min</div>
                  </div>
                </div>
              </motion.div> */}
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

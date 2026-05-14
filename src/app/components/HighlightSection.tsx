'use client'

import { motion } from 'motion/react';
import { Zap, TrendingUp, Gauge, Target, Wrench } from 'lucide-react';

export function HighlightSection() {
  const highlights = [
    {
      icon: Zap,
      title: 'Low-Heating Design',
      description: 'Longer controller life',
      color: 'from-[#00C853] to-[#00E5FF]',
    },
    {
      icon: TrendingUp,
      title: 'High-Efficiency Control',
      description: '10-15% better range',
      color: 'from-[#00E5FF] to-[#00C853]',
    },
    {
      icon: Gauge,
      title: 'Smooth Torque Delivery',
      description: 'Jitter-free ride',
      color: 'from-[#00C853] to-[#00E5FF]',
    },
    {
      icon: Target,
      title: 'Accurate Torque Control',
      description: 'High torque, low current',
      color: 'from-[#00E5FF] to-[#00C853]',
    },
    {
      icon: Wrench,
      title: 'Easy Assembly',
      description: 'Quick installation',
      color: 'from-[#00C853] to-[#00E5FF]',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-[#F8FAFB]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,200,83,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,83,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Poppins'] font-bold text-4xl md:text-5xl text-[#0A0F1C] mb-6">
            Reliable â€¢ Efficient â€¢ <span className="text-[#00C853]">Scalable</span>
          </h2>
          <p className="font-['Inter'] text-xl text-[#0A0F1C]/70 max-w-3xl mx-auto">
            EV Powertrain Solutions Engineered for Performance
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-white border border-[#00C853]/10 hover:border-[#00C853]/30 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300`} />

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[#0A0F1C] mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-['Inter'] text-sm text-[#0A0F1C]/60">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#00C853] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


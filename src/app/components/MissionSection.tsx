'use client'

import { motion } from 'motion/react';
import { Target, Rocket, Award, Users } from 'lucide-react';

export function MissionSection() {
  const missions = [
    {
      icon: Target,
      title: 'Simplifying Electric Mobility',
      description: 'Making electric vehicles accessible and affordable across India through innovative powertrain solutions and sustainable technology.',
      stats: { value: '100%', label: 'Electric Future' },
    },
    {
      icon: Rocket,
      title: 'Building Sustainable Systems',
      description: 'Developing cost-effective, rare-earth-free powertrain systems that reduce environmental impact and improve supply chain stability.',
      stats: { value: '95%', label: 'Efficiency' },
    },
    {
      icon: Award,
      title: 'Driving Innovation',
      description: 'Pioneering clean transportation technology with integrated motor controllers and advanced thermal management systems.',
      stats: { value: '0', label: 'Carbon Emissions' },
    },
    {
      icon: Users,
      title: 'Enabling Mass Adoption',
      description: 'Creating scalable EV platforms designed for Indian conditions to accelerate the transition to electric mobility nationwide.',
      stats: { value: '10-15%', label: 'Better Range' },
    },
  ];

  return (
    <section id="mission" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E0F7FA] to-[#F8FAFB]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00C853] rounded-full mix-blend-multiply filter blur-[150px]" />
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,15,28,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,15,28,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="font-['Poppins'] font-bold text-4xl md:text-5xl text-[#0A0F1C] mb-4">
            Our <span className="text-[#00C853]">Mission</span> & Goals
          </h1>
          <p className="font-['Inter'] text-lg text-[#0A0F1C]/60 max-w-2xl mx-auto">
            Committed to transforming India's automotive landscape through innovation and sustainability
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-[#0A0F1C]/10 hover:border-[#00C853]/50 transition-all duration-500 shadow-lg"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00C853]/0 to-[#00E5FF]/0 group-hover:from-[#00C853]/5 group-hover:to-[#00E5FF]/5 transition-all duration-500" />

                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C853] to-[#00E5FF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Stats Badge */}
                    <div className="text-right">
                      <div className="font-['Poppins'] font-bold text-2xl text-[#00E5FF]">
                        {mission.stats.value}
                      </div>
                      <div className="font-['Inter'] text-xs text-[#0A0F1C]/50">
                        {mission.stats.label}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-['Poppins'] font-bold text-2xl text-[#0A0F1C] mb-3">
                      {mission.title}
                    </h3>
                    <p className="font-['Inter'] text-[#0A0F1C]/60 leading-relaxed">
                      {mission.description}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="pt-4">
                    <div className="h-1.5 bg-[#0A0F1C]/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '75%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-[#00C853] to-[#00E5FF] rounded-full"
                      />
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="font-['Inter'] text-xs text-[#0A0F1C]/40">In Progress</span>
                      <span className="font-['Inter'] text-xs text-[#00C853]">75% Complete</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="font-['Poppins'] font-bold text-3xl text-[#0A0F1C] text-center mb-12">
            Technology <span className="text-[#00E5FF]">Advancement Timeline</span>
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00C853] via-[#00E5FF] to-[#00C853] hidden md:block" />

            <div className="space-y-12">
              {[
                {
                  year: '2024',
                  title: 'VoltDrive X1 Launch',
                  description: 'Premium electric sedan with 450km range',
                  position: 'left',
                },
                {
                  year: '2025',
                  title: 'Next-Gen Battery Tech',
                  description: '600km range with 15-min fast charging',
                  position: 'right',
                },
                {
                  year: '2026',
                  title: 'Autonomous Driving L3',
                  description: 'Highway pilot and smart parking assist',
                  position: 'left',
                },
                {
                  year: '2027',
                  title: 'Pan-India Network',
                  description: '10,000+ charging stations operational',
                  position: 'right',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: item.position === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${
                    item.position === 'right' ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`flex-1 ${item.position === 'left' ? 'md:text-right' : ''}`}>
                    <div className="inline-block p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#0A0F1C]/10 hover:border-[#00C853]/50 transition-all duration-300 shadow-lg">
                      <div className="font-['Poppins'] font-bold text-xl text-[#00E5FF] mb-2">
                        {item.year}
                      </div>
                      <div className="font-['Poppins'] font-semibold text-lg text-[#0A0F1C] mb-1">
                        {item.title}
                      </div>
                      <div className="font-['Inter'] text-sm text-[#0A0F1C]/60">
                        {item.description}
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:block relative">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#00C853] to-[#00E5FF] ring-4 ring-white" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

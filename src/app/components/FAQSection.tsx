'use client'

import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: 'What is the range of VoltDrive X1 on a full charge?',
      answer:
        'The VoltDrive X1 offers an impressive range of up to 450 km on a single full charge under optimal driving conditions. Real-world range may vary based on driving style, terrain, weather conditions, and use of features like air conditioning.',
    },
    {
      question: 'How long does it take to charge the vehicle?',
      answer:
        'With our DC fast charging stations, you can charge from 0-80% in just 30 minutes. Using a standard home AC charger (7.2kW), a full charge takes approximately 6-8 hours. We recommend overnight charging at home for daily use.',
    },
    {
      question: 'What is the warranty coverage?',
      answer:
        'VoltDrive X1 comes with a comprehensive 5-year/1,00,000 km warranty on the vehicle and an 8-year/1,60,000 km warranty on the battery pack. This includes free roadside assistance and annual maintenance for the first 3 years.',
    },
    {
      question: 'Are there government subsidies available?',
      answer:
        'Yes! Under the FAME II scheme, buyers can avail up to â‚¹1.5 lakh in central government subsidy. Additionally, many state governments offer additional incentives ranging from â‚¹50,000 to â‚¹1.5 lakh. Road tax exemptions and registration fee waivers are also available in most states.',
    },
    {
      question: 'What is the top speed and acceleration?',
      answer:
        'VoltDrive X1 has an electronically limited top speed of 180 km/h. It accelerates from 0-100 km/h in just 6.5 seconds, providing a thrilling yet controlled driving experience. The instant torque delivery of electric motors ensures smooth and powerful acceleration.',
    },
    {
      question: 'Where can I charge my vehicle?',
      answer:
        'You can charge at home using our included wall-mounted charger, at any of our 500+ VoltDrive charging stations across India, or at third-party public charging networks. Our mobile app helps you locate the nearest charging station and check real-time availability.',
    },
    {
      question: 'What are the maintenance costs?',
      answer:
        'Electric vehicles have significantly lower maintenance costs compared to traditional vehicles. EVs have fewer moving parts, no oil changes, and reduced brake wear due to regenerative braking. Annual maintenance typically costs around â‚¹8,000-12,000, which is 60% less than conventional vehicles.',
    },
    {
      question: 'Is the vehicle suitable for long highway trips?',
      answer:
        'Absolutely! With a 450 km range and our expanding network of fast-charging stations along major highways, long-distance travel is convenient. Our route planner app optimizes your journey by suggesting charging stops. Most highway routes now have charging stations every 100-150 km.',
    },
    {
      question: 'What safety features are included?',
      answer:
        'VoltDrive X1 is equipped with advanced safety features including 6 airbags, ABS with EBD, electronic stability control, hill-hold assist, 360-degree camera, blind-spot monitoring, lane departure warning, automatic emergency braking, and ISOFIX child seat anchors. It has received a 5-star safety rating.',
    },
    {
      question: 'Can I test drive before purchasing?',
      answer:
        'Yes! We offer complimentary test drives at all our experience centers across major cities. You can book a test drive through our website or mobile app. We also offer home test drives in select cities, where we bring the vehicle to your doorstep.',
    },
  ];

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#F8FAFB]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E5FF] rounded-full mix-blend-multiply filter blur-[200px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Poppins'] font-bold text-4xl md:text-5xl text-[#0A0F1C] mb-4">
            Frequently Asked <span className="text-[#00C853]">Questions</span>
          </h2>
          <p className="font-['Inter'] text-lg text-[#0A0F1C]/70 max-w-2xl mx-auto">
            Everything you need to know about VoltDrive electric vehicles
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-white backdrop-blur-sm border border-[#00C853]/10 shadow-sm"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#00C853]/10 rounded-2xl overflow-hidden bg-white backdrop-blur-sm hover:border-[#00C853]/50 transition-all duration-300 shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-['Poppins'] font-semibold text-[#0A0F1C] hover:text-[#00C853] transition-colors duration-300 [&[data-state=open]]:text-[#00C853]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-['Inter'] text-[#0A0F1C]/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-white backdrop-blur-sm border border-[#00C853]/10 shadow-sm">
            <h3 className="font-['Poppins'] font-bold text-2xl text-[#0A0F1C] mb-4">
              Still have questions?
            </h3>
            <p className="font-['Inter'] text-[#0A0F1C]/70 mb-6">
              Our team is here to help you make the switch to electric
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00C853] to-[#00E5FF] text-white font-['Inter'] font-semibold shadow-lg shadow-[#00C853]/30"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-white border border-[#00C853]/20 text-[#0A0F1C] font-['Inter'] font-semibold hover:border-[#00C853]/50 transition-all duration-300"
              >
                Schedule Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

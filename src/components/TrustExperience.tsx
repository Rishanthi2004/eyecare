import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, Stethoscope, Microscope, MessageSquare, CalendarCheck, ShieldCheck } from 'lucide-react';

export const TrustExperience: React.FC = () => {
  const principles = [
    {
      icon: HeartHandshake,
      title: 'Patient-First Approach',
      kicker: 'Care Centered on Dignity',
      description: 'Unhurried 45-minute consultant appointments where every question is answered with patience and empathy.',
    },
    {
      icon: Stethoscope,
      title: 'Experienced Clinical Team',
      kicker: 'Sub-Specialist Leadership',
      description: 'Fellowship-trained surgeons from premier global institutes leading cataract, retinal, and corneal medicine.',
    },
    {
      icon: Microscope,
      title: 'Modern Diagnostic Care',
      kicker: 'Sub-Micron Precision',
      description: 'Non-invasive swept-source OCT and wavefront mapping revealing microscopic ocular structures without discomfort.',
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      kicker: 'Transparent Guidance',
      description: 'You examine your own high-resolution ocular scans alongside your physician, exploring every pathway together.',
    },
    {
      icon: CalendarCheck,
      title: 'Convenient Appointments',
      kicker: 'Rapid Access',
      description: 'Same-week appointments, dedicated triage pathways, and straightforward coordination with healthcare insurers.',
    },
    {
      icon: ShieldCheck,
      title: 'Surgical Cleanrooms',
      kicker: 'ISO Class 7 Quality',
      description: 'Continuous HEPA positive-pressure filtered laminar airflow and single-use micro-instrumentation standards.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-2 font-mono">
          Clinical Principles
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A192F] mb-4">
          A Healthcare Experience Built on Trust
        </h2>
        <p className="text-slate-600 text-base sm:text-lg">
          We believe world-class eye care demands both technological mastery and deep human reassurance.
        </p>
      </div>

      {/* Grid of Flat Principle Panels (Zero Shadows, Clean Hairlines) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {principles.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white hover:bg-slate-50/60 border border-slate-200/90 hover:border-teal-500/50 p-7 rounded-2xl transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-teal-700" />
                </div>
                <div className="text-xs text-teal-700 font-semibold mb-1 font-mono">
                  {item.kicker}
                </div>
                <h3 className="text-xl font-bold text-[#0A192F] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-teal-700">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                <span>Verified Clinical Standard</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

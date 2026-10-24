import React from 'react';
import { motion } from 'motion/react';
import { Glasses, Car, Clock, CreditCard } from 'lucide-react';

export const PatientGuideSection: React.FC = () => {
  const guideItems = [
    {
      icon: Glasses,
      title: 'What to Bring',
      items: [
        'Current prescription distance & reading glasses',
        'Contact lens packaging or parameters (if worn)',
        'List of all prescribed eye drops and systemic medications',
        'Photo identification and insurance card (if applicable)',
      ],
    },
    {
      icon: Car,
      title: 'Pupil Dilation Notice',
      items: [
        'Dilating drops blur near vision and increase light sensitivity for 3–4 hours',
        'Please bring sunglasses for your journey home',
        'We advise arranging an accompanying driver or public transit',
        'Avoid operating motor vehicles while dilated',
      ],
    },
    {
      icon: Clock,
      title: 'Appointment Flow',
      items: [
        'Arrive 10 minutes prior to complete digital check-in',
        'Diagnostic imaging (OCT, corneal topography) takes ~15–20 minutes',
        'Comprehensive consultant examination lasts ~30–45 minutes',
        'Detailed findings & personalized plan discussed immediately',
      ],
    },
    {
      icon: CreditCard,
      title: 'Payment & Coverage',
      items: [
        'Direct settlement with all major private medical insurers',
        'Transparent fee schedules with zero hidden facility charges',
        'Flexible self-pay options for advanced premium lens upgrades',
        'Itemized clinical receipts provided on the day',
      ],
    },
  ];

  return (
    <section id="patient-guide" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-2 font-mono">
          Clinical Guidance
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A192F] mb-4">
          Patient Visit Guide
        </h2>
        <p className="text-slate-600 text-base sm:text-lg">
          Everything you need to know ahead of your consultation to ensure a relaxed, seamless, and reassuring clinical visit.
        </p>
      </div>

      {/* Grid of Flat Guide Cards (Zero Shadows, Clean Borders) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guideItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white hover:bg-slate-50/50 rounded-2xl p-8 border border-slate-200/90 hover:border-teal-500/50 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-[#0A192F]">
                  {item.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {item.items.map((line, lineIdx) => (
                  <li key={lineIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

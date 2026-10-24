import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS_DATA } from '../../data/hospitalData';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface FaqPageProps {
  onBookAppointment: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onBookAppointment }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-[#0A192F]">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-2 font-mono">
          Patient Queries
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0A192F] mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Clear, clinical answers regarding consultations, surgical procedures, dilating drops, and insurance settlements.
        </p>
      </div>

      {/* Accordion List (Flat, Hairlines, Zero Shadows) */}
      <div className="space-y-3 mb-16">
        {FAQS_DATA.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <span className="text-base sm:text-lg font-bold text-[#0A192F] leading-snug">
                  {faq.q}
                </span>
                <div
                  className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#0A192F] text-white' : 'text-slate-500 bg-slate-100'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Card (Flat Pill CTA) */}
      <div className="bg-[#0A192F] rounded-2xl p-8 border border-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">
            Have a Specific Clinical Question?
          </h3>
          <p className="text-xs text-slate-300">
            Our clinical triage desk is available to answer questions and guide your booking.
          </p>
        </div>
        <button
          onClick={onBookAppointment}
          className="px-6 py-2.5 bg-teal-400 hover:bg-teal-300 text-slate-950 text-xs font-semibold rounded-full transition-colors flex items-center gap-2 cursor-pointer shrink-0"
        >
          <span>Speak with Coordinator</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

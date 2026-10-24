import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { JOURNEY_STEPS } from '../data/hospitalData';
import { Calendar, Stethoscope, FileText, HeartPulse, Check, ArrowRight } from 'lucide-react';

interface VisionJourneyProps {
  onBookAppointment: () => void;
}

export const VisionJourney: React.FC<VisionJourneyProps> = ({ onBookAppointment }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [
    Calendar,
    Stethoscope,
    FileText,
    HeartPulse,
  ];

  const stepBackgrounds = [
    'from-white via-slate-50 to-teal-50/20',
    'from-teal-50/20 via-white to-sky-50/20',
    'from-sky-50/20 via-white to-cyan-50/20',
    'from-cyan-50/20 via-white to-emerald-50/20',
  ];

  return (
    <section className={`py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-8 bg-gradient-to-b ${stepBackgrounds[activeStep]} border border-slate-200 rounded-3xl transition-colors duration-500`}>
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-2 font-mono">
          Clinical Pathway
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A192F] mb-4">
          Your Journey to Better Vision
        </h2>
        <p className="text-slate-600 text-base sm:text-lg">
          From your initial consultation to long-term visual health, our four-stage care continuum ensures total clarity and reassurance at every milestone.
        </p>
      </div>

      {/* Desktop Horizontal Connected Timeline (Flat, Zero Shadows) */}
      <div className="hidden md:block mb-12">
        <div className="relative mb-10 px-8">
          <div className="absolute top-1/2 left-12 right-12 -translate-y-1/2 h-[2px] bg-slate-200 -z-10" />
          <motion.div
            className="absolute top-1/2 left-12 -translate-y-1/2 h-[2px] bg-teal-600 -z-10"
            initial={{ width: '0%' }}
            animate={{ width: `${(activeStep / (JOURNEY_STEPS.length - 1)) * 90}%` }}
            transition={{ duration: 0.4 }}
          />

          <div className="flex items-center justify-between">
            {JOURNEY_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx];
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-200 border ${
                      isActive
                        ? 'bg-teal-700 text-white border-teal-700'
                        : isPast
                        ? 'bg-teal-50 text-teal-800 border-teal-200'
                        : 'bg-white text-slate-400 border-slate-200 group-hover:border-slate-300'
                    }`}
                  >
                    {isPast ? <Check className="w-5 h-5 stroke-[2.5]" /> : <Icon className="w-6 h-6" />}
                  </div>
                  <div className="mt-3 text-center">
                    <span className="block text-xs font-mono font-semibold text-teal-700">
                      STAGE {step.step}
                    </span>
                    <span
                      className={`text-sm font-bold transition-colors ${
                        isActive ? 'text-[#0A192F]' : 'text-slate-500'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Presentation Card (Flat, Zero Shadows) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <div className="flex items-center gap-2 text-xs text-teal-700 font-semibold mb-2">
                  <span>STEP {JOURNEY_STEPS[activeStep].step}</span>
                  <span aria-hidden="true">·</span>
                  <span>{JOURNEY_STEPS[activeStep].tagline}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F] mb-4">
                  {JOURNEY_STEPS[activeStep].title}: {JOURNEY_STEPS[activeStep].tagline}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {JOURNEY_STEPS[activeStep].description}
                </p>

                {activeStep === 0 && (
                  <button
                    onClick={onBookAppointment}
                    className="px-6 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-full transition-colors inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request Your Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="md:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-100">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                  Clinical Milestones
                </div>
                <div className="space-y-3">
                  {JOURNEY_STEPS[activeStep].milestones.map((item, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                        {mIdx + 1}
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Vertical Connected Timeline */}
      <div className="block md:hidden space-y-4">
        {JOURNEY_STEPS.map((step, idx) => {
          const Icon = stepIcons[idx];
          return (
            <div
              key={step.step}
              className="bg-white border border-slate-200 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-teal-700 font-semibold">
                    STAGE {step.step}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    {step.title}
                  </h4>
                </div>
              </div>
              <p className="text-xs font-medium text-teal-800 mb-2">
                {step.tagline}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {step.description}
              </p>
              <div className="pt-3 border-t border-slate-100 space-y-1.5">
                {step.milestones.map((m, mIdx) => (
                  <div key={mIdx} className="text-[11px] text-slate-500 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-teal-500" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

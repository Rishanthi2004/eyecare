import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PATIENT_STORIES } from '../data/hospitalData';
import { ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export const PatientStories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevStory = () => {
    setCurrentIndex((prev) => (prev === 0 ? PATIENT_STORIES.length - 1 : prev - 1));
  };

  const nextStory = () => {
    setCurrentIndex((prev) => (prev === PATIENT_STORIES.length - 1 ? 0 : prev + 1));
  };

  const current = PATIENT_STORIES[currentIndex];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-2 font-mono">
            Patient Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A192F]">
            Restoring Sight, Restoring Confidence
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Personal reflections from patients whose clarity was restored through tailored clinical pathways.
          </p>
        </div>

        {/* Carousel Accessible Navigation Buttons (Flat, Zero Shadows) */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevStory}
            aria-label="Previous patient story"
            className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-[#0A192F] flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextStory}
            aria-label="Next patient story"
            className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-[#0A192F] flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Card (Flat Pearl White Hairline) */}
      <div className="relative bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 overflow-hidden">
        <Quote className="absolute top-8 right-8 w-24 h-24 text-teal-50 pointer-events-none -z-0" />

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 max-w-3xl"
          >
            {/* Treatment Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-medium mb-6 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
              <span>{current.treatment}</span>
              <span aria-hidden="true">·</span>
              <span>Review: {current.year}</span>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#0A192F] leading-snug mb-8">
              "{current.quote}"
            </blockquote>

            {/* Patient Attribution & Specialist */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <div>
                <div className="font-bold text-[#0A192F] text-base">{current.patientName}</div>
                <div className="text-xs text-slate-500">{current.outcome}</div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Supervised by {current.specialist}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Pagination dots */}
        <div className="flex items-center gap-1.5 mt-8 pt-4">
          {PATIENT_STORIES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to patient story ${index + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                currentIndex === index ? 'w-8 bg-teal-600' : 'w-2 bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

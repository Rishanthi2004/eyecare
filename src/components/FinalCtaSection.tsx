import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

interface FinalCtaSectionProps {
  onBookAppointment: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onBookAppointment }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-[#0A192F] text-white p-8 sm:p-14 lg:p-16 border border-slate-700/60">
        {/* Flat Refractive Lines on Right */}
        <div className="absolute -right-12 -bottom-12 w-[420px] h-[420px] sm:w-[480px] sm:h-[480px] rounded-full pointer-events-none opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <circle cx="260" cy="260" r="220" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="6 12" />
            <circle cx="260" cy="260" r="160" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 8" opacity="0.6" />
            <circle cx="260" cy="260" r="100" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 6" opacity="0.8" />
            <line x1="0" y1="260" x2="380" y2="260" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="6 6" opacity="0.5" />
            <line x1="260" y1="0" x2="260" y2="380" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="6 6" opacity="0.5" />
            <circle cx="260" cy="260" r="4" fill="#FFFFFF" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl text-left">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-400 font-mono mb-4">
            A NEW PERSPECTIVE ON EYE CARE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Your Next Chapter Starts with Clearer Vision.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
            Experience unhurried consultations, sub-micron diagnostics, and bespoke restorative eye care with our senior consultant ophthalmologists.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onBookAppointment}
              className="px-8 py-3.5 bg-teal-400 hover:bg-teal-300 text-slate-950 text-xs sm:text-sm font-bold rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Your Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 text-xs text-slate-300 px-2 py-2">
              <Phone className="w-4 h-4 text-teal-400" />
              <span>Enquiries: +44 20 7946 0910</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

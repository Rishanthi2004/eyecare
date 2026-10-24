import React, { useState } from 'react';
import { TECH_DATA, TechItem } from '../data/hospitalData';
import { CheckCircle2 } from 'lucide-react';

export const TechnologyShowcase: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem>(TECH_DATA[0]);

  return (
    <section id="technology" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-2 font-mono">
          Diagnostic Precision
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A192F] mb-4">
          Advanced Ophthalmic Technology
        </h2>
        <p className="text-slate-600 text-base sm:text-lg">
          State-of-the-art diagnostic instrumentation and femtosecond laser systems enabling sub-micron structural mapping and gentle micro-incisions.
        </p>
      </div>

      {/* Main Showcase Layout (Flat, Zero Shadows) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Technical Image Panel with Overlay (7 cols) */}
        <div className="lg:col-span-7 relative">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 aspect-[16/10]">
            <img
              src="/src/assets/images/tech_oct_imaging_1792834034567.jpg"
              alt="Ophthalmic OCT diagnostic suite"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-90"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 pointer-events-none" />

            {/* Measurement Line Labels */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white/90 text-xs font-mono">
              <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1 rounded-full border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span>SWEPT-SOURCE OCT INTERFEROMETRY</span>
              </div>
              <div className="bg-slate-900/80 px-2.5 py-1 rounded-full border border-white/20">
                <span>AXIAL RES: &lt; 3.5 µm</span>
              </div>
            </div>

            {/* Bottom floating technical datum tag */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 text-[#0A192F] flex items-center justify-between">
              <div>
                <div className="text-[10px] text-teal-700 uppercase tracking-wider font-bold">Active System</div>
                <div className="text-sm font-bold text-[#0A192F]">{selectedTech.name}</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">Diagnostic Precision</div>
                <div className="text-xs font-bold text-teal-700 font-mono">{selectedTech.resolution}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Technical Instrumentation Selector (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          {TECH_DATA.map((item) => {
            const isSelected = selectedTech.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedTech(item)}
                className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-teal-600 ring-1 ring-teal-600'
                    : 'bg-white/80 hover:bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-1.5">
                  <h4 className="text-base font-bold text-[#0A192F]">
                    {item.name}
                  </h4>
                  <span className="text-[10px] font-mono text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200 shrink-0">
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs text-teal-700 font-semibold mb-2">
                  {item.category} · {item.resolution}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {item.description}
                </p>

                <div className="text-[11px] text-slate-700 flex items-start gap-1.5 pt-2 border-t border-slate-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A192F]">Clinical impact:</strong> {item.clinicalImpact}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

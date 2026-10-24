import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ANATOMY_DATA, AnatomyPart } from '../data/hospitalData';
import { ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface ScienceOfSightProps {
  onSelectService?: (serviceId: string) => void;
  onBookAppointment?: (preselectedService?: string) => void;
}

export const ScienceOfSight: React.FC<ScienceOfSightProps> = ({
  onBookAppointment,
}) => {
  const [selectedPartId, setSelectedPartId] = useState<string>('cornea');
  const [focalMode, setFocalMode] = useState<'normal' | 'myopic' | 'hyperopic'>('normal');

  const selectedPart = ANATOMY_DATA.find((p) => p.id === selectedPartId) || ANATOMY_DATA[0];

  const focalPoint = {
    normal: { x: 565, y: 200, label: 'Perfect retinal focus (Emmetropia)' },
    myopic: { x: 495, y: 200, label: 'Focal plane anterior to retina (Myopia)' },
    hyperopic: { x: 625, y: 200, label: 'Virtual focus posterior to retina (Hyperopia)' },
  }[focalMode];

  return (
    <section id="science-of-sight" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-2 font-mono">
          Clinical Vision Science
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A192F] mb-4">
          Discover the Science of Sight
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          The human eye is an extraordinary optical instrument focusing millions of photons every second. Explore its anatomical architecture and how our specialists restore sub-micron visual clarity.
        </p>
      </div>

      {/* Interactive Ray Tracing Mode Selector (Flat, Zero Shadows) */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        <span className="text-xs font-medium text-slate-500 mr-2">Optical Simulation:</span>
        {(['normal', 'myopic', 'hyperopic'] as const).map((mode) => {
          const labels = {
            normal: 'Emmetropia (20/20 Focus)',
            myopic: 'Myopia (Nearsighted)',
            hyperopic: 'Hyperopia (Farsighted)',
          };
          return (
            <button
              key={mode}
              onClick={() => setFocalMode(mode)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                focalMode === mode
                  ? 'bg-teal-700 text-white font-semibold'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {labels[mode]}
            </button>
          );
        })}
      </div>

      {/* Main Interactive Stage (Flat, Zero Shadows) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10">
        {/* Left / Center: Interactive SVG Eye Model (7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full aspect-[16/10] max-w-[640px] flex items-center justify-center select-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 700 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="vitreousGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F0FDFA" stopOpacity="0.9" />
                  <stop offset="70%" stopColor="#E0F2FE" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.3" />
                </radialGradient>
                <linearGradient id="scleraGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F8FAFC" />
                  <stop offset="60%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#E2E8F0" />
                </linearGradient>
                <linearGradient id="corneaGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#0D9488" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#CCFBF1" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="retinaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FB7185" />
                  <stop offset="70%" stopColor="#F43F5E" />
                  <stop offset="100%" stopColor="#E11D48" />
                </linearGradient>
                <radialGradient id="crystallineLensGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="60%" stopColor="#E0F2FE" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#0D9488" stopOpacity="0.5" />
                </radialGradient>
              </defs>

              <line x1="80" y1="200" x2="640" y2="200" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.6" />
              <line x1="300" y1="60" x2="300" y2="340" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.4" />

              <path
                d="M 230 110 C 270 70, 360 50, 450 60 C 540 70, 600 130, 580 200 C 600 270, 540 330, 450 340 C 360 350, 270 330, 230 290"
                stroke="#94A3B8"
                strokeWidth="6"
                fill="url(#scleraGrad)"
              />

              <path
                d="M 270 120 C 310 85, 380 75, 450 82 C 520 90, 560 140, 560 200 C 560 260, 520 310, 450 318 C 380 325, 310 315, 270 280 Z"
                fill="url(#vitreousGrad)"
                stroke="#E2E8F0"
                strokeWidth="1.5"
              />

              <path
                d="M 330 92 C 400 86, 500 95, 550 140 C 570 160, 575 190, 572 200 C 575 210, 570 240, 550 260 C 500 305, 400 314, 330 308"
                stroke={selectedPartId === 'retina' ? '#E11D48' : '#F43F5E'}
                strokeWidth={selectedPartId === 'retina' ? '5' : '3'}
                fill="none"
                className="transition-all duration-300"
                strokeLinecap="round"
              />

              <circle cx="572" cy="200" r="4" fill="#E11D48" />

              <g
                className="cursor-pointer transition-opacity"
                onClick={() => setSelectedPartId('optic-nerve')}
              >
                <path
                  d="M 565 215 C 600 220, 640 230, 670 240 L 670 260 C 635 250, 595 240, 560 235 Z"
                  fill={selectedPartId === 'optic-nerve' ? '#0D9488' : '#CBD5E1'}
                  opacity={selectedPartId === 'optic-nerve' ? 0.95 : 0.6}
                  className="transition-colors duration-300"
                />
                <line x1="565" y1="225" x2="670" y2="250" stroke="#0F766E" strokeWidth="1.5" strokeDasharray="3 3" />
              </g>

              <path
                d="M 230 110 C 140 140, 140 260, 230 290"
                stroke={selectedPartId === 'cornea' ? '#0D9488' : '#0284C7'}
                strokeWidth={selectedPartId === 'cornea' ? '5' : '3'}
                fill="none"
                className="cursor-pointer transition-all duration-300"
                onClick={() => setSelectedPartId('cornea')}
              />

              <path
                d="M 230 110 C 160 140, 160 260, 230 290 C 245 250, 245 150, 230 110 Z"
                fill="url(#corneaGrad)"
                opacity="0.25"
              />

              <g
                className="cursor-pointer transition-all duration-300"
                onClick={() => setSelectedPartId('iris')}
              >
                <path
                  d="M 235 125 C 245 140, 250 160, 255 175 L 245 175 C 240 160, 230 140, 225 125 Z"
                  fill={selectedPartId === 'iris' ? '#0D9488' : '#0369A1'}
                />
                <path
                  d="M 235 275 C 245 260, 250 240, 255 225 L 245 225 C 240 240, 230 260, 225 275 Z"
                  fill={selectedPartId === 'iris' ? '#0D9488' : '#0369A1'}
                />
              </g>

              <line
                x1="250"
                y1="175"
                x2="250"
                y2="225"
                stroke={selectedPartId === 'pupil' ? '#0D9488' : '#0A192F'}
                strokeWidth={selectedPartId === 'pupil' ? '4' : '2'}
                strokeDasharray="2 3"
                className="cursor-pointer"
                onClick={() => setSelectedPartId('pupil')}
              />

              <path
                d="M 268 150 C 285 170, 285 230, 268 250 C 252 230, 252 170, 268 150 Z"
                fill="url(#crystallineLensGrad)"
                stroke={selectedPartId === 'lens' ? '#0D9488' : '#38BDF8'}
                strokeWidth={selectedPartId === 'lens' ? '3' : '1.8'}
                className="cursor-pointer transition-all duration-300"
                onClick={() => setSelectedPartId('lens')}
              />

              <g className="transition-all duration-500">
                <path
                  d={`M 60 140 L 175 160 L 268 180 L ${focalPoint.x} ${focalPoint.y}`}
                  stroke="#0D9488"
                  strokeWidth="1.2"
                  strokeOpacity="0.8"
                  strokeDasharray="4 4"
                />
                <path
                  d={`M 50 200 L 160 200 L 268 200 L ${focalPoint.x} ${focalPoint.y}`}
                  stroke="#0284C7"
                  strokeWidth="1.8"
                  strokeOpacity="0.9"
                />
                <path
                  d={`M 60 260 L 175 240 L 268 220 L ${focalPoint.x} ${focalPoint.y}`}
                  stroke="#0D9488"
                  strokeWidth="1.2"
                  strokeOpacity="0.8"
                  strokeDasharray="4 4"
                />
                <circle cx={focalPoint.x} cy={focalPoint.y} r="4" fill="#F59E0B" />
              </g>

              {ANATOMY_DATA.map((part) => {
                const coords: Record<string, { x: number; y: number }> = {
                  cornea: { x: 170, y: 200 },
                  iris: { x: 245, y: 145 },
                  pupil: { x: 250, y: 200 },
                  lens: { x: 268, y: 200 },
                  retina: { x: 550, y: 155 },
                  'optic-nerve': { x: 610, y: 235 },
                };
                const c = coords[part.id] || { x: 300, y: 200 };
                const isSelected = selectedPartId === part.id;

                return (
                  <g
                    key={part.id}
                    className="cursor-pointer"
                    onClick={() => setSelectedPartId(part.id)}
                  >
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r={isSelected ? 6 : 4}
                      fill={isSelected ? '#0D9488' : '#0284C7'}
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>{focalPoint.label}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {ANATOMY_DATA.map((part) => (
              <button
                key={part.id}
                onClick={() => setSelectedPartId(part.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                  selectedPartId === part.id
                    ? 'bg-teal-700 text-white font-semibold'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {part.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Explanatory Clinical Panel (Flat, Zero Shadows) */}
        <div className="lg:col-span-5 bg-slate-50/90 rounded-2xl p-6 sm:p-7 border border-slate-200">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPart.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-teal-700 font-medium mb-1">
                    <span>{selectedPart.latinName}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedPart.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A192F]">
                    {selectedPart.name}
                  </h3>
                </div>
                {selectedPart.refractivePower && (
                  <div className="bg-teal-50 border border-teal-200 rounded-xl px-3 py-1.5 text-right shrink-0">
                    <div className="text-[10px] text-teal-700 uppercase tracking-wider font-semibold">Optical Power</div>
                    <div className="text-sm font-bold text-teal-900 tabular-nums">
                      {selectedPart.refractivePower}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-3 bg-white border border-slate-200 rounded-xl mb-4 text-xs font-medium text-slate-700 flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>{selectedPart.opticalRole}</span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {selectedPart.description}
              </p>

              <div className="mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
                  Associated Clinical Conditions
                </div>
                <div className="space-y-1.5">
                  {selectedPart.clinicalConditions.map((cond, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{cond}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => onBookAppointment && onBookAppointment(selectedPart.id)}
                  className="w-full py-2.5 px-4 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Consultation for {selectedPart.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

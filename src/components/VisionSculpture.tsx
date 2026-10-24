import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Sparkles, Activity, ShieldCheck, Sliders, Layers, Zap, Crosshair } from 'lucide-react';

export const VisionSculpture: React.FC = () => {
  const [activeView, setActiveView] = useState<'optical-array' | 'wavefront-mesh'>('optical-array');
  const [focusOffset, setFocusOffset] = useState<number>(0); // -10 to +10

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for interactive mouse-responsive depth
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className="relative w-full max-w-[560px] mx-auto flex flex-col items-center justify-center select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
    >
      {/* Soft Pearl, Ice-Blue & Aqua Ambient Glows */}
      <div className="absolute -inset-10 bg-gradient-to-tr from-cyan-100/50 via-teal-50/60 to-sky-100/50 rounded-3xl blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-10 bg-gradient-to-b from-white/80 to-teal-100/30 rounded-3xl blur-2xl pointer-events-none -z-10" />

      {/* View Switcher Tabs (Optical Array vs 3D Wavefront Mesh) */}
      <div className="flex items-center gap-1.5 p-1 bg-white/80 backdrop-blur-md rounded-xl border border-slate-200/80 shadow-sm mb-4 z-20">
        <button
          onClick={() => setActiveView('optical-array')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeView === 'optical-array'
              ? 'bg-teal-700 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Optical Lens Array</span>
        </button>
        <button
          onClick={() => setActiveView('wavefront-mesh')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeView === 'wavefront-mesh'
              ? 'bg-teal-700 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Crosshair className="w-3.5 h-3.5" />
          <span>Wavefront Topography</span>
        </button>
      </div>

      {/* Main 3D Tilting Presentation Box */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full aspect-square max-w-[460px] rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(13,148,136,0.15)] p-4 flex items-center justify-center overflow-hidden"
      >
        {activeView === 'optical-array' ? (
          /* View 1: Advanced Precision Optical Lens Array & Laser Suite */
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-950">
            <img
              src="/src/assets/images/vision_optical_crystal_1792834808894.jpg"
              alt="Advanced precision optical lens array and laser refraction suite"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-95 transition-transform duration-700 hover:scale-105"
            />

            {/* Gradient Scrim & Aqua Rim Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20 pointer-events-none" />

            {/* Animated Laser Alignment Overlay Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                {/* Crosshair & Calibration concentric lines */}
                <circle cx="200" cy="200" r="160" fill="none" stroke="#2DD4BF" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.4" />
                <circle cx="200" cy="200" r="110" fill="none" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.5" />
                <circle cx="200" cy="200" r="60" fill="none" stroke="#2DD4BF" strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
                
                {/* Horizontal & Vertical Optical Axis */}
                <line x1="20" y1="200" x2="380" y2="200" stroke="#2DD4BF" strokeWidth="0.75" strokeDasharray="4 8" opacity="0.5" />
                <line x1="200" y1="20" x2="200" y2="380" stroke="#38BDF8" strokeWidth="0.75" strokeDasharray="4 8" opacity="0.5" />
                
                {/* Central Laser Beam Focus Point with soft pulse */}
                <circle cx="200" cy="200" r="5" fill="#5EEAD4" className="filter drop-shadow-[0_0_8px_#14B8A6] animate-pulse" />
              </svg>
            </div>

            {/* In-Frame Live Technical Status Badge */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-[11px] font-mono pointer-events-none">
              <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-teal-500/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span>MULTIPLE-ELEMENT OPTICAL ARRAY</span>
              </div>
              <div className="bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-sky-500/30 text-sky-300">
                <span>λ = 1050 nm</span>
              </div>
            </div>

            {/* Bottom Floating Telemetry Bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md p-3 rounded-xl border border-white/20 text-white flex items-center justify-between">
              <div>
                <div className="text-[10px] text-teal-400 uppercase tracking-wider font-semibold">Refractive Precision</div>
                <div className="text-xs font-bold font-mono">0.012 µm RMS Wavefront</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Strehl Ratio</div>
                <div className="text-xs font-bold text-teal-300 font-mono">0.985 / 1.000</div>
              </div>
            </div>
          </div>
        ) : (
          /* View 2: Interactive 3D Wavefront Topography Simulation */
          <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-slate-950 via-[#0A192F] to-slate-950 p-6 flex flex-col justify-between overflow-hidden">
            {/* Ambient aqua grid glow */}
            <div className="absolute inset-0 bg-[radial-gradient(#14B8A6_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

            <div className="relative z-10 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-teal-400 font-semibold">
                  Sub-Micron Topography
                </div>
                <div className="text-sm font-bold text-white">
                  Wavefront Aberrometry Model
                </div>
              </div>
              <span className="text-[10px] font-mono text-teal-300 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-700/60">
                PLANAR FOCUS
              </span>
            </div>

            {/* 3D Wavefront Surface Grid SVG */}
            <div className="relative z-10 my-auto py-2">
              <svg className="w-full h-44" viewBox="0 0 360 180" fill="none">
                <defs>
                  <linearGradient id="waveMeshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0284C7" stopOpacity="0.7" />
                  </linearGradient>
                </defs>

                {/* Simulated 3D Isometric Wavefront Contour Mesh */}
                {[-30, -15, 0, 15, 30].map((offset, i) => {
                  const yBase = 90 + offset * 1.8;
                  const curveModifier = Math.sin((i / 4) * Math.PI) * (20 + focusOffset);
                  return (
                    <path
                      key={i}
                      d={`M 30 ${yBase} Q 180 ${yBase - curveModifier} 330 ${yBase}`}
                      stroke="url(#waveMeshGrad)"
                      strokeWidth="1.6"
                      fill="none"
                      className="transition-all duration-300"
                    />
                  );
                })}

                {/* Cross Connecting Rays */}
                {[60, 120, 180, 240, 300].map((x, j) => (
                  <line
                    key={j}
                    x1={x}
                    y1="35"
                    x2={x}
                    y2="145"
                    stroke="#14B8A6"
                    strokeWidth="0.8"
                    strokeDasharray="2 4"
                    opacity="0.4"
                  />
                ))}

                {/* Central Optical Singularity Focal Point */}
                <circle cx="180" cy="90" r="4.5" fill="#5EEAD4" className="filter drop-shadow-[0_0_8px_#2DD4BF]" />
              </svg>
            </div>

            {/* Interactive Calibration Slider */}
            <div className="relative z-10 bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-teal-500/20">
              <div className="flex items-center justify-between text-[11px] text-slate-300 mb-1.5 font-medium">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-teal-400" />
                  <span>Optical Wavefront Bias</span>
                </span>
                <span className="font-mono text-teal-400">
                  {focusOffset > 0 ? `+${focusOffset} D` : `${focusOffset} D (Planar)`}
                </span>
              </div>
              <input
                type="range"
                min="-10"
                max="10"
                value={focusOffset}
                onChange={(e) => setFocusOffset(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Floating Glass Medical Datum Panel Top-Left */}
        <motion.div
          className="absolute -top-3 -left-3 glass-panel px-3.5 py-2 rounded-xl flex items-center gap-2 pointer-events-auto"
          style={{ transform: 'translateZ(45px)' }}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-700">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div className="text-left">
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">Wavefront RMS</div>
            <div className="text-xs font-semibold text-slate-900">0.012 µm · Planar</div>
          </div>
        </motion.div>

        {/* Floating Glass Medical Datum Panel Bottom-Right */}
        <motion.div
          className="absolute -bottom-3 -right-3 glass-panel px-3.5 py-2 rounded-xl flex items-center gap-2 pointer-events-auto"
          style={{ transform: 'translateZ(45px)' }}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <div className="w-7 h-7 rounded-lg bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-700">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <div className="text-left">
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">Surgical Cleanroom</div>
            <div className="text-xs font-semibold text-slate-900">ISO Class 7 Theatres</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

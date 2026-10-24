import React from 'react';
import { TechnologyShowcase } from '../TechnologyShowcase';

export const TechnologyPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-2">
            Vision Science Infrastructure
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0A192F] mb-4">
            Clinical Technology & Cleanroom Theatres
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore our state-of-the-art diagnostic instruments, non-mydriatic angiography, and femtosecond laser microsurgical systems.
          </p>
        </div>
      </div>

      <TechnologyShowcase />
    </div>
  );
};

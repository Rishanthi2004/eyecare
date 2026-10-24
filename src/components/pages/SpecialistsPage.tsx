import React from 'react';
import { SpecialistsSection } from '../SpecialistsSection';

interface SpecialistsPageProps {
  onBookAppointment: (serviceId?: string, specialistName?: string) => void;
}

export const SpecialistsPage: React.FC<SpecialistsPageProps> = ({ onBookAppointment }) => {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-2">
            Clinical Faculty
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0A192F] mb-4">
            Consultant Ophthalmologists & Surgeons
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Our physicians hold verified international fellowships and active research appointments, delivering evidence-grounded treatment plans tailored to each individual.
          </p>
        </div>
      </div>

      <SpecialistsSection onBookAppointment={onBookAppointment} />
    </div>
  );
};

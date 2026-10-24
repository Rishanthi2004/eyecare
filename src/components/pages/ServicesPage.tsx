import React from 'react';
import { ServiceExplorer } from '../ServiceExplorer';
import { ServiceItem } from '../../data/hospitalData';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onBookAppointment: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onBookAppointment,
}) => {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-2">
            Clinical Scope
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0A192F] mb-4">
            Eye Care Specialities & Surgical Services
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            From routine baseline wellness assessments to complex femtosecond micro-incisional surgery, explore our full spectrum of sub-specialist clinics.
          </p>
        </div>
      </div>

      <ServiceExplorer
        onSelectService={onSelectService}
        onBookAppointment={onBookAppointment}
      />
    </div>
  );
};

import React from 'react';
import { ServiceItem } from '../../data/hospitalData';
import { ArrowLeft, Clock, ShieldCheck, Microscope, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onBack: () => void;
  onBookAppointment: (serviceId: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onBookAppointment,
}) => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-[#0A192F]">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-teal-700 mb-8 cursor-pointer bg-white px-4 py-2 rounded-full border border-slate-200"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to All Services</span>
      </button>

      {/* Hero Service Banner (Flat, Pearl White Hairline) */}
      <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/90 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-2 font-mono">
              Clinical Speciality · {service.category.toUpperCase()}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A192F] mb-4">
              {service.name}
            </h1>
            <p className="text-base sm:text-lg font-medium text-teal-800 mb-6">
              {service.tagline}
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 lg:w-80 shrink-0 space-y-4">
            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Typical Duration</div>
              <div className="text-sm font-bold text-[#0A192F] flex items-center gap-2 mt-0.5">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>{service.duration}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Visual Recovery</div>
              <div className="text-sm font-bold text-[#0A192F] flex items-center gap-2 mt-0.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>{service.recoveryTime}</span>
              </div>
            </div>

            <button
              onClick={() => onBookAppointment(service.id)}
              className="w-full py-3 bg-[#0A192F] hover:bg-slate-800 text-white text-xs font-bold rounded-full transition-colors flex items-center justify-center gap-2 mt-4 cursor-pointer"
            >
              <span>Book This Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Clinical Details (Flat, No Shadows) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-2xl p-8 border border-slate-200/90">
          <h3 className="text-xl font-bold text-[#0A192F] mb-6">
            Specialized Interventions & Techniques
          </h3>
          <div className="space-y-3">
            {service.keyTreatments.map((treatment, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>{treatment}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-200/90">
          <h3 className="text-xl font-bold text-[#0A192F] mb-6">
            Diagnostic & Surgical Technology
          </h3>
          <p className="text-slate-600 text-xs leading-relaxed mb-6">
            We utilize calibrated clinical platforms to map ocular structures at microscopic accuracy prior to delivering therapy:
          </p>
          <div className="space-y-3">
            {service.diagnosticTech.map((tech, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-[#0A192F] font-semibold">
                <Microscope className="w-4 h-4 text-teal-600 shrink-0" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

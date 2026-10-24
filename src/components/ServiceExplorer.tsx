import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA, ServiceItem } from '../data/hospitalData';
import { ArrowUpRight, Clock, ChevronRight } from 'lucide-react';

interface ServiceExplorerProps {
  onSelectService: (service: ServiceItem) => void;
  onBookAppointment: (serviceId?: string) => void;
}

export const ServiceExplorer: React.FC<ServiceExplorerProps> = ({
  onSelectService,
  onBookAppointment,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'surgical', label: 'Surgical & Cataract' },
    { id: 'retina', label: 'Retina & Macula' },
    { id: 'pediatric', label: 'Paediatric & Orthoptics' },
    { id: 'cornea', label: 'Cornea & Transplants' },
    { id: 'preventive', label: 'Preventive' },
  ];

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-2 font-mono">
            Clinical Disciplines
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A192F]">
            Specialized Ophthalmic Services
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Consultant-delivered sub-specialist clinics equipped with sub-micron diagnostics and micro-incisional surgical capabilities.
          </p>
        </div>

        {/* Category Segmented Controls (Flat, No Shadows) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-full overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-slate-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Flat Editorial Grid (Zero Shadows, Clean Hairlines) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, idx) => {
          const isMarquee = idx === 0 && activeCategory === 'all';

          return (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className={`group relative bg-white hover:bg-slate-50/70 rounded-2xl p-7 border border-slate-200 hover:border-teal-400 transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                isMarquee ? 'lg:col-span-2' : 'col-span-1'
              }`}
              onClick={() => onSelectService(service)}
            >
              <div>
                {/* Header row with editorial index and arrow */}
                <div className="flex items-center justify-between mb-5">
                  <div className="text-xs font-mono font-medium text-teal-700 tracking-wider">
                    {(idx + 1).toString().padStart(2, '0')}. {service.category.toUpperCase()}
                  </div>
                  <div className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-teal-600 text-slate-500 group-hover:text-white group-hover:bg-teal-700 flex items-center justify-center transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A192F] group-hover:text-teal-900 transition-colors mb-2">
                  {service.name}
                </h3>

                {/* Tagline */}
                <p className="text-xs font-medium text-teal-800/80 mb-3">
                  {service.tagline}
                </p>

                {/* Short Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Clinical Treatments Preview */}
                <div className="space-y-1.5 mb-6">
                  {service.keyTreatments.slice(0, isMarquee ? 4 : 2).map((treatment, tIdx) => (
                    <div key={tIdx} className="text-xs text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                      <span className="truncate">{treatment}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metadata & Interactive Link */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{service.duration}</span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate max-w-[150px]">{service.recoveryTime}</span>
                </div>
                <span className="font-semibold text-teal-700 group-hover:underline flex items-center gap-1">
                  <span>Explore details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Hospital Referral & Triage Note (Flat & Clean) */}
      <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-slate-900 mb-0.5">
            Require Urgent Ophthalmic Triage?
          </div>
          <div className="text-xs text-slate-600">
            Immediate consultant evaluation for acute vision loss, chemical exposure, or flashes & floaters.
          </div>
        </div>
        <button
          onClick={() => onBookAppointment('emergency-eye-care')}
          className="px-5 py-2.5 rounded-full bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer"
        >
          Contact Emergency Triage
        </button>
      </div>
    </section>
  );
};

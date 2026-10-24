import React, { useState } from 'react';
import { SPECIALISTS_DATA, Specialist } from '../data/hospitalData';
import { Calendar, Award, Globe, ArrowRight } from 'lucide-react';

interface SpecialistsSectionProps {
  onBookAppointment: (serviceId?: string, specialistName?: string) => void;
  onViewDoctorDetails?: (specialist: Specialist) => void;
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({
  onBookAppointment,
}) => {
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist>(SPECIALISTS_DATA[0]);

  return (
    <section id="specialists" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-2 font-mono">
            Clinical Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A192F]">
            Meet Our Consultant Specialists
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Sub-specialist ophthalmic surgeons trained at premier international institutions, committed to transparent and unhurried clinical guidance.
          </p>
        </div>
      </div>

      {/* Asymmetrical Featured Specialist Presentation (Flat, No Shadows) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        {/* Left: Interactive Doctor Selector Cards (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          {SPECIALISTS_DATA.map((doc) => {
            const isSelected = selectedSpecialist.id === doc.id;
            return (
              <div
                key={doc.id}
                onClick={() => setSelectedSpecialist(doc)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center gap-4 ${
                  isSelected
                    ? 'bg-white border-teal-600 ring-1 ring-teal-100'
                    : 'bg-white/70 hover:bg-white border-slate-200'
                }`}
              >
                <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-teal-700 font-semibold truncate">
                    {doc.title}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 truncate">
                    {doc.name}
                  </h4>
                  <div className="text-xs text-slate-500 truncate">
                    {doc.specialty}
                  </div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${
                    isSelected
                      ? 'bg-teal-700 text-white border-teal-700'
                      : 'border-slate-300 text-slate-400'
                  }`}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Rich Featured Doctor Dossier (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start mb-6">
              <div className="sm:col-span-4 aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={selectedSpecialist.image}
                  alt={selectedSpecialist.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="sm:col-span-8">
                <div className="inline-block text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1 font-mono">
                  {selectedSpecialist.title}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F] mb-1">
                  {selectedSpecialist.name}
                </h3>
                <div className="text-xs font-medium text-slate-500 mb-3">
                  {selectedSpecialist.degrees}
                </div>

                <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-100 mb-4 text-xs font-medium text-teal-950">
                  {selectedSpecialist.specialty}
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Fellowship:</strong> {selectedSpecialist.fellowship}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-teal-600 shrink-0" />
                    <span><strong className="text-slate-900">Consultation Clinics:</strong> {selectedSpecialist.clinicDays}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-teal-600 shrink-0" />
                    <span><strong className="text-slate-900">Languages:</strong> {selectedSpecialist.languages.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedSpecialist.bio}
            </p>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              <span className="font-semibold text-slate-900">{selectedSpecialist.experienceYears}+ years</span> of verified clinical excellence
            </div>
            <button
              onClick={() => onBookAppointment(undefined, selectedSpecialist.name)}
              className="w-full sm:w-auto px-6 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book with {selectedSpecialist.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

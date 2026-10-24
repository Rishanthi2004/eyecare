import React from 'react';
import { ShieldCheck, Microscope, Users } from 'lucide-react';

interface AboutPageProps {
  onBookAppointment: () => void;
  onExploreServices: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBookAppointment, onExploreServices }) => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-[#0A192F]">
      {/* Hero Header */}
      <div className="max-w-3xl mb-16">
        <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-2 font-mono">
          About ESKOR Vision Hospital
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A192F] mb-6">
          A Sanctuary for Restorative Eye Care & Vision Science
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Founded on the conviction that ophthalmology requires both micron-level surgical precision and deep patient reassurance, ESKOR brings together internationally acclaimed sub-specialists and advanced non-invasive diagnostics.
        </p>
      </div>

      {/* Hospital Atrium Feature Image */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-200 aspect-[16/9] mb-20 bg-slate-900">
        <img
          src="/src/assets/images/facility_vision_center_1792834052128.jpg"
          alt="VisionSphere Architectural Atrium"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
          <div className="text-white max-w-xl">
            <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-1 font-mono">Architectural Sanctuary</div>
            <div className="text-xl sm:text-2xl font-bold">Natural Daylight & Low-Stress Clinical Architecture</div>
          </div>
        </div>
      </div>

      {/* Core Pillars (Flat, Pearl White, Zero Shadows) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white rounded-2xl p-8 border border-slate-200/90">
          <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center mb-6">
            <Microscope className="w-6 h-6 text-teal-700" />
          </div>
          <h3 className="text-xl font-bold text-[#0A192F] mb-3">Sub-Micron Science</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            From swept-source optical coherence tomography to femtosecond laser capsulotomy, every diagnostic and surgical instrument is selected for proven clinical fidelity.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-200/90">
          <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center mb-6">
            <Users className="w-6 h-6 text-teal-700" />
          </div>
          <h3 className="text-xl font-bold text-[#0A192F] mb-3">Sub-Specialist Led</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Every patient is evaluated directly by a fellowship-trained consultant in their specific ocular sub-specialty—never passed down to rotating junior staff.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-200/90">
          <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center mb-6">
            <ShieldCheck className="w-6 h-6 text-teal-700" />
          </div>
          <h3 className="text-xl font-bold text-[#0A192F] mb-3">Pristine Theatres</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our dual dedicated ophthalmic theatres operate at ISO Class 7 positive-pressure laminar airflow, maintaining surgical infection rates below 0.01%.
          </p>
        </div>
      </div>

      {/* Quality & Governance (Flat, Hairlines) */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-12 mb-20">
        <div className="max-w-2xl mb-8">
          <h3 className="text-2xl font-bold text-[#0A192F] mb-3">Clinical Accreditation & Research</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            ESKOR participates actively in peer-reviewed clinical trials for next-generation intraocular lenses, neuroprotective glaucoma therapies, and non-mydriatic retinal imaging.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-slate-600">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="font-bold text-[#0A192F] mb-1">CQC Regulated</div>
            <div>Fully accredited independent healthcare provider</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="font-bold text-[#0A192F] mb-1">ISO Class 7</div>
            <div>HEPA positive laminar flow theatres</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="font-bold text-[#0A192F] mb-1">Peer-Reviewed</div>
            <div>Published research in Ophthalmology & BJO</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="font-bold text-[#0A192F] mb-1">All Major Insurers</div>
            <div>Bupa, AXA, Aviva, Vitality approved</div>
          </div>
        </div>
      </div>

      {/* Action Banner (Flat Pill Buttons) */}
      <div className="bg-[#0A192F] rounded-2xl p-8 sm:p-10 border border-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-xl font-bold text-white">Experience the ESKOR Difference</h4>
          <p className="text-xs text-slate-300 mt-1">Schedule a comprehensive 45-minute baseline consultation with our specialists.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onBookAppointment}
            className="px-6 py-2.5 bg-teal-400 hover:bg-teal-300 text-slate-950 text-xs font-semibold rounded-full transition-colors cursor-pointer"
          >
            Book Appointment
          </button>
          <button
            onClick={onExploreServices}
            className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Explore Services
          </button>
        </div>
      </div>
    </div>
  );
};

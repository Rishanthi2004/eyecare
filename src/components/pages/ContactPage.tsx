import React from 'react';
import { MapPin, Phone, Clock, Car, Train, ArrowRight } from 'lucide-react';

interface ContactPageProps {
  onBookAppointment: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBookAppointment }) => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-[#0A192F]">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-2 font-mono">
          Hospital Access & Directions
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0A192F] mb-4">
          Visit ESKOR Eye Hospital
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Located in central London with convenient access by tube, rail, and complimentary patient valet parking.
        </p>
      </div>

      {/* Grid: Details & Interactive Map/Atrium card (Flat, Hairline Borders, Zero Shadows) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Contact Info (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90">
            <div className="flex items-center gap-2 text-[#0A192F] font-bold mb-3 text-base">
              <MapPin className="w-5 h-5 text-teal-600" />
              <span>Location Address</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              ESKOR Eye Hospital<br />
              14 Vision Way, Medical Science Quarter<br />
              London EC1V 2PD, United Kingdom
            </p>
            <div className="text-xs text-slate-500 space-y-1.5 pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <Train className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Farringdon Station (Elizabeth Line) · 4 min walk</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Complimentary patient valet drop-off at main entrance</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-slate-200/90">
            <div className="flex items-center gap-2 text-[#0A192F] font-bold mb-3 text-base">
              <Phone className="w-5 h-5 text-teal-600" />
              <span>Telephones & Emergency</span>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-slate-500">General Enquiries & Bookings</div>
                <div className="text-sm font-bold text-[#0A192F] mt-0.5">+44 20 7946 0910</div>
              </div>
              <div className="p-3 bg-teal-50 rounded-xl border border-teal-200">
                <div className="text-teal-800 font-semibold">24/7 Urgent Ophthalmic Triage</div>
                <div className="text-sm font-bold text-teal-900 mt-0.5">+44 20 7946 0900</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-slate-200/90">
            <div className="flex items-center gap-2 text-[#0A192F] font-bold mb-3 text-base">
              <Clock className="w-5 h-5 text-teal-600" />
              <span>Opening Hours</span>
            </div>
            <div className="text-xs text-slate-600 space-y-2">
              <div className="flex justify-between pb-1 border-b border-slate-100">
                <span>Monday – Friday</span>
                <span className="font-semibold text-[#0A192F]">08:00 – 19:30</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-slate-100">
                <span>Saturday</span>
                <span className="font-semibold text-[#0A192F]">08:30 – 14:00</span>
              </div>
              <div className="flex justify-between text-teal-700 font-semibold">
                <span>Emergency Triage</span>
                <span>24 / 7 Dedicated On-Call</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Hospital Atrium Card (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8">
          <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-6 bg-slate-100 border border-slate-200">
            <img
              src="/src/assets/images/facility_vision_center_1792834052128.jpg"
              alt="VisionSphere Reception"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-xl font-bold text-[#0A192F] mb-2">
            Welcome to the ESKOR Sanctuary
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            Our building was architecturally planned with natural biophilic light, sound-damped consultation suites, and soothing surfaces to minimize medical anxiety and enhance optical testing accuracy.
          </p>

          <button
            onClick={onBookAppointment}
            className="w-full py-3.5 bg-[#0A192F] hover:bg-slate-800 text-white text-xs font-bold rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Request Your Initial Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

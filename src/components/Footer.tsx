import React from 'react';
import { MapPin, Phone, Clock, Mail, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onBookAppointment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onBookAppointment }) => {
  return (
    <footer id="contact" className="bg-[#07080B] text-neutral-400 pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact & Facility Information Strip (Flat, No Shadows) */}
        <div className="bg-[#12141C] rounded-2xl p-8 sm:p-10 border border-white/10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Facility Photo & Greeting (5 cols) */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-800 border border-slate-700/60">
              <img
                src="/src/assets/images/facility_vision_center_1792834052128.jpg"
                alt="VisionSphere Hospital Atrium & Reception"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider">Clinical Facility</div>
                  <div className="text-base font-bold">VisionSphere Central Atrium</div>
                </div>
              </div>
            </div>

            {/* Right: Hospital Address, Hours & Contact Numbers (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
              <div>
                <div className="flex items-center gap-2 text-teal-400 font-semibold mb-2 text-sm">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Hospital Address</span>
                </div>
                <p className="text-slate-300 leading-relaxed mb-3">
                  VisionSphere Eye Hospital<br />
                  14 Vision Way, Medical Science Quarter<br />
                  London EC1V 2PD, United Kingdom
                </p>
                <div className="text-[11px] text-slate-400">
                  4 min walk from Farringdon & Old Street Stations. Complimentary patient valet parking.
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-teal-400 font-semibold mb-2 text-sm">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Clinical Hours</span>
                </div>
                <div className="space-y-1 text-slate-300 mb-3">
                  <div className="flex justify-between">
                    <span>Monday – Friday:</span>
                    <span className="font-medium text-white">08:00 – 19:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium text-white">08:30 – 14:00</span>
                  </div>
                  <div className="flex justify-between text-teal-400">
                    <span>Emergency Ophthalmic Triage:</span>
                    <span className="font-semibold">24 / 7 Priority</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-teal-400 font-semibold mb-2 text-sm">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Direct Telephone Lines</span>
                </div>
                <div className="space-y-1 text-slate-300">
                  <div>Consultation Bookings: <strong className="text-white">+44 20 7946 0910</strong></div>
                  <div>Urgent Eye Triage: <strong className="text-teal-400">+44 20 7946 0900</strong></div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-teal-400 font-semibold mb-2 text-sm">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>Clinical Correspondence</span>
                </div>
                <div className="space-y-1 text-slate-300">
                  <div>General: <span className="text-white">enquiries@visionsphere.health</span></div>
                  <div>Physician Referrals: <span className="text-white">referrals@visionsphere.health</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Mirror & Site Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-xs">
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Clinical Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  Cataract & Premium IOLs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  Glaucoma & MIGS Surgery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  Retina & Macular Diagnostics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  Paediatric & Amblyopia Care
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  Corneal Cross-Linking & DMEK
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">Patient Information</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigate('patient-guide')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  Preparing for Your Visit
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('patient-guide')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  Dilating Eye Drops Notice
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faqs')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('patient-guide')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  Health Insurance Settlement
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">Hospital & Science</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  About VisionSphere
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('specialists')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  Consultant Specialists
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('technology')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  Diagnostic Technology
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('science-of-sight')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  Interactive Science of Sight
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('articles')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  Vision Health Articles
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">Governance & Quality</h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center gap-2 text-teal-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-semibold text-white">ISO Class 7 Cleanrooms</span>
              </div>
              <p className="leading-relaxed text-[11px]">
                Regulated by the Care Quality Commission (CQC) with verified sub-micron surgical protocols.
              </p>
              <button
                onClick={onBookAppointment}
                className="w-full py-2.5 bg-white hover:bg-neutral-200 text-black font-semibold rounded-full transition-colors cursor-pointer text-center block mt-2 text-xs uppercase tracking-wider"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Legal Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} VisionSphere Eye Hospital & Vision Science Center. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Contact & Directions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

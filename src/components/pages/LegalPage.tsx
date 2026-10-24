import React from 'react';
import { Lock, FileText, ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onBack: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onBack }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-[#0A192F]">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-teal-700 mb-8 cursor-pointer bg-white px-4 py-2 rounded-full border border-slate-200"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Home</span>
      </button>

      <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/90">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center">
            {isPrivacy ? <Lock className="w-5 h-5 text-teal-700" /> : <FileText className="w-5 h-5 text-teal-700" />}
          </div>
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 font-mono">
            {isPrivacy ? 'Data Protection & Caldicott Principles' : 'Clinical Service Agreement'}
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A192F] mb-6">
          {isPrivacy ? 'Privacy & Medical Confidentiality Policy' : 'Terms & Clinical Consultation Conditions'}
        </h1>

        <div className="text-xs text-slate-500 mb-8 pb-4 border-b border-slate-100 font-mono">
          Last Updated: March 2026 · ESKOR Eye Hospital Clinical Governance Directorate
        </div>

        <div className="text-slate-600 text-sm leading-relaxed space-y-6">
          {isPrivacy ? (
            <>
              <p>
                ESKOR Eye Hospital is committed to upholding the highest standards of clinical privacy, data protection, and patient confidentiality under the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and Caldicott Principles.
              </p>
              <h3 className="text-lg font-bold text-[#0A192F] mt-6 mb-2">1. Patient Health Records</h3>
              <p>
                All clinical scans (OCT, corneal topography, visual field maps, and intraoperative records) are maintained on encrypted, ISO 27001-certified electronic health record (EHR) platforms. Access is restricted strictly to your attending clinical care team.
              </p>
              <h3 className="text-lg font-bold text-[#0A192F] mt-6 mb-2">2. Information Sharing</h3>
              <p>
                Clinical correspondence is shared with your registered General Practitioner (GP) or referring optometrist only with your explicit consent, ensuring complete continuity of care.
              </p>
              <h3 className="text-lg font-bold text-[#0A192F] mt-6 mb-2">3. Research & Anonymised Audits</h3>
              <p>
                Clinical outcomes may be analyzed in fully anonymized form to audit surgical safety and publish quality metrics in accordance with Royal College of Ophthalmologists standards.
              </p>
            </>
          ) : (
            <>
              <p>
                These terms govern private medical consultations, diagnostic investigations, and ophthalmic procedures delivered at ESKOR Eye Hospital.
              </p>
              <h3 className="text-lg font-bold text-[#0A192F] mt-6 mb-2">1. Consultation Fees & Estimates</h3>
              <p>
                All consultation and diagnostic investigation fees are communicated transparently prior to appointments. Written fee estimates are provided before any proposed surgical intervention.
              </p>
              <h3 className="text-lg font-bold text-[#0A192F] mt-6 mb-2">2. Cancellations & Rescheduling</h3>
              <p>
                We kindly request a minimum of 24 hours notice to reschedule or cancel a clinical consultation, allowing the slot to be released for patients requiring urgent ophthalmic triage.
              </p>
              <h3 className="text-lg font-bold text-[#0A192F] mt-6 mb-2">3. Informed Clinical Consent</h3>
              <p>
                Detailed discussions concerning anticipated outcomes, potential alternatives, and surgical risks are conducted directly with your consultant surgeon before signing formal consent documents.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

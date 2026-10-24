import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA, SPECIALISTS_DATA } from '../data/hospitalData';
import { X, CheckCircle2, ArrowRight, User, Phone, Mail } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedSpecialistName?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedSpecialistName,
}) => {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    serviceId: preselectedServiceId || 'comprehensive-exams',
    specialist: preselectedSpecialistName || 'first-available',
    date: '',
    timeSlot: 'morning',
    visitType: 'new-consultation',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
    if (preselectedSpecialistName) {
      setFormData((prev) => ({ ...prev, specialist: preselectedSpecialistName }));
    }
  }, [preselectedServiceId, preselectedSpecialistName]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid phone number';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please provide an 8+ digit telephone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!formData.date) {
      newErrors.date = 'Please choose your preferred appointment date';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
      const randomCode = `ESKOR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmationCode(randomCode);
    }, 900);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    setFormData({
      patientName: '',
      phone: '',
      email: '',
      serviceId: 'comprehensive-exams',
      specialist: 'first-available',
      date: '',
      timeSlot: 'morning',
      visitType: 'new-consultation',
      notes: '',
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  const selectedService = SERVICES_DATA.find((s) => s.id === formData.serviceId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 10 }}
        className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 overflow-hidden my-8 text-[#0A192F]"
      >
        {/* Modal Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 font-mono">
              Clinical Concierge
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A192F]">
              Book an Eye Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isConfirmed ? (
            /* Confirmation State */
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
              </div>
              <h4 className="text-2xl font-bold text-[#0A192F] mb-2">
                Consultation Request Received
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                Thank you, <strong>{formData.patientName}</strong>. Our clinical coordinator will contact you at <strong>{formData.phone}</strong> to finalize your appointment time.
              </p>

              {/* Booking Summary Ticket */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-md mx-auto text-left mb-6 space-y-2.5 text-xs text-slate-600">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Reference Number</span>
                  <span className="font-mono font-bold text-teal-700">{confirmationCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Service</span>
                  <span className="font-medium text-[#0A192F]">{selectedService?.name || 'Comprehensive Examination'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Preferred Date</span>
                  <span className="font-medium text-[#0A192F]">{formData.date} ({formData.timeSlot})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Specialist</span>
                  <span className="font-medium text-[#0A192F]">
                    {formData.specialist === 'first-available'
                      ? 'First Available Consultant'
                      : formData.specialist}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-teal-50/50 rounded-xl border border-teal-100 text-xs text-teal-900 text-left max-w-md mx-auto mb-6">
                <div className="font-semibold mb-1">Pre-Appointment Guidance:</div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-600 text-[11px]">
                  <li>Bring your current eyeglasses and any prescription eye drops.</li>
                  <li>Dilating drops may blur near vision for 3–4 hours; consider arranging transport.</li>
                </ul>
              </div>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-8 py-2.5 bg-[#0A192F] hover:bg-slate-800 text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs text-[#0A192F] placeholder-slate-400 focus:outline-none focus:bg-white focus:border-teal-600 ${
                        errors.patientName ? 'border-rose-500' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.patientName && (
                    <p className="mt-1 text-[11px] text-rose-500">{errors.patientName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +44 20 7946 0912"
                      className={`w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs text-[#0A192F] placeholder-slate-400 focus:outline-none focus:bg-white focus:border-teal-600 ${
                        errors.phone ? 'border-rose-500' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-[11px] text-rose-500">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah.jenkins@example.com"
                    className={`w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs text-[#0A192F] placeholder-slate-400 focus:outline-none focus:bg-white focus:border-teal-600 ${
                      errors.email ? 'border-rose-500' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-[11px] text-rose-500">{errors.email}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Required Clinical Service *
                  </label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-[#0A192F] focus:outline-none focus:bg-white focus:border-teal-600 cursor-pointer"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Preferred Specialist
                  </label>
                  <select
                    value={formData.specialist}
                    onChange={(e) => setFormData({ ...formData, specialist: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-[#0A192F] focus:outline-none focus:bg-white focus:border-teal-600 cursor-pointer"
                  >
                    <option value="first-available">First Available Consultant</option>
                    {SPECIALISTS_DATA.map((doc) => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name} ({doc.title})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs text-[#0A192F] focus:outline-none focus:bg-white focus:border-teal-600 ${
                      errors.date ? 'border-rose-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.date && (
                    <p className="mt-1 text-[11px] text-rose-500">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Preferred Time Window
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'morning', label: 'Morning' },
                      { id: 'afternoon', label: 'Afternoon' },
                      { id: 'evening', label: 'Late Clinic' },
                    ].map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeSlot: slot.id })}
                        className={`p-2 text-center rounded-xl border text-[11px] transition-all cursor-pointer ${
                          formData.timeSlot === slot.id
                            ? 'bg-[#0A192F] text-white font-bold border-[#0A192F]'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <div>{slot.label}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Symptoms or Referral Notes <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Recent difficulty driving at night, dry eye discomfort, second opinion..."
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-[#0A192F] placeholder-slate-400 focus:outline-none focus:bg-white focus:border-teal-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#0A192F] hover:bg-slate-800 disabled:bg-slate-400 text-white text-xs font-bold rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Appointment Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

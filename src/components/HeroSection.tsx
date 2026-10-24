import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
  onBookAppointment: () => void;
  onExploreServices?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onBookAppointment,
  onExploreServices,
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = onNavigate || ((_p: string) => {});

  const slides = [
    {
      id: 1,
      num: '01',
      title: 'Eye see you.',
      description:
        'Advanced clinical ophthalmology, diagnostic precision, and surgical mastery tailored for lifelong sight preservation.',
      targetPage: 'services',
    },
    {
      id: 2,
      num: '02',
      title: 'Clearer vision.',
      description:
        'Microsurgical precision, corneal science, and restorative ophthalmology delivered by fellowship-trained consultant surgeons.',
      targetPage: 'services',
    },
    {
      id: 3,
      num: '03',
      title: 'Laser precision.',
      description:
        'Bladeless femtosecond laser-assisted lens replacement with custom toric and extended depth of focus implants for lifelong visual clarity.',
      targetPage: 'technology',
    },
    {
      id: 4,
      num: '04',
      title: 'Retinal science.',
      description:
        'Sub-3.5 µm swept-source optical coherence tomography and micro-incisional vitrectomy protecting irreplaceable neurosensory sight.',
      targetPage: 'services',
    },
    {
      id: 5,
      num: '05',
      title: 'Patient first.',
      description:
        'Unhurried 45-minute clinical consultations in an architectural sanctuary designed for reassurance, precision, and calm.',
      targetPage: 'about',
    },
  ];

  const current = slides.find((s) => s.id === activeSlide) || slides[0];
  const nextSlideNumbers = [2, 3, 4, 5];

  return (
    <div className="relative w-full h-screen h-[100dvh] overflow-hidden bg-[#F8FAFC] select-none flex flex-col justify-between">
      {/* 1. User Uploaded Hero Image with Integrated FOCUS Typography */}
      <img
        src="/assets/aistudio/image_913e3d2d.png"
        alt="ESKOR - FOCUS Specialized Eye Hospital"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Subtle soft gradient at top & bottom only to ensure razor-sharp text legibility on any display */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/40 via-white/10 to-transparent z-1 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/60 via-white/20 to-transparent z-1 pointer-events-none" />

      {/* 2. Top Navigation Bar (Exact match to user's ESKOR reference) */}
      <header className="relative z-30 w-full px-6 sm:px-12 lg:px-16 pt-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-10 sm:gap-14">
          {/* Brand Wordmark "ESKOR" */}
          <button
            onClick={() => navigate('home')}
            className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-slate-950 font-display cursor-pointer"
          >
            ESKOR
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-800">
            <button
              onClick={() => navigate('about')}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              ABOUT
            </button>
            <button
              onClick={() => navigate('services')}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              PRODUCTS
            </button>
            <button
              onClick={() => navigate('services')}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              SERVICE
            </button>
            <button
              onClick={() => navigate('contact')}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              CONTACT
            </button>
          </nav>
        </div>

        {/* Far Right: 3-line Hamburger Menu */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Open navigation menu"
          className="text-slate-950 hover:text-slate-700 p-2 cursor-pointer flex flex-col gap-1.5 w-8 justify-center"
        >
          <span className="block w-6 h-[2px] bg-slate-950 rounded-full" />
          <span className="block w-6 h-[2px] bg-slate-950 rounded-full" />
          <span className="block w-6 h-[2px] bg-slate-950 rounded-full" />
        </button>
      </header>

      {/* 3. Left Social Rail (Exact match to reference, strictly singular, zero ghost icons) */}
      <div className="absolute left-6 sm:left-12 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-4 pointer-events-auto">
        <div className="w-[1.5px] h-24 sm:h-32 bg-slate-800/40" />
        <a
          href="#facebook"
          onClick={(e) => {
            e.preventDefault();
            navigate('about');
          }}
          aria-label="Facebook"
          className="w-7 h-7 rounded-full border border-slate-800/70 text-slate-900 bg-white/40 flex items-center justify-center text-xs font-serif font-bold hover:bg-slate-900 hover:text-white transition-colors"
        >
          f
        </a>
        <a
          href="#twitter"
          onClick={(e) => {
            e.preventDefault();
            navigate('about');
          }}
          aria-label="Twitter"
          className="w-7 h-7 rounded-full border border-slate-800/70 text-slate-900 bg-white/40 flex items-center justify-center text-xs hover:bg-slate-900 hover:text-white transition-colors"
        >
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="#instagram"
          onClick={(e) => {
            e.preventDefault();
            navigate('about');
          }}
          aria-label="Instagram"
          className="w-7 h-7 rounded-full border border-slate-800/70 text-slate-900 bg-white/40 flex items-center justify-center text-xs hover:bg-slate-900 hover:text-white transition-colors"
        >
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        <div className="w-[1.5px] h-24 sm:h-32 bg-slate-800/40" />
      </div>

      {/* 4. Accessible Heading (Visual FOCUS is integrated directly into the hero artwork) */}
      <h1 className="sr-only">ESKOR - FOCUS Specialized Eye Care & Ophthalmology Center</h1>

      {/* 5. Bottom Controls (Left Pagination + Right Editorial Card) */}
      <div className="relative z-20 w-full px-6 sm:px-12 lg:px-16 pb-10 sm:pb-14 flex flex-col sm:flex-row items-end justify-between gap-6 pointer-events-none">
        {/* Bottom Left Pagination: 01 ─────── 02  03  04  05 */}
        <div className="flex items-center gap-3.5 text-slate-900 font-mono text-xs font-semibold pointer-events-auto">
          {/* Active number on left */}
          <span className="text-slate-950 text-sm font-bold">
            {current.num}
          </span>

          {/* Clean Flat Progress Line */}
          <div className="w-20 sm:w-28 h-[1.5px] bg-slate-900/30 relative overflow-hidden">
            <motion.div
              className="absolute top-0 bottom-0 left-0 bg-slate-950"
              initial={{ width: '20%' }}
              animate={{ width: `${(activeSlide / 5) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Remaining numbers on right: 02  03  04  05 */}
          <div className="flex items-center gap-3 text-slate-700">
            {nextSlideNumbers.map((num) => (
              <button
                key={num}
                onClick={() => setActiveSlide(num)}
                className={`hover:text-slate-950 transition-colors cursor-pointer text-xs ${
                  activeSlide === num ? 'text-slate-950 font-bold underline underline-offset-4' : 'text-slate-600'
                }`}
              >
                {num.toString().padStart(2, '0')}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Right: "Eye see you." + Description + "READ MORE" Pill Button */}
        <div className="max-w-xs sm:max-w-sm lg:max-w-md text-right sm:text-left pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 mb-2 tracking-tight font-display">
                {current.title}
              </h2>
              <p className="text-slate-800 text-xs sm:text-[13px] leading-relaxed mb-4 font-medium">
                {current.description}
              </p>
              <div className="flex items-center justify-end sm:justify-start gap-3">
                <button
                  onClick={() => navigate(current.targetPage)}
                  className="px-7 py-2 rounded-full border border-slate-900/80 hover:border-slate-950 text-slate-950 hover:bg-slate-950 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer bg-white/40"
                >
                  READ MORE
                </button>
                <button
                  onClick={onBookAppointment}
                  className="px-6 py-2 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer"
                >
                  BOOK APPOINTMENT
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide-out Menu Drawer in Pristine Light Theme */}
      <AnimatePresence>
        {isDrawerOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="relative w-full max-w-sm bg-white border-l border-slate-200 h-full p-8 flex flex-col justify-between text-slate-900 z-10"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <span className="font-bold text-2xl tracking-wider text-slate-950 font-display">ESKOR</span>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    aria-label="Close menu"
                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 text-slate-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <nav className="py-8 space-y-4 text-xs font-bold uppercase tracking-wider">
                  {[
                    { id: 'about', label: 'ABOUT THE HOSPITAL' },
                    { id: 'services', label: 'SERVICES & PRODUCTS' },
                    { id: 'specialists', label: 'SPECIALISTS' },
                    { id: 'technology', label: 'TECHNOLOGY & SURGICAL SUITES' },
                    { id: 'contact', label: 'CONTACT & DIRECTIONS' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setIsDrawerOpen(false);
                        navigate(item.id);
                      }}
                      className="block w-full text-left text-slate-600 hover:text-slate-950 transition-colors cursor-pointer py-1.5"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-3">
                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    onBookAppointment();
                  }}
                  className="w-full py-3 bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-colors cursor-pointer"
                >
                  Book Consultation
                </button>
                <div className="text-center text-xs text-slate-500">
                  Direct Triage: +44 20 7946 0900
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

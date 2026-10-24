import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Phone } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onBookAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onBookAppointment,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'specialists', label: 'SPECIALISTS' },
    { id: 'technology', label: 'TECHNOLOGY' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (pageId: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(pageId);
  };

  const isHeroAtTop = activePage === 'home' && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isHeroAtTop
            ? 'opacity-0 pointer-events-none -translate-y-4'
            : isScrolled
            ? 'opacity-100 translate-y-0 py-3.5 bg-white/95 backdrop-blur-md border-b border-slate-200/80'
            : 'opacity-100 translate-y-0 py-5 bg-white/90 backdrop-blur-sm border-b border-slate-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between gap-8">
          {/* Brand Wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 group cursor-pointer whitespace-nowrap shrink-0"
          >
            <span className="text-2xl sm:text-3xl font-black tracking-wider uppercase font-display text-[#0A192F]">
              ESKOR
            </span>
            <span className="text-[10px] tracking-widest font-mono uppercase px-2 py-0.5 rounded border text-teal-700 border-teal-200 bg-teal-50">
              EYE CARE
            </span>
          </button>

          {/* Navigation Links with Active Underline (Flat, Zero Shadows) */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-teal-800 font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-teal-700"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action & Hamburger Menu Icon */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onBookAppointment}
              className="px-5 py-2 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer hidden sm:flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Hamburger Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg transition-colors cursor-pointer flex flex-col justify-center gap-1.5 w-9 h-9 text-slate-800 hover:bg-slate-100"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <>
                  <span className="block w-6 h-[2px] rounded-full bg-slate-900" />
                  <span className="block w-6 h-[2px] rounded-full bg-slate-900" />
                  <span className="block w-6 h-[2px] rounded-full bg-slate-900" />
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer (Clean White, Zero Shadows) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 border-l border-slate-200 flex flex-col justify-between p-6"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <span className="font-black text-2xl text-slate-900 font-display">ESKOR</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-2">
                {navLinks.map((link, idx) => {
                  const isActive = activePage === link.id;
                  return (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 * idx }}
                      onClick={() => handleLinkClick(link.id)}
                      className={`w-full text-left px-3.5 py-3 rounded-xl text-sm font-semibold tracking-wider uppercase transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-teal-50 text-teal-800 font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookAppointment();
                }}
                className="w-full py-3 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 py-1">
                <Phone className="w-3.5 h-3.5 text-teal-600" />
                <span>Urgent Triage: +44 20 7946 0900</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

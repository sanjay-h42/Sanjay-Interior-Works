import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brand';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer upon route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Works', path: '/our-works' },
    {
      name: 'Cupboard Works',
      path: '/cupboard-works',
      subLinks: [
        { name: 'Overview', path: '/cupboard-works' },
        { name: 'Cherry Cupboards', path: '/cupboard-works/cherry' },
        { name: 'Teak Wood Cupboards', path: '/cupboard-works/teak' },
        { name: 'UPVC Cupboards', path: '/cupboard-works/upvc' },
      ],
    },
    {
      name: 'PVC Doors',
      path: '/pvc-door-works',
      subLinks: [
        { name: 'Overview & Standard Doors', path: '/pvc-door-works' },
        { name: 'Picture PVC Doors', path: '/pvc-door-works#picture-doors' },
      ],
    },
    { name: 'WPVC Doors', path: '/wpvc-door-works' },
    { name: 'Aluminium', path: '/aluminium-works' },
    { name: 'Netlon Mesh', path: '/netlon-works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-soft border-b border-sand/40 py-2.5'
          : 'bg-ivory/80 backdrop-blur-sm border-b border-sand/20 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Slogan */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg p-1 flex-shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-walnut text-ivory flex items-center justify-center font-serif font-black text-xl tracking-wider shadow-sm group-hover:bg-walnut-600 transition-colors flex-shrink-0 border border-sand/50">
              S
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-serif font-extrabold text-sm sm:text-base lg:text-lg tracking-wide text-walnut uppercase group-hover:text-charcoal transition-colors leading-tight whitespace-nowrap">
                {BRAND_CONFIG.brandName}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-charcoal-muted uppercase whitespace-nowrap">
                {BRAND_CONFIG.mainSlogan}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              if (link.subLinks) {
                const isSubActive = location.pathname.startsWith(link.path);
                const isThisDropdownOpen = openDropdown === link.name;
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `inline-flex items-center gap-1 px-2.5 2xl:px-3 py-2 rounded-lg text-[13px] 2xl:text-sm font-medium transition-colors ${
                          isActive || isSubActive
                            ? 'text-walnut bg-sand/30 font-semibold shadow-xs'
                            : 'text-charcoal hover:text-walnut hover:bg-sand/15'
                        }`
                      }
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                    </NavLink>

                    <AnimatePresence>
                      {isThisDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-1 w-60 rounded-2xl bg-white shadow-elevated border border-sand/50 p-2 z-50"
                        >
                          {link.subLinks.map((sub) => (
                            <NavLink
                              key={sub.name}
                              to={sub.path}
                              end={sub.path === link.path}
                              className={({ isActive }) =>
                                `block px-3 py-2 text-xs rounded-xl transition-colors ${
                                  isActive
                                    ? 'bg-sand/30 text-walnut font-bold'
                                    : 'text-charcoal hover:bg-ivory hover:text-walnut'
                                }`
                              }
                            >
                              {sub.name}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-2.5 2xl:px-3 py-2 rounded-lg text-[13px] 2xl:text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-walnut bg-sand/30 font-semibold shadow-xs'
                        : 'text-charcoal hover:text-walnut hover:bg-sand/15'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-walnut text-ivory text-sm font-semibold hover:bg-walnut-600 active:scale-95 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile Navigation Trigger Button (min 44px touch target) */}
          <div className="flex items-center gap-2 xl:hidden">
            <Link
              to="/contact"
              className="px-3.5 py-2 rounded-lg bg-walnut text-ivory text-xs font-semibold sm:hidden"
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-sand/30 text-charcoal hover:bg-sand/50 hover:text-walnut transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden bg-ivory border-b border-sand shadow-elevated overflow-y-auto max-h-[85vh]"
          >
            <div className="px-5 py-6 space-y-4">
              {/* Official brand reminder in mobile drawer */}
              <div className="p-3.5 rounded-2xl bg-sand/20 border border-sand/40">
                <p className="text-xs font-serif font-bold text-walnut uppercase tracking-wider">
                  {BRAND_CONFIG.brandName}
                </p>
                <p className="text-[11px] text-charcoal-muted italic">
                  "{BRAND_CONFIG.supportingLine}"
                </p>
                <p className="text-[11px] text-charcoal-light mt-1">
                  Proprietor: <span className="font-semibold text-charcoal">{BRAND_CONFIG.ownerName}</span>
                </p>
              </div>

              {/* Navigation list */}
              <div className="space-y-1">
                {navLinks.map((link) => {
                  if (link.subLinks) {
                    return (
                      <div key={link.name} className="py-1">
                        <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-walnut">
                          {link.name}
                        </div>
                        <div className="pl-3 space-y-1 border-l-2 border-sand/50 ml-3">
                          {link.subLinks.map((sub) => (
                            <NavLink
                              key={sub.path}
                              to={sub.path}
                              end={sub.path === link.path}
                              className={({ isActive }) =>
                                `block px-3 py-2.5 rounded-xl text-sm transition-colors ${
                                  isActive
                                    ? 'bg-sand/40 text-walnut font-bold'
                                    : 'text-charcoal hover:bg-sand/20'
                                }`
                              }
                            >
                              {sub.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                          isActive
                            ? 'bg-sand/40 text-walnut font-bold'
                            : 'text-charcoal hover:bg-sand/20'
                        }`
                      }
                    >
                      <span>{link.name}</span>
                    </NavLink>
                  );
                })}
              </div>

              {/* Action Buttons in Mobile Drawer */}
              <div className="pt-4 border-t border-sand/40 space-y-3">
                <Link
                  to="/contact"
                  className="w-full py-3.5 px-4 rounded-xl bg-walnut text-ivory font-semibold text-center block hover:bg-walnut-600 shadow-sm"
                >
                  Contact Owner Directly
                </Link>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl border border-sand bg-white text-charcoal font-medium text-center flex items-center justify-center gap-2 hover:bg-sand/20"
                >
                  <MessageSquare className="w-4 h-4 text-walnut" />
                  <span>WhatsApp Owner Directly</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageSquare,
  Home,
  Layers,
  Image as ImageIcon,
  DoorClosed,
  Archive,
  Columns3,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brand';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileCupboardsOpen, setMobileCupboardsOpen] = useState(true);
  const [mobilePvcOpen, setMobilePvcOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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

  const whatsappUrl = getWhatsAppUrl(
    `Hello ${BRAND_CONFIG.ownerName}, I would like to enquire about your interior and cupboard works.`
  );

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-soft border-b border-sand/40 py-2 sm:py-2.5'
            : 'bg-ivory/90 backdrop-blur-sm border-b border-sand/20 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo & Name */}
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg p-0.5 flex-shrink-0"
              aria-label={`${BRAND_CONFIG.brandName} - Homepage`}
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/brand/s-logo.png"
                  alt="Sanjay Interior Works Logo"
                  className="w-full h-full object-contain filter drop-shadow-xs"
                  loading="eager"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif font-black text-xs xs:text-sm sm:text-base lg:text-lg tracking-wide text-walnut uppercase group-hover:text-charcoal transition-colors leading-tight whitespace-nowrap">
                  {BRAND_CONFIG.brandName}
                </span>
                <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-medium tracking-wider text-charcoal-muted uppercase whitespace-nowrap hidden sm:block">
                  {BRAND_CONFIG.mainSlogan}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Equal alignment from both sides) */}
            <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-1.5" aria-label="Main Navigation">
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
                          `inline-flex items-center gap-1 px-2.5 py-2 rounded-lg text-xs xl:text-[13px] 2xl:text-sm font-medium transition-colors whitespace-nowrap ${
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
                      `px-2.5 py-2 rounded-lg text-xs xl:text-[13px] 2xl:text-sm font-medium transition-colors whitespace-nowrap ${
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

            {/* Desktop Right CTA (Only active at xl breakpoint matching nav) */}
            <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-walnut text-ivory text-xs xl:text-sm font-semibold hover:bg-walnut-600 active:scale-95 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-gold whitespace-nowrap"
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Mobile Header Action Controls */}
            <div className="flex items-center gap-2 xl:hidden flex-shrink-0">
              <a
                href={`tel:${BRAND_CONFIG.contact.phone}`}
                className="w-10 h-10 rounded-xl bg-sand/25 border border-sand/40 text-walnut flex items-center justify-center active:scale-90 transition-transform"
                aria-label="Direct Phone Call"
                title={`Call ${BRAND_CONFIG.contact.phone}`}
              >
                <Phone className="w-4 h-4 text-walnut" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-sand/30 text-charcoal hover:bg-sand/50 hover:text-walnut active:scale-90 transition-all focus:outline-none focus:ring-2 focus:ring-gold"
                aria-expanded={mobileMenuOpen}
                aria-label="Open Navigation Drawer"
              >
                <Menu className="w-6 h-6 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Android-Style Modal Navigation Drawer (Side Sheet) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 xl:hidden">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Slide-In Navigation Sheet */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[86%] max-w-[340px] bg-ivory shadow-2xl flex flex-col z-50 overflow-hidden"
              role="dialog"
              aria-label="Mobile Navigation Menu"
            >
              {/* Drawer Top App Bar */}
              <div className="p-4 bg-sand/25 border-b border-sand/40 flex items-center justify-between">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                    <img
                      src="/images/brand/s-logo.png"
                      alt="Logo"
                      className="w-full h-full object-contain filter drop-shadow-xs"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif font-extrabold text-xs tracking-wider text-walnut uppercase leading-tight truncate">
                      {BRAND_CONFIG.brandName}
                    </h3>
                    <p className="text-[10px] text-charcoal-muted truncate">
                      Proprietor: {BRAND_CONFIG.ownerName}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-sand/30 hover:bg-sand/50 text-charcoal active:scale-90 transition-transform"
                  aria-label="Close Navigation Drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items (Scrollable List) */}
              <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1 no-scrollbar">
                {/* 1. Home */}
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-3 rounded-2xl text-sm font-medium transition-all active:scale-[0.98] ${
                      isActive
                        ? 'bg-walnut text-ivory font-semibold shadow-xs'
                        : 'text-charcoal hover:bg-sand/20'
                    }`
                  }
                >
                  <Home className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Home</span>
                </NavLink>

                {/* 2. Services */}
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-3 rounded-2xl text-sm font-medium transition-all active:scale-[0.98] ${
                      isActive
                        ? 'bg-walnut text-ivory font-semibold shadow-xs'
                        : 'text-charcoal hover:bg-sand/20'
                    }`
                  }
                >
                  <Layers className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>All Services</span>
                </NavLink>

                {/* 3. Our Works */}
                <NavLink
                  to="/our-works"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-3 rounded-2xl text-sm font-medium transition-all active:scale-[0.98] ${
                      isActive
                        ? 'bg-walnut text-ivory font-semibold shadow-xs'
                        : 'text-charcoal hover:bg-sand/20'
                    }`
                  }
                >
                  <ImageIcon className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Completed Works Gallery</span>
                </NavLink>

                {/* 4. Cupboard Works with Expandable Submenu */}
                <div className="rounded-2xl border border-sand/40 overflow-hidden bg-white/40 my-1">
                  <div className="flex items-center justify-between px-3.5 py-2.5">
                    <NavLink
                      to="/cupboard-works"
                      className="flex items-center gap-3 text-sm font-semibold text-walnut flex-1"
                    >
                      <Archive className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>Cupboard Works</span>
                    </NavLink>
                    <button
                      type="button"
                      onClick={() => setMobileCupboardsOpen(!mobileCupboardsOpen)}
                      className="p-1 text-charcoal hover:text-walnut rounded-lg"
                      aria-label="Toggle Cupboards List"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileCupboardsOpen ? 'rotate-180 text-walnut' : ''
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {mobileCupboardsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-3 pb-2 space-y-1 border-t border-sand/20 pt-1.5 bg-ivory/50"
                      >
                        <NavLink
                          to="/cupboard-works"
                          end
                          className={({ isActive }) =>
                            `block px-3 py-2 text-xs rounded-xl transition-colors ${
                              isActive ? 'bg-walnut text-ivory font-semibold' : 'text-charcoal hover:bg-sand/20'
                            }`
                          }
                        >
                          Overview & Storage Solutions
                        </NavLink>
                        <NavLink
                          to="/cupboard-works/cherry"
                          className={({ isActive }) =>
                            `block px-3 py-2 text-xs rounded-xl transition-colors ${
                              isActive ? 'bg-walnut text-ivory font-semibold' : 'text-charcoal hover:bg-sand/20'
                            }`
                          }
                        >
                          Cherry Cupboard Works
                        </NavLink>
                        <NavLink
                          to="/cupboard-works/teak"
                          className={({ isActive }) =>
                            `block px-3 py-2 text-xs rounded-xl transition-colors ${
                              isActive ? 'bg-walnut text-ivory font-semibold' : 'text-charcoal hover:bg-sand/20'
                            }`
                          }
                        >
                          Teak Wood Cupboard Works
                        </NavLink>
                        <NavLink
                          to="/cupboard-works/upvc"
                          className={({ isActive }) =>
                            `block px-3 py-2 text-xs rounded-xl transition-colors ${
                              isActive ? 'bg-walnut text-ivory font-semibold' : 'text-charcoal hover:bg-sand/20'
                            }`
                          }
                        >
                          UPVC Cupboard Works
                        </NavLink>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 5. PVC Doors with Expandable Submenu */}
                <div className="rounded-2xl border border-sand/40 overflow-hidden bg-white/40 my-1">
                  <div className="flex items-center justify-between px-3.5 py-2.5">
                    <NavLink
                      to="/pvc-door-works"
                      className="flex items-center gap-3 text-sm font-semibold text-walnut flex-1"
                    >
                      <DoorClosed className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>PVC Doors</span>
                    </NavLink>
                    <button
                      type="button"
                      onClick={() => setMobilePvcOpen(!mobilePvcOpen)}
                      className="p-1 text-charcoal hover:text-walnut rounded-lg"
                      aria-label="Toggle PVC Doors List"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobilePvcOpen ? 'rotate-180 text-walnut' : ''
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {mobilePvcOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-3 pb-2 space-y-1 border-t border-sand/20 pt-1.5 bg-ivory/50"
                      >
                        <NavLink
                          to="/pvc-door-works"
                          end
                          className={({ isActive }) =>
                            `block px-3 py-2 text-xs rounded-xl transition-colors ${
                              isActive ? 'bg-walnut text-ivory font-semibold' : 'text-charcoal hover:bg-sand/20'
                            }`
                          }
                        >
                          Overview & Standard Doors
                        </NavLink>
                        <a
                          href="/pvc-door-works#picture-doors"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-xs rounded-xl text-charcoal hover:bg-sand/20"
                        >
                          Picture PVC Doors (3D Art)
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 6. WPVC Doors */}
                <NavLink
                  to="/wpvc-door-works"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-3 rounded-2xl text-sm font-medium transition-all active:scale-[0.98] ${
                      isActive
                        ? 'bg-walnut text-ivory font-semibold shadow-xs'
                        : 'text-charcoal hover:bg-sand/20'
                    }`
                  }
                >
                  <DoorClosed className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>WPVC Designer Doors</span>
                </NavLink>

                {/* 7. Aluminium Works */}
                <NavLink
                  to="/aluminium-works"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-3 rounded-2xl text-sm font-medium transition-all active:scale-[0.98] ${
                      isActive
                        ? 'bg-walnut text-ivory font-semibold shadow-xs'
                        : 'text-charcoal hover:bg-sand/20'
                    }`
                  }
                >
                  <Columns3 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Aluminium Works</span>
                </NavLink>

                {/* 8. Netlon Mesh Works */}
                <NavLink
                  to="/netlon-works"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-3 rounded-2xl text-sm font-medium transition-all active:scale-[0.98] ${
                      isActive
                        ? 'bg-walnut text-ivory font-semibold shadow-xs'
                        : 'text-charcoal hover:bg-sand/20'
                    }`
                  }
                >
                  <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Netlon Mesh Installations</span>
                </NavLink>

                {/* 9. About */}
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-3 rounded-2xl text-sm font-medium transition-all active:scale-[0.98] ${
                      isActive
                        ? 'bg-walnut text-ivory font-semibold shadow-xs'
                        : 'text-charcoal hover:bg-sand/20'
                    }`
                  }
                >
                  <Sparkles className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>About Sanjay Interior Works</span>
                </NavLink>

                {/* 10. Contact Us */}
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-3 rounded-2xl text-sm font-medium transition-all active:scale-[0.98] ${
                      isActive
                        ? 'bg-walnut text-ivory font-semibold shadow-xs'
                        : 'text-charcoal hover:bg-sand/20'
                    }`
                  }
                >
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Contact Us</span>
                </NavLink>
              </div>

              {/* Drawer Bottom Actions (Direct Touch Targets) */}
              <div className="p-4 bg-white border-t border-sand/40 space-y-2.5">
                <a
                  href={`tel:${BRAND_CONFIG.contact.phone}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-walnut text-ivory font-semibold text-sm flex items-center justify-center gap-2 hover:bg-walnut-600 active:scale-95 shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call +91 {BRAND_CONFIG.contact.phone}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl border border-sand bg-ivory/60 text-charcoal font-semibold text-xs flex items-center justify-center gap-2 hover:bg-sand/25 active:scale-95 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Owner Directly</span>
                </a>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

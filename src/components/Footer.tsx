import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brand';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory pt-12 sm:pt-16 pb-24 md:pb-10 border-t border-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-10 sm:mb-12">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/brand/s-logo.png"
                  alt="Sanjay Interior Works Logo"
                  className="w-full h-full object-contain filter drop-shadow-xs"
                />
              </div>
              <div>
                <span className="font-serif font-extrabold text-lg tracking-wide uppercase text-ivory block">
                  {BRAND_CONFIG.brandName}
                </span>
                <span className="text-xs text-sand tracking-widest uppercase">
                  Interior Craftsmanship
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-sand/20">
              <p className="font-serif italic text-base text-sand-light font-medium">
                "{BRAND_CONFIG.mainSlogan}"
              </p>
              <p className="text-xs text-sand mt-1">
                {BRAND_CONFIG.supportingLine}
              </p>
            </div>

            <p className="text-sm text-sand-light leading-relaxed">
              Thoughtfully crafted interiors, elegant finishes, and practical solutions to make every space feel special. Specialized in custom cupboard works, PVC & WPVC designer doors, aluminium fabrications, and insect mesh systems.
            </p>

            <div className="pt-1 text-xs text-sand flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
              <span>Proprietor: <strong className="text-white">{BRAND_CONFIG.ownerName}</strong></span>
            </div>
          </div>

          {/* Cupboard Materials (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold font-serif">
              Cupboard Works
            </h4>
            <ul className="space-y-2.5 text-sm text-sand-light">
              <li>
                <Link to="/cupboard-works" className="hover:text-gold transition-colors inline-flex items-center gap-1">
                  <span>Overview & Storage Solutions</span>
                </Link>
              </li>
              <li>
                <Link to="/cupboard-works/cherry" className="hover:text-gold transition-colors inline-flex items-center gap-1">
                  <span>Cherry Cupboard Works</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-sand" />
                </Link>
              </li>
              <li>
                <Link to="/cupboard-works/teak" className="hover:text-gold transition-colors inline-flex items-center gap-1">
                  <span>Teak Wood Cupboards</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-sand" />
                </Link>
              </li>
              <li>
                <Link to="/cupboard-works/upvc" className="hover:text-gold transition-colors inline-flex items-center gap-1">
                  <span>UPVC Cupboard Works</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-sand" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Works Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold font-serif">
              Services & Works
            </h4>
            <ul className="space-y-2.5 text-sm text-sand-light">
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/pvc-door-works" className="hover:text-gold transition-colors">
                  PVC Doors
                </Link>
              </li>
              <li>
                <Link to="/pvc-door-works#picture-doors" className="hover:text-gold transition-colors">
                  Picture PVC Doors
                </Link>
              </li>
              <li>
                <Link to="/wpvc-door-works" className="hover:text-gold transition-colors">
                  WPVC Doors
                </Link>
              </li>
              <li>
                <Link to="/aluminium-works" className="hover:text-gold transition-colors">
                  Aluminium Works
                </Link>
              </li>
              <li>
                <Link to="/netlon-works" className="hover:text-gold transition-colors">
                  Netlon Mesh Work
                </Link>
              </li>
              <li>
                <Link to="/our-works" className="hover:text-gold transition-colors">
                  Completed Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold font-serif">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-sand-light">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href={`tel:${BRAND_CONFIG.contact.phone}`}
                  className="hover:text-gold transition-colors font-medium"
                >
                  {BRAND_CONFIG.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href={`tel:${BRAND_CONFIG.contact.phone2}`}
                  className="hover:text-gold transition-colors font-medium"
                >
                  {BRAND_CONFIG.contact.phone2}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors font-medium"
                >
                  WhatsApp: {BRAND_CONFIG.contact.whatsappNumber.replace(/^91/, '')}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-walnut text-ivory text-xs font-semibold hover:bg-walnut-600 transition-colors border border-sand/30"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-gold" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-sand/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand">
          <p>
            © {currentYear} {BRAND_CONFIG.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Proprietor: {BRAND_CONFIG.ownerName}</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact & Enquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

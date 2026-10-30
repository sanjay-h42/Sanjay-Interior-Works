import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Layers, Image as ImageIcon, MessageSquare, Phone } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brand';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const whatsappUrl = getWhatsAppUrl(
    `Hello ${BRAND_CONFIG.ownerName}, I would like to enquire about your interior and cupboard works.`
  );

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-lg border-t border-sand/40 shadow-[0_-4px_20px_rgba(48,43,39,0.08)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="grid grid-cols-5 h-16 items-center px-1 max-w-lg mx-auto">
        {/* 1. Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full py-1 text-center transition-all active:scale-90 select-none ${
              isActive ? 'text-walnut font-bold' : 'text-charcoal-muted hover:text-walnut'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`w-10 h-7 flex items-center justify-center rounded-full transition-colors ${
                  isActive ? 'bg-sand/40 text-walnut' : 'text-charcoal-muted'
                }`}
              >
                <Home className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="text-[10px] tracking-tight mt-0.5 font-medium leading-none">Home</span>
            </>
          )}
        </NavLink>

        {/* 2. Services */}
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full py-1 text-center transition-all active:scale-90 select-none ${
              isActive || location.pathname.includes('/cupboard-works') || location.pathname.includes('-works')
                ? 'text-walnut font-bold'
                : 'text-charcoal-muted hover:text-walnut'
            }`
          }
        >
          {({ isActive }) => {
            const isServicesActive =
              isActive ||
              location.pathname.includes('/cupboard-works') ||
              location.pathname.includes('-works');
            return (
              <>
                <div
                  className={`w-10 h-7 flex items-center justify-center rounded-full transition-colors ${
                    isServicesActive ? 'bg-sand/40 text-walnut' : 'text-charcoal-muted'
                  }`}
                >
                  <Layers className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-[10px] tracking-tight mt-0.5 font-medium leading-none">Services</span>
              </>
            );
          }}
        </NavLink>

        {/* 3. Our Works */}
        <NavLink
          to="/our-works"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full py-1 text-center transition-all active:scale-90 select-none ${
              isActive ? 'text-walnut font-bold' : 'text-charcoal-muted hover:text-walnut'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`w-10 h-7 flex items-center justify-center rounded-full transition-colors ${
                  isActive ? 'bg-sand/40 text-walnut' : 'text-charcoal-muted'
                }`}
              >
                <ImageIcon className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="text-[10px] tracking-tight mt-0.5 font-medium leading-none">Gallery</span>
            </>
          )}
        </NavLink>

        {/* 4. WhatsApp Quick Action */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center h-full py-1 text-center transition-all active:scale-90 select-none text-emerald-700 hover:text-emerald-800"
          aria-label="Direct WhatsApp consultation"
        >
          <div className="w-10 h-7 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-colors">
            <MessageSquare className="w-5 h-5 stroke-[2]" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 font-semibold leading-none">WhatsApp</span>
        </a>

        {/* 5. Call Quick Action */}
        <a
          href={`tel:${BRAND_CONFIG.contact.phone}`}
          className="flex flex-col items-center justify-center h-full py-1 text-center transition-all active:scale-90 select-none text-walnut hover:text-walnut-700"
          aria-label="Call Sanjay Interior Works directly"
        >
          <div className="w-10 h-7 flex items-center justify-center rounded-full bg-sand/30 text-walnut transition-colors">
            <Phone className="w-5 h-5 stroke-[2]" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 font-semibold leading-none">Call</span>
        </a>
      </div>
    </nav>
  );
};


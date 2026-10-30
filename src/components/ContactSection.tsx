import React from 'react';
import { Phone, MessageSquare, Clock } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brand';

interface ContactSectionProps {
  className?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  className = '',
}) => {
  const whatsappUrl = getWhatsAppUrl(
    `Hello ${BRAND_CONFIG.ownerName}, I would like to discuss an interior project with Sanjay Interior Works.`
  );

  return (
    <section id="contact" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* =========================================================================
            LEFT SIDE: Premium, Minimal, Elegant Editorial Typography Design
            - Strictly NO location/address details
            - Strictly NO mail/email details
            - Replaced ONLY with direct contact numbers and WhatsApp number
            - Main heading in EXACTLY TWO LINES:
                Line 1: Let's Build
                Line 2: Something Beautiful Together.
           ========================================================================= */}
        <div className="lg:col-span-6 space-y-8">
          {/* Editorial Eyebrow Index */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-walnut/60" aria-hidden="true"></span>
            <span className="text-[11px] font-sans font-semibold tracking-[0.25em] uppercase text-walnut">
              SANJAY INTERIOR WORKS &bull; DIRECT CONSULTATION
            </span>
          </div>

          {/* Main Editorial Heading (EXACTLY TWO LINES) */}
          <h2 className="font-serif text-3xl xs:text-[2.1rem] sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] text-charcoal font-normal tracking-tight leading-[1.12]">
            <span className="block whitespace-nowrap">Let's Build</span>
            <span className="block font-serif italic text-walnut font-normal mt-1 sm:mt-1.5">
              Something Beautiful Together.
            </span>
          </h2>

          {/* Editorial Description (Replaced location & mail with contact & WhatsApp only) */}
          <p className="text-sm sm:text-base text-charcoal-muted font-sans font-light leading-relaxed max-w-xl">
            Every enduring space begins with an unhurried, personal conversation. Reach out directly to proprietor <strong className="font-semibold text-charcoal">{BRAND_CONFIG.ownerName}</strong> via direct phone call or WhatsApp to discuss bespoke cupboards, WPVC & PVC doors, aluminium fabrications, and customized interior installations.
          </p>

          {/* Editorial Quick Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`tel:${BRAND_CONFIG.contact.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-walnut text-ivory text-sm font-semibold hover:bg-walnut-600 active:scale-95 transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Call +91 {BRAND_CONFIG.contact.phone}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-sand hover:border-walnut text-charcoal text-sm font-semibold hover:bg-sand/15 active:scale-95 transition-all shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-walnut" />
              <span>WhatsApp Directly</span>
            </a>
          </div>

          {/* Editorial Assurance Quote */}
          <div className="p-4 sm:p-5 rounded-2xl bg-sand/15 border border-sand/30">
            <p className="font-serif italic text-sm text-walnut font-medium">
              "{BRAND_CONFIG.mainSlogan}"
            </p>
            <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
              Direct on-site measurements and honest material consultations are conducted personally by V. Vijay Pandiyan.
            </p>
          </div>
        </div>

        {/* =========================================================================
            RIGHT SIDE: Contact Section Card as shown in screenshot
            - White rounded-3xl container with border & soft shadow
            - Brand Header (S logo box, brand name, proprietor)
            - Contact numbers & WhatsApp (location & email removed)
            - Operating Hours
            - Transparent Estimates bottom box
           ========================================================================= */}
        <div className="lg:col-span-6 w-full">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sand/40 shadow-soft">
            {/* Brand Header */}
            <div className="flex items-center gap-3.5 mb-8 pb-6 border-b border-sand/30">
              <div className="w-12 h-12 rounded-2xl bg-walnut text-ivory flex items-center justify-center font-serif font-black text-xl border border-sand/40 shadow-sm flex-shrink-0">
                S
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-charcoal">
                  {BRAND_CONFIG.brandName}
                </h3>
                <p className="text-xs text-charcoal-muted">
                  Proprietor: <strong className="text-walnut">{BRAND_CONFIG.ownerName}</strong>
                </p>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-7 text-sm">
              {/* Phone Number 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-ivory border border-sand/50 text-walnut flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-light block mb-1">
                    Phone Number
                  </span>
                  <a
                    href={`tel:${BRAND_CONFIG.contact.phone}`}
                    className="font-semibold text-base text-charcoal hover:text-walnut transition-colors"
                  >
                    +91 {BRAND_CONFIG.contact.phone}
                  </a>
                  <span className="text-[11px] text-charcoal-light block mt-0.5">
                    Direct consultation with proprietor
                  </span>
                </div>
              </div>

              {/* Phone Number 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-ivory border border-sand/50 text-walnut flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-light block mb-1">
                    Secondary Phone
                  </span>
                  <a
                    href={`tel:${BRAND_CONFIG.contact.phone2}`}
                    className="font-semibold text-base text-charcoal hover:text-walnut transition-colors"
                  >
                    +91 {BRAND_CONFIG.contact.phone2}
                  </a>
                  <span className="text-[11px] text-charcoal-light block mt-0.5">
                    Alternate line for enquiries
                  </span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-ivory border border-sand/50 text-walnut flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-light block mb-1">
                    WhatsApp Number
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-base text-walnut hover:underline transition-colors"
                  >
                    +91 {BRAND_CONFIG.contact.whatsappNumber.replace(/^91/, '')}
                  </a>
                  <span className="text-[11px] text-charcoal-light block mt-0.5">
                    Message us on WhatsApp for instant response
                  </span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-ivory border border-sand/50 text-walnut flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-light block mb-1">
                    Operating Hours
                  </span>
                  <p className="font-semibold text-base text-charcoal">
                    {BRAND_CONFIG.workingHours.days}: {BRAND_CONFIG.workingHours.timings}
                  </p>
                </div>
              </div>
            </div>

            {/* Transparent Estimates note */}
            <div className="mt-8 pt-6 border-t border-sand/30">
              <div className="p-5 rounded-2xl bg-sand/20 border border-sand/40 text-xs text-charcoal-muted leading-relaxed">
                <strong className="text-charcoal font-semibold block mb-1">
                  Transparent Estimates
                </strong>
                Each interior quotation is calculated based on exact measured dimensions, chosen material grades (e.g. Cherry, Teak, or UPVC), and hardware fixtures. We provide clear, itemized details before commencing work.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

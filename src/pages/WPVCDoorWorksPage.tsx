import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { GalleryGrid } from '../components/GalleryGrid';
import { getProjectsByCategory } from '../data/works';
import { CheckCircle2, ShieldCheck, Droplets, Sparkles, Layers, Phone, MessageSquare } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brand';

export const WPVCDoorWorksPage: React.FC = () => {
  const projects = getProjectsByCategory('wpvc-doors');
  const whatsappUrl = getWhatsAppUrl(
    `Hello ${BRAND_CONFIG.ownerName}, I would like to enquire about your WPVC Designer Doors.`
  );

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      <PageHeader
        breadcrumbs={[{ label: 'WPVC Doors' }]}
        badge="Wood Polymer Composite"
        title="WPVC Doors"
        subtitle="Solid Wood Grandeur. Lifetime Water & Termite Resistance."
        description="Engineered with high-density Wood Polymer Composite (WPVC / WPC), our designer doors combine the solid heft, acoustic insulation, and rich grain of authentic timber with 100% waterproof and termite-proof longevity for bedrooms, pooja rooms, and premium entries."
      />

      <section className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Core Benefits */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-sand/40 shadow-soft">
          <div className="max-w-3xl mb-6 sm:mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-walnut font-semibold block mb-2">
              Next-Generation Door Technology
            </span>
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-serif font-bold text-charcoal mb-3">
              Why Choose WPVC Doors Over Standard Doors?
            </h2>
            <p className="text-xs xs:text-sm sm:text-base text-charcoal-muted leading-relaxed">
              Traditional solid wood doors are susceptible to moisture swelling, termites, and seasonal expansion, while hollow doors lack structural heft. WPVC doors bridge the gap by combining natural wood flour with high-grade polymers, delivering an impenetrable, high-density core adorned with artistic designer finishes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="p-4 sm:p-5 rounded-2xl bg-ivory/60 border border-sand/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-walnut text-ivory flex items-center justify-center mb-3 shadow-xs">
                  <Droplets className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-serif font-bold text-base text-charcoal mb-1">100% Waterproof</h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Completely unaffected by moisture, humidity, and direct water contact. Will never warp, rot, swell, or delaminate.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-ivory/60 border border-sand/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-walnut text-ivory flex items-center justify-center mb-3 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-serif font-bold text-base text-charcoal mb-1">Termite & Borer Immune</h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  The dense composite polymer structure offers total resistance against termites, wood borers, mold, and fungus.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-ivory/60 border border-sand/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-walnut text-ivory flex items-center justify-center mb-3 shadow-xs">
                  <Sparkles className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-serif font-bold text-base text-charcoal mb-1">Designer Inlays & Motifs</h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Available in rich teak, dark walnut, geometric diamond inlays, and vibrant floral emblems that retain their luster.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-ivory/60 border border-sand/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-walnut text-ivory flex items-center justify-center mb-3 shadow-xs">
                  <Layers className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-serif font-bold text-base text-charcoal mb-1">Solid Core Strength</h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Substantial heavyweight construction with excellent screw-holding capacity, sound insulation, and smooth latching.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-sand/30 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs text-charcoal-muted">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-walnut flex-shrink-0" />
              <span>Custom Door Frame & Shutter Sizing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-walnut flex-shrink-0" />
              <span>Heavy-Duty Stainless Hardware Compatible</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-walnut flex-shrink-0" />
              <span>On-Site Precision Measurements by Owner</span>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-walnut font-semibold block mb-1">
              Verified Project Showcase
            </span>
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-serif font-bold text-charcoal">
              Completed WPVC Door Installations & Models
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
              Photographs of actual on-site WPVC door installations executed by Sanjay Interior Works, along with featured designer catalogue models.
            </p>
          </div>

          <GalleryGrid projects={projects} categoryTitle="WPVC Doors" />
        </div>

        {/* Direct Contact Banner */}
        <div className="bg-gradient-to-br from-white via-ivory to-sand/30 rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-sand/50 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-walnut font-semibold">
              Direct Craftsman Consultation
            </span>
            <h3 className="text-xl xs:text-2xl font-serif font-bold text-charcoal">
              Require Custom WPVC Doors for Your Home?
            </h3>
            <p className="text-xs xs:text-sm text-charcoal-muted leading-relaxed">
              Discuss door frame measurements, catalogue designs (e.g. RK 027 chevron, RK 047 slate & timber, RK 015 teak & teal, RK 033, RK 036), and custom on-site installation directly with proprietor <strong>{BRAND_CONFIG.ownerName}</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${BRAND_CONFIG.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-xl bg-walnut text-ivory text-sm font-semibold hover:bg-walnut-600 active:scale-[0.99] transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Call +91 {BRAND_CONFIG.contact.phone}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-xl bg-white border border-sand hover:border-walnut text-charcoal text-sm font-semibold hover:bg-sand/20 active:scale-[0.99] transition-all shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-walnut" />
              <span>WhatsApp Design Enquiry</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};


import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Layers,
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { SERVICES } from '../data/services';
import { CUPBOARD_CATEGORIES } from '../data/cupboards';
import { COMPLETED_PROJECTS } from '../data/works';
import { GalleryGrid } from '../components/GalleryGrid';
import { FAQAccordion } from '../components/FAQAccordion';
import { ContactSection } from '../components/ContactSection';
import { BRAND_CONFIG } from '../config/brand';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-20 pb-12 sm:pb-16">
      {/* 2. Hero Section featuring uploaded interior photo */}
      <Hero />

      {/* 3. Services Overview */}
      <section className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-walnut text-xs font-semibold uppercase tracking-wider mb-2.5 sm:mb-3">
              <Layers className="w-3.5 h-3.5 text-gold" />
              <span>Core Specializations</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-charcoal">
              Comprehensive Interior Services
            </h2>
            <p className="text-xs xs:text-sm sm:text-base text-charcoal-muted mt-2 leading-relaxed">
              From water-resistant doors to bespoke hardwood wardrobes and insect screen mesh,
              each service is planned and installed with precision craftsmanship.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-walnut hover:text-charcoal group min-h-[40px] py-1"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 4. Featured Real Completed-Work Photographs */}
      <section className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8">
        <div className="bg-sand/15 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-sand/30">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-walnut text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Verified Works Portfolio</span>
              </div>
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-serif font-bold text-charcoal">
                Authentic Project Highlights
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-1 leading-relaxed">
                Authenticity commitment: We only display genuine photographs of completed projects executed by our team.
              </p>
            </div>

            <Link
              to="/our-works"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-walnut hover:text-charcoal group min-h-[40px] py-1"
            >
              <span>Explore Gallery</span>
              <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <GalleryGrid projects={COMPLETED_PROJECTS.slice(0, 3)} categoryTitle="Completed Projects" />
        </div>
      </section>

      {/* 5. Cupboard Material Categories */}
      <section className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-walnut text-xs font-semibold uppercase tracking-wider mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Dedicated Material Expertise</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-charcoal">
            Cupboard Works by Material
          </h2>
          <p className="text-xs xs:text-sm sm:text-base text-charcoal-muted mt-2 leading-relaxed">
            Every material carries its own distinct beauty, texture, and durability. Choose from our three specialized cupboard classifications.
          </p>

          {/* Catchy & Good Looking Pricing Display Card */}
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-white border-2 border-gold/60 shadow-medium flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 text-left">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-walnut text-gold flex items-center justify-center flex-shrink-0 font-serif font-black text-xl shadow-xs border border-gold/40">
                ₹
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-walnut bg-gold/25 px-2.5 py-0.5 rounded-full inline-block mb-1">
                  Factory Direct Pricing
                </span>
                <h3 className="font-serif font-bold text-base sm:text-lg text-charcoal leading-tight">
                  PVC & UPVC Cupboard Works
                </h3>
                <p className="text-xs text-charcoal-muted">
                  Custom bedroom wardrobes, lofts & kitchen cabinets.
                </p>
              </div>
            </div>

            <div className="bg-sand/20 border border-sand/60 px-4 py-2.5 rounded-xl text-center sm:text-right flex-shrink-0 w-full sm:w-auto">
              <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-muted block">Price Starts From</span>
              <span className="text-xl sm:text-2xl font-black text-walnut">
                ₹250 <span className="text-xs font-semibold text-charcoal-muted">to</span> ₹500
              </span>
              <span className="text-[11px] font-semibold text-walnut/70 block">per sq.ft</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {CUPBOARD_CATEGORIES.map((cupboard) => (
            <div
              key={cupboard.id}
              className="group bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-sand/40 hover:border-walnut/50 hover:shadow-medium transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gold bg-walnut/90 text-ivory px-2.5 py-1 rounded-lg inline-block mb-3.5 sm:mb-4">
                  {cupboard.title.split(' ')[0]} Material
                </span>

                <h3 className="text-lg xs:text-xl font-serif font-bold text-charcoal group-hover:text-walnut transition-colors mb-2">
                  {cupboard.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-4">
                  {cupboard.shortDesc}
                </p>

                {/* Catchy Price Rate for UPVC */}
                {cupboard.id === 'upvc' && (
                  <div className="mb-4 p-2.5 rounded-xl bg-sand/25 border border-sand/50 flex items-center justify-between text-xs">
                    <span className="font-bold uppercase tracking-wider text-walnut">Price Rate:</span>
                    <span className="font-black text-xs sm:text-sm text-walnut bg-white px-2.5 py-0.5 rounded border border-sand/40">
                      ₹250 – ₹500 / sq.ft
                    </span>
                  </div>
                )}

                <div className="space-y-1.5 mb-5 sm:mb-6 pt-2 border-t border-sand/20">
                  {cupboard.characteristics.slice(0, 2).map((char, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-charcoal-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-walnut flex-shrink-0 mt-0.5" />
                      <span>{char}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-sand/30">
                <Link
                  to={cupboard.route}
                  className="w-full py-3 px-4 rounded-xl bg-ivory text-walnut hover:bg-walnut hover:text-ivory active:scale-95 transition-all text-xs font-semibold text-center flex items-center justify-center gap-1.5 min-h-[44px]"
                >
                  <span>Explore {cupboard.title.split(' ')[0]} Works</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. About Sanjay Interior Works */}
      <section className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white via-ivory to-sand/20 rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-12 border border-sand/50 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-walnut text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Craftsmanship & Trust</span>
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-charcoal leading-tight">
                About {BRAND_CONFIG.brandName}
              </h2>

              <p className="font-serif italic text-base sm:text-lg text-walnut font-medium">
                "{BRAND_CONFIG.mainSlogan}" — {BRAND_CONFIG.supportingLine}
              </p>

              <p className="text-xs xs:text-sm sm:text-base text-charcoal-muted leading-relaxed">
                Led by <strong>{BRAND_CONFIG.ownerName}</strong> — delivering honest craftsmanship in PVC & WPVC designer doors, Netlon mesh, aluminium works, and custom modular cupboards across Tamil Nadu.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-walnut text-ivory text-sm font-semibold hover:bg-walnut-600 active:scale-95 transition-all shadow-sm min-h-[48px]"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4 text-gold" />
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-ivory text-charcoal border border-sand hover:border-walnut active:scale-95 transition-all text-sm font-medium min-h-[48px]"
                >
                  <span>Contact Owner</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-8 border border-sand/40 shadow-soft space-y-4">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-walnut border-b border-sand/30 pb-3">
                Core Service Principles
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sand/30 text-walnut flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal text-xs sm:text-sm">Precision Measurements</h4>
                    <p className="text-xs text-charcoal-muted">On-site verification ensures clean millimeter fits for all doors and cabinetry.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sand/30 text-walnut flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal text-xs sm:text-sm">Authentic Material Advice</h4>
                    <p className="text-xs text-charcoal-muted">Honest recommendations on whether solid Teak, Cherry, or waterproof UPVC suits your budget.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sand/30 text-walnut flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal text-xs sm:text-sm">Direct Owner Oversight</h4>
                    <p className="text-xs text-charcoal-muted">Every enquiry and installation is supervised directly by V. Vijay Pandiyan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-walnut text-xs font-semibold uppercase tracking-wider mb-2.5 sm:mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
            <span>Why Choose Sanjay Interior Works</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-charcoal">
            Craftsmanship That Endures
          </h2>
          <p className="text-xs xs:text-sm sm:text-base text-charcoal-muted mt-2 leading-relaxed">
            We focus on genuine quality, honest guidance, and lasting finishes rather than inflated claims.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          <div className="p-5 sm:p-7 rounded-2xl bg-white border border-sand/40 hover:shadow-soft transition-all">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-ivory border border-sand/40 text-walnut flex items-center justify-center mb-3 sm:mb-4">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-serif font-bold text-base sm:text-lg text-charcoal mb-1.5 sm:mb-2">Attention to Detail</h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              From exact panel alignments to smooth edge finishing and quiet hinge adjustments, subtle details define our final presentation.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl bg-white border border-sand/40 hover:shadow-soft transition-all">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-ivory border border-sand/40 text-walnut flex items-center justify-center mb-3 sm:mb-4">
              <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-serif font-bold text-base sm:text-lg text-charcoal mb-1.5 sm:mb-2">Thoughtful Material Selection</h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              We guide you towards the most practical material for your room conditions—such as UPVC for damp rooms and Teak for lifetime durability.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl bg-white border border-sand/40 hover:shadow-soft transition-all">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-ivory border border-sand/40 text-walnut flex items-center justify-center mb-3 sm:mb-4">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-serif font-bold text-base sm:text-lg text-charcoal mb-1.5 sm:mb-2">Focus on Finished Appearance</h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Clean surface lines, neatly masked joins, and smooth rolling hardware ensure your space looks and functions like a masterpiece.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-walnut text-xs font-semibold uppercase tracking-wider mb-2.5 sm:mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-gold" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-charcoal">
            Frequently Asked Questions
          </h2>
          <p className="text-xs xs:text-sm sm:text-base text-charcoal-muted mt-2 leading-relaxed">
            Clear information about our craftsmanship, materials, quotation process, and on-site measurements.
          </p>
        </div>

        <FAQAccordion limit={4} />
      </section>

      {/* 9. Direct Contact & Consultation Section */}
      <ContactSection />
    </div>
  );
};

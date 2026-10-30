import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Clock,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Eye,
  Layers,
  Award,
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
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 2. Hero Section featuring uploaded interior photo */}
      <Hero />

      {/* 3. Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-walnut text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-gold" />
              <span>Core Specializations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
              Comprehensive Interior Services
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted mt-2">
              From water-resistant doors to bespoke hardwood wardrobes and insect screen mesh,
              each service is planned and installed with precision craftsmanship.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-walnut hover:text-charcoal group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 4. Featured Real Completed-Work Photographs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sand/15 rounded-3xl p-6 sm:p-10 border border-sand/30">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-walnut text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Verified Works Portfolio</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal">
                Authentic Project Highlights
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
                Authenticity commitment: We only display genuine photographs of completed projects executed by our team.
              </p>
            </div>

            <Link
              to="/our-works"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-walnut hover:text-charcoal group"
            >
              <span>Explore Gallery</span>
              <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <GalleryGrid projects={COMPLETED_PROJECTS.slice(0, 3)} categoryTitle="Completed Projects" />
        </div>
      </section>

      {/* 5. Cupboard Material Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-walnut text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Dedicated Material Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
            Cupboard Works by Material
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted mt-2">
            Every material carries its own distinct beauty, texture, and durability. Choose from our three specialized cupboard classifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CUPBOARD_CATEGORIES.map((cupboard) => (
            <div
              key={cupboard.id}
              className="group bg-white rounded-3xl p-6 border border-sand/40 hover:border-walnut/50 hover:shadow-medium transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold bg-walnut/90 text-ivory px-2.5 py-1 rounded-lg inline-block mb-4">
                  {cupboard.title.split(' ')[0]} Material
                </span>

                <h3 className="text-xl font-serif font-bold text-charcoal group-hover:text-walnut transition-colors mb-2">
                  {cupboard.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-4">
                  {cupboard.shortDesc}
                </p>

                <div className="space-y-1.5 mb-6 pt-2 border-t border-sand/20">
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
                  className="w-full py-2.5 px-4 rounded-xl bg-ivory text-walnut hover:bg-walnut hover:text-ivory transition-colors text-xs font-semibold text-center flex items-center justify-center gap-1.5"
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white via-ivory to-sand/20 rounded-3xl p-8 sm:p-12 border border-sand/50 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-walnut text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Craftsmanship & Trust</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal leading-tight">
                About {BRAND_CONFIG.brandName}
              </h2>

              <p className="font-serif italic text-lg text-walnut font-medium">
                "{BRAND_CONFIG.mainSlogan}" — {BRAND_CONFIG.supportingLine}
              </p>

              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                Led by <strong>{BRAND_CONFIG.ownerName}</strong> — delivering honest craftsmanship in PVC & WPVC designer doors, Netlon mesh, aluminium works, and custom modular cupboards across Tamil Nadu.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-walnut text-ivory text-sm font-semibold hover:bg-walnut-600 transition-colors shadow-sm"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4 text-gold" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ivory text-charcoal border border-sand hover:border-walnut transition-colors text-sm font-medium"
                >
                  <span>Contact Owner</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-sand/40 shadow-soft space-y-4">
              <h3 className="font-serif font-bold text-xl text-walnut border-b border-sand/30 pb-3">
                Core Service Principles
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sand/30 text-walnut flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">Precision Measurements</h4>
                    <p className="text-xs text-charcoal-muted">On-site verification ensures clean millimeter fits for all doors and cabinetry.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sand/30 text-walnut flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">Authentic Materials</h4>
                    <p className="text-xs text-charcoal-muted">Verified solid woods, high-tensile aluminium, and water-resistant polymer boards.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sand/30 text-walnut flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">Direct Owner Oversight</h4>
                    <p className="text-xs text-charcoal-muted">Every enquiry and installation is supervised directly by V. Vijay Pandiyan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-walnut text-xs font-semibold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
            <span>Why Choose Sanjay Interior Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
            Craftsmanship That Endures
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted mt-2">
            We focus on genuine quality, honest guidance, and lasting finishes rather than inflated claims.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-sand/40 hover:shadow-soft transition-all">
            <div className="w-12 h-12 rounded-xl bg-ivory border border-sand/40 text-walnut flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-charcoal mb-2">Attention to Detail</h3>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              From exact panel alignments to smooth edge finishing and quiet hinge adjustments, subtle details define our final presentation.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-sand/40 hover:shadow-soft transition-all">
            <div className="w-12 h-12 rounded-xl bg-ivory border border-sand/40 text-walnut flex items-center justify-center mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-charcoal mb-2">Thoughtful Material Selection</h3>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              We guide you towards the most practical material for your room conditions—such as UPVC for damp rooms and Teak for lifetime durability.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-sand/40 hover:shadow-soft transition-all">
            <div className="w-12 h-12 rounded-xl bg-ivory border border-sand/40 text-walnut flex items-center justify-center mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-charcoal mb-2">Focus on Finished Appearance</h3>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              Clean surface lines, neatly masked joins, and smooth rolling hardware ensure your space looks and functions like a masterpiece.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-walnut text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-gold" />
            <span>Questions & Clarity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted mt-2">
            Find straightforward answers regarding our services, material choices, measurements, and quotation process.
          </p>
        </div>

        <FAQAccordion limit={5} />
      </section>

      {/* 9. Direct Contact & Consultation */}
      <ContactSection />
    </div>
  );
};

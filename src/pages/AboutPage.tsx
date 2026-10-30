import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { BRAND_CONFIG } from '../config/brand';
import { SERVICES } from '../data/services';
import { ContactSection } from '../components/ContactSection';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Compass,
  ArrowRight,
  Layers,
  HeartHandshake,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      <PageHeader
        breadcrumbs={[{ label: 'About Us' }]}
        badge="Our Identity"
        title={`About ${BRAND_CONFIG.brandName}`}
        subtitle={BRAND_CONFIG.mainSlogan}
        description={`Guided by proprietor ${BRAND_CONFIG.ownerName}, we bring thoughtful craftsmanship, material understanding, and dedicated client service to every interior project.`}
      />

      {/* Main Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-walnut text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Dedicated Craftsmanship</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal leading-tight">
              Crafting Beauty Into Every Corner
            </h2>

            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              At <strong>{BRAND_CONFIG.brandName}</strong>, we believe every space holds the potential to be a functional, elegant masterpiece. Whether you are fitting out a newly constructed home, updating a kitchen utility space, or seeking durable solutions for water-prone bathrooms, we approach each assignment with genuine care and structural discipline.
            </p>

            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
              Founded and managed by <strong>{BRAND_CONFIG.ownerName}</strong>, our workshop focuses on practical interior execution. We work directly with homeowners, builders, and business owners to select the right materials—balancing aesthetic desire with everyday utility.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-sand/40 shadow-soft">
              <h3 className="font-serif font-bold text-walnut text-lg mb-2">
                Our Work Philosophy
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                We do not believe in one-size-fits-all interior templates. Every room presents unique dimensions, humidity conditions, and aesthetic priorities. From solid Teak and warm Cherry cupboards to waterproof WPVC & PVC designer doors, modular wardrobes, and insect-screen Netlon mesh, we provide transparent guidance and exact on-site fitting.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-sand/20 rounded-3xl p-8 border border-sand/50 shadow-soft space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-walnut text-ivory flex items-center justify-center font-serif font-bold text-2xl border border-sand/40 shadow-sm">
                  VP
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-charcoal">
                    {BRAND_CONFIG.ownerName}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-walnut font-semibold">
                    Proprietor & Principal Craftsman
                  </span>
                </div>
              </div>

              <div className="space-y-3.5 pt-4 border-t border-sand/40 text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-walnut flex-shrink-0 mt-0.5" />
                  <span>Personal supervision of measurements, fabrication, and installation.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-walnut flex-shrink-0 mt-0.5" />
                  <span>Honest material advice based on room ventilation and usage.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-walnut flex-shrink-0 mt-0.5" />
                  <span>Direct client communication without intermediary delays.</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="w-full py-3 px-5 rounded-xl bg-walnut text-ivory text-sm font-semibold text-center block hover:bg-walnut-600 transition-colors shadow-sm"
                >
                  Contact V. Vijay Pandiyan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Portfolio Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-walnut text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-gold" />
            <span>Scope of Services</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-charcoal">
            What We Do
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted mt-2">
            A comprehensive suite of residential and commercial interior solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="p-6 rounded-2xl bg-white border border-sand/40 hover:border-sand transition-all"
            >
              <h3 className="font-serif font-bold text-lg text-charcoal mb-2">
                {serv.name}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-4">
                {serv.shortDescription}
              </p>
              <Link
                to={serv.exploreRoute}
                className="text-xs font-semibold text-walnut hover:text-charcoal inline-flex items-center gap-1"
              >
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Contact Section */}
      <ContactSection />
    </div>
  );
};

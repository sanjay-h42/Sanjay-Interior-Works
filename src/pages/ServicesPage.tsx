import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ServiceCard } from '../components/ServiceCard';
import { SERVICES } from '../data/services';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

export const ServicesPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      <PageHeader
        breadcrumbs={[{ label: 'Services' }]}
        badge="Our Craftsmanship"
        title="Comprehensive Interior Services"
        subtitle="Every Space. A Masterpiece."
        description="Explore our specialized interior services crafted for homes and commercial establishments. From moisture-proof PVC doors and custom wood wardrobes to precision aluminium fabrications and high-tensile insect mesh."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Service Guarantee Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-sand/20 border border-sand/40">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-serif font-bold text-walnut mb-3">
              Tailored Installations by {BRAND_CONFIG.ownerName}
            </h3>
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-6">
              Need custom modifications or a combined package (such as PVC doors along with modular cupboards)?
              We evaluate your floor plan and spatial needs to configure the most durable, cost-effective solution.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-semibold text-charcoal">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-walnut" />
                <span>On-Site Measurements</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-walnut" />
                <span>Genuine Grade Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-walnut" />
                <span>Neat, Clean Fitting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

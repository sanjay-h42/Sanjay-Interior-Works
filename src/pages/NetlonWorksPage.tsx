import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { GalleryGrid } from '../components/GalleryGrid';
import { getProjectsByCategory } from '../data/works';
import { ShieldCheck, Wind, Sun, CheckCircle2 } from 'lucide-react';

export const NetlonWorksPage: React.FC = () => {
  const projects = getProjectsByCategory('netlon');

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        breadcrumbs={[{ label: 'Netlon Mesh Work' }]}
        badge="Insect Protection"
        title="Netlon Mesh Work"
        subtitle="A Neat Finish for Your Space."
        description="Effective mosquito and insect screen mesh installations that preserve natural fresh airflow and daylight. Tailored for residential windows, ventilators, balconies, and doors using durable framing and neat border fixtures."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand/40 shadow-soft mb-10">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-walnut mb-3">
            Fresh Air Without Insects
          </h2>
          <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
            Netlon mesh systems are installed with precision to sit neatly along window reveals, providing dependable protection while maintaining room visibility and ventilation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30 flex items-start gap-3">
              <Wind className="w-5 h-5 text-walnut flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-xs text-charcoal uppercase tracking-wider mb-0.5">Continuous Airflow</h4>
                <p className="text-xs text-charcoal-muted">High open-area mesh allows natural breezes into living rooms and bedrooms.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30 flex items-start gap-3">
              <Sun className="w-5 h-5 text-walnut flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-xs text-charcoal uppercase tracking-wider mb-0.5">Clear Daylight</h4>
                <p className="text-xs text-charcoal-muted">Discreet dark mesh strands avoid glare and maintain outside visibility.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-walnut flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-xs text-charcoal uppercase tracking-wider mb-0.5">Durable Mounting</h4>
                <p className="text-xs text-charcoal-muted">Available in rigid aluminium frames, sliding shutters, or velcro trims.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-walnut flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-xs text-charcoal uppercase tracking-wider mb-0.5">Custom Sizing</h4>
                <p className="text-xs text-charcoal-muted">Fabricated to the exact millimeter dimensions of your window openings.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mb-4">
            Completed Netlon Mesh Installations
          </h3>
          <GalleryGrid projects={projects} categoryTitle="Netlon Mesh Works" />
        </div>


      </section>
    </div>
  );
};

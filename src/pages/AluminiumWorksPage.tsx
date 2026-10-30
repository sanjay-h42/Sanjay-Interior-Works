import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { GalleryGrid } from '../components/GalleryGrid';
import { getProjectsByCategory } from '../data/works';
// projects data loaded below

export const AluminiumWorksPage: React.FC = () => {
  const projects = getProjectsByCategory('aluminium');

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        breadcrumbs={[{ label: 'Aluminium Works' }]}
        badge="Architectural Fabrication"
        title="Aluminium Works"
        subtitle="Clean Lines. Functional Design."
        description="Precision aluminium fabrications engineered for smooth operation, structural stability, and sleek architectural lines. Ideal for sliding windows, office partitions, balcony enclosures, and custom architectural frameworks."
      />

      <section className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8">
        {/* Features Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-sand/40 shadow-soft mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-walnut mb-3">
            Architectural Precision & Clean Lines
          </h2>
          <p className="text-xs xs:text-sm text-charcoal-muted leading-relaxed mb-6">
            Aluminium provides a strong, lightweight structural profile that resists rust and outdoor weather variations while offering minimalist sightlines for modern interiors.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30">
              <span className="font-semibold text-xs text-walnut uppercase tracking-wider block mb-1">Sliding Windows</span>
              <p className="text-xs text-charcoal-muted">Smooth rolling tracks with durable bearings and locking latches.</p>
            </div>
            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30">
              <span className="font-semibold text-xs text-walnut uppercase tracking-wider block mb-1">Interior Partitions</span>
              <p className="text-xs text-charcoal-muted">Clean glazed cubicles and room dividers for offices and residences.</p>
            </div>
            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30">
              <span className="font-semibold text-xs text-walnut uppercase tracking-wider block mb-1">Coating Options</span>
              <p className="text-xs text-charcoal-muted">Powder-coated colors and anodized finishes to match your color palette.</p>
            </div>
            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30">
              <span className="font-semibold text-xs text-walnut uppercase tracking-wider block mb-1">Rust Resistance</span>
              <p className="text-xs text-charcoal-muted">Non-corrosive metal framing that withstands sunlight and rain.</p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-10">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-walnut font-semibold block mb-1">
                Verified Portfolio ({projects.length} Works)
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal">
                Completed Aluminium Projects & Custom Fabrications
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
                Balcony French double doors, commercial sliding partition systems, top-track art glass doors, and anodized utility doors fabricated to precision millimeter measurements.
              </p>
            </div>
          </div>
          <GalleryGrid projects={projects} categoryTitle="Aluminium Works" />
        </div>


      </section>
    </div>
  );
};

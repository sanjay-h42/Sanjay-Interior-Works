import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { GalleryGrid } from '../components/GalleryGrid';
import { getProjectsByCategory } from '../data/works';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const TeakCupboardsPage: React.FC = () => {
  const projects = getProjectsByCategory('cupboards-teak');

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        breadcrumbs={[
          { label: 'Cupboard Works', href: '/cupboard-works' },
          { label: 'Teak Wood Cupboards' },
        ]}
        badge="Solid Hardwood"
        title="Teak Wood Cupboard Works"
        subtitle="Enduring Strength. Authentic Natural Timber."
        description="Teak wood stands as the timeless benchmark in solid hardwood cabinetry. Revered for its natural oil density, exceptional resistance to moisture and pests, and heirloom longevity that develops richer character with time."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/cupboard-works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-walnut hover:text-charcoal transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gold" />
            <span>Back to All Cupboard Categories</span>
          </Link>
        </div>

        {/* Material Characteristics Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand/40 shadow-soft mb-10">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-walnut mb-3">
            The Teak Wood Standard
          </h2>
          <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
            When longevity and authentic natural wood texture are paramount, Teak wood offers unmatched dimensional stability, natural pest resistance, and prestige.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30">
              <span className="font-semibold text-xs text-walnut uppercase tracking-wider block mb-1">Natural Oils</span>
              <p className="text-xs text-charcoal-muted">High natural oil content protects against termites, fungal rot, and moisture.</p>
            </div>
            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30">
              <span className="font-semibold text-xs text-walnut uppercase tracking-wider block mb-1">Grain Architecture</span>
              <p className="text-xs text-charcoal-muted">Prominent golden-brown grain with organic natural variation and deep texture.</p>
            </div>
            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30">
              <span className="font-semibold text-xs text-walnut uppercase tracking-wider block mb-1">Structural Rigidity</span>
              <p className="text-xs text-charcoal-muted">Does not sag under heavy garment loads or warp under varying seasons.</p>
            </div>
            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30">
              <span className="font-semibold text-xs text-walnut uppercase tracking-wider block mb-1">Generational Value</span>
              <p className="text-xs text-charcoal-muted">A long-term investment that retains structural value over decades.</p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mb-4">
            Completed Teak Wood Cupboard Projects
          </h3>
          <GalleryGrid projects={projects} categoryTitle="Teak Wood Cupboards" />
        </div>


      </section>
    </div>
  );
};

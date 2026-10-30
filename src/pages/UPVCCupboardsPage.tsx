import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { GalleryGrid } from '../components/GalleryGrid';
import { getProjectsByCategory } from '../data/works';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const UPVCCupboardsPage: React.FC = () => {
  const projects = getProjectsByCategory('cupboards-upvc');

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        breadcrumbs={[
          { label: 'Cupboard Works', href: '/cupboard-works' },
          { label: 'UPVC Cupboards' },
        ]}
        badge="Zero Maintenance"
        title="UPVC Cupboard Works"
        subtitle="100% Waterproof. Termite-Proof. Modern Utility."
        description="UPVC cupboard systems provide the highest level of moisture resistance and hygienic storage. Engineered with unplasticized polyvinyl profiles, UPVC will never warp, corrode, or harbor pests, making it ideal for utility spaces, coastal zones, and kitchens."
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
            Key Advantages of UPVC Cupboards
          </h2>
          <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
            If you need reliable, washable, and worry-free storage in areas exposed to humidity or frequent water contact, UPVC is the optimal material choice.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30">
              <span className="font-semibold text-xs text-walnut uppercase tracking-wider block mb-1">Water & Humidity</span>
              <p className="text-xs text-charcoal-muted">100% waterproof; unaffected by steam, condensation, or water seepage.</p>
            </div>
            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30">
              <span className="font-semibold text-xs text-walnut uppercase tracking-wider block mb-1">Pest Resistance</span>
              <p className="text-xs text-charcoal-muted">Inorganic structure cannot be eaten or damaged by termites or wood borers.</p>
            </div>
            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30">
              <span className="font-semibold text-xs text-walnut uppercase tracking-wider block mb-1">Effortless Upkeep</span>
              <p className="text-xs text-charcoal-muted">Simply wipe clean with a damp cloth; needs no periodic varnish or polishing.</p>
            </div>
            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30">
              <span className="font-semibold text-xs text-walnut uppercase tracking-wider block mb-1">Ideal Spaces</span>
              <p className="text-xs text-charcoal-muted">Kitchen lofts, laundry utility, washroom storage, and damp wall zones.</p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mb-4">
            Completed UPVC Cupboard Projects
          </h3>
          <GalleryGrid projects={projects} categoryTitle="UPVC Cupboards" />
        </div>


      </section>
    </div>
  );
};

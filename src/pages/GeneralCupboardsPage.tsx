import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { GalleryGrid } from '../components/GalleryGrid';
import { getProjectsByCategory } from '../data/works';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const GeneralCupboardsPage: React.FC = () => {
  const projects = getProjectsByCategory('cupboards-general');

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        breadcrumbs={[
          { label: 'Cupboard Works', href: '/cupboard-works' },
          { label: 'General Cupboards' },
        ]}
        badge="Versatile Modular Storage"
        title="General Cupboard Works"
        subtitle="Functional Planning. Custom Finishes."
        description="Our General Cupboard Works encompass tailored modular wardrobes, high-pressure laminates, acrylic panels, engineered plywood frameworks, and practical internal organizers suited to any room layout and storage requirement."
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
            Versatile Modular Storage Solutions
          </h2>
          <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
            From loft covers and study unit organizers to multi-door sliding wardrobes, General Cupboard Works deliver maximum interior utility configured precisely for your available room dimensions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30">
              <span className="font-semibold text-xs text-walnut uppercase tracking-wider block mb-1">Layout Flexibility</span>
              <p className="text-xs text-charcoal-muted">Customized shelf depths, hanging rod heights, and pull-out accessories.</p>
            </div>
            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30">
              <span className="font-semibold text-xs text-walnut uppercase tracking-wider block mb-1">Finish Choices</span>
              <p className="text-xs text-charcoal-muted">Matte, textured woodgrain, gloss, and acrylic laminate surface options.</p>
            </div>
            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30">
              <span className="font-semibold text-xs text-walnut uppercase tracking-wider block mb-1">Hardware Options</span>
              <p className="text-xs text-charcoal-muted">Smooth soft-closing hinges, sturdy sliding tracks, and ergonomic handles.</p>
            </div>
            <div className="p-4 rounded-2xl bg-ivory/50 border border-sand/30">
              <span className="font-semibold text-xs text-walnut uppercase tracking-wider block mb-1">Ideal Spaces</span>
              <p className="text-xs text-charcoal-muted">Bedrooms, living room displays, children study rooms, and hallway lofts.</p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mb-4">
            Completed General Cupboard Projects
          </h3>
          <GalleryGrid projects={projects} categoryTitle="General Cupboard Works" />
        </div>


      </section>
    </div>
  );
};

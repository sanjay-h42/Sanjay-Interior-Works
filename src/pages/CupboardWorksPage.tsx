import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { CUPBOARD_CATEGORIES } from '../data/cupboards';
import { ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export const CupboardWorksPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      <PageHeader
        breadcrumbs={[{ label: 'Cupboard Works' }]}
        badge="Custom Storage Solutions"
        title="Cupboard Design & Installation"
        subtitle="Crafting beauty into every corner."
        description="Explore our specialized cupboard classifications. Whether you appreciate the warm red hues of Cherry, the heirloom durability of solid Teak Wood, or the waterproof resilience of UPVC, we craft storage that transforms your space."
      />

      {/* Material Categories Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CUPBOARD_CATEGORIES.map((cupboard) => (
            <div
              key={cupboard.id}
              className="group bg-white rounded-3xl p-8 border border-sand/40 hover:border-walnut/50 hover:shadow-medium transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold bg-walnut text-ivory px-3 py-1 rounded-full">
                    Material Focus
                  </span>
                  <span className="text-xs text-charcoal-light font-serif italic">
                    Sanjay Interior Works
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal group-hover:text-walnut transition-colors mb-3">
                  {cupboard.title}
                </h2>

                <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-6">
                  {cupboard.fullDesc}
                </p>

                <div className="space-y-2 mb-6 pt-4 border-t border-sand/30">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-walnut">
                    Key Features:
                  </h4>
                  {cupboard.characteristics.map((char, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{char}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-ivory/60 border border-sand/30 text-xs text-charcoal mb-6">
                  <strong className="text-walnut font-semibold block mb-0.5">Recommended Application:</strong>
                  <span>{cupboard.recommendedFor}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-sand/30 flex items-center justify-between gap-3">
                <Link
                  to={cupboard.route}
                  className="w-full py-3.5 px-6 rounded-xl bg-walnut text-ivory font-semibold text-center hover:bg-walnut-600 transition-colors flex items-center justify-center gap-2 shadow-sm text-sm"
                >
                  <span>Explore {cupboard.title}</span>
                  <ArrowRight className="w-4 h-4 text-gold" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

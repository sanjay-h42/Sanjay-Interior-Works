import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { CUPBOARD_CATEGORIES } from '../data/cupboards';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const CupboardWorksPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      <PageHeader
        breadcrumbs={[{ label: 'Cupboard Works' }]}
        badge="Custom Storage Solutions"
        title="Cupboard Design & Installation"
        subtitle="Crafting beauty into every corner."
        description="Explore our specialized cupboard classifications. Whether you appreciate the warm red hues of Cherry, the heirloom durability of solid Teak Wood, or the waterproof resilience of UPVC, we craft storage that transforms your space. PVC and UPVC cupboard price starts from ₹250 to ₹500."
      />

      {/* Catchy & Good Looking Pricing Display Card */}
      <section className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8">
        <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-gold/60 shadow-medium flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-walnut text-gold flex items-center justify-center flex-shrink-0 shadow-sm border border-gold/40 font-serif font-black text-2xl">
              ₹
            </div>
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold/20 text-walnut text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">
                <span>Direct Factory Pricing</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-black text-charcoal">
                PVC & UPVC Cupboard Works
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-0.5">
                Precision-fabricated modular storage for bedrooms, kitchen lofts, and utility spaces.
              </p>
            </div>
          </div>

          <div className="text-center md:text-right flex-shrink-0 bg-sand/20 border border-sand/60 px-5 py-3 rounded-2xl w-full md:w-auto shadow-2xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-muted block">Price Starts From</span>
            <span className="text-2xl sm:text-3xl font-black text-walnut">
              ₹250 <span className="text-sm font-semibold text-charcoal-muted">to</span> ₹500
            </span>
            <span className="text-xs font-semibold text-walnut/70 block mt-0.5">per sq.ft • Material & Fitting</span>
          </div>
        </div>
      </section>

      {/* Material Categories Showcase */}
      <section className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {CUPBOARD_CATEGORIES.map((cupboard) => (
            <div
              key={cupboard.id}
              className="group bg-white rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-8 border border-sand/40 hover:border-walnut/50 hover:shadow-medium transition-all duration-300 flex flex-col justify-between"
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

                <h2 className="text-xl xs:text-2xl sm:text-3xl font-serif font-bold text-charcoal group-hover:text-walnut transition-colors mb-3">
                  {cupboard.title}
                </h2>

                <p className="text-xs xs:text-sm sm:text-base text-charcoal-muted leading-relaxed mb-4">
                  {cupboard.fullDesc}
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

                <div className="p-3.5 sm:p-4 rounded-xl bg-ivory/60 border border-sand/30 text-xs text-charcoal mb-6">
                  <strong className="text-walnut font-semibold block mb-0.5">Recommended Application:</strong>
                  <span>{cupboard.recommendedFor}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-sand/30 flex items-center justify-between gap-3">
                <Link
                  to={cupboard.route}
                  className="w-full py-3.5 px-6 min-h-[48px] rounded-xl bg-walnut text-ivory font-semibold text-center hover:bg-walnut-600 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-sm text-sm"
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

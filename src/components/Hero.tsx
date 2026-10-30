import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { BRAND_CONFIG } from '../config/brand';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-3 sm:pt-6 pb-12 sm:pb-16 lg:py-20 bg-gradient-to-b from-ivory via-ivory to-sand/20">
      <div className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-7"
          >
            {/* Brand Lockup Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-walnut text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span className="truncate">{BRAND_CONFIG.brandName}</span>
              </div>

              {/* Main Heading & Official Slogan */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-charcoal leading-[1.16] tracking-tight">
                Every Space.{' '}
                <span className="block text-walnut italic font-normal sm:inline">
                  A Masterpiece.
                </span>
              </h1>

              {/* Supporting Line */}
              <p className="font-serif italic text-base xs:text-lg sm:text-xl lg:text-2xl text-walnut/90 font-medium mt-2 sm:mt-3">
                {BRAND_CONFIG.supportingLine}
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-charcoal-muted leading-relaxed max-w-2xl">
              Thoughtfully crafted interiors, elegant finishes, and practical solutions to make every space feel special. Specialized in custom cupboard works, precision aluminium designs, PVC solutions, and insect protection systems.
            </p>

            {/* Highlights pill tags (Android Chip style) */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs sm:text-sm text-charcoal">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sand/25 border border-sand/40 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-walnut flex-shrink-0" />
                <span className="font-medium">Custom Cupboards</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sand/25 border border-sand/40 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-walnut flex-shrink-0" />
                <span className="font-medium">PVC & WPVC Doors</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sand/25 border border-sand/40 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-walnut flex-shrink-0" />
                <span className="font-medium">Aluminium & Mesh</span>
              </div>
            </div>

            {/* Action Buttons (Touch Friendly 48px) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                to="/our-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-walnut text-ivory font-semibold hover:bg-walnut-600 active:scale-[0.98] transition-all shadow-md shadow-walnut/15 text-sm sm:text-base min-h-[48px]"
              >
                <span>Explore Our Works</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white text-charcoal border border-sand hover:border-walnut hover:text-walnut active:scale-[0.98] transition-all font-medium text-sm sm:text-base shadow-soft min-h-[48px]"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Leadership Signoff */}
            <div className="pt-2 border-t border-sand/40 text-xs text-charcoal-light flex items-center justify-between flex-wrap gap-2">
              <span>
                Proprietor: <strong className="text-charcoal font-semibold">{BRAND_CONFIG.ownerName}</strong>
              </span>
              <span className="text-[11px] italic text-charcoal-light">
                Crafted with care for residential and commercial spaces
              </span>
            </div>
          </motion.div>

          {/* Right Image Column (5 cols on lg) - Stacked Below Text on Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative card frame with soft antique gold border */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated border-2 border-sand/60 bg-sand-light p-1.5 sm:p-2">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-sand/30">
                  <img
                    src="/images/hero/hero-interior.jpg"
                    alt="Sanjay Interior Works — Warm walnut cabinetry and elegant natural stone kitchen island"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />

                  {/* Gradient shadow overlay for aesthetic richness */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />

                  {/* Floating badge inside image corner */}
                  <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-auto bg-charcoal/85 backdrop-blur-md px-3 py-2 rounded-xl border border-sand/40 text-ivory text-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0" />
                    <span className="font-serif italic truncate">
                      "{BRAND_CONFIG.supportingLine}"
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative accent element */}
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-sand/40 -z-10" />
              <div className="hidden sm:block absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-walnut/10 -z-10" />
            </div>

            {/* Authenticity note */}
            <p className="mt-2.5 text-center text-[11px] text-charcoal-light italic">
              Illustrative interior aesthetic reference. Real completed works documented in our portfolio.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

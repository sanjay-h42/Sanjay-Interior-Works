import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Compass } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full text-center p-8 sm:p-12 bg-white rounded-3xl border border-sand/50 shadow-medium">
        <div className="w-16 h-16 rounded-2xl bg-ivory border border-sand text-walnut flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Compass className="w-8 h-8 stroke-[1.5]" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-gold bg-sand/20 px-3 py-1 rounded-full mb-3 inline-block">
          Error 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-serif font-black text-charcoal mb-3">
          Page Not Found
        </h1>

        <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-8">
          The interior page you are looking for does not exist or may have been relocated.
          Explore our services or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-walnut text-ivory font-semibold hover:bg-walnut-600 transition-colors shadow-sm text-sm"
          >
            <Home className="w-4 h-4 text-gold" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ivory text-charcoal border border-sand hover:border-walnut transition-colors font-medium text-sm"
          >
            <span>Explore Services</span>
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-sand/30 text-xs text-charcoal-light">
          {BRAND_CONFIG.brandName} — {BRAND_CONFIG.mainSlogan}
        </div>
      </div>
    </div>
  );
};

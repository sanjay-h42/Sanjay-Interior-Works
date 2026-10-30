import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { BreadcrumbItem } from '../types';
import { Sparkles } from 'lucide-react';

interface PageHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  breadcrumbs,
  badge,
  title,
  subtitle,
  description,
}) => {
  return (
    <section className="bg-gradient-to-b from-ivory via-ivory to-sand/20 border-b border-sand/30 pt-3 sm:pt-4 pb-7 sm:py-12">
      <div className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-3 sm:mb-4" />

        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-walnut text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>{badge}</span>
            </div>
          )}

          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-charcoal tracking-tight mb-2 leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="font-serif italic text-base sm:text-xl text-walnut font-medium mb-2.5 sm:mb-3">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-xs xs:text-sm sm:text-base text-charcoal-muted leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

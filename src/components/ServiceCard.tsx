import React from 'react';
import { Link } from 'react-router-dom';
import {
  DoorClosed,
  LayoutGrid,
  Archive,
  Columns3,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  LucideIcon,
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
}

const ICON_MAP: Record<string, LucideIcon> = {
  DoorClosed: DoorClosed,
  LayoutGrid: LayoutGrid,
  Cabinet: Archive,
  Columns3: Columns3,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = ICON_MAP[service.iconName] || Sparkles;

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-sand/40 hover:border-sand hover:shadow-medium transition-all duration-300">
      <div>
        {/* Icon & Category Pill */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-14 h-14 rounded-2xl bg-ivory border border-sand/40 flex items-center justify-center text-walnut group-hover:bg-walnut group-hover:text-ivory transition-colors duration-300 shadow-sm">
            <IconComponent className="w-7 h-7 stroke-[1.6]" />
          </div>

          <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-light bg-sand/20 px-2.5 py-1 rounded-full">
            Specialized Work
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal group-hover:text-walnut transition-colors mb-3">
          {service.name}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {/* Features bullet list */}
        <div className="space-y-2 mb-6 pt-2 border-t border-sand/20">
          {service.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-charcoal">
              <CheckCircle className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action links */}
      <div className="pt-4 border-t border-sand/30 flex items-center justify-between gap-2">
        <Link
          to={service.exploreRoute}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-walnut hover:text-charcoal group-hover:translate-x-0.5 transition-all"
        >
          <span>Explore Works</span>
          <ArrowRight className="w-3.5 h-3.5 text-gold" />
        </Link>

        <Link
          to={`/contact?service=${encodeURIComponent(service.name)}`}
          className="text-xs font-semibold px-3.5 py-2 rounded-xl bg-ivory text-walnut hover:bg-sand/30 transition-colors border border-sand/40"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
};

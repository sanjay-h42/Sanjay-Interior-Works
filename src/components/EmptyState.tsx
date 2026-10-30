import React from 'react';
import { Camera, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../config/brand';

interface EmptyStateProps {
  title?: string;
  categoryTitle?: string;
  message?: string;
  showEnquiryButton?: boolean;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'Project Photos Coming Soon',
  categoryTitle,
  message = 'We uphold a strict authenticity policy: only real, verified photographs of work completed by Sanjay Interior Works are presented in our gallery. Fresh photographs are added as projects are completed and photographed.',
  showEnquiryButton = true,
}) => {
  const whatsappUrl = getWhatsAppUrl(
    categoryTitle
      ? `Hello V. Vijay Pandiyan, I am interested in seeing recent project examples or photos for ${categoryTitle}.`
      : 'Hello V. Vijay Pandiyan, I am interested in seeing recent project examples from Sanjay Interior Works.'
  );

  return (
    <div className="w-full max-w-2xl mx-auto my-8 p-8 sm:p-10 bg-white/80 backdrop-blur-sm border border-sand/40 rounded-2xl shadow-soft text-center transition-all duration-300">
      <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-ivory border border-sand/50 flex items-center justify-center text-walnut shadow-inner">
        <Camera className="w-8 h-8 stroke-[1.5]" />
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/20 border border-sand/40 text-walnut text-xs font-semibold mb-3">
        <Sparkles className="w-3.5 h-3.5 text-gold" />
        <span>Authentic Portfolio Notice</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-serif font-bold text-walnut mb-3">
        {categoryTitle ? `${categoryTitle} — Photos Added Regularly` : title}
      </h3>

      <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed max-w-lg mx-auto mb-6">
        {message}
      </p>

      {showEnquiryButton && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-walnut text-ivory font-medium hover:bg-walnut-600 active:scale-[0.98] transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-gold" />
            <span>Enquire on WhatsApp</span>
          </a>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-ivory text-walnut border border-sand hover:border-walnut transition-all font-medium"
          >
            <span>Request Work Details</span>
            <ArrowRight className="w-4 h-4 text-walnut" />
          </Link>
        </div>
      )}
    </div>
  );
};

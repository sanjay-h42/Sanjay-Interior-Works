import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '../data/faq';

interface FAQAccordionProps {
  category?: 'all' | 'services' | 'cupboards' | 'process' | 'quotes';
  limit?: number;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ category = 'all', limit }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id || null);

  const filteredItems = FAQ_ITEMS.filter((item) => {
    if (category === 'all') return true;
    return item.category === category;
  }).slice(0, limit);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3.5" role="region" aria-label="Frequently Asked Questions">
      {filteredItems.map((item) => {
        const isOpen = openId === item.id;
        const headingId = `faq-heading-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden bg-white ${
              isOpen
                ? 'border-gold/60 shadow-medium'
                : 'border-sand/40 hover:border-sand shadow-soft'
            }`}
          >
            <button
              id={headingId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between text-left p-4 sm:p-6 min-h-[48px] gap-3 sm:gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold active:bg-sand/20 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-walnut text-ivory' : 'bg-ivory text-walnut'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="font-serif font-bold text-sm xs:text-base sm:text-lg text-charcoal leading-snug">
                  {item.question}
                </span>
              </div>

              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 text-walnut ml-2"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs xs:text-sm sm:text-base text-charcoal-muted leading-relaxed border-t border-sand/20">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

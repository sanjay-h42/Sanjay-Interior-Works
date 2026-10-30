import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { GalleryGrid } from '../components/GalleryGrid';
import { WORK_CATEGORIES, getProjectsByCategory } from '../data/works';
import { WorkCategory } from '../types';
import { ShieldCheck } from 'lucide-react';

export const OurWorksPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as WorkCategory | null;

  const [activeCategory, setActiveCategory] = useState<WorkCategory>(
    categoryParam && WORK_CATEGORIES.some((c) => c.key === categoryParam)
      ? categoryParam
      : 'all'
  );

  useEffect(() => {
    if (categoryParam && WORK_CATEGORIES.some((c) => c.key === categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategoryChange = (cat: WorkCategory) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  const currentCategoryObj = WORK_CATEGORIES.find((c) => c.key === activeCategory);
  const projects = getProjectsByCategory(activeCategory);

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        breadcrumbs={[{ label: 'Our Works' }]}
        badge="Authentic Portfolio"
        title="Completed Project Gallery"
        subtitle="Real Work. Genuine Craftsmanship."
        description="Browse our portfolio of completed projects. In keeping with our strict authenticity policy, every photograph in this gallery represents actual work executed by Sanjay Interior Works."
      />

      {/* Authenticity Pledge Callout */}
      <div className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-sand/50 shadow-soft flex items-center gap-3 sm:gap-3.5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-ivory text-walnut flex items-center justify-center flex-shrink-0 border border-sand/40">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
          </div>
          <div className="text-xs sm:text-sm text-charcoal-muted leading-relaxed min-w-0">
            <strong className="text-charcoal font-semibold">Strict Authenticity Guarantee:</strong>{' '}
            We do not use stock, AI-generated, or third-party web photos. All displayed project imagery is authentic work documented from our completed installations.
          </div>
        </div>
      </div>

      {/* Gallery Grid with Category Filters */}
      <section className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8">
        <GalleryGrid
          projects={projects}
          activeCategory={activeCategory}
          showFilters={true}
          onCategoryChange={handleCategoryChange}
          categoryTitle={currentCategoryObj?.label || 'Our Works'}
        />
      </section>

    </div>
  );
};

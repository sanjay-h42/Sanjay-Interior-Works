import React, { useState } from 'react';
import { GalleryProject, WorkCategory } from '../types';
import { WORK_CATEGORIES } from '../data/works';
import { EmptyState } from './EmptyState';
import { Lightbox } from './Lightbox';
import { Eye, MapPin, Calendar } from 'lucide-react';

interface GalleryGridProps {
  projects: GalleryProject[];
  activeCategory?: WorkCategory;
  showFilters?: boolean;
  onCategoryChange?: (category: WorkCategory) => void;
  categoryTitle?: string;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  projects,
  activeCategory = 'all',
  showFilters = false,
  onCategoryChange,
  categoryTitle,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full">
      {/* Category filter tabs with smooth horizontal scroll */}
      {showFilters && onCategoryChange && (
        <div className="mb-6 sm:mb-8 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0">
          {WORK_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => onCategoryChange(cat.key)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all active:scale-95 min-h-[40px] flex items-center justify-center ${
                  isActive
                    ? 'bg-walnut text-ivory font-semibold shadow-xs ring-1 ring-gold/40'
                    : 'bg-white border border-sand/50 text-charcoal hover:bg-sand/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Gallery content */}
      {projects.length === 0 ? (
        <EmptyState
          categoryTitle={categoryTitle}
          title="Project Photos Will Be Added Soon"
          message="We only display real, verified photographs of work completed by Sanjay Interior Works. New project photos are documented and added as projects conclude."
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-sand/40 hover:border-sand hover:shadow-medium active:scale-[0.99] transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-sand/20">
                <img
                  src={project.imagePath}
                  alt={project.altText}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Desktop hover eye overlay */}
                <div className="absolute inset-0 bg-charcoal/25 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center justify-center">
                  <div className="p-3 rounded-full bg-charcoal/80 text-white backdrop-blur-sm shadow-md">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Mobile tap preview indicator */}
                <div className="absolute top-2.5 right-2.5 sm:hidden p-1.5 rounded-lg bg-charcoal/70 text-ivory backdrop-blur-xs flex items-center gap-1 text-[10px]">
                  <Eye className="w-3.5 h-3.5" />
                  <span>View</span>
                </div>

                <div className="absolute top-2.5 left-2.5 bg-walnut/90 text-ivory text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-xs">
                  {project.categoryName}
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base text-charcoal group-hover:text-walnut transition-colors mb-1">
                    {project.title}
                  </h4>
                  {project.description && (
                    <p className="text-xs text-charcoal-muted line-clamp-2 mb-3">
                      {project.description}
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-sand/20 flex items-center justify-between text-[11px] text-charcoal-light">
                  {project.location ? (
                    <span className="inline-flex items-center gap-1 truncate max-w-[180px]">
                      <MapPin className="w-3 h-3 text-gold flex-shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </span>
                  ) : (
                    <span>Real Completed Work</span>
                  )}

                  {project.date && (
                    <span className="inline-flex items-center gap-1 flex-shrink-0">
                      <Calendar className="w-3 h-3 text-gold" />
                      {project.date}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      <Lightbox
        projects={projects}
        currentIndex={selectedPhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setSelectedPhotoIndex(newIdx)}
      />
    </div>
  );
};

import React, { useEffect, useCallback } from 'react';
import { GalleryProject } from '../types';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';

interface LightboxProps {
  projects: GalleryProject[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  projects,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const currentProject = projects[currentIndex];

  const handlePrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    onNavigate(newIndex);
  }, [currentIndex, projects.length, onNavigate]);

  const handleNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    onNavigate(newIndex);
  }, [currentIndex, projects.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentProject) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-md p-2.5 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Preview"
      onClick={onClose}
    >
      {/* Close button with comfortable touch target */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 w-11 h-11 rounded-full bg-charcoal/80 text-ivory hover:bg-walnut active:scale-90 transition-all flex items-center justify-center shadow-md focus:ring-2 focus:ring-gold"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6 stroke-[2]" />
      </button>

      {/* Prev button */}
      {projects.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-charcoal/80 text-ivory hover:bg-walnut active:scale-90 transition-all flex items-center justify-center shadow-md focus:ring-2 focus:ring-gold"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2]" />
        </button>
      )}

      {/* Next button */}
      {projects.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-charcoal/80 text-ivory hover:bg-walnut active:scale-90 transition-all flex items-center justify-center shadow-md focus:ring-2 focus:ring-gold"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6 stroke-[2]" />
        </button>
      )}

      {/* Modal Container */}
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col rounded-2xl overflow-hidden bg-charcoal-light/10 border border-sand/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex-1 flex items-center justify-center bg-black/70 min-h-[200px] max-h-[55vh] sm:max-h-[70vh]">
          <img
            src={currentProject.imagePath}
            alt={currentProject.altText}
            className="w-auto h-auto max-w-full max-h-[55vh] sm:max-h-[70vh] object-contain select-none"
          />
        </div>

        {/* Project Details */}
        <div className="p-3.5 sm:p-6 bg-charcoal text-ivory border-t border-sand/20 overflow-y-auto max-h-[35vh]">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5 sm:mb-2">
            <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-gold bg-walnut/60 px-2.5 py-1 rounded">
              {currentProject.categoryName}
            </span>
            <span className="text-xs text-sand">
              {currentIndex + 1} of {projects.length}
            </span>
          </div>

          <h3 className="text-base sm:text-xl font-serif font-bold text-white mb-1">
            {currentProject.title}
          </h3>

          {currentProject.description && (
            <p className="text-xs sm:text-sm text-sand-light leading-relaxed mb-2 sm:mb-3">
              {currentProject.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-sand">
            {currentProject.location && (
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>{currentProject.location}</span>
              </span>
            )}
            {currentProject.date && (
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>{currentProject.date}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

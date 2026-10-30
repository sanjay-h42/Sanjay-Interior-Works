import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { GalleryGrid } from '../components/GalleryGrid';
import { getProjectsByCategory, getPicturePVCDoorProjects } from '../data/works';
import { CheckCircle2, Shield, Droplets, Sparkles, Image as ImageIcon, Wind, Phone, MessageSquare } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brand';

export const PVCDoorWorksPage: React.FC = () => {
  const allProjects = getProjectsByCategory('pvc-doors');
  const pictureDoors = getPicturePVCDoorProjects();
  // Standard doors if any, otherwise all
  const standardProjects = allProjects.filter((p) => p.category === 'pvc-doors' && p.subCategory !== 'picture-doors');

  const whatsappUrl = getWhatsAppUrl(
    `Hello ${BRAND_CONFIG.ownerName}, I would like to enquire about your Picture PVC Doors.`
  );

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      <PageHeader
        breadcrumbs={[{ label: 'PVC Doors' }]}
        badge="Specialized Installation"
        title="PVC Doors & Picture PVC Doors"
        subtitle="Practical Durability. Vibrant 3D Digital Artistry."
        description="Engineered for 100% moisture resistance, hygiene, and lasting durability. Choose from practical solid and louvered PVC doors or elevate your bathroom and washroom spaces with our vibrant 3D Digital Picture PVC Doors collection."
      />

      <section className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        {/* Quick Nav Anchors */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar -mx-3.5 px-3.5 sm:mx-0 sm:px-0 pb-1">
          <a
            href="#standard-doors"
            className="whitespace-nowrap flex-shrink-0 px-3.5 py-2 min-h-[44px] inline-flex items-center rounded-xl bg-sand/30 hover:bg-sand/50 text-walnut font-semibold text-xs transition-colors"
          >
            Overview & Core Benefits
          </a>
          <a
            href="#standard-doors-gallery"
            className="whitespace-nowrap flex-shrink-0 px-3.5 py-2 min-h-[44px] inline-flex items-center rounded-xl bg-sand/30 hover:bg-sand/50 text-walnut font-semibold text-xs transition-colors"
          >
            Standard PVC Doors ({standardProjects.length})
          </a>
          <a
            href="#picture-doors"
            className="whitespace-nowrap flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-xl bg-walnut text-ivory font-semibold text-xs hover:bg-walnut-600 transition-colors shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Picture PVC Doors ({pictureDoors.length})</span>
          </a>
        </div>

        {/* 1. Core PVC Door Benefits */}
        <div id="standard-doors" className="scroll-mt-24 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-sand/40 shadow-soft">
          <div className="max-w-3xl mb-6 sm:mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-walnut font-semibold block mb-2">
              Waterproof & Termite-Proof Construction
            </span>
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-serif font-bold text-charcoal mb-3">
              Built for High Moisture & Daily Washroom Use
            </h2>
            <p className="text-xs xs:text-sm sm:text-base text-charcoal-muted leading-relaxed">
              Standard wooden doors quickly absorb steam and moisture, causing warping, fungus, and rotting in bathrooms and utility balconies. Our PVC doors are manufactured from virgin-grade polymer sheets, remaining entirely impervious to direct water spray, humidity, and insect attack.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="p-4 sm:p-5 rounded-2xl bg-ivory/60 border border-sand/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-walnut text-ivory flex items-center justify-center mb-3 shadow-xs">
                  <Droplets className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-serif font-bold text-base text-charcoal mb-1">100% Waterproof</h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Will never warp, delaminate, swell, or rot when exposed to daily hot water showers and humidity.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-ivory/60 border border-sand/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-walnut text-ivory flex items-center justify-center mb-3 shadow-xs">
                  <Shield className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-serif font-bold text-base text-charcoal mb-1">Termite & Borer Proof</h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Solid polymer composition is 100% synthetic, eliminating any risk of borer holes or termite damage.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-ivory/60 border border-sand/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-walnut text-ivory flex items-center justify-center mb-3 shadow-xs">
                  <Wind className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-serif font-bold text-base text-charcoal mb-1">Air-Flow Louver Vents</h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Integrated horizontal louvers allow continuous cross-ventilation, preventing odor and condensation buildup.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-ivory/60 border border-sand/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-walnut text-ivory flex items-center justify-center mb-3 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-serif font-bold text-base text-charcoal mb-1">Custom Sizing</h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Custom fabricated frames and shutters tailored precisely to your bathroom, toilet, or utility opening.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Standard PVC Doors Gallery */}
        {standardProjects.length > 0 && (
          <div id="standard-doors-gallery" className="scroll-mt-24 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-walnut font-semibold block mb-1">
                  Standard & Custom Installations ({standardProjects.length} Works)
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal">
                  Solid, Woodgrain, Daicy & IRIS Designer PVC Doors
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
                  Authentic verified photographs of completed moisture-proof PVC bathroom installations and designer panel collections (Daicy Teak, IRIS Violet, Casa Dark, IRIS Black, Daicy Pink, Stone Blue, Stone Dark, Stone Black).
                </p>
              </div>
            </div>
            <GalleryGrid projects={standardProjects} categoryTitle="Standard PVC Doors" />
          </div>
        )}

        {/* 3. DEDICATED SECTION: Picture PVC Doors */}
        <div id="picture-doors" className="scroll-mt-24 space-y-8">
          <div className="bg-gradient-to-br from-white via-ivory to-sand/25 rounded-3xl p-6 sm:p-10 border border-sand/50 shadow-soft">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-walnut text-xs font-semibold uppercase tracking-wider mb-3">
                <ImageIcon className="w-3.5 h-3.5 text-gold" />
                <span>Speciality Digital Collection</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-charcoal leading-tight mb-3">
                Picture PVC Doors (3D & Digital Scenic Art)
              </h2>

              <p className="font-serif italic text-base sm:text-lg text-walnut font-medium mb-3">
                "Transforming functional bathroom and washroom doors into vibrant decorative centerpieces."
              </p>

              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                Picture PVC Doors feature high-definition, UV-cured digital imagery bonded directly onto heavy-duty PVC panels. From serene alpine waterfalls and rain-droplet floral illusions to glowing fantasy butterflies and modern 3D floating geometric cubes, each door combines striking visual art with lower ventilation louvers for practical, long-lasting performance.
              </p>
            </div>

            {/* Picture Door Key Advantages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              <div className="p-5 rounded-2xl bg-white border border-sand/40 shadow-xs">
                <h4 className="font-serif font-bold text-walnut text-base mb-1.5">
                  UV Digital Print Technology
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Artwork is printed with industrial UV-cured inks that resist fading, peeling, and blistering even when subjected to continuous steam and cleaning detergents.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-sand/40 shadow-xs">
                <h4 className="font-serif font-bold text-walnut text-base mb-1.5">
                  Ventilated Lower Louver Panel
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Fitted with horizontal louvers at the bottom to maintain natural airflow, allowing moist air to escape and keeping the bathroom fresh and mold-free.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-sand/40 shadow-xs">
                <h4 className="font-serif font-bold text-walnut text-base mb-1.5">
                  Hygienic & Wipe-Clean
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  The smooth surface repels soap scum and water droplets. Simple wipe-down with a damp cloth keeps the vibrant colors looking brand new for years.
                </p>
              </div>
            </div>

            {/* Model Highlight Notice */}
            <div className="p-4 rounded-2xl bg-sand/20 border border-sand/40 text-xs text-charcoal flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <strong className="text-walnut font-semibold block mb-0.5">
                  Featured Catalogue Models in Stock
                </strong>
                <span>
                  Over 19+ designer models and custom workshop fabrications available for precision measurement including: <strong>SA-531</strong> (Workshop Shutter), <strong>RR-219</strong> (Waterfall), <strong>SA-661</strong> (Bamboo Peonies), <strong>SA-532</strong> (Magnolia), <strong>SA-412</strong> (Roses), <strong>SA-721</strong> (Dolphins), <strong>RR-289</strong> (Slate Brick), <strong>SA-884</strong> (Blue Leaves), <strong>RR-211</strong> (Zen Palm), <strong>RR-300</strong> (Emerald Arch), <strong>SA-08</strong> (Macaws), <strong>RR-232</strong> (Teddy Bear), and <strong>SA-1130</strong> (Poinsettia).
                </span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-walnut text-ivory text-xs font-semibold hover:bg-walnut-600 transition-colors whitespace-nowrap self-start sm:self-center"
              >
                <MessageSquare className="w-3.5 h-3.5 text-gold" />
                <span>Enquire Model Designs</span>
              </a>
            </div>
          </div>

          {/* Picture Door Gallery */}
          <div>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-walnut font-semibold block mb-1">
                  Picture PVC Door Designs
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal">
                  Available Picture PVC Door Models
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
                  Click any door model to view high-resolution zoom, detailed descriptions, and design codes.
                </p>
              </div>
            </div>

            <GalleryGrid projects={pictureDoors} categoryTitle="Picture PVC Doors" />
          </div>
        </div>

        {/* Direct Consultation Callout */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-sand/40 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-walnut font-semibold">
              Measurement & Frame Fitting
            </span>
            <h3 className="text-xl xs:text-2xl font-serif font-bold text-charcoal">
              Order Custom-Fitted Picture PVC Doors
            </h3>
            <p className="text-xs xs:text-sm text-charcoal-muted leading-relaxed">
              Proprietor <strong>{BRAND_CONFIG.ownerName}</strong> conducts on-site measurement verifications to ensure millimeter-accurate frame installation, secure latch fittings, and clean edge alignment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${BRAND_CONFIG.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-xl bg-walnut text-ivory text-sm font-semibold hover:bg-walnut-600 active:scale-[0.99] transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Call +91 {BRAND_CONFIG.contact.phone}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-xl bg-ivory border border-sand hover:border-walnut text-charcoal text-sm font-semibold hover:bg-sand/20 active:scale-[0.99] transition-all shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-walnut" />
              <span>WhatsApp Design Enquiry</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

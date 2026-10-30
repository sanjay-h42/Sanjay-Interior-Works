import React, { useState } from 'react';
import { MessageSquare, Copy, Check, AlertCircle, Sparkles } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brand';
import { QuotationFormData } from '../types';

interface QuotationFormProps {
  defaultService?: string;
  defaultCupboardMaterial?: string;
  className?: string;
}

export const QuotationForm: React.FC<QuotationFormProps> = ({
  defaultService = '',
  defaultCupboardMaterial = '',
  className = '',
}) => {
  const [formData, setFormData] = useState<QuotationFormData>({
    fullName: '',
    phoneNumber: '',
    service: defaultService,
    cupboardMaterial: defaultCupboardMaterial,
    dimensions: '',
    projectLocation: '',
    budgetRange: '',
    additionalNotes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const isCupboardSelected =
    formData.service.toLowerCase().includes('cupboard') ||
    formData.service === 'Cupboard Design & Installation' ||
    Boolean(formData.cupboardMaterial);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your phone number.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number (8-15 digits).';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    if (isCupboardSelected && !formData.cupboardMaterial) {
      newErrors.cupboardMaterial = 'Please select a cupboard material preference.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructEnquiryMessage = (): string => {
    let msg = `*NEW INTERIOR ENQUIRY — SANJAY INTERIOR WORKS*\n`;
    msg += `--------------------------------------\n`;
    msg += `• *Client Name:* ${formData.fullName.trim()}\n`;
    msg += `• *Phone Number:* ${formData.phoneNumber.trim()}\n`;
    msg += `• *Service Required:* ${formData.service}\n`;

    if (isCupboardSelected && formData.cupboardMaterial) {
      msg += `• *Cupboard Material:* ${formData.cupboardMaterial}\n`;
    }

    if (formData.dimensions?.trim()) {
      msg += `• *Approx Dimensions:* ${formData.dimensions.trim()}\n`;
    }

    if (formData.projectLocation?.trim()) {
      msg += `• *Project Location:* ${formData.projectLocation.trim()}\n`;
    }

    if (formData.budgetRange) {
      msg += `• *Estimated Budget:* ${formData.budgetRange}\n`;
    }

    if (formData.additionalNotes?.trim()) {
      msg += `• *Additional Notes:* ${formData.additionalNotes.trim()}\n`;
    }

    msg += `--------------------------------------\n`;
    msg += `Enquiry generated via website at ${new Date().toLocaleDateString()}.\n`;
    msg += `Attention: ${BRAND_CONFIG.ownerName}`;

    return msg;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = constructEnquiryMessage();
    const url = getWhatsAppUrl(message);
    setActionNotice('Launching WhatsApp with your prefilled enquiry details...');
    window.open(url, '_blank');
  };

  const handleCopyMessage = () => {
    if (!validate()) return;

    const message = constructEnquiryMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setActionNotice('Enquiry message copied to clipboard! You can paste it into WhatsApp or message.');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      id="quote-form-section"
      className={`bg-white rounded-3xl p-6 sm:p-10 border border-sand/50 shadow-medium ${className}`}
    >
      <div className="max-w-2xl mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/20 border border-sand/40 text-walnut text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>Direct Quotation Request</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-walnut mb-2">
          Request an Estimate
        </h3>
        <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
          Provide your project requirements below to discuss directly with proprietor <strong>{BRAND_CONFIG.ownerName}</strong> via WhatsApp or phone consultation at <span className="text-walnut font-semibold">{BRAND_CONFIG.contact.phone}</span>.
        </p>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
              Your Name <span className="text-walnut">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="e.g. Anand Kumar"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: '' });
              }}
              className={`w-full px-4 py-3.5 rounded-xl border bg-ivory/40 text-charcoal placeholder-charcoal-light/60 transition-colors focus:bg-white focus:outline-none focus:ring-2 ${
                errors.fullName ? 'border-red-400 focus:ring-red-300' : 'border-sand focus:ring-gold'
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
              Phone Number <span className="text-walnut">*</span>
            </label>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="e.g. +91 98765 43210"
              value={formData.phoneNumber}
              onChange={(e) => {
                setFormData({ ...formData, phoneNumber: e.target.value });
                if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
              }}
              className={`w-full px-4 py-3.5 rounded-xl border bg-ivory/40 text-charcoal placeholder-charcoal-light/60 transition-colors focus:bg-white focus:outline-none focus:ring-2 ${
                errors.phoneNumber ? 'border-red-400 focus:ring-red-300' : 'border-sand focus:ring-gold'
              }`}
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.phoneNumber}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Service Selection */}
          <div>
            <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
              Service Needed <span className="text-walnut">*</span>
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => {
                setFormData({ ...formData, service: e.target.value });
                if (errors.service) setErrors({ ...errors, service: '' });
              }}
              className={`w-full px-4 py-3.5 rounded-xl border bg-ivory/40 text-charcoal transition-colors focus:bg-white focus:outline-none focus:ring-2 ${
                errors.service ? 'border-red-400 focus:ring-red-300' : 'border-sand focus:ring-gold'
              }`}
            >
              <option value="">Select a Service</option>
              <option value="PVC Doors">PVC Doors</option>
              <option value="PVC Interior Works">PVC Interior Works</option>
              <option value="Cupboard Design & Installation">Cupboard Design & Installation</option>
              <option value="Aluminium Works">Aluminium Works</option>
              <option value="WPVC Doors">WPVC Doors</option>
              <option value="Netlon Mesh Work">Netlon Mesh Work</option>
              <option value="Multiple / Full Interior">Multiple Services / Full Interior</option>
            </select>
            {errors.service && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.service}
              </p>
            )}
          </div>

          {/* Cupboard Material (Conditional) */}
          <div>
            <label htmlFor="cupboardMaterial" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
              Cupboard Material {isCupboardSelected ? <span className="text-walnut">*</span> : <span className="text-charcoal-light font-normal text-xs">(If applicable)</span>}
            </label>
            <select
              id="cupboardMaterial"
              value={formData.cupboardMaterial}
              disabled={!isCupboardSelected && formData.service !== ''}
              onChange={(e) => {
                setFormData({ ...formData, cupboardMaterial: e.target.value });
                if (errors.cupboardMaterial) setErrors({ ...errors, cupboardMaterial: '' });
              }}
              className={`w-full px-4 py-3.5 rounded-xl border bg-ivory/40 text-charcoal transition-colors focus:bg-white focus:outline-none focus:ring-2 ${
                errors.cupboardMaterial ? 'border-red-400 focus:ring-red-300' : 'border-sand focus:ring-gold'
              } ${!isCupboardSelected && formData.service !== '' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <option value="">Select Material Type</option>
              <option value="Cherry Cupboard Works">Cherry Cupboard Works</option>
              <option value="Teak Wood Cupboard Works">Teak Wood Cupboard Works</option>
              <option value="UPVC Cupboard Works">UPVC Cupboard Works</option>
              <option value="Not Sure - Need Guidance">Need Guidance / Recommendations</option>
            </select>
            {errors.cupboardMaterial && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.cupboardMaterial}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Approximate Dimensions */}
          <div>
            <label htmlFor="dimensions" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
              Dimensions <span className="text-charcoal-light font-normal text-xs">(Optional)</span>
            </label>
            <input
              id="dimensions"
              type="text"
              placeholder="e.g. 7ft x 4ft, or 2 doors"
              value={formData.dimensions}
              onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-sand bg-ivory/40 text-charcoal placeholder-charcoal-light/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          {/* Project Location */}
          <div>
            <label htmlFor="projectLocation" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
              Project Area <span className="text-charcoal-light font-normal text-xs">(Optional)</span>
            </label>
            <input
              id="projectLocation"
              type="text"
              placeholder="e.g. Anna Nagar, Madurai"
              value={formData.projectLocation}
              onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-sand bg-ivory/40 text-charcoal placeholder-charcoal-light/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          {/* Budget Range */}
          <div>
            <label htmlFor="budgetRange" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
              Estimated Budget <span className="text-charcoal-light font-normal text-xs">(Optional)</span>
            </label>
            <select
              id="budgetRange"
              value={formData.budgetRange}
              onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-sand bg-ivory/40 text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="">Flexible / To Be Discussed</option>
              <option value="Under ₹25,000">Under ₹25,000</option>
              <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
              <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
              <option value="₹1,00,000 – ₹2,50,000">₹1,00,000 – ₹2,50,000</option>
              <option value="₹2,50,000+">₹2,50,000+</option>
            </select>
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label htmlFor="additionalNotes" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Project Notes / Specific Details <span className="text-charcoal-light font-normal text-xs">(Optional)</span>
          </label>
          <textarea
            id="additionalNotes"
            rows={3}
            placeholder="Tell us about your room, color preferences, timeline, or specific questions..."
            value={formData.additionalNotes}
            onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-sand bg-ivory/40 text-charcoal placeholder-charcoal-light/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>

        {/* Notice Banner */}
        {actionNotice && (
          <div className="p-4 rounded-xl bg-sand/30 border border-sand text-xs sm:text-sm text-charcoal flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-walnut flex-shrink-0" />
            <span>{actionNotice}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            type="button"
            onClick={handleWhatsAppSubmit}
            className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-walnut text-ivory font-semibold hover:bg-walnut-600 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 shadow-md shadow-walnut/10"
          >
            <MessageSquare className="w-5 h-5 text-gold" />
            <span>Send via WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={handleCopyMessage}
            className="w-full sm:w-auto py-4 px-6 rounded-xl border border-sand bg-ivory hover:bg-white text-charcoal font-medium active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            title="Copy preformatted enquiry to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-green-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-walnut" />
                <span>Copy Text</span>
              </>
            )}
          </button>
        </div>

        {/* Privacy & No-Backend Guarantee */}
        <p className="text-center text-xs text-charcoal-light">
          Client-side privacy: Your details are compiled locally on your device and sent directly via your chosen app.
          No personal data is saved on external servers.
        </p>
      </form>
    </div>
  );
};

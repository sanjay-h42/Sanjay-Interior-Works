import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { BRAND_CONFIG } from '../config/brand';
import { ContactSection } from '../components/ContactSection';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      <PageHeader
        breadcrumbs={[{ label: 'Contact Us' }]}
        badge="Direct Consultation"
        title="Contact Sanjay Interior Works"
        subtitle={BRAND_CONFIG.mainSlogan}
        description={`Reach out directly to proprietor ${BRAND_CONFIG.ownerName} via phone call or WhatsApp to discuss your interior requirements, get material guidance, or schedule on-site measurements.`}
      />

      <ContactSection />
    </div>
  );
};

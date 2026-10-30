export type WorkCategory =
  | 'all'
  | 'pvc-doors'
  | 'picture-pvc-doors'
  | 'wpvc-doors'
  | 'pvc-interiors'
  | 'cupboards-cherry'
  | 'cupboards-teak'
  | 'cupboards-upvc'
  | 'cupboards-general'
  | 'aluminium'
  | 'netlon';

export interface GalleryProject {
  id: string;
  title: string;
  category: WorkCategory;
  categoryName: string;
  subCategory?: string;
  imagePath: string;
  altText: string;
  description?: string;
  date?: string;
  location?: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  exploreRoute: string;
  categoryKey?: WorkCategory;
  features: string[];
}

export interface CupboardCategoryItem {
  id: string;
  title: string;
  slug: string;
  route: string;
  workCategory: WorkCategory;
  shortDesc: string;
  fullDesc: string;
  characteristics: string[];
  recommendedFor: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'services' | 'cupboards' | 'process' | 'quotes';
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface QuotationFormData {
  fullName: string;
  phoneNumber: string;
  service: string;
  cupboardMaterial?: string;
  dimensions?: string;
  projectLocation?: string;
  budgetRange?: string;
  additionalNotes?: string;
}

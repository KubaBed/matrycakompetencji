// White-label ready branding configuration
// Change these values to customize for different clients

export const branding = {
  // Company info
  companyName: '',
  appName: 'Competency Matrix',
  tagline: 'Odkryj swoją ścieżkę rozwoju',
  
  // Logo (can be replaced with company logo)
  logoUrl: null, // Use null for text-based logo, or provide URL/import
  showLogo: false, // Set to true to show logo icon
  
  // Contact
  supportEmail: '',
  websiteUrl: '',
  
  // Colors are defined in index.css - this is for reference
  colors: {
    primary: '#E31E4A', // Appchance Red/Magenta
    secondary: '#F5F5F7', // Light gray
    accent: '#1A1A2E', // Dark navy
  },
  
  // Features toggles
  features: {
    anonymousMode: true,
    loginEnabled: true,
    pdfExport: true,
    hrDashboard: true,
  },
};

export type BrandingConfig = typeof branding;

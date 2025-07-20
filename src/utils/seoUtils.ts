// SEO utility functions for SUNAME website

export const generatePageTitle = (pageTitle: string, includeArtist: boolean = true): string => {
  if (includeArtist && !pageTitle.includes('SUNAME')) {
    return `${pageTitle} | SUNAME`;
  }
  return pageTitle;
};

export const generateMetaDescription = (description: string, maxLength: number = 160): string => {
  if (description.length <= maxLength) {
    return description;
  }
  
  // Truncate at the last complete word before the limit
  const truncated = description.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
};

export const generateKeywords = (baseKeywords: string[], pageSpecificKeywords: string[] = []): string => {
  const defaultKeywords = [
    'SUNAME',
    'electronic music',
    'DJ',
    'tech house',
    'melodic techno',
    'techno',
    'Florida DJ',
    'electronic dance music',
    'EDM',
    'music producer'
  ];
  
  const allKeywords = [...defaultKeywords, ...baseKeywords, ...pageSpecificKeywords];
  const uniqueKeywords = [...new Set(allKeywords)];
  
  return uniqueKeywords.join(', ');
};

export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://sunamemusic.com';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

export const generateImageUrl = (imagePath: string): string => {
  const baseUrl = 'https://sunamemusic.com';
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${baseUrl}${cleanPath}`;
};

export const validateMetaData = (title: string, description: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  // Title validation
  if (title.length < 30) {
    errors.push('Title should be at least 30 characters long');
  }
  if (title.length > 60) {
    errors.push('Title should not exceed 60 characters');
  }
  
  // Description validation
  if (description.length < 120) {
    errors.push('Description should be at least 120 characters long');
  }
  if (description.length > 160) {
    errors.push('Description should not exceed 160 characters');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

export const generateFAQStructuredData = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
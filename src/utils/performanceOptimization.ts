// Performance optimization utilities for SUNAME music website

// Image optimization and lazy loading
export const optimizeImage = (src: string, options: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
} = {}) => {
  const { width, height, quality = 80, format = 'webp' } = options;
  
  // For production, you would integrate with a service like Cloudinary or ImageKit
  // This is a placeholder for the optimization logic
  let optimizedSrc = src;
  
  // Add query parameters for optimization services
  const params = new URLSearchParams();
  if (width) params.append('w', width.toString());
  if (height) params.append('h', height.toString());
  params.append('q', quality.toString());
  params.append('f', format);
  
  // For now, return original src with optimization params as comment
  return {
    src: optimizedSrc,
    srcSet: generateSrcSet(src, width),
    sizes: generateSizes()
  };
};

// Generate responsive srcSet for images
const generateSrcSet = (src: string, baseWidth?: number): string => {
  if (!baseWidth) return '';
  
  const widths = [320, 640, 768, 1024, 1280, 1536];
  return widths
    .filter(w => w <= baseWidth * 2) // Don't upscale beyond 2x
    .map(w => `${src}?w=${w} ${w}w`)
    .join(', ');
};

// Generate sizes attribute for responsive images
const generateSizes = (): string => {
  return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/images/artist_main.jpg',
    '/logo-light.png',
    '/logo-dark.png'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Lazy load non-critical resources
export const lazyLoadResource = (src: string, type: 'image' | 'script' | 'style') => {
  return new Promise((resolve, reject) => {
    let element: HTMLImageElement | HTMLScriptElement | HTMLLinkElement;
    
    switch (type) {
      case 'image':
        element = new Image();
        (element as HTMLImageElement).src = src;
        break;
      case 'script':
        element = document.createElement('script');
        (element as HTMLScriptElement).src = src;
        document.head.appendChild(element);
        break;
      case 'style':
        element = document.createElement('link');
        (element as HTMLLinkElement).rel = 'stylesheet';
        (element as HTMLLinkElement).href = src;
        document.head.appendChild(element);
        break;
    }
    
    element.onload = () => resolve(element);
    element.onerror = () => reject(new Error(`Failed to load ${type}: ${src}`));
  });
};

// Core Web Vitals monitoring
export const measureCoreWebVitals = () => {
  // Largest Contentful Paint (LCP)
  const measureLCP = () => {
    return new Promise(resolve => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        resolve(lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    });
  };

  // First Input Delay (FID)
  const measureFID = () => {
    return new Promise(resolve => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          resolve((entry as any).processingStart - entry.startTime);
        });
      }).observe({ entryTypes: ['first-input'] });
    });
  };

  // Cumulative Layout Shift (CLS)
  const measureCLS = () => {
    let clsValue = 0;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
    }).observe({ entryTypes: ['layout-shift'] });
    
    return () => clsValue;
  };

  return {
    measureLCP,
    measureFID,
    measureCLS
  };
};

// Bundle size optimization
export const analyzeBundleSize = () => {
  const scripts = Array.from(document.querySelectorAll('script[src]'));
  const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
  
  const analysis = {
    scripts: scripts.map(script => ({
      src: (script as HTMLScriptElement).src,
      async: (script as HTMLScriptElement).async,
      defer: (script as HTMLScriptElement).defer
    })),
    styles: styles.map(style => ({
      href: (style as HTMLLinkElement).href,
      media: (style as HTMLLinkElement).media
    }))
  };
  
  console.log('Bundle Analysis:', analysis);
  return analysis;
};

// Performance budget checker
export const checkPerformanceBudget = async () => {
  const budget = {
    maxLCP: 2500, // 2.5 seconds
    maxFID: 100,  // 100 milliseconds
    maxCLS: 0.1,  // 0.1 layout shift score
    maxBundleSize: 500000 // 500KB
  };
  
  const { measureLCP, measureFID, measureCLS } = measureCoreWebVitals();
  
  const results = {
    lcp: await measureLCP(),
    fid: await measureFID(),
    cls: measureCLS()(),
    bundleSize: analyzeBundleSize()
  };
  
  const violations = [];
  
  if (results.lcp > budget.maxLCP) {
    violations.push(`LCP exceeds budget: ${results.lcp}ms > ${budget.maxLCP}ms`);
  }
  
  if (results.fid > budget.maxFID) {
    violations.push(`FID exceeds budget: ${results.fid}ms > ${budget.maxFID}ms`);
  }
  
  if (results.cls > budget.maxCLS) {
    violations.push(`CLS exceeds budget: ${results.cls} > ${budget.maxCLS}`);
  }
  
  return {
    results,
    violations,
    passed: violations.length === 0
  };
};
import React, { Suspense, lazy } from 'react';

// Lazy load heavy components
const LazyAudioVisualizer = lazy(() => import('./AudioVisualizer'));
const LazyParticleSystem = lazy(() => import('./ParticleSystem'));
const LazyVinylRecord = lazy(() => import('./VinylRecord'));

// Performance-optimized component wrapper
interface PerformanceWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: number;
}

export const PerformanceWrapper: React.FC<PerformanceWrapperProps> = ({
  children,
  fallback = <div className="animate-pulse bg-gray-200 rounded h-20 w-full" />,
  threshold = 0.1
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

// Optimized Audio Visualizer
export const OptimizedAudioVisualizer: React.FC<any> = (props) => (
  <PerformanceWrapper fallback={<div className="h-16 bg-gray-200 rounded animate-pulse" />}>
    <LazyAudioVisualizer {...props} />
  </PerformanceWrapper>
);

// Optimized Particle System
export const OptimizedParticleSystem: React.FC<any> = (props) => (
  <PerformanceWrapper fallback={null}>
    <LazyParticleSystem {...props} />
  </PerformanceWrapper>
);

// Optimized Vinyl Record
export const OptimizedVinylRecord: React.FC<any> = (props) => (
  <PerformanceWrapper fallback={<div className="w-64 h-64 bg-gray-200 rounded-full animate-pulse" />}>
    <LazyVinylRecord {...props} />
  </PerformanceWrapper>
);

// Image preloader utility
export const preloadImages = (imageUrls: string[]): Promise<void[]> => {
  const promises = imageUrls.map(url => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      img.src = url;
    });
  });
  
  return Promise.all(promises);
};

// Critical CSS inliner (for above-the-fold content)
export const inlineCriticalCSS = () => {
  const criticalCSS = `
    .hero-section { 
      min-height: 100vh; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
    }
    .loading-spinner { 
      animation: spin 1s linear infinite; 
    }
    @keyframes spin { 
      from { transform: rotate(0deg); } 
      to { transform: rotate(360deg); } 
    }
  `;
  
  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);
};

// Resource hints for better performance
export const addResourceHints = () => {
  // Preconnect to external domains
  const preconnectDomains = [
    'https://images.pexels.com',
    'https://soundcloud.com',
    'https://i1.sndcdn.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];
  
  preconnectDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    document.head.appendChild(link);
  });
  
  // DNS prefetch for social media domains
  const dnsPrefetchDomains = [
    'https://www.instagram.com',
    'https://www.tiktok.com',
    'https://x.com',
    'https://www.youtube.com',
    'https://open.spotify.com',
    'https://music.apple.com'
  ];
  
  dnsPrefetchDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
};
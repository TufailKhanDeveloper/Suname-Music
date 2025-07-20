import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'music.song' | 'music.album' | 'profile';
  structuredData?: object;
  noIndex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = "SUNAME, electronic music, DJ, tech house, melodic techno, techno, Florida DJ, electronic dance music, EDM, live sets, music producer",
  image = "https://sunamemusic.com/images/artist_main.jpg",
  url = "https://sunamemusic.com",
  type = "website",
  structuredData,
  noIndex = false
}) => {
  const fullTitle = title.includes('SUNAME') ? title : `${title} | SUNAME`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="SUNAME" />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Language Declaration */}
      <html lang="en" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="SUNAME - Electronic Music Artist and DJ" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="SUNAME Music" />
      <meta property="og:locale" content="en_US" />
      
      {/* Music-specific Open Graph */}
      {type.startsWith('music') && (
        <>
          <meta property="music:musician" content="https://sunamemusic.com" />
          <meta property="music:genre" content="Electronic" />
          <meta property="music:genre" content="Tech House" />
          <meta property="music:genre" content="Melodic Techno" />
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sunamemusic" />
      <meta name="twitter:creator" content="@sunamemusic" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="SUNAME - Electronic Music Artist and DJ" />
      
      {/* Music Platform Meta Tags */}
      <meta property="music:song" content="https://soundcloud.com/sunamemusic" />
      <meta property="music:album" content="https://soundcloud.com/sunamemusic" />
      
      {/* Additional Meta Tags for Music Industry */}
      <meta name="music-genre" content="Electronic, Tech House, Melodic Techno, Techno" />
      <meta name="artist-location" content="Florida, USA" />
      <meta name="booking-email" content="sunamebookings@gmail.com" />
      
      {/* Accessibility and Performance */}
      <meta name="theme-color" content="#8B5CF6" />
      <meta name="color-scheme" content="light dark" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
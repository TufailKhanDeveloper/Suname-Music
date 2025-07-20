export const artistStructuredData = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "name": "SUNAME",
  "alternateName": "Isaiah Loreihe",
  "description": "SUNAME is an electronic music artist and DJ specializing in Tech House, Melodic Techno, and Techno. Known for the SUNAME WAVE movement - bringing light into dark places through electronic dance music.",
  "genre": ["Electronic", "Tech House", "Melodic Techno", "Techno", "Electronic Dance Music"],
  "foundingLocation": {
    "@type": "Place",
    "name": "Florida",
    "addressCountry": "US"
  },
  "foundingDate": "2020",
  "url": "https://sunamemusic.com",
  "image": [
    "https://sunamemusic.com/images/artist_main.jpg",
    "https://sunamemusic.com/images/artist_beachball.jpg",
    "https://sunamemusic.com/images/artist_orange.jpg"
  ],
  "logo": "https://sunamemusic.com/logo-light.png",
  "sameAs": [
    "https://www.instagram.com/sunamemusic/",
    "https://www.tiktok.com/@sunamemusic",
    "https://soundcloud.com/sunamemusic",
    "https://x.com/sunamemusic",
    "https://open.spotify.com/artist/1iSs6VT8Pi1pQ85ffnrLlZ",
    "https://music.apple.com/us/artist/suname/1755948288",
    "https://www.youtube.com/@sunamemusic"
  ],
  "member": {
    "@type": "Person",
    "name": "Isaiah Loreihe",
    "alternateName": "SUNAME",
    "jobTitle": "DJ, Music Producer, Electronic Music Artist",
    "birthPlace": {
      "@type": "Place",
      "name": "Florida",
      "addressCountry": "US"
    }
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "booking",
      "email": "sunamebookings@gmail.com",
      "description": "Booking inquiries for live performances and events"
    },
    {
      "@type": "ContactPoint",
      "contactType": "management",
      "email": "sunamemusicmgmt@gmail.com",
      "description": "Management and general inquiries"
    }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Live DJ Performance",
        "description": "Professional DJ sets featuring Tech House, Melodic Techno, and Techno"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Music Production",
        "description": "Original electronic music production and remixes"
      }
    }
  ],
  "award": "Rising Electronic Music Artist",
  "knowsAbout": ["Electronic Music Production", "DJ Performance", "Tech House", "Melodic Techno", "Techno", "Live Mixing"],
  "slogan": "Within every dark realm, there is light – SUNAME"
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SUNAME Music",
  "alternateName": "SUNAME Official Website",
  "url": "https://sunamemusic.com",
  "description": "Official website of SUNAME - Electronic music artist, DJ, and producer specializing in Tech House, Melodic Techno, and Techno.",
  "publisher": {
    "@type": "MusicGroup",
    "name": "SUNAME",
    "url": "https://sunamemusic.com"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://sunamemusic.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "mainEntity": {
    "@type": "MusicGroup",
    "name": "SUNAME"
  }
};

export const musicEventStructuredData = {
  "@context": "https://schema.org",
  "@type": "MusicEvent",
  "name": "SUNAME Live Performance",
  "description": "Experience the SUNAME WAVE - electronic music performance featuring Tech House, Melodic Techno, and Techno",
  "performer": {
    "@type": "MusicGroup",
    "name": "SUNAME",
    "url": "https://sunamemusic.com"
  },
  "organizer": {
    "@type": "Organization",
    "name": "SUNAME Global Entertainment & Production LLC",
    "url": "https://sunamemusic.com"
  },
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "price": "Contact for pricing",
    "priceCurrency": "USD",
    "validFrom": new Date().toISOString(),
    "url": "https://sunamemusic.com/bookings"
  }
};
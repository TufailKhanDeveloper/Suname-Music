// Image Alt Text Guidelines for SUNAME Music Website
// This file provides standardized alt text for all images to improve SEO and accessibility

export const imageAltTexts = {
  // Artist Photos
  artistMain: "SUNAME - Electronic music artist and DJ performing live, wearing headphones in professional studio setting",
  artistBeachball: "SUNAME artist portrait with beachball, showcasing the vibrant Florida electronic music scene aesthetic",
  artistOrange: "SUNAME full body portrait in orange lighting, representing the energetic WAVE movement brand",
  
  // Dark Mode Photos
  darkPhoto1: "SUNAME in atmospheric dark lighting, embodying the mysterious electronic music realm aesthetic",
  darkPhoto2: "SUNAME DJ portrait in moody studio environment, capturing the essence of underground techno culture",
  darkPhoto3: "SUNAME artistic portrait with dramatic shadows, representing the depth of melodic techno music",
  
  // Logos and Branding
  logoLight: "SUNAME official logo in light mode - circular emblem representing the electronic music WAVE movement",
  logoDark: "SUNAME official logo in dark mode - illuminated circular design for the electronic music brand",
  
  // Music and Performance
  vinylRecord: "Spinning vinyl record with SUNAME album artwork, representing authentic DJ culture and electronic music heritage",
  audioVisualizer: "Audio waveform visualization showing SUNAME's electronic music frequencies and beats",
  djEquipment: "Professional DJ mixing console and equipment used by SUNAME for live electronic music performances",
  
  // Venue and Events
  clubPerformance: "SUNAME performing live DJ set at electronic music venue, crowd dancing to tech house beats",
  festivalStage: "SUNAME on main stage at electronic music festival, delivering high-energy techno performance",
  studioSession: "SUNAME in recording studio creating new melodic techno tracks and electronic music productions",
  
  // Press and Media
  pressPhoto: "SUNAME official press photo for media use, professional portrait for electronic music publications",
  interviewSetup: "SUNAME during media interview discussing the WAVE movement and electronic music philosophy",
  behindScenes: "Behind the scenes with SUNAME preparing for live electronic music performance",
  
  // Tour and Events
  tourPoster: "SUNAME tour poster featuring upcoming electronic music events and WAVE movement shows",
  venueExterior: "Electronic music venue exterior where SUNAME performs tech house and melodic techno sets",
  crowdDancing: "Enthusiastic crowd dancing to SUNAME's electronic music at WAVE movement event",
  
  // Social Media and Promotional
  socialPost: "SUNAME social media promotional image featuring latest electronic music release or tour announcement",
  albumCover: "SUNAME album artwork showcasing the visual aesthetic of tech house and melodic techno music",
  musicVideo: "Still frame from SUNAME music video featuring electronic music visuals and WAVE movement imagery"
};

// Function to generate dynamic alt text based on context
export const generateAltText = (
  imageType: keyof typeof imageAltTexts,
  context?: {
    venue?: string;
    event?: string;
    date?: string;
    genre?: string;
  }
): string => {
  let baseAlt = imageAltTexts[imageType];
  
  if (context) {
    if (context.venue) {
      baseAlt += ` at ${context.venue}`;
    }
    if (context.event) {
      baseAlt += ` during ${context.event}`;
    }
    if (context.date) {
      baseAlt += ` on ${context.date}`;
    }
    if (context.genre) {
      baseAlt += ` featuring ${context.genre} music`;
    }
  }
  
  return baseAlt;
};

// SEO-optimized alt text validation
export const validateAltText = (altText: string): {
  isValid: boolean;
  suggestions: string[];
} => {
  const suggestions: string[] = [];
  let isValid = true;
  
  // Length check (recommended 125 characters or less)
  if (altText.length > 125) {
    suggestions.push('Consider shortening alt text to under 125 characters for better screen reader experience');
    isValid = false;
  }
  
  // Minimum length check
  if (altText.length < 10) {
    suggestions.push('Alt text should be more descriptive (at least 10 characters)');
    isValid = false;
  }
  
  // Keyword presence check for music industry
  const musicKeywords = ['SUNAME', 'electronic', 'music', 'DJ', 'techno', 'house'];
  const hasKeyword = musicKeywords.some(keyword => 
    altText.toLowerCase().includes(keyword.toLowerCase())
  );
  
  if (!hasKeyword) {
    suggestions.push('Consider including relevant music industry keywords (SUNAME, electronic music, DJ, etc.)');
  }
  
  // Avoid redundant phrases
  const redundantPhrases = ['image of', 'picture of', 'photo of'];
  const hasRedundant = redundantPhrases.some(phrase => 
    altText.toLowerCase().includes(phrase)
  );
  
  if (hasRedundant) {
    suggestions.push('Remove redundant phrases like "image of" or "picture of"');
  }
  
  return { isValid, suggestions };
};
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import AudioVisualizer from '../components/AudioVisualizer';
import VinylRecord from '../components/VinylRecord';
import SEOHead from '../components/SEOHead';
import { artistStructuredData } from '../data/structuredData';

const biography = {
  mixes: [
    {
      title: "SUNAME @ Elixr Orlando December Set",
      description: "Live recording from Elixr Orlando in December.",
      imageUrl: "https://placehold.co/300x200/FF0000/FFFFFF?text=Elixr+Dec",
      url: "https://soundcloud.com/sunamemusic/elixr-orlando-december-set-1",
      platform: "SoundCloud"
    },
    {
      title: "Elixir Set 20",
      description: "Another set from Elixr.",
      imageUrl: "https://placehold.co/300x200/00FF00/FFFFFF?text=Elixr+Set+20",
      url: "https://soundcloud.com/sunamemusic/elixr-set-20",
      platform: "SoundCloud"
    },
    {
      title: "Elixr Full Set Preview",
      description: "A preview of the full Elixr set.",
      imageUrl: "https://placehold.co/300x200/0000FF/FFFFFF?text=Elixr+Preview",
      url: "https://soundcloud.com/sunamemusic/elixr-full-set-preview",
      platform: "SoundCloud"
    },
    {
      title: "Latest Studio Mix - March 2025",
      description: "A fresh studio mix with new tracks.",
      imageUrl: "https://d21buns5ku92am.cloudfront.net/26628/images/419679-1x1_SoundCloudLogo_cloudmark-f5912b-large-1645807040.jpg",
      url: "https://soundcloud.com/sunamemusic/latest-studio-mix",
      platform: "SoundCloud"
    },
    {
      title: "Spring Vibes - April 2025",
      description: "Melodic house for sunny days.",
      imageUrl: "https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg",
      url: "https://soundcloud.com/sunamemusic/spring-vibes",
      platform: "SoundCloud"
    },
    {
      title: "Summer Groove - May 2025",
      description: "Uplifting beats for summer.",
      imageUrl: "https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg",
      url: "https://soundcloud.com/sunamemusic/summer-groove",
      platform: "SoundCloud"
    }
  ],
  designer: {
    name: "JimmyDesigns",
    twitter: "https://x.com/Jamez_Designs"
  }
};

const filteredMixes = biography.mixes.filter(mix => {
  const title = mix.title.toLowerCase();
  return !(
    title.includes("suname @ elixr orlando december set") ||
    title.includes("elixir set 20") ||
    title.includes("elixr full set preview")
  );
});

const hasFeaturedMix = filteredMixes && filteredMixes.length > 0 &&
                       filteredMixes[0].platform === "SoundCloud"; 
const featuredMixData = hasFeaturedMix ? filteredMixes[0] : null;

const MixesPage = () => {
  const { isDarkMode } = useTheme();
  const [activeMix, setActiveMix] = useState<number | null>(null);
  const [isVinylPlaying, setIsVinylPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-12 px-4"
    >
      <SEOHead
        title="SUNAME Live Mixes - DJ Sets & Electronic Music Mixes"
        description="Listen to SUNAME's live DJ mixes and electronic music sets. Experience Tech House, Melodic Techno, and Techno mixes recorded at venues like Elixr Orlando and studio sessions."
        keywords="SUNAME live mixes, DJ sets, electronic music mixes, tech house mixes, melodic techno sets, techno mixes, Elixr Orlando"
        image="https://sunamemusic.com/images/artist_main.jpg"
        url="https://sunamemusic.com/mixes"
        type="music.album"
        structuredData={artistStructuredData}
      />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-500 dark:text-white">
            <span className="text-white dark:text-white">Live Mixes</span>
          </h1>
          <p className="text-lg text-purple-500 dark:text-white">
            <span className="text-white dark:text-white">Experience the journey through sound</span>
          </p>
        </motion.div>

        {hasFeaturedMix && featuredMixData && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`rounded-2xl p-8 mb-12 ${
              isDarkMode
                ? 'bg-gray-900/60 border border-gray-800'
                : 'bg-white/80 border border-gray-200'
            } backdrop-blur-sm shadow-xl`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <VinylRecord
                  size={300}
                  isPlaying={isVinylPlaying}
                  onTogglePlay={() => setIsVinylPlaying(!isVinylPlaying)}
                  albumCover={featuredMixData.imageUrl || "https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg"}
                />
              </div>

              <div>
                <h2 className={`text-2xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Featured Mix
                </h2>
                <p className={`text-lg mb-6 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {featuredMixData.title}
                </p>

                <AudioVisualizer
                  height={60}
                  barCount={12}
                  color={isDarkMode ? 'rgb(139, 92, 246)' : 'rgb(109, 40, 217)'}
                  className="mb-8"
                />

                <motion.a
                  href={featuredMixData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2 px-8 py-4 rounded-full text-white ${
                    isDarkMode
                      ? 'bg-primary-600 hover:bg-primary-500'
                      : 'bg-primary-500 hover:bg-primary-400'
                  } transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Listen on SoundCloud</span>
                  {}
                  <svg 
                    fill="currentColor" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 97.774 97.774"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <g>
                      <g>
                        <g>
                          <path d="M4.723,49.69c-0.209,0-0.38,0.166-0.407,0.395l-0.961,8.781l0.961,8.586c0.027,0.229,0.198,0.396,0.407,0.396
                            c0.206,0,0.373-0.164,0.406-0.395l1.094-8.588l-1.094-8.781C5.096,49.851,4.929,49.69,4.723,49.69z"/>
                          <path d="M1.108,53.054c-0.203,0-0.365,0.156-0.392,0.383L0,58.866l0.716,5.337c0.026,0.226,0.188,0.382,0.392,0.382
                            c0.198,0,0.359-0.156,0.391-0.38l0.847-5.339l-0.847-5.434C1.467,53.21,1.306,53.054,1.108,53.054z"/>
                          <path d="M8.564,47.968c-0.258,0-0.464,0.202-0.49,0.48L7.161,58.866l0.913,10.037c0.026,0.279,0.232,0.48,0.49,0.48
                            c0.253,0,0.459-0.201,0.489-0.479l1.036-10.039L9.053,48.447C9.023,48.17,8.817,47.968,8.564,47.968z"/>
                          <path d="M12.437,47.6c-0.304,0-0.551,0.242-0.575,0.564L11,58.869l0.862,10.354c0.024,0.32,0.271,0.563,0.575,0.563
                            c0.299,0,0.545-0.243,0.573-0.563l0.979-10.354L13.01,48.162C12.982,47.842,12.736,47.6,12.437,47.6z"/>
                          <polygon points="16.996,69.31 16.996,69.31 16.996,69.312 			"/>
                          <path d="M16.996,48.935c-0.024-0.365-0.308-0.644-0.656-0.644c-0.353,0-0.635,0.278-0.657,0.647l-0.814,9.93l0.814,10.441
                            c0.022,0.367,0.305,0.646,0.657,0.646c0.349,0,0.632-0.279,0.656-0.646l0.923-10.441L16.996,48.935z"/>
                          <path d="M20.276,41.985c-0.396,0-0.72,0.322-0.74,0.733l-0.764,16.155l0.764,10.44c0.021,0.406,0.345,0.729,0.74,0.729
                            c0.392,0,0.716-0.322,0.74-0.732v0.004l0.864-10.44l-0.864-16.156C20.991,42.307,20.667,41.985,20.276,41.985z"/>
                          <path d="M24.181,38.264c-0.443,0-0.804,0.358-0.824,0.815c0,0.002-0.715,19.85-0.715,19.85l0.716,10.375
                            c0.02,0.455,0.38,0.813,0.823,0.813c0.44,0,0.804-0.358,0.823-0.815v0.006l0.809-10.379l-0.809-19.85
                            C24.985,38.622,24.621,38.264,24.181,38.264z"/>
                          <path d="M28.241,36.47c-0.491,0-0.89,0.396-0.907,0.9c0,0.001-0.665,21.508-0.665,21.508l0.665,10.268
                            c0.018,0.5,0.416,0.895,0.907,0.895c0.488,0,0.887-0.395,0.907-0.898v0.006l0.751-10.27L29.148,37.37
                            C29.127,36.866,28.729,36.47,28.241,36.47z"/>
                          <path d="M33.26,36.647c-0.017-0.552-0.452-0.985-0.989-0.985c-0.541,0-0.976,0.434-0.991,0.985l-0.616,22.231l0.617,10.204
                            c0.015,0.546,0.449,0.978,0.99,0.978c0.537,0,0.973-0.432,0.989-0.981l0.694-10.198L33.26,36.647z"/>
                          <polygon points="33.26,69.078 33.26,69.078 33.26,69.083 			"/>
                          <path d="M36.332,36.149c-0.59,0-1.061,0.469-1.075,1.068l-0.566,21.665l0.568,10.105c0.013,0.593,0.483,1.064,1.073,1.064
                            c0.586,0,1.057-0.472,1.073-1.07v0.008l0.638-10.109l-0.638-21.666C37.389,36.616,36.918,36.149,36.332,36.149z"/>
                          <path d="M40.425,36.856c-0.636,0-1.146,0.507-1.158,1.153L38.75,58.882l0.517,10.045c0.012,0.64,0.522,1.145,1.158,1.145
                            c0.635,0,1.144-0.505,1.156-1.152v0.008l0.58-10.043l-0.58-20.875C41.569,37.363,41.06,36.856,40.425,36.856z"/>
                          <path d="M45.235,33.02c-0.196-0.133-0.433-0.211-0.686-0.211c-0.246,0-0.475,0.075-0.668,0.201
                            c-0.339,0.221-0.566,0.602-0.572,1.036l-0.004,0.234l-0.466,24.598c0,0.014,0.47,9.984,0.47,9.984
                            c0,0.016,0.002,0.027,0.003,0.042c0.014,0.278,0.119,0.534,0.288,0.737c0.229,0.273,0.57,0.449,0.949,0.449
                            c0.337,0,0.644-0.139,0.868-0.363c0.225-0.223,0.367-0.531,0.373-0.873l0.052-0.986l0.471-8.984l-0.522-24.839
                            C45.783,33.618,45.563,33.242,45.235,33.02z"/>
                          <polygon points="45.79,68.862 45.79,68.859 45.79,68.863 45.79,68.858 45.79,68.854 45.79,68.854 45.79,68.859 			"/>
                          <path d="M49.329,30.665c-0.196-0.12-0.428-0.19-0.673-0.19c-0.316,0-0.607,0.114-0.836,0.302
                            c-0.294,0.243-0.484,0.609-0.49,1.019l-0.003,0.136l-0.54,26.956l0.276,4.982l0.267,4.85c0.011,0.717,0.604,1.311,1.326,1.311
                            c0.719,0,1.312-0.594,1.322-1.32v0.01v0.002l0.59-9.834l0,0L49.98,31.794C49.973,31.315,49.711,30.896,49.329,30.665z"/>
                          <path d="M85.748,46.063c-1.646,0-3.22,0.334-4.65,0.933c-0.959-10.837-10.047-19.339-21.133-19.339
                            c-2.714,0-5.357,0.534-7.693,1.437c-0.907,0.352-1.147,0.712-1.156,1.414c0,0.001,0,38.168,0,38.168
                            c0.009,0.735,0.579,1.308,1.298,1.379c0.031,0.004,33.336,0,33.336,0c6.642,0,12.025-5.324,12.025-11.967
                            C97.774,51.447,92.391,46.063,85.748,46.063z"/>
                        </g>
                      </g>
                    </g>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}

        {}
        {}

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <div className={`rounded-2xl p-6 ${
            isDarkMode
              ? 'bg-gray-900/60 border border-gray-800'
              : 'bg-white/80 border border-gray-200'
          } backdrop-blur-sm shadow-xl`}
          >
            {}
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/sunamemusic&color=%239100ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </div>
        </motion.div>

        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm font-bold text-purple-500 dark:text-white">
            <span className="text-white dark:text-white">Artwork & Website by</span>{' '}
            <a
              href={biography.designer.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary-500 hover:text-primary-400"
            >
              {biography.designer.name}
            </a>
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default MixesPage;
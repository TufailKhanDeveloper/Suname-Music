import React from 'react';
import { motion } from 'framer-motion';
import { Waves } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { biography } from '../data/biography';
import SEOHead from '../components/SEOHead';
import { musicEventStructuredData } from '../data/structuredData';

const WaveEventsPage = () => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-12 px-4"
    >
      <SEOHead
        title="SUNAME WAVE Events - Electronic Music Movement & Experiences"
        description="Join the SUNAME WAVE movement. Discover upcoming electronic music events and experiences. We are not ravers, we are WAVERS - bringing light into dark places through music."
        keywords="SUNAME WAVE events, electronic music movement, WAVE experiences, electronic music events, SUNAME movement, wavers not ravers"
        image="https://sunamemusic.com/images/artist_main.jpg"
        url="https://sunamemusic.com/wave-events"
        type="website"
        structuredData={musicEventStructuredData}
      />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-white'
          }`}>
            WAVE Events
          </h1>
          <p className={`text-lg ${
            isDarkMode ? 'text-white' : 'text-white'
          }`}>
            Join the movement. We are not ravers, we are WAVERS.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`rounded-2xl p-8 ${
            isDarkMode 
              ? 'bg-gray-900/60 border border-gray-800' 
              : 'bg-white/80 border border-gray-200'
          } backdrop-blur-sm shadow-xl text-center`}
        >
          <Waves 
            size={48} 
            className={`mx-auto mb-6 ${
              isDarkMode ? 'text-primary-400' : 'text-primary-600'
            }`} 
          />
          <h2 className={`text-2xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            To Be Announced
          </h2>
          <p className={`text-lg mb-4 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Stay tuned for upcoming WAVE events and experiences.
          </p>
        </motion.div>

        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
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

export default WaveEventsPage;
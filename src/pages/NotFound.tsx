import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { ArrowLeft, Music2 } from 'lucide-react';
import { biography } from '../data/biography';
import AudioVisualizer from '../components/AudioVisualizer';
import SEOHead from '../components/SEOHead';

const NotFound: React.FC = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.title = 'Page Not Found | SUNAME';
  }, []);

  return (
    <>
      <SEOHead
        title="404 - Page Not Found | SUNAME"
        description="The page you're looking for doesn't exist. Return to SUNAME's official website to explore electronic music, live mixes, tour dates, and more."
        keywords="404 error, page not found, SUNAME website"
        image="https://sunamemusic.com/images/artist_main.jpg"
        url="https://sunamemusic.com/404"
        type="website"
        noIndex={true}
      />
      
      <motion.div
        className="min-h-screen w-full flex flex-col items-center justify-center px-4" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-md w-full text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2 
            }}
            className="mb-6 inline-block"
          >
            <Music2 
              size={80} 
              className={`${isDarkMode ? 'text-primary-400' : 'text-primary-600'}`} 
            />
          </motion.div>

          <motion.h1
            className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-white'}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            404 - Page Not Found
          </motion.h1>

          <motion.p
            className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-white'}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            The frequency you're looking for seems to be out of range.
          </motion.p>

          <AudioVisualizer 
            height={60} 
            barCount={8} 
            className="mb-8"
            color={isDarkMode ? 'rgb(139, 92, 246)' : 'rgb(139, 92, 246)'} 
          />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/">
              <motion.button
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  isDarkMode 
                    ? 'bg-primary-600 hover:bg-primary-500' 
                    : 'bg-primary-500 hover:bg-primary-400'
                } text-white flex items-center justify-center mx-auto`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="mr-2" size={18} />
                Return to Homepage
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-white'}`}>
            Artwork & Website by{' '}
            <a
              href={biography.designer.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-400 underline"
            >
              {biography.designer.name}
            </a>
          </p>
        </motion.section>
      </motion.div>
    </>
  );
};

export default NotFound;
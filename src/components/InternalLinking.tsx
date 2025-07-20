import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home, Music, Calendar, Mail, FileText, Upload, Mic, Waves } from 'lucide-react';

// Breadcrumb navigation component
interface BreadcrumbProps {
  items: Array<{
    label: string;
    href: string;
    current?: boolean;
  }>;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => (
  <nav aria-label="Breadcrumb" className="mb-8">
    <ol className="flex items-center space-x-2 text-sm">
      {items.map((item, index) => (
        <li key={item.href} className="flex items-center">
          {index > 0 && (
            <ChevronRight className="w-4 h-4 text-gray-400 mx-2" aria-hidden="true" />
          )}
          {item.current ? (
            <span 
              className="text-purple-600 dark:text-purple-400 font-medium"
              aria-current="page"
            >
              {item.label}
            </span>
          ) : (
            <Link
              to={item.href}
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

// Site-wide footer navigation
export const FooterNavigation: React.FC = () => {
  const navigationSections = [
    {
      title: 'Music',
      links: [
        { label: 'Latest Tracks', href: '/music', icon: Music },
        { label: 'Live Mixes', href: '/mixes', icon: Waves },
        { label: 'Submit Demo', href: '/demos', icon: Upload }
      ]
    },
    {
      title: 'Events',
      links: [
        { label: 'Tour Dates', href: '/tour', icon: Calendar },
        { label: 'Book SUNAME', href: '/bookings', icon: Mail },
        { label: 'WAVE Events', href: '/wave-events', icon: Waves }
      ]
    },
    {
      title: 'Media',
      links: [
        { label: 'Press Kit', href: '/epk', icon: FileText },
        { label: 'Interviews', href: '/interviews', icon: Mic },
        { label: 'Contact', href: '/contact', icon: Mail }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/logo-dark.png"
                alt="SUNAME logo"
                className="w-8 h-8 mr-2"
              />
              <span className="text-xl font-bold">SUNAME</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Electronic music artist bringing the WAVE movement to the world.
            </p>
            <div className="flex space-x-4">
              {/* Social media links would go here */}
            </div>
          </div>

          {/* Navigation Sections */}
          {navigationSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-purple-400">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="flex items-center text-gray-400 hover:text-white transition-colors group"
                      >
                        <Icon className="w-4 h-4 mr-2 group-hover:text-purple-400" />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 SUNAME. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/contact" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Related content suggestions
interface RelatedContentProps {
  currentPage: string;
  className?: string;
}

export const RelatedContent: React.FC<RelatedContentProps> = ({ 
  currentPage, 
  className = '' 
}) => {
  const getRelatedLinks = (page: string) => {
    const allLinks = {
      '/': [
        { title: 'Latest Music', href: '/music', description: 'Listen to newest tracks' },
        { title: 'Upcoming Shows', href: '/tour', description: 'See tour dates' },
        { title: 'Book SUNAME', href: '/bookings', description: 'Event bookings' }
      ],
      '/music': [
        { title: 'Live Mixes', href: '/mixes', description: 'DJ sets and live recordings' },
        { title: 'Submit Demo', href: '/demos', description: 'Send your tracks' },
        { title: 'Press Kit', href: '/epk', description: 'Media resources' }
      ],
      '/mixes': [
        { title: 'Latest Tracks', href: '/music', description: 'Studio productions' },
        { title: 'Tour Dates', href: '/tour', description: 'Live performances' },
        { title: 'WAVE Events', href: '/wave-events', description: 'Special events' }
      ],
      '/tour': [
        { title: 'Book SUNAME', href: '/bookings', description: 'Event bookings' },
        { title: 'Live Mixes', href: '/mixes', description: 'Performance recordings' },
        { title: 'Contact', href: '/contact', description: 'Get in touch' }
      ],
      '/bookings': [
        { title: 'Press Kit', href: '/epk', description: 'Media and photos' },
        { title: 'Tour Dates', href: '/tour', description: 'Upcoming shows' },
        { title: 'Contact', href: '/contact', description: 'Direct contact' }
      ]
    };

    return allLinks[page as keyof typeof allLinks] || allLinks['/'];
  };

  const relatedLinks = getRelatedLinks(currentPage);

  return (
    <section className={`mt-12 ${className}`} aria-labelledby="related-content">
      <h2 
        id="related-content" 
        className="text-2xl font-bold mb-6 text-purple-500 dark:text-white"
      >
        You might also like
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedLinks.map((link, index) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={link.href}
              className="block p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors group"
            >
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                {link.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {link.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
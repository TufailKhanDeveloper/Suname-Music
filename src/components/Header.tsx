import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react'; 

interface HeaderProps {
  isDarkRealm: boolean;
}

const navItems = [
  { title: 'Home', path: '/' },
  { title: 'Music', path: '/music' },
  { title: 'Live Mixes', path: '/mixes' },
  { title: 'Bookings', path: '/bookings' },
  { title: 'Contact', path: '/contact' },
  { title: 'Send Demos', path: '/demos' },
  { title: 'Tour', path: '/tour' },
  { title: 'Interviews', path: '/interviews' },
  { title: 'EPK', path: '/epk' },
  { title: 'SUNAME WAVE', path: '/wave-events' },
];

const Header: React.FC<HeaderProps> = ({ isDarkRealm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', isDarkRealm ? 'rgba(15, 15, 25, 0.9)' : 'rgba(255, 255, 255, 0.9)']
  );

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{ backgroundColor: headerBackground }}
    >
      <div className="container mx-auto px-4 h-20">
        <div className="flex items-center justify-between h-full">
          {}
          <Link to="/" className="flex items-center group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.img
                src={isDarkRealm ? "/logo-dark.png" : "/logo-light.png"}
                alt="SUNAME"
                className="w-12 h-12 rounded-full object-cover"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <motion.div
              className="ml-3"
              whileHover={{ x: 5 }}
            >
              <motion.h1
                className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                  isDarkRealm
                    ? 'from-white via-primary-400 to-white'
                    : 'from-black via-primary-600 to-black'
                }`}
                style={{
                  backgroundSize: '200% auto',
                }}
                animate={{
                  backgroundPosition: ['0% center', '200% center', '0% center'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                SUNAME
              </motion.h1>
              <motion.p
                className={`text-xs ${
                  isDarkRealm ? 'text-white' : 'text-blac'
                }`}
              >
                GLOBAL ENTERTAINMENT & PRODUCTION LLC
              </motion.p>
            </motion.div>
          </Link>

          {}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group relative"
                >
                  <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ x: 5 }}
                  >
                    {}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <img
                        src={isDarkRealm ? "/logo-dark.png" : "/logo-light.png"}
                        alt="SUNAME Icon"
                        className={`w-5 h-5 rounded-full object-cover transition-transform duration-300 opacity-0 group-hover:opacity-100`}
                      />
                    </motion.div>
                    <motion.span
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isDarkRealm
                          ? isActive ? 'text-primary-400' : 'text-gray-300 hover:text-white'
                          : isActive ? 'text-primary-600' : 'text-gray-700 hover:text-black'
                      }`}
                      whileHover={{ y: -2 }}
                      role="menuitem"
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.title}
                    </motion.span>
                  </motion.div>
                  {}
                  <motion.div
                    className={`absolute -bottom-1 left-0 h-0.5 transform origin-left bg-gray-800`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{
                      duration: 0.2,
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <X className={`transition-colors duration-300 ${
                isDarkRealm ? "text-white hover:text-primary-400" : "text-black hover:text-primary-600"
              }`} />
            ) : (
              <Menu className={`transition-colors duration-300 ${
                isDarkRealm ? "text-white hover:text-primary-400" : "text-black hover:text-primary-600"
              }`} />
            )}
          </motion.button>
        </div>
      </div>

      {}
      <motion.nav
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className={`px-4 py-2 space-y-1 ${
            isDarkRealm ? 'bg-gray-900' : 'bg-white'
          }`}
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
              }
            }
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <motion.div
                key={item.path}
                variants={{
                  open: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 300, damping: 24 }
                  },
                  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
                }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2"
                >
                  <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src={isDarkRealm ? "/logo-dark.png" : "/logo-light.png"}
                      alt="SUNAME Icon"
                      className="w-5 h-5 rounded-full object-cover transition-transform duration-300"
                    />
                    <span
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isDarkRealm
                          ? isActive ? 'text-primary-400' : 'text-white'
                          : isActive ? 'text-primary-600' : 'text-black'
                      }`}
                    >
                      {item.title}
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
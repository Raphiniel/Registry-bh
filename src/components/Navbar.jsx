import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../nav.css'

const Navbar = ({
  scrollToAccommodation,
  scrollToFood,
  scrollToSwimming,
  scrollToConference,
  scrollToBar,
  scrollToViewpoint
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Rooms', action: scrollToAccommodation, id: 'rooms' },
    { name: 'Dining', action: scrollToFood, id: 'dining' },
    { name: 'Pool', action: scrollToSwimming, id: 'pool' },
    { name: 'Events', action: scrollToConference, id: 'events' },
    { name: 'Bar', action: scrollToBar, id: 'lounge' },
    { name: 'Views', action: scrollToViewpoint, id: 'views' }
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="nav-container">
        <motion.div 
          className="logo-container"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img 
            src="/images/BHLOGO.jpg" 
            alt="Baobab Hotel Logo" 
            className="logo-image"
          />
          <span className="logo-text">Baobab Hotel</span>
        </motion.div>
        
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <motion.button
                className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
                onClick={() => {
                  link.action();
                  setActiveLink(link.id);
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                {activeLink === link.id && (
                  <motion.span 
                    className="underline"
                    layoutId="underline"
                    initial={false}
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      duration: 0.5
                    }}
                  />
                )}
              </motion.button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
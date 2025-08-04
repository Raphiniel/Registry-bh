import { useState, useEffect } from 'react';

const Navbar = ({
  scrollToAccommodation,
  scrollToFood,
  scrollToSwimming,
  scrollToConference,
  scrollToBar,
  scrollToViewpoint
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">Baobab Hotel</div>
        <ul className="nav-links">
          <li>
            <button 
              className="nav-link" 
              onClick={scrollToAccommodation}
            >
              Rooms
            </button>
          </li>
          <li>
            <button 
              className="nav-link" 
              onClick={scrollToFood}
            >
              Dining
            </button>
          </li>
          <li>
            <button 
              className="nav-link" 
              onClick={scrollToSwimming}
            >
              Pool
            </button>
          </li>
          <li>
            <button 
              className="nav-link" 
              onClick={scrollToConference}
            >
              Events
            </button>
          </li>
          <li>
            <button 
              className="nav-link" 
              onClick={scrollToBar}
            >
              Lounge
            </button>
          </li>
          <li>
            <button 
              className="nav-link" 
              onClick={scrollToViewpoint}
            >
              Views
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
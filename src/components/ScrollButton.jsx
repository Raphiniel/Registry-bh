import { useState, useEffect } from 'react';

const ScrollButton = () => {
  const [isNearBottom, setIsNearBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show button after scrolling 300px
      setIsVisible(scrollPosition > 300);
      
      // Check if near bottom (within 200px)
      setIsNearBottom(windowHeight + scrollPosition >= documentHeight - 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = () => {
    if (isNearBottom) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <button 
      className={`scroll-btn ${isNearBottom ? 'to-top' : 'to-bottom'}`}
      onClick={scrollTo}
      aria-label={isNearBottom ? 'Scroll to top' : 'Scroll to bottom'}
    >
      {isNearBottom ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
          <span>Top</span>
        </>
      ) : (
        <>
          <span>Explore</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </>
      )}
    </button>
  );
};

export default ScrollButton;
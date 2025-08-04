import { useRef } from 'react';
import Navbar from './components/Navbar';
import ScrollButton from './components/ScrollButton';
import Hero from './sections/Hero';
import Accommodation from './sections/Accommodation';
import Food from './sections/Food';
import Swimming from './sections/Swimming';
import Conference from './sections/Conference';
import Bar from './sections/Bar';
import Viewpoint from './sections/Viewpoint';
import './styles.css';

function App() {
  const accommodationRef = useRef(null);
  const foodRef = useRef(null);
  const swimmingRef = useRef(null);
  const conferenceRef = useRef(null);
  const barRef = useRef(null);
  const viewpointRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navbar 
        scrollToAccommodation={() => scrollTo(accommodationRef)}
        scrollToFood={() => scrollTo(foodRef)}
        scrollToSwimming={() => scrollTo(swimmingRef)}
        scrollToConference={() => scrollTo(conferenceRef)}
        scrollToBar={() => scrollTo(barRef)}
        scrollToViewpoint={() => scrollTo(viewpointRef)}
      />
      
      <Hero scrollToAccommodation={() => scrollTo(accommodationRef)} />
      
      <div ref={accommodationRef}>
        <Accommodation />
      </div>
      
      <div ref={foodRef}>
        <Food />
      </div>
      
      <div ref={swimmingRef}>
        <Swimming />
      </div>
      
      <div ref={conferenceRef}>
        <Conference />
      </div>
      
      <div ref={barRef}>
        <Bar />
      </div>
      
      <div ref={viewpointRef}>
        <Viewpoint />
      </div>

      <ScrollButton />
    </div>
  );
}

export default App;
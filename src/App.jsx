import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsCarousel from './components/ProjectsCarousel';
import AboutMe from './components/AboutMe';
import FeatureAsymmetricGrid from './components/FeatureAsymmetricGrid';
import Footer from './components/Footer';
import StudioCanvas from './components/StudioCanvas';
import { gsap } from 'gsap';
import './App.css';

export default function App() {
  const appRef = useRef(null);

  useEffect(() => {
    // GSAP entrance timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial fade in for app container
    tl.to(appRef.current, { opacity: 1, duration: 0.1 });

    // Navbar slide down
    tl.fromTo('nav', 
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    );

    // Hero element reveals
    tl.fromTo('section:first-of-type > div > div:first-of-type', // rating badge
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.4'
    );

    tl.fromTo('h1', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.4'
    );

    tl.fromTo('section:first-of-type p', 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.5'
    );


    tl.fromTo('section:first-of-type > div > div:last-of-type', // hero buttons
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.6'
    );
  }, []);

  return (
    <div ref={appRef} className="app-container" style={{ opacity: 0, transition: 'opacity 0.2s ease' }}>
      {/* ThreeJS Background Canvas */}
      <StudioCanvas />

      {/* Main UI */}
      <Navbar />

      <main className="main-content">
        <Hero />
        <ProjectsCarousel />
        <AboutMe />
        <FeatureAsymmetricGrid />
      </main>

      <Footer />
    </div>
  );
}

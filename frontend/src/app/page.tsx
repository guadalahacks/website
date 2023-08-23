import React from 'react';
import dynamic from 'next/dynamic';
import NavigationBar from '../components/NavigationBar';
import AboutSection from '@/sections/About';
import Footer from '../components/Footer';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import EventMap from '@/components/EventMap';
import Contact from '@/components/Contact';
config.autoAddCss = false

// Dynamically import LandingPage to be rendered only on the client
const LandingPage = dynamic(() => import('../sections/LandingPage'));

const Page: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <LandingPage />
      <div className="map-contact-container" id='contact'>
        <EventMap />
        <Contact />
      </div>
      <AboutSection />
      <Footer /> 
    </div>
  );
};

export default Page;
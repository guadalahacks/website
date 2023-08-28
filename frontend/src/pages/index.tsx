import React from 'react';
import dynamic from 'next/dynamic';
import AboutSection from '@/sections/About';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import EventMap from '@/components/EventMap';
import Contact from '@/components/Contact';
import App from '@/layouts/App';
import { Partners } from '@/sections/Partners';
config.autoAddCss = false

// Dynamically import LandingPage to be rendered only on the client
const LandingPage = dynamic(() => import('../sections/LandingPage'));

const Page: React.FC = () => {
  return (
    <App>
      
      <LandingPage />
      <div className="map-contact-container" id='contact'>
        <EventMap />
        
        <Contact />
      </div>
      <Partners />
      <AboutSection />
      
    </App>
  );
};

export default Page;
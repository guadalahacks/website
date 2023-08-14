import React from 'react';
import dynamic from 'next/dynamic';
import NavigationBar from '../components/NavigationBar';
import AboutSection from '@/sections/About';

// Dynamically import LandingPage to be rendered only on the client
const LandingPage = dynamic(() => import('../sections/LandingPage'));

const Page: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <LandingPage />
      <AboutSection />
    </div>
  );
};

export default Page;
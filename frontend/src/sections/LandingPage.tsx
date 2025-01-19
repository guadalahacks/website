import React from 'react';
import dynamic from 'next/dynamic';
import './LandingPage.css'; // Import the CSS
import { getLocalizedElement, languageState } from '@/app/locale';
import { Varela_Round } from 'next/font/google'
import Link from 'next/link';

const valeraLight = Varela_Round({weight: "400", subsets: ["latin"]})

// Dynamically import Countdown to be rendered only on the client
const Countdown = dynamic(() => import('../components/Countdown'));

const LandingPage: React.FC = () => {
  const [language, _] = languageState.useState();
  return (
    <div className="gradient-container">

      <div className='logo-container'>
        <img src="./logo-outline.png" alt="logo" className="logo" />
        <span className={'logo-text-landing'+' '+valeraLight.className}>
          {getLocalizedElement("landing_title", language)}
        </span>
      </div>
      
      {/* (Commented divs for post-hackathon) */}

      {/* Countdown */}
      {/* <div className={'countdown-text text-white'+' '+valeraLight.className}>
        {getLocalizedElement("landing_seeYouSoon", language)}
      </div> */}
      <Countdown />

      {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}> */}
      {/* Location */}
        {/* <div className={'text-3xl font-semibold text-white info-text'+' '+valeraLight.className}>
          {getLocalizedElement("landing_thankYou", language)}
        </div> */}

        {/* Date */}

        {/* <div className={'text-3xl font-semibold text-white info-text'+' '+valeraLight.className}>
          {getLocalizedElement("landing_teamsComingSoon", language)}
        </div> */}
      {/* </div> */}
      
      {/* Login button */}

      {/* Register button */}
      <div className={'text-3xl font-semibold text-white info-text'+' '+valeraLight.className}>
        {getLocalizedElement("landing_signUpSoon", language)}
      </div>
      <div className="register-button-container">
        <Link href="/projects" className="register-button">
          {getLocalizedElement("landing_seeProjects", language)}
        </Link>
      </div>
      
      

      {/* Placeholder Squares */}
      
      <div className="placeholder-square one"></div>
      <div className="placeholder-square two"></div>
      <div className="placeholder-square three"></div>
      <div className="placeholder-square four"></div>
      <div className="placeholder-square five"></div>
      
    </div>
  );
};

export default LandingPage;
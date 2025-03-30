import React from 'react';
import dynamic from 'next/dynamic';
import './LandingPage.css'; // Import the CSS
import { getLocalizedElement, languageState } from '@/app/locale';
import { Varela_Round } from 'next/font/google'
import Link from 'next/link';
import Image from 'next/image';
import img_logo_outline from './../../public/logo-outline.png';

const valeraLight = Varela_Round({weight: "400", subsets: ["latin"]})

// Dynamically import Countdown to be rendered only on the client
const Countdown = dynamic(() => import('../components/Countdown'));
const targetDate = new Date('2025-05-17T10:00-06:00'); // Modify this date as needed


const LandingPage: React.FC = () => {
  const [language, _] = languageState.useState();
  return (
    <div className="gradient-container">

      <div className='logo-container'>
        <Image src={img_logo_outline} alt="logo" className="logo" />
        <span className={'logo-text-landing'+' '+valeraLight.className}>
          {getLocalizedElement("landing_title", language)}
        </span>
      </div>
      
      {/* (Commented divs for post-hackathon) */}

      {/* Countdown */}
      {/* <div className={'countdown-text text-white'+' '+valeraLight.className}>
        {getLocalizedElement("landing_seeYouSoon", language)}
      </div> */}
      <Countdown date={targetDate} />

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
      {/* <div className={'text-3xl font-semibold text-white info-text'+' '+valeraLight.className}>
        {getLocalizedElement("landing_signUpSoon", language)}
      </div> */}
      <div className="register-button-container">
        <Link href="https://registro.guadalahacks.com/" className="register-button">
          {getLocalizedElement("landing_register", language)}
        </Link>
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
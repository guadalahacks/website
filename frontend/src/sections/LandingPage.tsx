import React from 'react';
import dynamic from 'next/dynamic';
import './LandingPage.css'; // Import the CSS
import { getLocalizedElement, getLocalizedString, languageState } from '@/app/locale';
import { Varela_Round } from 'next/font/google'
import Link from 'next/link';
import Image from 'next/image';
import img_logo_outline from './../../public/logo-outline.png';

const valeraLight = Varela_Round({weight: "400", subsets: ["latin"]})

// Dynamically import Countdown to be rendered only on the client
const Countdown = dynamic(() => import('../components/Countdown'));

const LandingPage: React.FC = () => {
  const [language, _] = languageState.useState();
  return (
    <div className="gradient-container">
      {/* LOGO AND DATES */}
      <div className='logo-container'>
        <Image src={img_logo_outline} alt="logo" className="logo" />
        <span>
          <span className={'logo-text-landing'+' '+valeraLight.className}>
            {getLocalizedElement("landing_title", language)}
          </span>
          <div className={'dates-text text-white'}>
            {getLocalizedElement("landing_eventDates", language)}
          </div>
        </span>
      </div>
      
      {/* <Countdown /> */}

      {/* PRE-HACK */}
      {/* <div className="register-button-container">
        <Link href="https://registro.guadalahacks.com/" className="register-button">
          {getLocalizedElement("landing_register", language)}
        </Link>
      </div> */}

      {/* DURING HACK */}
      {/* <div className="register-button-container">
        <Link href="https://guadalahacks-2025.devpost.com/" className="register-button">
          {getLocalizedElement("landing_devpost", language)}
        </Link>
      </div> */}


      {/* POST-HACK */}
      <div className={'countdown-text text-white'+' '+valeraLight.className}>
        {getLocalizedElement("landing_seeYouSoon", language)}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="register-button-container">
          <Link href="/projects25" className="register-button">
            {getLocalizedString("landing_projects", language) + "2025"}
          </Link>
        </div>
        <div className="register-button-container">
          <Link href="/projects24" className="register-button">
            {getLocalizedString("landing_projects", language) + "2024"}
          </Link>
        </div>
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
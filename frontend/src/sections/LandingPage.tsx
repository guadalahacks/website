import React from 'react';
import dynamic from 'next/dynamic';
import './LandingPage.css'; // Import the CSS
import { Varela_Round } from 'next/font/google'
import Link from 'next/link';

const valeraLight = Varela_Round({weight: "400", subsets: ["latin"]})

// Dynamically import Countdown to be rendered only on the client
const Countdown = dynamic(() => import('../components/Countdown'));

const LandingPage: React.FC = () => {
  return (
    <div className="gradient-container">

      <div className='logo-container'>
        <img src="./logo-outline.png" alt="logo" className="logo" />
        <span className={'logo-text-landing'+' '+valeraLight.className}>guadala<b>hacks</b></span>
      </div>
      
      {/* Countdown */}
      <div className={'countdown-text text-white'+' '+valeraLight.className}>
        {/* Quedan <Countdown /> */}
        Principios de 2024
      </div>

      {/* Location */}
      <div className={'text-3xl font-semibold text-white info-text'+' '+valeraLight.className}>
          Hackatón estudiantil @ Tecnológico de Monterrey, Campus Guadalajara
      </div>

      {/* Date */}

      <div className={'text-3xl font-semibold text-white'+' '+valeraLight.className}>
          Principios de 2024
      </div>

      {/* Register button */}
      <div className="register-button-container">
        <Link href="/registro" className="register-button">Regístrate</Link>
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
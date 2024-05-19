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
        Hands up!<br/>
        ¡Hacking ha finalizado! 🎉
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Location */}
        <div className={'text-3xl font-semibold text-white info-text tracks'+' '+valeraLight.className}>
          <strong>Tracks:</strong> <br />
          <ul className='tracklist'>
            <li>• Inteligencia Artifical para el Beneficio Social</li>
            <li>&nbsp; &nbsp; &nbsp; - Premio a mejor </li>
            <li>• Emprendimiento Social con Tecnología</li>
            <li>&nbsp; &nbsp; &nbsp; - Premio a mejor</li>
            <li>• Best Overall</li>
            <li>&nbsp; &nbsp; &nbsp; - Premio a los 3 mejores equipos</li>
          </ul>
        </div>

        {/* Date */}

        <div className={'text-3xl font-semibold text-white info-text'+' '+valeraLight.className}>
          A continuación: 
          <br />
          <br />
          Jueceo
          <br/>
          11:00 - 12:00 horas
          <br/>
          <br/>
          
          Ceremonia de Clausura
          <br/>  
          12:00 - 13:00 horas
          <br/>
        </div>
      </div>
      
      {/* Login button */}

      {/* Register button
      <div className="register-button-container">
        <Link href="/registro" className="register-button">Regístrate</Link>
      </div> */}
      
      

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
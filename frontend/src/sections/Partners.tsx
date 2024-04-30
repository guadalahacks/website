import React from 'react';
import './Partners.scss'

import { Varela_Round } from 'next/font/google'
import { height } from '@fortawesome/free-solid-svg-icons/faHeart';
const valeraLight = Varela_Round({weight: "400", subsets: ["latin"]})

export const Partners: React.FC = () => {
    return (
        <div className={"partners-container "+valeraLight.className} id='partners'>
        <h1 className="partners-title">Partners</h1>
        <div className="partners-logos">
            <img src="./tec.png" alt="Tecnológico de Monterrey" className="partner-logo" />
            <img src="./github.png" alt="GitHub" className="partner-logo" />
            <img src="./life.png" alt="LiFE TEC" className="partner-logo" />
            <img src="./emprendimiento_tec.png" alt="Emprendimiento TEC" className="partner-logo" />
            <img src="./eic.png" alt="Escuela de Ingeniería y Ciencias del Tecnológico de Monterrey" className="partner-logo" />
            <img src="./wtm_2.png" alt="Women Techmakers" className="partner-logo"  />
            <img src="./gce.png" alt="GitHub Campus Experts" className="partner-logo" />
            
        </div>
        </div>
    );
    }

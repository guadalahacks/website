import React from 'react';
import './Partners.scss'

import { Varela_Round } from 'next/font/google'
const valeraLight = Varela_Round({weight: "400", subsets: ["latin"]})

export const Partners: React.FC = () => {
    return (
        <div className={"partners-container "+valeraLight.className} id='partners'>
        <h1 className="partners-title">Sponsors</h1>
        <div className="partners-logos">
            <img src="./tec.png" alt="Tecnológico de Monterrey" className="partner-logo" />
            <img src="./github.png" alt="GitHub" className="partner-logo" />
        </div>
        </div>
    );
    }

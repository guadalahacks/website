import React from 'react';
import './Partners.scss';
import { getLocalizedElement, getLocalizedString, languageState } from '@/app/locale';
import { Varela_Round } from 'next/font/google';
import { PartnerLogo } from '../components/PartnerLogo'; // Import the new component

const valeraLight = Varela_Round({ weight: "400", subsets: ["latin"] });

export const Partners: React.FC = () => {
  const [language, _] = languageState.useState();
  return (
    <>
      <div className={"partners-container " + valeraLight.className} id='sponsors'>
        <h1 className="partners-title">
          {getLocalizedElement("sponsors_title", language)}
        </h1>
        <div className="partners-logos">
          <PartnerLogo src="./intel.png" alt="Intel" />
          <PartnerLogo src="./hp.png" alt="HP" />
        </div>
      </div>
      <div className={"partners-container " + valeraLight.className} id='partners'>
        <h1 className="partners-title">
          {getLocalizedElement("partners_title", language)}
        </h1>
        <div className="partners-logos">
          <PartnerLogo src="./tec.png" alt="Tecnológico de Monterrey" />
          <PartnerLogo src="./life.png" alt="LiFE TEC" />
          <PartnerLogo src="./emprendimiento_tec.png" alt={getLocalizedString("partners_emprendimiento_alt", language)} />
          <PartnerLogo src="./eic.png" alt={getLocalizedString("partners_eic_alt", language)} />
        </div>
      </div>
    </>
  );
};
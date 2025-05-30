import React from 'react';
import './Partners.scss';
import { getLocalizedElement, getLocalizedString, languageState } from '@/app/locale';
import { Varela_Round } from 'next/font/google';
import { PartnerLogo } from '../components/PartnerLogo'; // Import the new component
import img_here from './../../public/here.png';
import img_github from './../../public/github.png';
import img_gce from './../../public/gce.png';
import img_life from './../../public/life.png';
import img_emprendimiento_tec from './../../public/emprendimiento_tec.png';
import img_eic from './../../public/eic.png';

const valeraLight = Varela_Round({ weight: "400", subsets: ["latin"] });

export const Partners: React.FC = () => {
  const [language, _] = languageState.useState();
  return (
    <div id='partners'>
      <div className={"partners-container " + valeraLight.className}>
        <h1 className="partners-title">
          {getLocalizedElement("sponsors_title", language)}
        </h1>
        <div className="partners-logos">
          <PartnerLogo src={img_here} alt="HERE Technologies" highlight />
          <PartnerLogo src={img_github} alt="GitHub" link="https://github.com/features/copilot" wording={getLocalizedString("partners_github_wording", language)} />
          <PartnerLogo src={img_gce} alt="GitHub Campus Experts" link="https://education.github.com/benefits?utm_source=2024-04-18-Guadalahacks" wording={getLocalizedString("partners_gce_wording", language)}/>
        </div>
      </div>
      <div className={"partners-container " + valeraLight.className}>
        <h1 className="partners-title">
          {getLocalizedElement("partners_title", language)}
        </h1>
        <div className="partners-logos">
          <PartnerLogo src={img_emprendimiento_tec} alt={getLocalizedString("partners_emprendimiento_alt", language)} />
          <PartnerLogo src={img_life} alt="LiFE TEC" />
          <PartnerLogo src={img_eic} alt={getLocalizedString("partners_eic_alt", language)} />
        </div>
      </div>
    </div>
  );
};
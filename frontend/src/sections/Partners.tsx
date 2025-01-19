import React from 'react';
import './Partners.scss';
import { getLocalizedElement, getLocalizedString, languageState } from '@/app/locale';
import { Varela_Round } from 'next/font/google';
import { PartnerLogo } from '../components/PartnerLogo'; // Import the new component

const valeraLight = Varela_Round({ weight: "400", subsets: ["latin"] });

export const Partners: React.FC = () => {
  const [language, _] = languageState.useState();
  return (
    <div className={"partners-container " + valeraLight.className} id='partners'>
      <h1 className="partners-title">
        {getLocalizedElement("partners_title", language)}
      </h1>
      <div className="partners-logos">
        <PartnerLogo src="./tec.png" alt="Tecnológico de Monterrey" />
        {/* <PartnerLogo src="./github.png" alt="GitHub" link="https://github.com/features/copilot" wording={getLocalizedString("partners_github_wording", language)} /> */}
        <PartnerLogo src="./life.png" alt="LiFE TEC" />
        <PartnerLogo src="./emprendimiento_tec.png" alt={getLocalizedString("partners_emprendimiento_alt", language)} />
        <PartnerLogo src="./eic.png" alt={getLocalizedString("partners_eic_alt", language)} />
        {/* <PartnerLogo src="./wtm_2.png" alt="Women Techmakers" /> */}
        {/* <PartnerLogo src="./gce.png" alt="GitHub Campus Experts" link="https://education.github.com/benefits?utm_source=2024-04-18-Guadalahacks" wording={getLocalizedString("partners_gce_wording", language)}/> */}
        {/* <PartnerLogo src="./blend.png" alt="Blend" link="https://blend.com/company/careers/emerging-talent/" wording={getLocalizedString("partners_blend_wording", language)}/> */}
      </div>
    </div>
  );
};
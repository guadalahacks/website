import React from 'react';
import './About.css';
import { getLocalizedElement, languageState } from '@/app/locale';
import { Varela_Round } from 'next/font/google'
const valeraLight = Varela_Round({weight: "400", subsets: ["latin"]})

const AboutSection: React.FC = () => {
  const [language, setLanguage] = languageState.useState();
  return (
    <div className={"about-container"+" "+valeraLight.className} id='about'>
      <h2 className="about-title">{getLocalizedElement("faq_title", language)}</h2>
      <h3 className="about-subtitle">{getLocalizedElement("faq_q1", language)}</h3>
      <p className="about-content">{getLocalizedElement("faq_q1_answer", language)}</p>
      <h3 className="about-subtitle">{getLocalizedElement("faq_q2", language)}</h3>
      <p className="about-content">{getLocalizedElement("faq_q2_answer", language)}</p>
      <h3 className="about-subtitle">{getLocalizedElement("faq_q3", language)}</h3>
      <p className="about-content">{getLocalizedElement("faq_q3_answer", language)}</p>
      <h3 className="about-subtitle">{getLocalizedElement("faq_q4", language)}</h3>
      <p className="about-content">{getLocalizedElement("faq_q4_answer", language)}</p>
      <h3 className="about-subtitle">{getLocalizedElement("faq_q5", language)}</h3>
      <p className="about-content">{getLocalizedElement("faq_q5_answer", language)}</p>
      <h3 className="about-subtitle">{getLocalizedElement("faq_q6", language)}</h3>
      <p className="about-content">{getLocalizedElement("faq_q6_answer", language)}</p>
      <h3 className="about-subtitle">{getLocalizedElement("faq_more", language)}</h3>
    </div>
  );
};

export default AboutSection;
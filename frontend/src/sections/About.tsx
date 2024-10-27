import React from 'react';
import './About.css';
import { getLocalizedElement } from '@/app/locale';
import { Varela_Round } from 'next/font/google'
const valeraLight = Varela_Round({weight: "400", subsets: ["latin"]})

const AboutSection: React.FC = () => {
  return (
    <div className={"about-container"+" "+valeraLight.className} id='about'>
      <h2 className="about-title">{getLocalizedElement("faq_title")}</h2>
      <h3 className="about-subtitle">{getLocalizedElement("faq_q1")}</h3>
      <p className="about-content">{getLocalizedElement("faq_q1_answer")}</p>
      <h3 className="about-subtitle">{getLocalizedElement("faq_q2")}</h3>
      <p className="about-content">{getLocalizedElement("faq_q2_answer")}</p>
      <h3 className="about-subtitle">{getLocalizedElement("faq_q3")}</h3>
      <p className="about-content">{getLocalizedElement("faq_q3_answer")}</p>
      <h3 className="about-subtitle">{getLocalizedElement("faq_q4")}</h3>
      <p className="about-content">{getLocalizedElement("faq_q4_answer")}</p>
      <h3 className="about-subtitle">{getLocalizedElement("faq_q5")}</h3>
      <p className="about-content">{getLocalizedElement("faq_q5_answer")}</p>
      <h3 className="about-subtitle">{getLocalizedElement("faq_q6")}</h3>
      <p className="about-content">{getLocalizedElement("faq_q6_answer")}</p>
      <h3 className="about-subtitle">{getLocalizedElement("faq_more")}</h3>
    </div>
  );
};

export default AboutSection;
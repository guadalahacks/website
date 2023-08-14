import React from 'react';
import './About.css';
import { Varela_Round } from 'next/font/google'
const valeraLight = Varela_Round({weight: "400", subsets: ["latin"]})

const AboutSection: React.FC = () => {
  return (
    <div className={"about-container"+" "+valeraLight.className} id='about'>
      <h2 className="about-title">About guadala<b>hacks</b></h2>
      <h3 className="about-subtitle">¿Quiénes somos?</h3>
      <p className="about-content">
        Unete a otros 400 estudiantes de todo México para un fin de semana de construcción, aprendizaje y diversión. Convive con la comunidad de tecnología de México, conecta con otros participantes, desarrolla tu proyecto y pasa un fin de semana inolvidable.
        <br/><br/>
        Ven a conocer Guadalajara y el Tecnológico de Monterrey, universidad líder en México y Latinoamérica. Todxs son bienvenidxs, no importa tu nivel de experiencia o de estudios. Somos un evento inclusivo y diverso y fomentamos un espacio seguro para todxs.
        <br/><br/>
        ¿Ya mencionamos que es gratis? Habrá comida y bebidas gratis durante todo el evento, así como premios para los mejores proyectos. ¡No te lo puedes perder!
        <br/><br/>
        Más información próximamente.
      </p>
    </div>
  );
};

export default AboutSection;
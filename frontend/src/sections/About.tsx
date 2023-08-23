import React from 'react';
import './About.css';
import { Varela_Round } from 'next/font/google'
const valeraLight = Varela_Round({weight: "400", subsets: ["latin"]})

const AboutSection: React.FC = () => {
  return (
    <div className={"about-container"+" "+valeraLight.className} id='about'>
      <h2 className="about-title">FAQ</h2>
      <h3 className="about-subtitle">¿Qué es guadalahacks?</h3>
      <p className="about-content">
        Unete a otros 300 estudiantes de todo México para un fin de semana de construcción, aprendizaje y diversión. Convive con la comunidad de tecnología de México, conecta con otros participantes, desarrolla tu proyecto y pasa un fin de semana inolvidable. Además, ven a conocer Guadalajara y el Tecnológico de Monterrey, universidad líder en México y Latinoamérica.
      </p>
      <h3 className="about-subtitle">¿Quiénes son bienvenidos?</h3>
      <p className="about-content">
      Todxs son bienvenidxs, no importa tu nivel de experiencia o de estudios. Somos un evento inclusivo y diverso y fomentamos un espacio seguro para todxs, el único requisito es ser estudiante o recien egresadx.
      </p>
      <h3 className="about-subtitle">¿Cuánto cuesta?</h3>
      <p className="about-content">
        El evento no tiene costo alguno. Habrá comida gratis durante todo el evento, así como premios para los mejores proyectos. ¡No te lo puedes perder!
      </p>
      <h3 className="about-subtitle">¿Qué necesito llevar?</h3>
      <p className="about-content">
        Trae tu computadora, cargador, cepillo de dientes, ropa cómoda y muchas ganas de aprender y divertirte.
      </p>
      <h3 className="about-subtitle">¿Qué clase de proyecto debería desarrollar?</h3>
      <p className="about-content">
      Participa en una de las 4 categorías de impacto social, las cuales se revelarán el día del evento. Si tienes una idea que no has desarrollado, eres bienvenidx a venir y formar un equipo para desarrollarla. Si no tienes una idea, no te preocupes, podrás unirte a un equipo que te interese. No está permitido trabajar en proyectos que ya hayan sido desarrollados previamente.
      </p>
      <h3 className="about-subtitle">Más información próximamente.</h3>
    </div>
  );
};

export default AboutSection;
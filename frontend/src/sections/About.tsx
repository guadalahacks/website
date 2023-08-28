import React from 'react';
import './About.css';
import { Varela_Round } from 'next/font/google'
const valeraLight = Varela_Round({weight: "400", subsets: ["latin"]})

const AboutSection: React.FC = () => {
  return (
    <div className={"about-container"+" "+valeraLight.className} id='about'>
      <h2 className="about-title">FAQ</h2>
      <h3 className="about-subtitle">¿Qué es guadala<b>hacks</b>?</h3>
      <p className="about-content">
        Únete a otrxs 300 estudiantes de todo México para un fin de semana de construcción, aprendizaje y diversión. Convive y conecta con la comunidad <i>tech</i> de México, desarrolla tu proyecto y pasa un fin de semana inolvidable. Conoce Guadalajara y el Tecnológico de Monterrey, universidad líder en México y Latinoamérica.
      </p>
      <h3 className="about-subtitle">¿Quiénes son bienvenidxs?</h3>
      <p className="about-content">
      Todxs son bienvenidxs, no importa tu nivel de experiencia o de estudios. Somos un evento inclusivo y diverso, y fomentamos un espacio seguro para todxs. El único requisito es ser estudiante o recien egresadx.
      </p>
      <h3 className="about-subtitle">¿Cuánto cuesta?</h3>
      <p className="about-content">
        <s>sinko peso</s><br/>
        La participación no tiene costo alguno. Habrá comida gratis durante todo el evento, así como premios para los mejores proyectos. ¡No te lo puedes perder!
      </p>
      <h3 className="about-subtitle">¿Qué necesito llevar?</h3>
      <p className="about-content">
        Trae tu computadora, cargador, cepillo de dientes, ropa cómoda y muchas ganas de aprender y divertirte.
      </p>
      <h3 className="about-subtitle">¿Cuántas personas deben conformar un equipo?</h3>
      <p className="about-content">
      Los equipos deben estar conformados por entre 2 y 4 personas.
      Todxs lxs integrantes deberán registrarse individualmente y especificar el nombre de su equipo.
      </p>
      <h3 className="about-subtitle">¿Qué pasa si no tengo equipo?</h3>
      <p className="about-content">
      Si no tienes un equipo aún, podrás registrarte sin especificar un nombre de equipo.
      Conforme se acerque la fecha del evento, lanzaremos actividades en línea para que lo formes y podrás registrarlo durante el evento.
      </p>
      <h3 className="about-subtitle">¿Qué clase de proyecto debería desarrollar?</h3>
      <p className="about-content">
      Participa en una de las 4 categorías de impacto social, las cuales se revelarán el día del evento.
      No está permitido trabajar en proyectos que ya hayan sido desarrollados previamente.
      </p>
      <h3 className="about-subtitle">Más información próximamente.</h3>
    </div>
  );
};

export default AboutSection;
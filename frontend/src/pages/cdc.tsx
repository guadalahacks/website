import React from 'react';
import './cdc.css';
import App from '@/layouts/App';


const CodeOfConduct: React.FC = () => {
    return (
      <App>
        <div className="code-of-conduct-container">
          <h1>Código de conducta del guadala<b>hacks</b></h1>
          <h2>Nuestro compromiso</h2>
          <p>
            El objetivo de guadala<b>hacks</b> es fomentar la innovación y la creación de soluciones tecnológicas en un espacio de construcción, colaboración y aprendizaje.
            Estamos comprometidxs a proporcionar un ambiente amigable, seguro y acogedor para todxs, para todo género, orientación sexual, discapacidad, etnia, religión, o cualquier otra categoría de diversidad.
            Este código de conducta especifica los lineamientos de comportamiento de los participantes, así como las consecuencias de un comportamiento inaceptable.
          </p>

          <h2>Comportamiento esperado</h2>
          <ul>
            <li>Participar de manera auténtica y activa.</li>
            <li>Ejercer consideración y respeto en tus palabras y acciones.</li>
            <li>Evitar cualquier comentario o conducta discriminatoria, ofensiva o violenta.</li>
            <li>Respetar los límites personales y el espacio personal de otrxs.</li>
            <li>Estar atento a lo que dicen tus compañeros participantes y hacer tu mejor esfuerzo para fomentar una experiencia segura y positiva para todos.</li>
            <li>Respetar las reglas y directrices del lugar y del evento.</li>
          </ul>
          
          <h2>Comportamiento inaceptable</h2>
          <ul>
            <li>El acoso, el uso de lenguaje ofensivo o imágenes sexualizadas.</li>
            <li>Intimidación, stalking o seguimiento.</li>
            <li>Fotografías o grabaciones sin el consentimiento explícito de los individuos.</li>
            <li>Interrupción sostenida de charlas u otros eventos.</li>
            <li>Contacto físico inapropiado o indeseado.</li>
            <li>Intimidación o bullying, ya sea en línea o en persona.</li>
            <li>Cualquier otro tipo de comportamiento considerado inapropiado en un entorno profesional.</li>
          </ul>

          <h2>Consecuencias de un comportamiento inaceptable</h2>
          <p>
            Lxs organizadores del guadala<b>hacks</b> tienen el derecho y la responsabilidad de sancionar o expulsar temporal o permanentemente a cualquier participante por cualquier comportamiento que consideren inapropiado, amenazante, ofensivo o dañino.
          </p>

          <h2>Si eres testigo o eres víctima de un comportamiento inaceptable</h2>
          <p>
            Si eres víctima o testigo de un comportamiento inaceptable, o tienes alguna otra inquietud, por favor comunícate con un miembro del equipo de guadala<b>hacks</b> lo antes posible o escríbenos a <a href="mailto:incidentes@guadalahacks.com">incidentes@guadalahacks.com</a>.
          </p>

          <h2>Respeto al entorno</h2>
          <p>
            Recordamos a los participantes que deben respetar las instalaciones y su entorno, así como cualquier equipo y recurso proporcionado como parte del hackatón.
          </p>

          <h2>Contacto</h2>
          <p>
            Para reportar problemas relacionados con el código de conducta, comunícate con un miembro del equipo de guadala<b>hacks</b> o escríbenos a <a href="mailto:incidentes@guadalahacks.com">incidentes@guadalahacks.com</a>.
          </p>

          <p>
            Apreciamos tu colaboración en hacer de este guadala<b>hacks</b> un lugar amigable y acogedor para todxs lxs participantes.
          </p>
        </div>
      </App>
    );
  };
  
  export default CodeOfConduct;
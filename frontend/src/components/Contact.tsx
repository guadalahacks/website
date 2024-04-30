import React from 'react';
import './Contact.scss'

const Contact: React.FC = () => {
  return (
    <div className="contact-us-container">
      <h2 className='contact-title'>Contáctanos</h2>
      <p>Envía un correo a <a href="mailto:hola@guadalahacks.com" className='contact-anchor'>hola@guadalahacks.com</a></p>
      <h2 className='contact-sub'>Dirección del evento</h2>
      <p>Tecnológico de Monterrey, Campus Guadalajara</p>
     <p>Av. Gral. Ramón Corona 2514<br/>Colonia Nuevo México, 45201<br/>Zapopan, Jal., México</p>
     <p>Inauguración: Auditorio TecSalud</p>
     <p>Hacking: Habitat de negocios, 3er y 4to piso</p>
    </div>
  );
};

export default Contact;
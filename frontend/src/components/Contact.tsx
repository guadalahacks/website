import React from 'react';
import './Contact.scss'





const Contact: React.FC = () => {
    return (
        <div className="contact-us-container">
            <h2 className='contact-title'>Contáctanos</h2>
            <p>Envía un correo a <a href="mailto:hola@guadalahacks.com" className='contact-anchor'>hola@guadalahacks.com</a></p>
            <h2 className='contact-sub'>Dirección del evento</h2>
            <p>Tecnológico de Monterrey, Campus Guadalajara</p>
            <p>Av. Gral. Ramón Corona 2514<br />Colonia Nuevo México, 45201<br />Zapopan, Jal., México</p>
            <p>Inauguración: Habitat de negocios, 3er piso</p>
            <p>Hacking: Habitat de negocios, 3er piso</p>
            <div className="maps-links">
                <a href="https://maps.app.goo.gl/pZdnoWDcySrFbRao6" target="_blank" rel="noopener noreferrer">
                    <img src="googlemaps.png" alt="Google Maps" />
                </a>
                <a href="https://maps.apple.com/?ll=20.733860,-103.456890&q=Instituto%20Tecnologico%20y%20de%20Estudios%20Superiores%20de%20Monterrey&t=m" target="_blank" rel="noopener noreferrer">
                    <img src="applemaps.png" alt="Apple Maps" />
                </a>
            </div>

        </div>
    );
};

export default Contact;
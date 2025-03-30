import React from 'react';
import './Contact.scss'
import { getLocalizedElement, languageState } from '@/app/locale';
import Image from 'next/image';
import img_googlemaps from './../../public/googlemaps.png';
import img_applemaps from './../../public/applemaps.png';



const Contact: React.FC = () => {
    const [language, _] = languageState.useState();
    return (
        <div className="contact-us-container">
            <h2 className='contact-title'>{getLocalizedElement("contact_title", language)}</h2>
            <p>{getLocalizedElement("contact_contactUs", language)}</p>
            <h2 className='contact-sub'>{getLocalizedElement("contact_addressHeader", language)}</h2>
            <p>Tecnológico de Monterrey, Campus Guadalajara</p>
            <p>Av. Gral. Ramón Corona 2514<br />Colonia Nuevo México, 45201<br />Zapopan, Jal., México</p>
            <div className="maps-links">
                <a href="https://www.google.com/maps/place/H%C3%A1bitat+del+Futuro+de+los+Negocios/@20.7336346,-103.456528,21z/data=!4m6!3m5!1s0x8428a922f44685c3:0x83f5ed7fc747dde8!8m2!3d20.7336933!4d-103.4564891!16s%2Fg%2F11l37857y1!5m1!1e2?entry=tts&g_ep=EgoyMDI1MDMyNS4xIPu8ASoASAFQAw%3D%3D&skid=62df9a2c-5ef2-4c4e-8c47-68bcad04b6be" target="_blank" rel="noopener noreferrer">
                    <Image src={img_googlemaps} alt="Google Maps" />
                </a>
                <a href="https://maps.apple.com/?address=ll=20.733693,-103.456489&q=Habitat%20del%20Futuro%20de%20los%20Negocios&t=m" target="_blank" rel="noopener noreferrer">
                    <Image src={img_applemaps} alt="Apple Maps" />
                </a>
            </div>

        </div>
    );
};

export default Contact;
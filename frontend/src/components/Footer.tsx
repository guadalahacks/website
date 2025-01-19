import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Varela_Round } from 'next/font/google';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import Link from 'next/link';
import { getLocalizedElement } from '@/app/locale';
import { useLanguage } from '@/context/LanguageContext'; // Importar el contexto de idioma

const valeraLight = Varela_Round({ weight: "400", subsets: ["latin"] });

const Footer: React.FC = () => {
  const { language } = useLanguage(); // Usar el contexto de idioma

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>{getLocalizedElement("footer_footnote_copyright", language)}</p> {/* Usar el idioma actual */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
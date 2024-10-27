import React from 'react';
import './Footer.css';
// Assuming you have FontAwesome or a similar library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Varela_Round } from 'next/font/google'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import Link from 'next/link';
import { getLocalizedElement } from '@/app/locale';
const valeraLight = Varela_Round({weight: "400", subsets: ["latin"]})

const Footer: React.FC = () => {
  return (
    <div>
        <div className="footer-container">
        <div className="footer-row">
            {/* Copyright Notice */}
            <div className="footer-column">
                <img src="./logo-outline.png" alt="logo" className="footer-logo" width={150}/>
            </div>

            {/* Social Media Icons */}
            <div className="footer-column">
                <h3 className="footer-title">{getLocalizedElement("footer_contactUs")}</h3>
            <a href="https://www.instagram.com/guadalahacks/" className="footer-link"><FontAwesomeIcon icon={faInstagram} className="footer-icon" /> Instagram</a>
            <a href="https://www.linkedin.com/company/guadalahacks" className="footer-link"><FontAwesomeIcon icon={faLinkedin} className="footer-icon" /> LinkedIn</a>
            <a href="mailto:hola@guadalahacks.com" className="footer-link"><FontAwesomeIcon icon={faEnvelope} className="footer-icon" /> {getLocalizedElement("footer_contactUs_email")}</a>
            </div>

            {/* Important Links */}
            <div className="footer-column">
            <h3 className="footer-title">{getLocalizedElement("footer_resources")}</h3>
            <Link href="/cdc" className="footer-link">{getLocalizedElement("footer_resources_cc")}</Link>
            <a href="#" className="footer-link-disabled">{getLocalizedElement("footer_resources_joinAsStaff")}</a>
            <a href="#" className="footer-link-disabled">{getLocalizedElement("footer_resources_joinAsMentor")}</a>
            <a href="#" className="footer-link-disabled">{getLocalizedElement("footer_resources_joinAsSponsor")}</a>
            </div>
        </div>
        
        </div>
        <div className={"footer-copyright "+valeraLight.className}>
            {getLocalizedElement("footer_footnote_madeWith")}<FontAwesomeIcon icon={faHeart} className='heart'/>
            <br />
            <span>{getLocalizedElement("footer_footnote_copyright")}</span>
        </div>
    </div>
  );
};

export default Footer;
import React, { useState } from 'react';
import { Varela_Round } from 'next/font/google'
import './NavigationBar.css'
import Link from 'next/link';
import Image from 'next/image';
import { getLocalizedElement, languageState } from '@/app/locale';
import LanguageToggle from './LanguageToggle';
import img_logo from './../../public/logo.png';

const valeraLight = Varela_Round({weight: "400", subsets: ["latin"]})

const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, _] = languageState.useState();
  const valeraClass = valeraLight.className;


  const navItems = (
    <>
      <Link href="/" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_home", language)}</Link>
      <Link href="/#contact" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_contact", language)}</Link>
      <Link href="/#partners" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_partners", language)}</Link>
      <Link href="/#about" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_faq", language)}</Link>
      <LanguageToggle/>
    </>
  )
  
  return (
    <div>
      {/* Screen Dim */}
      <div className={`screen-dim ${isMenuOpen ? 'visible' : ''}`} onClick={() => setIsMenuOpen(false)}></div>


      <nav className="bg-gray-800 text-white p-2">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
          {/* Logo section */}
          <Link href="/" className='nav-logo-anchor'>
            <div className="flex items-center">
              <Image src={img_logo} alt="logo" className="w-10 nav-logo" />
              <div className='ml-6 text-4xl font-semibold desktop-logo-text'>
                <span className={'logo-text-nav'+' '+valeraClass}>{getLocalizedElement("navbar_title", language)}</span>
              </div>
            </div>
          </Link>

          {/* Hamburger icon */}
          <div className="mobile-menu-icon" onClick={() => setIsMenuOpen(true)}>
            ☰
          </div>

          {/* Navigation buttons */}
          <div className={`flex items-center space-x-6 desktop-menu`}>
            {navItems}
          </div>

          {/* Mobile Sidebar */}
          <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
            <span className="close-btn" onClick={() => setIsMenuOpen(false)}>×</span>
            {navItems}
            {/*<span className="h-10 bg-transparent blank-reserve"></span> 
            <img src="./mlh-badge.svg" alt="MLH 2023 Hackathon Season" className="h-40 mlh-badge" />*/}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
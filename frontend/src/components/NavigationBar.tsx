import React, { useState } from 'react';
import { Varela_Round } from 'next/font/google'
import './NavigationBar.css'
import Link from 'next/link';
import { getLocalizedElement } from '@/app/locale';

const valeraLight = Varela_Round({weight: "400", subsets: ["latin"]})

const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const valeraClass = valeraLight.className;

  return (
    <div>
      {/* Screen Dim */}
      <div className={`screen-dim ${isMenuOpen ? 'visible' : ''}`} onClick={() => setIsMenuOpen(false)}></div>


      <nav className="bg-gray-800 text-white p-2">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
          {/* Logo section */}
          <Link href="/" className='nav-logo-anchor'>
            <div className="flex items-center">
              <img src="/logo.png" alt="logo" className="h-20 nav-logo" />
              <div className='ml-6 text-4xl font-semibold desktop-logo-text'>
                <span className={'logo-text-nav'+' '+valeraClass}>{getLocalizedElement("navbar_title")}</span>
              </div>
            </div>
          </Link>

          {/* Hamburger icon */}
          <div className="mobile-menu-icon" onClick={() => setIsMenuOpen(true)}>
            ☰
          </div>

          {/* Navigation buttons */}
          <div className={`flex items-center space-x-6 desktop-menu`}>
            <Link href="/" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_home")}</Link>
            <Link href="/#contact" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_contact")}</Link>
            <Link href="/#partners" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_partners")}</Link>
            <Link href="/#about" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_faq")}</Link>
          </div>

          {/* Mobile Sidebar */}
          <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
            <span className="close-btn" onClick={() => setIsMenuOpen(false)}>×</span>
            <Link href="/" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_home")}</Link>
            <Link href="/#contact" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_contact")}</Link>
            <Link href="/#partners" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_partners")}</Link>
            <Link href="/#about" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_faq")}</Link>
            {/*<span className="h-10 bg-transparent blank-reserve"></span> 
            <img src="./mlh-badge.svg" alt="MLH 2023 Hackathon Season" className="h-40 mlh-badge" />*/}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
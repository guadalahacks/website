import React, { useState } from 'react';
import { Varela_Round } from 'next/font/google';
import './NavigationBar.css';
import Link from 'next/link';
import { getLocalizedElement } from '@/app/locale';
import { useLanguage } from '@/context/LanguageContext';

const valeraLight = Varela_Round({ weight: "400", subsets: ["latin"] });

const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const handleLanguageToggle = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
  };

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
                <span className={'logo-text-nav' + ' ' + valeraLight.className}>{getLocalizedElement("navbar_title", language)}</span>
              </div>
            </div>
          </Link>

          {/* Hamburger icon */}
          <div className="mobile-menu-icon" onClick={() => setIsMenuOpen(true)}>
            ☰
          </div>

          {/* Navigation buttons */}
          <div className={`flex items-center space-x-6 desktop-menu`}>
            <div className="language-toggle-container" onClick={handleLanguageToggle}>
              <span className="toggle-label">EN</span>
              <div className={`language-toggle ${language === 'es' ? 'active' : ''}`}>
                <div className="toggle-thumb"></div>
              </div>
              <span className="toggle-label">ES</span>
            </div>
            <Link href="/" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_home", language)}</Link>
            <Link href="/#contact" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_contact", language)}</Link>
            <Link href="/#partners" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_partners", language)}</Link>
            <Link href="/#about" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_faq", language)}</Link>
          </div>

          {/* Mobile Sidebar */}
          <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
            <span className="close-btn" onClick={() => setIsMenuOpen(false)}>×</span>
            <Link href="/" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_home", language)}</Link>
            <Link href="/#contact" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_contact", language)}</Link>
            <Link href="/#partners" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_partners", language)}</Link>
            <Link href="/#about" className="text-lg hover:text-gray-400">{getLocalizedElement("navbar_faq", language)}</Link>
            <div className="language-toggle-container" onClick={handleLanguageToggle}>
              <span className="toggle-label">EN</span>
              <div className={`language-toggle ${language === 'es' ? 'active' : ''}`}>
                <div className="toggle-thumb"></div>
              </div>
              <span className="toggle-label">ES</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
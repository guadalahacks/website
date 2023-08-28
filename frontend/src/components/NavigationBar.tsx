import React from 'react';
import { Varela_Round } from 'next/font/google'
import './NavigationBar.css'
import Link from 'next/link';

const valeraLight = Varela_Round({weight: "400", subsets: ["latin"]})

const NavigationBar: React.FC = () => {

  const valeraClass = valeraLight.className
  
  return (
    <nav className="bg-gray-800 text-white p-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo section */}
        <Link href="/" className='nav-logo-anchor'>
          <div className="flex items-center">
            <img src="/logo.png" alt="logo" className="h-20 nav-logo" />
            <div className='ml-6 text-4xl font-semibold'>
              <span className={'logo-text-nav'+' '+valeraClass}>guadala<b>hacks</b></span>
            </div>
          </div>
        </Link>

        {/* Navigation buttons and MLH 2023 Season banner */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-lg hover:text-gray-400">Inicio</Link>
          <Link href="/#contact" className="text-lg hover:text-gray-400">Contacto</Link>
          <Link href="/#partners" className="text-lg hover:text-gray-400">Partners</Link>
          <Link href="/#about" className="text-lg hover:text-gray-400">FAQ</Link>
          {/*<span className="h-10 bg-transparent blank-reserve"></span> 
          <img src="./mlh-badge.svg" alt="MLH 2023 Hackathon Season" className="h-40 mlh-badge" />*/}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
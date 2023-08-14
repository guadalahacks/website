import React from 'react';
import { Varela_Round } from 'next/font/google'
import './NavigationBar.css'

const valeraLight = Varela_Round({weight: "400", subsets: ["latin"]})

const NavigationBar: React.FC = () => {

  const valeraClass = valeraLight.className
  
  return (
    <nav className="bg-gray-800 text-white p-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo section */}
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className="h-20" />
          <div className='ml-6 text-4xl font-semibold'>
            <span className={'logo-text'+' '+valeraClass}>guadala<b>hacks</b></span>
            </div>
        </div>

        {/* Navigation buttons and MLH 2023 Season banner */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-lg hover:text-gray-400">Home</a>
          <a href="#about" className="text-lg hover:text-gray-400">About</a>
          <a href="#" className="text-lg hover:text-gray-400">Contact</a>
          <span className="h-10 bg-transparent blank-reserve"></span> 
          <img src="./mlh-badge.svg" alt="MLH 2023 Hackathon Season" className="h-40 mlh-badge" />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
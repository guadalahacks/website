import React from 'react';
import './PhotoGallery.css';
import { getLocalizedString, languageState } from '@/app/locale';
import Image from 'next/image';
import img_collage2024 from './../../public/collage2024.png';

export const PhotoGallery: React.FC = () => {
  const [language, _] = languageState.useState();
  return (
    <div className="gallery-container">
      <Image src={img_collage2024} alt={getLocalizedString("gallery_photo_alt", language)} className="single-picture" />
    </div>
  );
};

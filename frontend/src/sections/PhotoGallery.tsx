import React from 'react';
import './PhotoGallery.css';
import { getLocalizedString, languageState } from '@/app/locale';

export const PhotoGallery: React.FC = () => {
  const [language, _] = languageState.useState();
  return (
    <div className="gallery-container">
      <img src="./collage2024.png" alt={getLocalizedString("gallery_photo_alt", language)} className="single-picture" />
    </div>
  );
};

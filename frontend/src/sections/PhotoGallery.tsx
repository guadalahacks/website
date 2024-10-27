import React from 'react';
import './PhotoGallery.css';
import { getLocalizedString } from '@/app/locale';

export const PhotoGallery: React.FC = () => {
  return (
    <div className="gallery-container">
      <img src="./collage2024.png" alt={getLocalizedString("gallery_photo_alt")} className="single-picture" />
    </div>
  );
};

import React from 'react';
import './EventMap.css';
import { getLocalizedString } from '@/app/locale';

const EventMap: React.FC = () => {
  return (
    <div className="event-map-container">
      <iframe
        width="100%"
        height="100%"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-103.456632%2C20.733680%2C-103.456632%2C20.7337&layer=mapnik&marker=20.733680,-103.456632"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title={getLocalizedString("event_map_title")}
      ></iframe>
      <div className="mobile-overlay"></div> {/* Invisible div */}
    </div>
  );
};

export default EventMap;

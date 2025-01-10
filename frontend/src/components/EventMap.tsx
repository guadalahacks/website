import React from 'react';
import './EventMap.css';

const EventMap: React.FC = () => {
  return (
    <div className="event-map-container">
      <iframe
        width="100%"
        height="100%"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-103.4570%2C20.7317%2C-103.4550%2C20.7337&layer=mapnik&marker=20.7327,-103.4560"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Event Map"
      ></iframe>
      <div className="mobile-overlay"></div> {/* Invisible div */}
    </div>
  );
};

export default EventMap;

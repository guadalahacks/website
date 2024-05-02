import React from 'react';
import './EventMap.css'

const EventMap: React.FC = () => {
  return (  
    <div className="event-map-container">
      <iframe width="100%" height="100%" src="https://www.openstreetmap.org/export/embed.html?bbox=-103.45780670642854%2C20.731873396153134%2C-103.4543627500534%2C20.73564115922215&amplayer=mapnik&amp;marker=20.73386,-103.45689" ></iframe>
      <div className="mobile-overlay"></div> {/* Invisible div */}
    </div>
  );
};

export default EventMap;

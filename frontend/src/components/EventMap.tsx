import React from 'react';
import './EventMap.css'

const EventMap: React.FC = () => {
  return (  
    <div className="event-map-container">
      <iframe width="100%" height="100%" src="https://www.openstreetmap.org/export/embed.html?bbox=-103.45544636249542%2C20.732997212795915%2C-103.45339179039003%2C20.734497294330506&amp;layer=mapnik&amp;marker=20.73374725542157%2C-103.45441907644272" ></iframe>
    </div>
  );
};

export default EventMap;
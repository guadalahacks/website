import React from 'react';
import './cdc.css';
import App from '@/layouts/App';
import { getLocalizedElement } from '@/app/locale';


const CodeOfConduct: React.FC = () => {
    return (
      <App>
        <div className="code-of-conduct-container">
          {getLocalizedElement("cdc")}
        </div>
      </App>
    );
  };
  
  export default CodeOfConduct;
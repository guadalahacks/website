import React from 'react';
import './cdc.css';
import App from '@/layouts/App';
import { getLocalizedElement, languageState } from '@/app/locale';


const CodeOfConduct: React.FC = () => {
  const [language, setLanguage] = languageState.useState();
    return (
      <App>
        <div className="code-of-conduct-container">
          {getLocalizedElement("cdc", language)}
        </div>
      </App>
    );
  };
  
  export default CodeOfConduct;
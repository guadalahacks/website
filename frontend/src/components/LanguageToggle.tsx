import React from 'react';
import { Varela_Round } from 'next/font/google'
import { languageState } from '@/app/locale';
import './LanguageToggle.css'

const valeraLight = Varela_Round({weight: "400", subsets: ["latin"]})

const LanguageToggle: React.FC = () => {
    const [language, setLanguage] = languageState.useState();
    const valeraClass = valeraLight.className;

    return (
        <div className='toggle'>
            &#x1F310;
            &nbsp;
            <button
                style={{fontWeight: language == "es" ? "bold" : "lighter"}}
                onClick={() => setLanguage("es")}>
                ES
            </button>
            &nbsp;
            <button
                style={{fontWeight: language == "en" ? "bold" : "lighter"}}
                onClick={() => setLanguage("en")}>
                EN
            </button>
        </div>
    );
    // return (
    //     <>
    //         <table className='toggle'>
    //             <tr>
    //                 <td colSpan={2} style={{textAlign: "center"}}>&#x1F310;</td>
    //             </tr>
    //             <tr>
    //                 <td><button
    //                     style={{fontWeight: language == "es" ? "bold" : "lighter"}}
    //                     onClick={() => setLanguage("es")}>
    //                     ES
    //                 </button></td>
    //                 <td><button
    //                     style={{fontWeight: language == "en" ? "bold" : "lighter"}}
    //                     onClick={() => setLanguage("en")}>
    //                     EN
    //                 </button></td>
    //             </tr>
    //         </table>
    //     </>
    // );
};

export default LanguageToggle;
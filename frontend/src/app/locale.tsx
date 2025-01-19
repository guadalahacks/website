import { stringLocalization, elementLocalization } from "@/app/localization";
import { ReactElement } from 'react';

const defaultLanguage: string = "es";
let currentLanguage: string = defaultLanguage;

export const setLanguage = (language: string) => {
    currentLanguage = language;
    // Trigger a re-render or update the context if necessary
};

export const getCurrentLanguage = (): string => {
    return currentLanguage;
};

interface LocalizedString {
    [key: string]: string
}
export interface StringLocalization {
    [key: string]: LocalizedString
}
interface LocalizedElement {
    [key: string]: ReactElement
}
export interface ElementLocalization {
    [key: string]: LocalizedElement
}

export const getLocalizedString = (identifier: string, language: string = currentLanguage): string => {
    // NOTE: MUST KEEP IN SYNC WITH getLocalizedElement
    // ANY CHANGE MADE HERE MUST BE MADE THERE FOR CONSISTENCY

    // Return empty string if identifier not found
    if (!(identifier in stringLocalization)) {
        console.error(`Localized string identifier "${identifier}" not found`);
        return "";
    }

    const localizedString = stringLocalization[identifier];

    // Return localized if found, else default language if found, else empty
    if (language in localizedString) return localizedString[language];
    console.warn(`Localized string "${identifier}" in language "${language}" not found, using default language "${defaultLanguage}"`);
    if (defaultLanguage in localizedString) return localizedString[defaultLanguage];
    console.error(`Localized string "${identifier}" in default language "${defaultLanguage}" not found`);
    return "";
};

export const getLocalizedElement = (identifier: string, language: string = currentLanguage): ReactElement => {
    // NOTE: MUST KEEP IN SYNC WITH getLocalizedString
    // ANY CHANGE MADE HERE MUST BE MADE THERE FOR CONSISTENCY

    // Return empty element if identifier not found
    if (!(identifier in elementLocalization)) {
        console.error(`Localized element identifier "${identifier}" not found`);
        return <></>;
    }

    const localizedElement = elementLocalization[identifier];

    // Return localized if found, else default language if found, else empty
    if (language in localizedElement) return localizedElement[language];
    console.warn(`Localized element "${identifier}" in language "${language}" not found, using default language "${defaultLanguage}"`);
    if (defaultLanguage in localizedElement) return localizedElement[defaultLanguage];
    console.error(`Localized element "${identifier}" in default language "${defaultLanguage}" not found`);
    return <></>;
};

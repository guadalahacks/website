import { localization } from "@/app/localization"
import { ReactElement } from 'react'

const defaultLanguage: string = "es"

interface LocalizedString {
    [key: string]: ReactElement
}

export interface Localization {
    [key: string]: LocalizedString
}

const getLocalizedString = (identifier: string, language: string = defaultLanguage) => {
    // Return empty string if identifier not found
    if (!(identifier in localization)) {
        console.error(`Localized string identifier "${identifier}" not found`)
        return ""
    }

    const localizedString = localization[identifier]

    // Return localized if found, else default language if found, else empty
    if (language in localizedString) return localizedString[language]
    console.warn(`Localized string "${identifier}" in language "${language}" not found, using default language "${defaultLanguage}"`)
    if (defaultLanguage in localizedString) return localizedString[defaultLanguage]
    console.error(`Localized string "${identifier}" in default language "${defaultLanguage}" not found`)
    return ""
}

export default getLocalizedString
import { localization } from "@/app/localization"
import { ReactElement } from 'react'

const defaultLanguage: string = "es"
const elementTypeName: string = "element"
const stringTypeName: string = "string"

interface LocalizedString {
    [key: string]: string
}
interface LocalizedElement {
    [key: string]: ReactElement
}
interface LocalizedObjectPair {
    string?: LocalizedString,
    element?: LocalizedElement
}
export interface Localization {
    [key: string]: LocalizedObjectPair
}
interface StringOrElement {
    string?: string,
    element?: ReactElement
}

const getLocalizedStringOrElement = (type: string, identifier: string, language: string): StringOrElement => {
    // Return empty if identifier not found
    if (!(identifier in localization)) {
        console.error(`Localization identifier "${identifier}" not found`)
        return {}
    }

    const localizedObjectPair = localization[identifier]

    // Return empty if type not found
    if (!(type in localizedObjectPair)) {
        console.error(`Localized ${type} "${identifier}" not found`)
        return {}
    }

    const localizedObject = (
        type == stringTypeName ?
            localizedObjectPair.string :
            localizedObjectPair.element
    ) ?? {} // line ƒor TS to stop whining, previous block ensures either exists

    if (!(language in localizedObject)) {
        // Use default language if language not found
        console.warn(`Localized ${type} "${identifier}" in language "${language}" not found, fetching default language "${defaultLanguage}"`)
        language = defaultLanguage
    }
    if (!(language in localizedObject)) {
        // Return empty if default language not found
        console.error(`Localized ${type} "${identifier}" in default language "${language}" not found`)
        return {}
    }

    // Return in interface with both types for type safety
    return {
        string: (
            type == stringTypeName ?
                (localizedObjectPair.string ?? {})[language] :
                ""
        ),
        element: (
            type == elementTypeName ?
                (localizedObjectPair.element ?? {})[language] :
                <></>
        )
    }
}

export const getLocalizedString = (identifier: string, language: string = defaultLanguage): string => {
    let object = getLocalizedStringOrElement(stringTypeName, identifier, language)
    return object.string ?? ""
}

export const getLocalizedElement = (identifier: string, language: string = defaultLanguage): ReactElement => {
    let object = getLocalizedStringOrElement(elementTypeName, identifier, language)
    return object.element ?? <></>
}

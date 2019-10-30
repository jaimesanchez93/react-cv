import i18n from "i18next";
import {
    initReactI18next
} from "react-i18next";

import detector from "i18next-browser-languagedetector";


// the translations
// (tip move them in a JSON file and import them)+

import  translationEn from './translations/en.json';
import  translationEs from './translations/es.json';

const language = window.location.pathname.replace("/","");
console.log('language', language);

console.log('translation es',translationEs);


const resources = {
    en: {
        translation: translationEn
    },
    es: {
        translation: translationEs
    }
};

i18n
    .use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        // lng: "en",
        fallbackLng: "en", // use en if detected lng is not available
        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });


export default i18n;
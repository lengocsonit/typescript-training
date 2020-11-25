import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import jaJson from './i18n/ja.json';
import enJson from './i18n/en.json';

const language = window.localStorage.getItem("lang") ? window.localStorage.getItem("lang") : navigator.languages[0] || navigator.language
console.log(language)

i18n.use(initReactI18next).init({
    debug: true,
    resources: {
        en: { translation: enJson },
        ja: { translation: jaJson },
    },
    lng: (language != null) ? language : 'en',
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: { escapeValue: false },
});


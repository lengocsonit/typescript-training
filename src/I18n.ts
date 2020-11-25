import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import jaJson from './i18n/ja.json';
import enJson from './i18n/en.json';

i18n.use(initReactI18next).init({
    debug: true,
    resources: {
        en: { translation: enJson },
        ja: { translation: jaJson },
    },
    lng: 'ja',
    fallbackLng: 'ja',
    keySeparator: false,
    interpolation: { escapeValue: false },
});


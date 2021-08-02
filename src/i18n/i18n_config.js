import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { en_locale } from './locale/en_locale';
import { de_locale } from './locale/de_locale';


i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: {
     en: {
       translation: en_locale
     },
     de: {
       translation: de_locale
     }
   }
 });
 
i18n.changeLanguage("en");

export default i18n
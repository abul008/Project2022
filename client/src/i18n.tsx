import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_am from "./translations/am.json";
import common_en from "./translations/en.json";
import commin_ru from "./translations/ru.json";
const resources = {
    am:{
        translation:common_am
    },
    en:{
        translation:common_en
    },
    ru:{
        translation:commin_ru
    }
}

i18n
.use(initReactI18next)
.init({
    resources,
    lng:"am",
    keySeparator:false,
    interpolation:{
        escapeValue:false
    }
})

export default i18n;
import { addLocale } from "primereact/api";
import { calendar_config_locale_es } from "@/locale/es/calendar.config";
const localeConfigs: Record<string, object> = {
  es: calendar_config_locale_es,
};

export const configureLocale = (locale: string) => {
  if (localeConfigs[locale]) {
    addLocale(locale, localeConfigs[locale]);
  } else {
    console.warn(`Locale "${locale}" is not configured.`);
  }
};

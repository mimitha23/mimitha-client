import { MimithaLocaleT } from "interface/common.types";

type I18nextProviderContextT = {
  currentLocale: MimithaLocaleT;
  changeLocale: (locale: MimithaLocaleT) => void;
};

type I18nextProviderT = {
  children: React.ReactNode;
};

export type { I18nextProviderContextT, I18nextProviderT };

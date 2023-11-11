import {
  MIMITHA_LOCALES,
  MIMITHA_CURRENCIES,
  MIMITHA_CURRENCIES_SYMBOLS,
} from "config/consts";

type LocationStateT = {
  category: string;
  search: string;
  productType: {
    query: string;
    ka: string;
    en: string;
  };
  title: {
    ka: string;
    en: string;
  };
  sale: string;
};

type LocationStateOptionalT = {
  category?: string;
  search?: string;
  productType?: {
    ka: string;
    en: string;
    query: string;
  };
  title?: {
    ka: string;
    en: string;
  };
  sale?: string;
};

type MimithaLocaleT = (typeof MIMITHA_LOCALES)[number];

type MimithaCurrencyT = (typeof MIMITHA_CURRENCIES)[number];

type MimithaCurrencySymbolT = (typeof MIMITHA_CURRENCIES_SYMBOLS)[number];

type DecodedUserT = {
  iat: number;
  exp: number;
  email: string;
  _is: string;
};

export type {
  LocationStateT,
  LocationStateOptionalT,
  MimithaLocaleT,
  MimithaCurrencyT,
  MimithaCurrencySymbolT,
  DecodedUserT,
};

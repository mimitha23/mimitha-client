import {
  MIMITHA_LOCALES,
  MIMITHA_CURRENCIES,
  MIMITHA_CURRENCIES_SYMBOLS,
} from "config/consts";

export interface LocationStateT {
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
}

export interface LocationStateOptionalT {
  category?: string;
  search?: string;
  productType?: {
    query: string;
    ka: string;
    en: string;
  };
  title?: {
    ka: string;
    en: string;
  };
  sale?: string;
}

export type MimithaLocaleT = (typeof MIMITHA_LOCALES)[number];

export type MimithaCurrencyT = (typeof MIMITHA_CURRENCIES)[number];

export type MimithaCurrencySymbolT =
  (typeof MIMITHA_CURRENCIES_SYMBOLS)[number];

export interface DecodedUserT {
  iat: number;
  exp: number;
  email: string;
  _is: string;
}

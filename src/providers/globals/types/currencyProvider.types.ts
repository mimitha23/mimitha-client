import {
  MimithaCurrencyT,
  MimithaCurrencySymbolT,
} from "interface/common.types";

type CurrencyProviderContextT = {
  convertPrice: (price: number) => string;
  changeCurrency: (currency: MimithaCurrencyT) => void;
  currency: MimithaCurrencyT;
  currencySymbol: MimithaCurrencySymbolT;
};

type CurrencyProviderT = {
  children: React.ReactNode;
};

export type { CurrencyProviderContextT, CurrencyProviderT };

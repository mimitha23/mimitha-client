/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

import {
  MimithaCurrencyT,
  MimithaCurrencySymbolT,
} from "interface/common.types";
import { useTranslationContext } from "./I18nextProvider";
import { EXCHANGE_RATE_API_END_POINT, EXCHANGE_RATE_API_KEY } from "config/env";

interface CurrencyProviderContextT {
  convertPrice: (price: number) => string;
  changeCurrency: (currency: MimithaCurrencyT) => void;
  currency: MimithaCurrencyT;
  currencySymbol: MimithaCurrencySymbolT;
}

interface CurrencyProviderT {
  children: React.ReactNode;
}

const currencyContext = createContext<CurrencyProviderContextT>({
  convertPrice: () => "",
  changeCurrency: () => {},
  currency: "GEL",
  currencySymbol: "₾",
});

const CurrencyProvider: React.FC<CurrencyProviderT> = ({ children }) => {
  const { currentLocale } = useTranslationContext();

  const [currentCurrency, setCurrentCurrency] = useState<{
    currency: MimithaCurrencyT;
    symbol: MimithaCurrencySymbolT;
    conversion_rate: number;
  }>({
    currency: "GEL",
    symbol: "₾",
    conversion_rate: NaN,
  });

  async function exchangeCurrency(
    from: MimithaCurrencyT,
    to: MimithaCurrencyT
  ) {
    try {
      const end_point = EXCHANGE_RATE_API_END_POINT.replace(
        "{API_KEY}",
        EXCHANGE_RATE_API_KEY
      );

      const { data: exchange } = await axios.get(`${end_point}/${from}/${to}`);

      return { conversion_rate: exchange.conversion_rate };
    } catch (error) {
      throw error;
    }
  }

  async function changeCurrency(currency: MimithaCurrencyT) {
    try {
      if (currency === "GEL") {
        const { conversion_rate } = await exchangeCurrency("USD", "GEL");

        setCurrentCurrency((prev) => ({
          ...prev,
          currency: "GEL",
          symbol: "₾",
          conversion_rate,
        }));
      } else if (currency === "USD") {
        const { conversion_rate } = await exchangeCurrency("GEL", "USD");

        setCurrentCurrency((prev) => ({
          ...prev,
          currency: "USD",
          symbol: "$",
          conversion_rate,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  function convertPrice(price: number): string {
    if (!price) return "";

    if (currentCurrency.currency === "GEL") return price.toFixed(2);
    else if (currentCurrency.currency === "USD")
      return (price * currentCurrency.conversion_rate).toFixed(2);
    else return "";
  }

  useEffect(() => {
    async function exchangeOnMount() {
      if (currentLocale === "ka") await changeCurrency("GEL");
      else if (currentLocale === "en") await changeCurrency("USD");
    }

    exchangeOnMount();
  }, [currentLocale]);

  return (
    <currencyContext.Provider
      value={{
        convertPrice,
        changeCurrency,
        currency: currentCurrency.currency,
        currencySymbol: currentCurrency.symbol,
      }}
    >
      {children}
    </currencyContext.Provider>
  );
};

export default CurrencyProvider;
export const useCurrencyContext = () => useContext(currencyContext);

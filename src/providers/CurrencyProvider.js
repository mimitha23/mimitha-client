/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

import { useTranslationContext } from "./I18nextProvider";
import { EXCHANGE_RATE_API_END_POINT, EXCHANGE_RATE_API_KEY } from "config/env";

const currencyContext = createContext({
  convertPrice: () => {},
  changeCurrency: () => {},
  currency: "GEL",
  currencySymbol: "₾",
});

export default function CurrencyProvider({ children }) {
  const { currentLocale } = useTranslationContext();

  const [currentCurrency, setCurrentCurrency] = useState({
    currency: "GEL",
    symbol: "₾",
    conversion_rate: NaN,
  });

  async function exchangeCurrency(from, to) {
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

  async function changeCurrency(curr) {
    try {
      if (curr === "GEL") {
        const { conversion_rate } = await exchangeCurrency("USD", "GEL");

        setCurrentCurrency((prev) => ({
          ...prev,
          currency: "GEL",
          symbol: "₾",
          conversion_rate,
        }));
      } else if (curr === "USD") {
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

  function convertPrice(price) {
    if (!price) return;

    if (currentCurrency.currency === "GEL") {
      return price.toFixed(2);
    } else if (currentCurrency.currency === "USD") {
      return (price * currentCurrency.conversion_rate).toFixed(2);
    }
  }

  useEffect(() => {
    async function exchangeOnMount() {
      if (currentLocale === "ka") {
        await changeCurrency("GEL");
      } else if (currentLocale === "en") {
        await changeCurrency("USD");
      }
    }

    exchangeOnMount();
  }, [currentLocale]);

  return (
    <currencyContext.Provider
      value={{
        changeCurrency,
        currency: currentCurrency.currency,
        currencySymbol: currentCurrency.symbol,
        convertPrice,
      }}
    >
      {children}
    </currencyContext.Provider>
  );
}

export const useCurrencyContext = () => useContext(currencyContext);

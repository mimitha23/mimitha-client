import { useState } from "react";
import { useCurrencyContext } from "providers/CurrencyProvider";

import { ArrowBottomIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/CurrencySwitch.styled";

export default function CurrencySwitch() {
  const [openCurrency, setOpenCurrency] = useState(false);

  const { currency, changeCurrency } = useCurrencyContext();

  return (
    <Styled.CurrencySwitch>
      <button
        className="currency-trigger"
        onClick={() => setOpenCurrency((prev) => !prev)}
      >
        {currency}
        <ArrowBottomIcon />
      </button>

      {openCurrency && (
        <ul className="currency-dropdown">
          <li
            className={currency === "GEL" ? "active" : ""}
            data-value="GEL"
            onClick={(e) => {
              changeCurrency(e.target.dataset.value);
              setOpenCurrency(false);
            }}
          >
            GEL
          </li>
          <li
            className={currency === "USD" ? "active" : ""}
            data-value="USD"
            onClick={(e) => {
              changeCurrency(e.target.dataset.value);
              setOpenCurrency(false);
            }}
          >
            USD
          </li>
        </ul>
      )}
    </Styled.CurrencySwitch>
  );
}

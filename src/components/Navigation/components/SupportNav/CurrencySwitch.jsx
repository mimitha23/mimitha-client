import { useState } from "react";
import { v4 as uuid } from "uuid";

import { MIMITHA_CURRENCIES } from "config/consts";
import { useCurrencyContext } from "providers/CurrencyProvider";

import { ArrowBottomIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/CurrencySwitch.styled";

export default function CurrencySwitch() {
  const [openCurrency, setOpenCurrency] = useState(false);

  const { currency: currentCurrency, changeCurrency } = useCurrencyContext();

  return (
    <Styled.CurrencySwitch>
      <button
        className="currency-trigger"
        onClick={() => setOpenCurrency((prev) => !prev)}
      >
        {currentCurrency}
        <ArrowBottomIcon />
      </button>

      {openCurrency && (
        <Styled.CurrencyDropdown>
          {MIMITHA_CURRENCIES.map((currency) => (
            <Styled.CurrencyDropdownItem
              key={uuid()}
              className={currentCurrency === currency ? "active" : ""}
              data-value={currency}
              onClick={(e) => {
                changeCurrency(e.target.dataset.value);
                setOpenCurrency(false);
              }}
            >
              {currency}
            </Styled.CurrencyDropdownItem>
          ))}
        </Styled.CurrencyDropdown>
      )}
    </Styled.CurrencySwitch>
  );
}

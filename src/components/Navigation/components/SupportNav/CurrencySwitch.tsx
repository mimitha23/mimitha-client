import { useState } from "react";
import { v4 as uuid } from "uuid";

import { MIMITHA_CURRENCIES } from "config/consts";
import { useCurrencyContext } from "providers/globals/CurrencyProvider";

import { MimithaCurrencyT } from "interface/common.types";

import { ArrowBottomIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/CurrencySwitch.styled";

const CurrencySwitch: React.FC = () => {
  const [openCurrency, setOpenCurrency] = useState(false);

  const { currency: currentCurrency, changeCurrency } = useCurrencyContext();

  const onChangeCurrency = (e: React.MouseEvent) => {
    setOpenCurrency(false);
    changeCurrency((e.target as HTMLElement).dataset.value as MimithaCurrencyT);
  };

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
              onClick={onChangeCurrency}
            >
              {currency}
            </Styled.CurrencyDropdownItem>
          ))}
        </Styled.CurrencyDropdown>
      )}
    </Styled.CurrencySwitch>
  );
};

export default CurrencySwitch;

import { useState } from "react";

import { ArrowBottomIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/CurrencySwitch.styled";

export default function CurrencySwitch() {
  const [openCurrency, setOpenCurrency] = useState(false);

  return (
    <Styled.CurrencySwitch>
      <button
        className="currency-trigger"
        onClick={() => setOpenCurrency((prev) => !prev)}
      >
        GEL
        <ArrowBottomIcon />
      </button>
      {openCurrency && (
        <ul className="currency-dropdown">
          <li value="GEL">GEL</li>
          <li value="USD">USD</li>
        </ul>
      )}
    </Styled.CurrencySwitch>
  );
}

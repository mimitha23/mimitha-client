import { useTranslation } from "react-i18next";
import { useCurrencyContext } from "providers/globals/CurrencyProvider";

// import * as UI from "./index";
import * as Styled from "./styles/PriceBox.styled";

interface PriceBoxT {
  price: number;
}

const PriceBox: React.FC<PriceBoxT> = ({ price }) => {
  const { t } = useTranslation();
  const { convertPrice, currencySymbol } = useCurrencyContext();

  return (
    <Styled.PriceBox>
      <p className="product-price">
        {t("crossover.price")}:&nbsp;
        <span>{convertPrice(price)}</span>&nbsp;
        {currencySymbol}
      </p>

      {/* <UI.CurrencySwitch /> */}
    </Styled.PriceBox>
  );
};

export default PriceBox;

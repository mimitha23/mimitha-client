import { useTranslation } from "react-i18next";
import { useCurrencyContext } from "providers/CurrencyProvider";

export default function Price({ price }) {
  const { t } = useTranslation();
  const { convertPrice, currencySymbol } = useCurrencyContext();

  return (
    <p className="product-price">
      {t("crossover.price")}:&nbsp;
      <span>{convertPrice(price)}</span>&nbsp;
      {currencySymbol}
    </p>
  );
}

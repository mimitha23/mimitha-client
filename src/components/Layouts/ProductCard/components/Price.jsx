import { useTranslation } from "react-i18next";

export default function Price({ price }) {
  const { t } = useTranslation();

  return (
    <p className="product-price">
      {t("crossover.price")}:&nbsp;<span>{price}</span>&nbsp;₾
    </p>
  );
}

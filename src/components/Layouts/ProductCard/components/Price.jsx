import { useTranslation } from "react-i18next";

export default function Price() {
  const { t } = useTranslation();

  return (
    <p className="product-price">
      {t("crossover.price")}:&nbsp;<span>100</span>&nbsp;₾
    </p>
  );
}

import { useTranslation } from "react-i18next";

export default function SoldOut({ soldout }) {
  const { t } = useTranslation();

  return (
    <div className="product__sold-out">
      <span>{t("crossover.soldout")}</span>
      <span>{soldout}</span>
    </div>
  );
}

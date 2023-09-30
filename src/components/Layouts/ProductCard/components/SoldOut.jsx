import { useTranslation } from "react-i18next";

export default function SoldOut({ soldOut }) {
  const { t } = useTranslation();

  return (
    <div className="product__sold-out">
      <span>{t("crossover.soldOut")}</span>
      <span>{soldOut}</span>
    </div>
  );
}

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function CardActions() {
  const { t } = useTranslation();

  return (
    <div className="product-edit__and__fit-box">
      <button className="edit-btn">
        <Link to="/products/:productId/fit">{t("crossover.goes_on")}</Link>
      </button>
      <button className="edit-btn">
        <Link to="/products/:productId/edit">{t("crossover.edit")}</Link>
      </button>
    </div>
  );
}

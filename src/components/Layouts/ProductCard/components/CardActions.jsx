import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PATHS } from "config/routes";

export default function CardActions({ productId }) {
  const { t } = useTranslation();

  return (
    <div className="product-edit__and__fit-box">
      <button className="edit-btn">
        <Link to={PATHS.fit_products.fullPath({ productId })}>
          {t("crossover.goes_on")}
        </Link>
      </button>
      <button className="edit-btn">
        <Link to={PATHS.edit_product.fullPath({ productId })}>
          {t("crossover.edit")}
        </Link>
      </button>
    </div>
  );
}

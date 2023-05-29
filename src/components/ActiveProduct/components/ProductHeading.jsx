import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { DollarIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/ProductHeading.styled";

export default function ProductHeading() {
  const { t } = useTranslation();

  return (
    <Styled.ProductHeadingContainer>
      <h1 className="product-title">
        <strong>მამაკაცის გრძელმკლავიანი ჰუდი - 100% ბამბა</strong>
      </h1>

      <div className="price-and-edit__container">
        <div className="product-price">
          <span>{t("crossover.price")}: 100 ₾</span>
          <span>
            <DollarIcon />
          </span>
        </div>

        <Link to="/products/:productId/edit" className="edit-link">
          {t("crossover.edit")}
        </Link>
      </div>
    </Styled.ProductHeadingContainer>
  );
}

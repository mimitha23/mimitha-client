import { useTranslation } from "react-i18next";

import { BagIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/ProductFooter.styled";

function ProductFooter() {
  const { t } = useTranslation();

  return (
    <Styled.ProductFooterContainer>
      <button className="product-footer__btn">
        <span className="product-footer__btn-caption">
          {t("crossover.save_design")}
        </span>
        <span className="polygonal-btn"></span>
      </button>
      <button className="product-footer__btn">
        <span className="product-footer__btn-caption">
          {t("crossover.add_to_card")}
        </span>
        <span className="bag-icon">
          <BagIcon />
        </span>
      </button>
    </Styled.ProductFooterContainer>
  );
}

export default ProductFooter;

import { useTranslation } from "react-i18next";

import { staticAssets } from "lib/index";

import { MultipleSlider } from "components/Layouts";
import * as Styled from "./styles/RelatedProducts.styled";

function RelatedProducts() {
  const { t } = useTranslation();

  return (
    <Styled.RelatedProductsContainer>
      <span className="related-products__section-title">
        {t("crossover.related_products")}
      </span>

      <MultipleSlider>
        {staticAssets.map((fig) => (
          <div className="related-products__slider-item" key={fig}>
            <figure className="related-products__slider-item--fig">
              <img src={fig} alt={fig} loading="lazy" />
            </figure>
          </div>
        ))}
      </MultipleSlider>
    </Styled.RelatedProductsContainer>
  );
}

export default RelatedProducts;

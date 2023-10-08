import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  selectRelatedProducts,
  selectRelatedProductsStatus,
} from "store/selectors/activeProduct.selectors";

import { MultipleSlider, Spinner } from "components/Layouts";
import * as Styled from "./styles/RelatedProducts.styled";

function RelatedProducts() {
  const { t } = useTranslation();

  const status = useSelector(selectRelatedProductsStatus);
  const relatedProducts = useSelector(selectRelatedProducts);

  return (
    <Styled.RelatedProductsContainer>
      {!status.loading && relatedProducts[0] && (
        <>
          <span className="related-products__section-title">
            {t("crossover.related_products")}
          </span>

          <MultipleSlider>
            {relatedProducts.map((product) => (
              <div className="related-products__slider-item" key={product._id}>
                <figure className="related-products__slider-item--fig">
                  <img
                    src={product.assets[0]}
                    alt={product.assets[0]}
                    loading="lazy"
                  />
                </figure>
              </div>
            ))}
          </MultipleSlider>
        </>
      )}

      {status.loading && <Spinner />}
    </Styled.RelatedProductsContainer>
  );
}

export default RelatedProducts;

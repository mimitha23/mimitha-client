import { useAppSelector } from "store/hooks";
import { useTranslation } from "react-i18next";

import {
  selectRelatedProducts,
  selectRelatedProductsStatus,
} from "store/selectors/activeProduct.selectors";

import { MultipleSlider, Spinner } from "components/Layouts";
import * as Styled from "./styles/RelatedProducts.styled";

const RelatedProducts: React.FC = () => {
  const { t } = useTranslation();

  const status = useAppSelector(selectRelatedProductsStatus);

  const relatedProducts = useAppSelector(selectRelatedProducts);

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
                    src={product.thumbnails[0]}
                    alt={product.thumbnails[0]}
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
};

export default RelatedProducts;

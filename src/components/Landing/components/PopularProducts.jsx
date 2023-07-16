import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { selectLandingPopularProducts } from "store/selectors/landingSelectors";

import { ProductCard } from "components/Layouts";
import * as Styled from "./styles/PopularProducts.styled";

export default function PopularProducts() {
  const { t } = useTranslation();

  const products = useSelector(selectLandingPopularProducts);

  return (
    <Styled.PopularProducts>
      <div className="popular-products__header">
        <p>{t("landing.popular_products.section_title")}</p>
      </div>
      <div className="popular-products__container">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            cardType="descriptive"
            product={product}
          />
        ))}
      </div>
    </Styled.PopularProducts>
  );
}

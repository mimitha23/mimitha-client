import { useTranslation } from "react-i18next";
import { useAppSelector } from "store/hooks";

import { selectLandingPopularProducts } from "store/selectors/landing.selectors";

import { ProductCard } from "components/Layouts";
import * as Styled from "./styles/PopularProducts.styled";

const PopularProducts: React.FC = () => {
  const { t } = useTranslation();

  const products = useAppSelector(selectLandingPopularProducts);

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
};

export default PopularProducts;

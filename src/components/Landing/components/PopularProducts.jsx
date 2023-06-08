import { useTranslation } from "react-i18next";

import { ProductCard } from "components/Layouts";
import * as Styled from "./styles/PopularProducts.styled";
import { developedProducts } from "lib";

export default function PopularProducts() {
  const { t } = useTranslation();

  return (
    <Styled.PopularProducts>
      <div className="popular-products__header">
        <p>{t("landing.popular_products.section_title")}</p>
      </div>
      <div className="popular-products__container">
        {developedProducts.map((product) => (
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

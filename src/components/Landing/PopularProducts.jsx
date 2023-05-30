import { useTranslation } from "react-i18next";

import { ProductCard } from "components/Layouts";
import * as Styled from "./styles/PopularProducts.styled";

export default function PopularProducts() {
  const { t } = useTranslation();

  return (
    <Styled.PopularProducts>
      <div className="popular-products__header">
        <p>{t("landing.popular_products.section_title")}</p>
      </div>
      <div className="popular-products__container">
        {[1, 2, 3, 4, 5, 6].map((el) => (
          <ProductCard key={`${el}`} cardType="descriptive" />
        ))}
      </div>
    </Styled.PopularProducts>
  );
}

import { useAppSelector } from "store/hooks";
import { useTranslation } from "react-i18next";

import { useTranslationContext } from "providers/globals/I18nextProvider";
import { selectActiveProductDescription } from "store/selectors/activeProduct.selectors";

import ProductDescriptionDetailsBox from "./ProductDescriptionDetailsBox";
import * as Styled from "./styles/ProductDescription.styled";

const ProductDescription: React.FC = () => {
  const { t } = useTranslation();

  const { currentLocale } = useTranslationContext();

  const { seasons, soldOut, styles, textures } = useAppSelector(
    selectActiveProductDescription
  );

  return (
    <Styled.ProductDescription>
      <h2 className="product-description__title">
        {t("crossover.product_description")}
      </h2>

      <ProductDescriptionDetailsBox label={t("crossover.style")}>
        {styles.map((style) => (
          <li key={style._id}>{style[currentLocale]}</li>
        ))}
      </ProductDescriptionDetailsBox>

      <ProductDescriptionDetailsBox label={t("crossover.season")}>
        {seasons.map((season) => (
          <li key={season._id}>{season[currentLocale]}</li>
        ))}
      </ProductDescriptionDetailsBox>

      <ProductDescriptionDetailsBox label={t("crossover.texture")}>
        {textures.map((texture) => (
          <li key={texture._id}>
            <span>{texture.percentage}%</span>
            &nbsp;
            <span>{texture[currentLocale]}</span>
          </li>
        ))}
      </ProductDescriptionDetailsBox>

      <div className="product-description__sold">
        <span>{t("crossover.items_sold_out")}</span>
        &nbsp;
        <span>{soldOut}</span>
      </div>
    </Styled.ProductDescription>
  );
};

export default ProductDescription;

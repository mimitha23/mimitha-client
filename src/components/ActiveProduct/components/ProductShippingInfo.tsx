import { useTranslation } from "react-i18next";
import * as Styled from "./styles/ProductShippingInfo.styled";

const ProductShippingInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Styled.ProductShippingInfo>
      <div>
        <p>{t("crossover.trans_in_georgia")}</p>
        <p>
          {t("crossover.tbilisi")} <span /> {t("crossover.price")} &mdash;
          {t("crossover.day")}
        </p>
        <p>
          {t("crossover.region")} <span></span> {t("crossover.price")} &mdash;
          {t("crossover.day")}
        </p>
      </div>

      <div>
        <p>{t("crossover.trans_in_abroad")}</p>
        <p>
          {t("crossover.company")} <span /> {t("crossover.price")} &mdash;
          {t("crossover.day")}
        </p>
      </div>
    </Styled.ProductShippingInfo>
  );
};

export default ProductShippingInfo;

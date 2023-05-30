import { useTranslation } from "react-i18next";
import * as Styled from "./styles/ProductDescription.styled";

export default function ProductDescription() {
  const { t } = useTranslation();

  return (
    <Styled.EditorDescription>
      <h2 className="product-description__title">
        {t("crossover.product_description")}
      </h2>

      <div className="product-description__box">
        <span>{t("crossover.style")}</span>

        <hr className="product-description__info-devider"></hr>

        <span>
          <span>ყოველდღიური / </span>
          <span>სპორტული / </span>
          <span>მსუბუქი</span>
        </span>
      </div>

      <div className="product-description__box">
        <span>{t("crossover.season")}</span>

        <hr className="product-description__info-devider"></hr>

        <span>
          <span>შემოდგომა / </span>
          <span>საზაფხულო</span>
        </span>
      </div>

      <div className="product-description__box">
        <span>{t("crossover.texture")}</span>

        <hr className="product-description__info-devider"></hr>

        <span>100% ბამბა</span>
      </div>

      <div className="product-description__sold">
        <span>{t("crossover.items_sold_out")}</span>
        &nbsp;
        <span>167</span>
      </div>
    </Styled.EditorDescription>
  );
}

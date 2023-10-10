import { useTranslation } from "react-i18next";

import { BagIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/AddToCartButton.styled";

export default function AddToCartButton({ onAddToCart }) {
  const { t } = useTranslation();

  return (
    <Styled.AddToCartButton onClick={onAddToCart}>
      <span>{t("crossover.add_to_card")}</span>
      <span>
        <BagIcon />
      </span>
    </Styled.AddToCartButton>
  );
}

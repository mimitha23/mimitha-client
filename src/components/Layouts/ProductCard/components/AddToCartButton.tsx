import { useTranslation } from "react-i18next";

import { BagIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/AddToCartButton.styled";

interface AddToCartButtonT {
  onAddToCart: (e: React.MouseEvent) => void;
}

const AddToCartButton: React.FC<AddToCartButtonT> = ({ onAddToCart }) => {
  const { t } = useTranslation();

  return (
    <Styled.AddToCartButton onClick={onAddToCart}>
      <span>{t("crossover.add_to_card")}</span>

      <span>
        <BagIcon />
      </span>
    </Styled.AddToCartButton>
  );
};

export default AddToCartButton;

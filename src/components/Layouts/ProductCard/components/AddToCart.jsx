import { useTranslation } from "react-i18next";
import { BagIcon } from "components/Layouts/Icons";

export default function AddToCart({ onAddToCart }) {
  const { t } = useTranslation();

  return (
    <button className="add-to-cart__btn" onClick={onAddToCart}>
      <span>{t("crossover.add_to_card")}</span>
      <span>
        <BagIcon />
      </span>
    </button>
  );
}

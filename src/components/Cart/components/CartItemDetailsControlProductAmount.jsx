import { MinusIcon, PlusIcon } from "components/Layouts/Icons/index";
import { useTranslation } from "react-i18next";

export default function CartItemDetailsControlProductAmount({
  productAmount,
  productSize,
  onProductQuantity,
}) {
  const { t } = useTranslation();

  return (
    <div className="cart-item__details-box--content__product-amount--box">
      <button
        onClick={() => onProductQuantity(-1)}
        disabled={productAmount === 1}
        title={
          productAmount === 1
            ? t("crossover.decrease_product_quantity_warning")
            : t("crossover.decrease_product_quantity")
        }
      >
        <MinusIcon />
      </button>

      <input
        type="number"
        min={1}
        value={productAmount}
        onChange={(e) => onProductQuantity(+e.currentTarget.value)}
        readOnly={true}
      />

      <button
        onClick={() => onProductQuantity(1)}
        disabled={productAmount >= productSize.amount}
        title={
          productAmount >= productSize.amount
            ? t("crossover.increase_product_quantity_warning", {
                size: productSize.size.toUpperCase(),
                amount: productSize.amount,
              })
            : t("crossover.increase_product_quantity")
        }
      >
        <PlusIcon />
      </button>
    </div>
  );
}

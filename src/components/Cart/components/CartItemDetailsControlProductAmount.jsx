import { useTranslation } from "react-i18next";
import { MAX_CART_ITEM_QUANTITY_PER_PRODUCT } from "config/consts";

import { MinusIcon, PlusIcon } from "components/Layouts/Icons/index";

export default function CartItemDetailsControlProductAmount({
  productAmount,
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
            ? t("cart.decrease_product_quantity_warning")
            : t("cart.decrease_product_quantity")
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
        disabled={productAmount >= MAX_CART_ITEM_QUANTITY_PER_PRODUCT}
        title={
          productAmount >= MAX_CART_ITEM_QUANTITY_PER_PRODUCT
            ? t("cart.increase_product_quantity_warning", {
                max: MAX_CART_ITEM_QUANTITY_PER_PRODUCT,
              })
            : t("cart.increase_product_quantity")
        }
      >
        <PlusIcon />
      </button>
    </div>
  );
}

import { MinusIcon, PlusIcon } from "components/Layouts/Icons/index";

export default function CartItemDetailsControllProductAmount({
  productAmount,
  handleProductAmount,
}) {
  return (
    <div className="cart-item__details-box--content__product-amount--box">
      <button
        value={productAmount - 1}
        onClick={(e) => handleProductAmount(e.currentTarget.value)}
      >
        <MinusIcon />
      </button>
      <input
        type="number"
        min={1}
        value={productAmount}
        onChange={(e) => handleProductAmount(e.currentTarget.value)}
      />
      <button
        value={productAmount + 1}
        onClick={(e) => handleProductAmount(e.currentTarget.value)}
      >
        <PlusIcon />
      </button>
    </div>
  );
}

import { BagIcon } from "components/Layouts/Icons";

export default function AddToCart(props) {
  return (
    <button className="add-to-cart__btn">
      <span>დაამატე კალათაში</span>
      <span>
        <BagIcon />
      </span>
    </button>
  );
}

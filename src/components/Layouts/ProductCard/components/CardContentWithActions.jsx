import CardActions from "./CardActions";
import AddToCart from "./AddToCart";
import CurrencySwitch from "./CurrencySwitch";
import Price from "./Price";
import ProductTitle from "./ProductTitle";

export default function CardContentWithActions() {
  return (
    <>
      <ProductTitle />
      <Price />
      <AddToCart />
      <hr className="product-content__devider" />

      <CurrencySwitch />
      <CardActions />
    </>
  );
}

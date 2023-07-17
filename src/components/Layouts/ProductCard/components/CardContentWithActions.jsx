import CardActions from "./CardActions";
import AddToCart from "./AddToCart";
import CurrencySwitch from "./CurrencySwitch";
import Price from "./Price";
import ProductTitle from "./ProductTitle";

export default function CardContentWithActions({ title, price, productId }) {
  return (
    <>
      <ProductTitle title={title} productId={productId} />
      <Price price={price} />
      <AddToCart />
      <hr className="product-content__devider" />

      <CurrencySwitch />
      <CardActions productId={productId} />
    </>
  );
}

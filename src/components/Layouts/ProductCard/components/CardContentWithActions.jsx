import {
  CardActions,
  AddToCart,
  CurrencySwitch,
  Price,
  ProductTitle,
} from "./";

export default function CardContentWithActions(props) {
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

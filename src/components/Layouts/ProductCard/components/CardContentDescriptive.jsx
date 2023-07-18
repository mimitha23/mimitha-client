import Price from "./Price";
import ProductTitle from "./ProductTitle";
import CurrencySwitch from "./CurrencySwitch";
import SoldOut from "./SoldOut";

export default function CardContentDescriptive({
  price,
  title,
  soldOut,
  productId,
}) {
  return (
    <>
      <ProductTitle title={title} productId={productId} />
      <Price price={price} />
      <CurrencySwitch />
      <SoldOut soldOut={soldOut} />
    </>
  );
}

import Price from "./Price";
import ProductTitle from "./ProductTitle";
import CurrencySwitch from "./CurrencySwitch";
import SoldOut from "./SoldOut";

export default function CardContentDescriptive({ price, title, soldout }) {
  return (
    <>
      <ProductTitle title={title} />
      <Price price={price} />
      <CurrencySwitch />
      <SoldOut soldout={soldout} />
    </>
  );
}

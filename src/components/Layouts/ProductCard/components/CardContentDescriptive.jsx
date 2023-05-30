import Price from "./Price";
import ProductTitle from "./ProductTitle";
import CurrencySwitch from "./CurrencySwitch";

export default function CardContentDescriptive() {
  return (
    <>
      <ProductTitle />
      <Price />
      <CurrencySwitch />
    </>
  );
}

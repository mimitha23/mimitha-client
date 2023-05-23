import { CurrencySwitch, Price, ProductTitle } from "./";

export default function CardContentDescriptive(props) {
  return (
    <>
      <ProductTitle />
      <Price />

      <CurrencySwitch />
    </>
  );
}

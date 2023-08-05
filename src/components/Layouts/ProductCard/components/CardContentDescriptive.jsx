import Price from "./Price";
import ProductTitle from "./ProductTitle";
// import CurrencySwitch from "./CurrencySwitch";
import SoldOut from "./SoldOut";

export default function CardContentDescriptive({
  price,
  title,
  soldOut,
  productId,
  linkState,
}) {
  return (
    <>
      <ProductTitle title={title} productId={productId} linkState={linkState} />
      <div className="product-card__price-currency--box">
        <Price price={price} />
        {/* <CurrencySwitch /> */}
      </div>
      <SoldOut soldOut={soldOut} />
    </>
  );
}

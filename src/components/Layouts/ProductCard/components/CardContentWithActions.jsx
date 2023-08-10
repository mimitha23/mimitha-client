import CardActions from "./CardActions";
import AddToCart from "./AddToCart";
// import CurrencySwitch from "./CurrencySwitch";
import Price from "./Price";
import ProductTitle from "./ProductTitle";
import SoldOut from "./SoldOut";

export default function CardContentWithActions({
  title,
  price,
  soldOut,
  productId,
  registeredProductId,
  isEditable,
  onAddToCart,
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

      {isEditable && (
        <CardActions
          productId={productId}
          registeredProductId={registeredProductId}
        />
      )}

      <hr className="product-content__devider" />

      <AddToCart onAddToCart={onAddToCart} />
    </>
  );
}

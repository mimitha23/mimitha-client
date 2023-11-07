import * as UI from "./index";

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
      <UI.ProductTitle
        title={title}
        productId={productId}
        linkState={linkState}
      />

      <UI.PriceBox price={price} />

      <UI.SoldOut soldOut={soldOut} />

      {isEditable && (
        <UI.CardActions
          productId={productId}
          registeredProductId={registeredProductId}
        />
      )}

      <UI.Divider />

      <UI.AddToCartButton onAddToCart={onAddToCart} />
    </>
  );
}

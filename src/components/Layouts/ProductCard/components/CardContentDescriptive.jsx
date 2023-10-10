import * as UI from "./index";

export default function CardContentDescriptive({
  price,
  title,
  soldOut,
  productId,
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
    </>
  );
}

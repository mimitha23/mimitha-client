import * as UI from "./index";

import { LocationStateT } from "interface/common.types";
import { ProductTitleT } from "interface/DB/product.types";

interface CardContentWithActionsT {
  price: number;
  soldOut: number;
  productId: string;
  isEditable: boolean;
  title: ProductTitleT;
  registeredProductId: string;
  linkState: Partial<LocationStateT>;
  // onAddToCart: (e:React.MouseEvent) => void;
}

const CardContentWithActions: React.FC<CardContentWithActionsT> = (props) => {
  return (
    <>
      <UI.ProductTitle
        title={props.title}
        productId={props.productId}
        linkState={props.linkState}
      />

      <UI.PriceBox price={props.price} />

      <UI.SoldOut soldOut={props.soldOut} />

      {props.isEditable && (
        <UI.CardActions
          productId={props.productId}
          registeredProductId={props.registeredProductId}
        />
      )}

      {/* <UI.Divider /> */}

      {/* <UI.AddToCartButton onAddToCart={onAddToCart} /> */}
    </>
  );
};

export default CardContentWithActions;

import * as UI from "./index";

import { LocationStateT } from "interface/common.types";
import { ProductTitleT } from "interface/DB/product.types";

interface CardContentDescriptiveT {
  price: number;
  soldOut: number;
  productId: string;
  title: ProductTitleT;
  linkState: Partial<LocationStateT>;
}

const CardContentDescriptive: React.FC<CardContentDescriptiveT> = (props) => {
  return (
    <>
      <UI.ProductTitle
        title={props.title}
        productId={props.productId}
        linkState={props.linkState}
      />

      <UI.PriceBox price={props.price} />

      <UI.SoldOut soldOut={props.soldOut} />
    </>
  );
};

export default CardContentDescriptive;

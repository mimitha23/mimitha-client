import { Link } from "react-router-dom";

import { DYNAMIC_PATHS } from "config/paths";
import { useTranslationContext } from "providers/globals/I18nextProvider";

import * as Styled from "./styles/ProductTitle.styled";

import { LocationStateT } from "interface/common.types";
import { ProductTitleT } from "interface/DB/product.types";

interface ProductTitleElT {
  productId: string;
  title: ProductTitleT;
  linkState: Partial<LocationStateT>;
}

const ProductTitle: React.FC<ProductTitleElT> = (props) => {
  const { currentLocale } = useTranslationContext();

  return (
    <Styled.ProductTitle
      className="product-title"
      title={props.title[currentLocale]}
    >
      <Link
        state={{ ...props.linkState }}
        className="product-content__title-link"
        to={DYNAMIC_PATHS.active_product_page(props.productId)}
      >
        {props.title[currentLocale]}
      </Link>
    </Styled.ProductTitle>
  );
};

export default ProductTitle;

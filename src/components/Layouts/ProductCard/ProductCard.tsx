import * as UI from "./components/index";
import * as Styled from "./ProductCard.styled";

import { ProductShortInfoT } from "interface/DB/product.types";

interface ProductCardT {
  cardType?: "withActions";
  product: ProductShortInfoT;
  showAddToList?: boolean;
}

const ProductCard: React.FC<ProductCardT> = ({
  cardType = "withActions",
  product,
  showAddToList = true,
}) => {
  return (
    <Styled.ProductCard data-product-card>
      {product && (
        <>
          <UI.CardFig
            productId={product._id}
            assets={product.thumbnails}
            alt={product.title}
            showAddToList={showAddToList}
            linkState={{
              title: product.title,
              category: product.product.category.query,
              productType: product.product.productType,
            }}
          />

          <UI.CardContent product={product} cardType={cardType} />
        </>
      )}
    </Styled.ProductCard>
  );
};

export default ProductCard;

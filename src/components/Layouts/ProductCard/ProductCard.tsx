import * as UI from "./components/index";
import * as Styled from "./ProductCard.styled";

import { ProductShortInfoT } from "interface/DB/product.types";

interface ProductCardT {
  showAddToList?: boolean;
  product: ProductShortInfoT;
  cardType?: "withActions" | "descriptive";
}

const ProductCard: React.FC<ProductCardT> = ({
  product,
  showAddToList = true,
  cardType = "withActions",
}) => {
  return (
    <Styled.ProductCard data-product-card>
      {product && (
        <>
          <UI.CardFig
            alt={product.title}
            productId={product._id}
            showAddToList={showAddToList}
            thumbnails={product.thumbnails}
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

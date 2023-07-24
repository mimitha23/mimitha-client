import {
  CardFig,
  CardContentWithActions,
  CardContentDescriptive,
} from "./components/index";
import * as Styled from "./ProductCard.styled";
import { CardContent } from "./components/styles/CardContent.styled";

export default function ProductCard({ cardType = "withActions", product }) {
  return (
    <Styled.ProductCard data-product-card>
      <CardFig
        productId={product._id}
        img={product.assets[0]}
        alt={product.title}
        linkState={{
          title: product.title,
          category: product.product.category?.query,
          productType: product.product.productType,
        }}
      />

      <CardContent cardType={cardType}>
        {cardType === "withActions" && (
          <CardContentWithActions
            title={product.title}
            price={product.price}
            productId={product._id}
            linkState={{
              title: product.title,
              category: product.product.category?.query,
              productType: product.product.productType,
            }}
          />
        )}
        {cardType === "descriptive" && (
          <CardContentDescriptive
            title={product.title}
            price={product.price}
            soldOut={product.soldOut}
            productId={product._id}
            linkState={{
              title: product.title,
              category: product.product.category?.query,
              productType: product.product.productType,
            }}
          />
        )}
      </CardContent>
    </Styled.ProductCard>
  );
}

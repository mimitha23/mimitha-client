import { useAddToCart } from "hooks/events";
import * as UI from "./index";
import * as Styled from "./styles/CardContent.styled";

export default function CardContent({ product, cardType }) {
  const { onAddToCart } = useAddToCart();

  return (
    <Styled.CardContent cardType={cardType}>
      {cardType === "withActions" && (
        <UI.CardContentWithActions
          title={product.title}
          price={product.price}
          productId={product._id}
          registeredProductId={product.product._id}
          soldOut={product.soldOut}
          isEditable={product.product.isEditable}
          onAddToCart={() =>
            onAddToCart({
              ...product,
              size: product.size.find((s) => s.amount > 0),
            })
          }
          linkState={{
            title: product.title,
            category: product.product.category.query,
            productType: product.product.productType,
          }}
        />
      )}

      {cardType === "descriptive" && (
        <UI.CardContentDescriptive
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
    </Styled.CardContent>
  );
}

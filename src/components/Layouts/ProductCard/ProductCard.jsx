/* eslint-disable react-hooks/exhaustive-deps */
// import { useCallback } from "react";
// import { useDispatch } from "react-redux";

// import { shoppingCartActions } from "store/reducers/shoppingCartReducer";

import {
  CardFig,
  CardContentWithActions,
  CardContentDescriptive,
} from "./components/index";
import * as Styled from "./ProductCard.styled";
import { CardContent } from "./components/styles/CardContent.styled";

export default function ProductCard({
  cardType = "withActions",
  product,
  showAddToList = true,
}) {
  // const dispatch = useDispatch();

  // const onAddToCart = useCallback(() => {
  //   dispatch(
  //     shoppingCartActions.addToCart({
  //       productId: product._id,
  //       color: product.color,
  //       size: product.size.find((s) => s.amount > 0),
  //       price: product.price,
  //       title: product.title,
  //       thumbnail: product.assets[0],
  //       quantity: 1,
  //     })
  //   );
  // }, []);

  return (
    <Styled.ProductCard data-product-card>
      {product && (
        <>
          <CardFig
            productId={product._id}
            assets={product.assets}
            alt={product.title}
            showAddToList={showAddToList}
            linkState={{
              title: product.title,
              category: product.product.category.query,
              productType: product.product.productType,
            }}
          />

          <CardContent cardType={cardType}>
            {cardType === "withActions" && (
              <CardContentWithActions
                title={product.title}
                price={product.price}
                productId={product._id}
                registeredProductId={product.product._id}
                soldOut={product.soldOut}
                isEditable={product.product.isEditable}
                // onAddToCart={onAddToCart}
                linkState={{
                  title: product.title,
                  category: product.product.category.query,
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
        </>
      )}
    </Styled.ProductCard>
  );
}

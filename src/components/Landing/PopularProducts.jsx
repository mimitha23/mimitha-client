import { ProductCard } from "components/Layouts";
import * as Styled from "./styles/PopularProducts.styled";
import { popularProductsData } from "lib";

export default function PopularProducts(props) {
  const productsRenderList = popularProductsData.map((el) => (
    <ProductCard key={`${el}`} />
  ));

  return <Styled.PopularProducts>{productsRenderList}</Styled.PopularProducts>;
}

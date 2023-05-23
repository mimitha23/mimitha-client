import { ProductCard } from "components/Layouts";
import * as Styled from "./styles/PopularProducts.styled";
import { popularProductsData } from "lib";

export default function PopularProducts() {
  return (
    <Styled.PopularProducts>
      {popularProductsData.map((el) => (
        <ProductCard key={`${el}`} />
      ))}
    </Styled.PopularProducts>
  );
}

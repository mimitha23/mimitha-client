import { ProductCard } from "components/Layouts";
import * as Styled from "./styles/PopularProducts.styled";
import { popularProductsData } from "lib/index";

export default function PopularProducts() {
  return (
    <Styled.PopularProducts>
      <div className="popular-products__header">
        <p>ყველაზე პოპულარული</p>
      </div>
      <div className="popular-products__container">
        {popularProductsData.map((el) => (
          <ProductCard key={`${el}`} cardType="descriptive" />
        ))}
      </div>
    </Styled.PopularProducts>
  );
}

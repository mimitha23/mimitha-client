import { useSelector } from "react-redux";
import { selectAllProducts } from "store/selectors/product.selectors";

import { ContainerFull, ProductCard } from "components/Layouts";
import * as Styled from "./styles/ProductsList.styled";

export default function ProductsList() {
  const allProducts = useSelector(selectAllProducts);

  return (
    <ContainerFull style={{ padding: 0 }}>
      <Styled.ProductsList>
        {allProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Styled.ProductsList>
    </ContainerFull>
  );
}

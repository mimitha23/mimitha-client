import { useAppSelector } from "store/hooks";
import { selectAllProducts } from "store/selectors/product.selectors";

import { ContainerFull, ProductCard } from "components/Layouts";
import * as Styled from "./styles/ProductsList.styled";

const ProductsList: React.FC = () => {
  const allProducts = useAppSelector(selectAllProducts);

  return (
    <ContainerFull
      attributes={{
        style: { padding: 0 },
      }}
    >
      <Styled.ProductsList>
        {allProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Styled.ProductsList>
    </ContainerFull>
  );
};

export default ProductsList;

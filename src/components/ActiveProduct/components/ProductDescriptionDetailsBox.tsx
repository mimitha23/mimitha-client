import * as Styled from "./styles/ProductDescriptionDetailsBox.styled";

interface ProductDescriptionDetailsBoxT {
  label: string;
  children: React.ReactNode;
}

const ProductDescriptionDetailsBox: React.FC<ProductDescriptionDetailsBoxT> = ({
  label,
  children,
}) => {
  return (
    <Styled.ProductDescriptionDetailsBox>
      <span>{label}</span>

      <hr className="product-description__info-devider"></hr>

      <ul className="details_list">{children}</ul>
    </Styled.ProductDescriptionDetailsBox>
  );
};

export default ProductDescriptionDetailsBox;

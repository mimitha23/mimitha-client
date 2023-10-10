import * as Styled from "./styles/ProductDescriptionDetailsBox.styled";

export default function ProductDescriptionDetailsBox({ children, label }) {
  return (
    <Styled.ProductDescriptionDetailsBox>
      <span>{label}</span>

      <hr className="product-description__info-devider"></hr>

      <ul className="details_list">{children}</ul>
    </Styled.ProductDescriptionDetailsBox>
  );
}

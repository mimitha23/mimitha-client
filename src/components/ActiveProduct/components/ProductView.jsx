import * as Styled from "./styles/ProductView.styled";

export default function ProductView(props) {
  return (
    <Styled.ProductView className="editor-view">
      <figure className="editor-fig">
        <img src="/assets/images/hoodie_front.jpg" alt="hoodie" />
      </figure>
      {/* <figure className="editor-fig">
        <img src="/assets/images/hoodie_back.jpg" alt="hoodie" />
      </figure> */}
    </Styled.ProductView>
  );
}

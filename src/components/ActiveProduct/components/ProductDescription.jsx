import * as Styled from "./styles/ProductDescription.styled";

export default function ProductDescription(props) {
  return (
    <Styled.EditorDescription>
      <h2 className="product-description__title">პროდუქტის აღწერა</h2>

      <div className="product-description__box">
        <span>სტილი</span>

        <hr className="product-description__info-devider"></hr>

        <span>
          <span>ყოველდღიური / </span>
          <span>სპორტული / </span>
          <span>მსუბუქი</span>
        </span>
      </div>

      <div className="product-description__box">
        <span>სეზონი</span>

        <hr className="product-description__info-devider"></hr>

        <span>
          <span>შემოდგომა / </span>
          <span>საზაფხულო</span>
        </span>
      </div>

      <div className="product-description__box">
        <span>მასალა</span>

        <hr className="product-description__info-devider"></hr>

        <span>100% ბამბა</span>
      </div>

      <div className="product-description__sold">
        გაყიდულია ჯამში <span>167</span> ერთეული
      </div>
    </Styled.EditorDescription>
  );
}

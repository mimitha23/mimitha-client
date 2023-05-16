import * as Styled from "./styles/ProductShippingInfo.styled";

export default function EditorShippingInfo() {
  return (
    <Styled.ProductShippingInfo>
      <div>
        <p>მიწოდება საქართველოში</p>
        <p>
          თბილისი <hr /> ფასი --- დღე
        </p>
        <p>
          რეგიონი <div></div> ფასი --- დღე
        </p>
      </div>

      <div>
        <p>მიწოდება საზღვარგარეთ</p>
        <p>
          კომპანია <hr /> ფასი --- დღე
        </p>
      </div>
    </Styled.ProductShippingInfo>
  );
}

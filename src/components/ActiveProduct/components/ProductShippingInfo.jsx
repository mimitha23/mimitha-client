import * as Styled from "./styles/ProductShippingInfo.styled";

export default function ProductShippingInfo() {
  return (
    <Styled.ProductShippingInfo>
      <div>
        <p>მიწოდება საქართველოში</p>
        <p>
          თბილისი <span /> ფასი --- დღე
        </p>
        <p>
          რეგიონი <span></span> ფასი --- დღე
        </p>
      </div>

      <div>
        <p>მიწოდება საზღვარგარეთ</p>
        <p>
          კომპანია <span /> ფასი --- დღე
        </p>
      </div>
    </Styled.ProductShippingInfo>
  );
}

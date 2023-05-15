import * as Styled from "./styles/EditorShippingInfo.styled";

export default function EditorShippingInfo(props) {
  return (
    <Styled.EditorShippingInfo className="no_margin">
      <div>
        <p>მიწოდება საქართველოში</p>
        <p>
          თბილისი <div></div> ფასი --- დღე
        </p>
        <p>
          რეგიონი <div></div> ფასი --- დღე
        </p>
      </div>
      <div>
        <p>მიწოდება საზღვარგარეთ</p>
        <p>
          კომპანია <div></div> ფასი --- დღე
        </p>
      </div>
    </Styled.EditorShippingInfo>
  );
}

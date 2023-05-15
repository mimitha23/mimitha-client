import * as Styled from "./styles/EditorHeading.styled";
import { FaDollarSign } from "react-icons/fa";

export default function EditorHeading(props) {
  return (
    <Styled.EditorHeadingContainer>
      <h1>მამაკაცის გრძელმკლავიანი ჰუდი - 100% ბამბა</h1>
      <div className="price">
        <div>
          <span>ფასი: 100 ლარი</span>
        </div>
        <div>
          <FaDollarSign />
        </div>
      </div>
    </Styled.EditorHeadingContainer>
  );
}

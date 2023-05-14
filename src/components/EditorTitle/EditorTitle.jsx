import * as Styled from "./EditorTitle.Styled";
import { FaDollarSign } from "react-icons/fa";

export default function EditorTitle(props) {
  return (
    <Styled.EditorTitle>
      <h1>მამაკაცის გრძელმკლავიანი ჰუდი - 100% ბამბა</h1>
      <div className="price">
        <div>
          <span>ფასი: 100 ლარი</span>
        </div>
        <div>
          <FaDollarSign />
        </div>
      </div>
    </Styled.EditorTitle>
  );
}

import { StyledEditorTitle, StyledPrice } from "./EditorTitle.Styled";
import { FaDollarSign } from "react-icons/fa";

export default function EditorTitle(props) {
  return (
    <StyledEditorTitle>
      <h1>მამაკაცის გრძელმკლავიანი ჰუდი - 100% ბამბა</h1>
      <StyledPrice>
        <div>
          <span>ფასი: 100 ლარი</span>
        </div>
        <div>
          <FaDollarSign />
        </div>
      </StyledPrice>
    </StyledEditorTitle>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";

import * as Styled from "./styles/EditorActions.styled";
import EditorActionDropdown from "./EditorActionDropdown";

function EditorActions() {
  const [activeDropdown, setActiveDropdown] = useState(false);

  return (
    <Styled.EditorActionsContainer>
      <EditorActionDropdown
        name="pocket"
        variantType="pocket"
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
      />

      <EditorActionDropdown
        name="zipper"
        variantType="zipper"
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
      />

      <EditorActionDropdown
        name="button see"
        variantType="button"
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
      />

      <EditorActionDropdown
        name="cuff"
        variantType="cuff"
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
      />

      <EditorActionDropdown
        name="collar"
        variantType="collar"
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
      />

      <Link to="/products/:productId" className="finish-btn">
        Finish Editing
      </Link>
    </Styled.EditorActionsContainer>
  );
}

export default EditorActions;

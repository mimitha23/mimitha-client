import { useState } from "react";
import { Link } from "react-router-dom";

import * as Styled from "./styles/EditorActions.styled";
import EditorActionDropdown from "./EditorActionDropdown";

function EditorActions() {
  const [activeDropdown, setActiveDropdown] = useState(false);

  return (
    <Styled.EditorActionsContainer>
      <EditorActionDropdown
        name="ჯიბე"
        variantType="pocket"
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
      />

      <EditorActionDropdown
        name="ელვა"
        variantType="zipper"
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
      />

      <EditorActionDropdown
        name="ღილი"
        variantType="button"
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
      />

      <EditorActionDropdown
        name="მანჟეტი"
        variantType="cuff"
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
      />

      <EditorActionDropdown
        name="საყელო"
        variantType="collar"
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
      />

      <Link to="/products/:productId" className="finish-btn">
        დაასრულეთ რედაქტირება
      </Link>
    </Styled.EditorActionsContainer>
  );
}

export default EditorActions;

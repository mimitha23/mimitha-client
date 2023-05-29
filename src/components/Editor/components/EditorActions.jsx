import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import * as Styled from "./styles/EditorActions.styled";
import EditorActionDropdown from "./EditorActionDropdown";

function EditorActions() {
  const { t } = useTranslation();

  const [activeDropdown, setActiveDropdown] = useState(false);

  return (
    <Styled.EditorActionsContainer>
      <div className="editor-actions__list">
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
      </div>

      <Link to="/products/:productId" className="finish-btn">
        {t("crossover.finish_edit")}
      </Link>
    </Styled.EditorActionsContainer>
  );
}

export default EditorActions;

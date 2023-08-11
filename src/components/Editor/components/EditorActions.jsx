import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { selectEditorVariants } from "store/selectors/editorSelectors";
import { PATHS } from "config/routes";

import EditorActionDropdown from "./EditorActionDropdown";
import * as Styled from "./styles/EditorActions.styled";

export default function EditorActions({ productId }) {
  const { t } = useTranslation();

  const [activeDropdown, setActiveDropdown] = useState(false);

  const editorVariants = useSelector(selectEditorVariants);

  console.log(editorVariants);

  return (
    <Styled.EditorActionsContainer>
      <div className="editor-actions__list">
        {editorVariants &&
          Object.keys(editorVariants).map((variant) => (
            <EditorActionDropdown
              key={variant._id}
              name="ჯიბე"
              variantType="pocket"
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />
          ))}

        {/* <EditorActionDropdown
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
        /> */}
      </div>

      <Link
        to={PATHS.active_product.fullPath({ productId })}
        className="finish-btn"
      >
        {t("crossover.finish_edit")}
      </Link>
    </Styled.EditorActionsContainer>
  );
}

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

  return (
    <Styled.EditorActionsContainer>
      <div className="editor-actions__list">
        {editorVariants &&
          Object.keys(editorVariants).map((key) => (
            <EditorActionDropdown
              key={editorVariants[key]._id}
              name={editorVariants[key].type}
              variantType={editorVariants[key].type}
              variants={editorVariants[key].variants}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />
          ))}
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

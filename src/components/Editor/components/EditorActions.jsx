import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useEditorContext } from "providers/EditorProvider";
import { PATHS } from "config/routes";
import EditorActionDropdown from "./EditorActionDropdown";
import * as Styled from "./styles/EditorActions.styled";

export default function EditorActions({ productId }) {
  const { t } = useTranslation();

  const { editorVariants } = useEditorContext();

  return (
    <Styled.EditorActionsContainer>
      <div className="editor-actions__list">
        {editorVariants &&
          Object.keys(editorVariants)
            .sort()
            .map((key) => (
              <EditorActionDropdown
                key={editorVariants[key]._id}
                variant={editorVariants[key]}
              />
            ))}
      </div>

      <Link
        to={PATHS.active_product.fullPath({ productId })}
        state={{ productId }}
        className="finish-btn"
      >
        {t("crossover.finish_edit")}
      </Link>
    </Styled.EditorActionsContainer>
  );
}

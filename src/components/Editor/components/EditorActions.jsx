import * as UI from "./";
import * as Styled from "./styles/EditorActions.styled";

export default function EditorActions({ productId }) {
  return (
    <Styled.EditorActionsContainer>
      <UI.EditorDropdownsList />

      <UI.FinishEditButton productId={productId} />
    </Styled.EditorActionsContainer>
  );
}

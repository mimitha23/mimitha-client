import * as UI from ".";
import * as Styled from "./styles/EditorActions.styled";

interface EditorActionsT {
  productId: string;
}

const EditorActions: React.FC<EditorActionsT> = ({ productId }) => {
  return (
    <Styled.EditorActionsContainer>
      <UI.EditorDropdownsList />

      <UI.FinishEditButton productId={productId} />
    </Styled.EditorActionsContainer>
  );
};

export default EditorActions;

import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

import {
  selectAllUserLists,
  selectProductToAddToListId,
  selectCreatingListTitle,
  selectIsCreatingList,
} from "store/selectors/user/userListsSelectors";
import { useUserListQuery } from "hooks/api/user";

import { CloseXIcon } from "components/Layouts/Icons";
import UserLists from "./UserLists";
import CreateListField from "./CreateListField";
import CreateListButton from "./CreateListButton";
import * as Styled from "./AddToListPopup.styled";

export default function AddToListPopup() {
  const allUserLists = useSelector(selectAllUserLists);
  const productToAddToListId = useSelector(selectProductToAddToListId);
  const isCreatingList = useSelector(selectIsCreatingList);
  const creatingListTitle = useSelector(selectCreatingListTitle);

  const {
    openAddToListPopup,
    onStartListCreation,
    onCancelListCreation,
    onSetNewListTitle,
    createListQuery,
    addToListQuery,
  } = useUserListQuery(productToAddToListId);

  function onClosePopup() {
    openAddToListPopup({ productId: "" });
    if (isCreatingList) onCancelListCreation();
  }

  return createPortal(
    <Styled.AddToListPopup className="active-modal" onClick={onClosePopup}>
      <div onClick={(e) => e.stopPropagation()} className="user-lists__popup">
        <button className="close-btn" onClick={onClosePopup}>
          <CloseXIcon />
        </button>

        <UserLists
          allUserLists={allUserLists}
          productToAddToListId={productToAddToListId}
          onAddToList={(listId) =>
            addToListQuery({
              listId,
              productId: productToAddToListId,
            })
          }
        />

        {isCreatingList && (
          <CreateListField
            value={creatingListTitle}
            onChange={(e) => onSetNewListTitle(e.target.value)}
            onCancel={onCancelListCreation}
            onCreate={() =>
              createListQuery({
                title: creatingListTitle,
                productId: productToAddToListId,
              })
            }
          />
        )}

        {!isCreatingList && <CreateListButton onClick={onStartListCreation} />}
      </div>
    </Styled.AddToListPopup>,
    document.getElementById("portal")
  );
}

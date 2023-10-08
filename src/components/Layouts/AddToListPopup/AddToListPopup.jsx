import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

import { useUserListEvents } from "hooks/events";
import { selectProductToAddToListId } from "store/selectors/user/userLists.selectors";

import UserLists from "./UserLists";
import CreateListField from "./CreateListField";
import CreateListButton from "./CreateListButton";
import { CloseXIcon } from "components/Layouts/Icons";
import * as Styled from "./AddToListPopup.styled";

export default function AddToListPopup() {
  const productToAddToListId = useSelector(selectProductToAddToListId);

  const { closeAddToListPopup, isCreatingList } = useUserListEvents();

  return createPortal(
    <Styled.AddToListPopup
      className="active-modal"
      onClick={closeAddToListPopup}
    >
      <div onClick={(e) => e.stopPropagation()} className="user-lists__popup">
        <button className="close-btn" onClick={closeAddToListPopup}>
          <CloseXIcon />
        </button>

        <UserLists productToAddToListId={productToAddToListId} />

        {isCreatingList && (
          <CreateListField productToAddToListId={productToAddToListId} />
        )}

        {!isCreatingList && <CreateListButton />}
      </div>
    </Styled.AddToListPopup>,
    document.getElementById("portal")
  );
}

import { createPortal } from "react-dom";

import { useUserListEvents } from "hooks/events";

import UserLists from "./UserLists";
import CreateListField from "./CreateListField";
import CreateListButton from "./CreateListButton";
import { CloseXIcon } from "components/Layouts/Icons";
import * as Styled from "./AddToListPopup.styled";

const AddToListPopup: React.FC = () => {
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

        <UserLists />

        {isCreatingList && <CreateListField />}

        {!isCreatingList && <CreateListButton />}
      </div>
    </Styled.AddToListPopup>,
    document.getElementById("portal") as HTMLElement
  );
};

export default AddToListPopup;

import CircleButton from "components/Layouts/CircleButton/CircleButton";
import { HeartIcon, BookmarkAddIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/SaveToListButtons.styled";

export default function SaveToListButtons({
  onAddToList,
  onAddToFavorites,
  isSavedToList,
  isSavedToFavorites,
  showAddToList,
}) {
  return (
    <Styled.SaveToListButtons>
      {showAddToList && (
        <CircleButton
          onClick={onAddToList}
          className={isSavedToList ? `is-saved-to-list` : ""}
        >
          <BookmarkAddIcon />
        </CircleButton>
      )}

      <CircleButton
        onClick={onAddToFavorites}
        className={isSavedToFavorites ? `is-saved-to-favorites` : ""}
      >
        <HeartIcon />
      </CircleButton>
    </Styled.SaveToListButtons>
  );
}

import { HeartIcon, BookmarkAddIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/SaveToListButtons.styled";

export default function SaveToListButtons({
  onAddToList,
  onAddToFavorites,
  isSavedToList,
  isSavedToFavorites,
}) {
  return (
    <Styled.SaveToListButtons>
      <button
        onClick={onAddToList}
        className={isSavedToList ? `is-saved-to-list` : ""}
      >
        <BookmarkAddIcon />
      </button>
      <button
        onClick={onAddToFavorites}
        className={isSavedToFavorites ? `is-saved-to-favorites` : ""}
      >
        <HeartIcon />
      </button>
    </Styled.SaveToListButtons>
  );
}

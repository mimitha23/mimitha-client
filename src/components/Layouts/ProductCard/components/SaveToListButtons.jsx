import { useSelector } from "react-redux";

import { useFavoritesQuery } from "hooks/api/user";
import { useUserListEvents } from "hooks/events";

import { selectAllUserLists } from "store/selectors/user/userLists.selectors";
import { selectAllUserFavoritesIds } from "store/selectors/user/userFavorites.selector";

import { CircleButton } from "components/Layouts";
import { HeartIcon, BookmarkAddIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/SaveToListButtons.styled";

export default function SaveToListButtons({ productId, showAddToList }) {
  const allUerLists = useSelector(selectAllUserLists);
  const allUserFavorites = useSelector(selectAllUserFavoritesIds);

  const isSavedToList = allUerLists.some((list) =>
    list.products.includes(productId)
  );

  const isSavedToFavorites = allUserFavorites.some(
    (product) => product._id === productId
  );

  const { addToFavoritesQuery } = useFavoritesQuery();
  function onAddToFavorites(e) {
    e.stopPropagation();
    e.preventDefault();
    addToFavoritesQuery({ productId });
  }

  const { openAddToListPopup } = useUserListEvents();
  function onAddToList(e) {
    e.stopPropagation();
    e.preventDefault();
    openAddToListPopup({ productId });
  }

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

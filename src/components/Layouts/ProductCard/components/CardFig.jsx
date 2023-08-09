import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { PATHS } from "config/routes";
import { useLocationState } from "hooks/utils";
import { useFavoritesQuery, useUserListQuery } from "hooks/api/user";
import { useTranslationContext } from "providers/I18nextProvider";
import { selectAllUserLists } from "store/selectors/user/userListsSelectors";
import { selectAllUserFavoritesIds } from "store/selectors/user/userFavoritesSelector";

import SaveToListButtons from "./SaveToListButtons";
import * as Styled from "./styles/CardFig.styled";

export default function CardFig({
  productId,
  assets,
  alt,
  linkState,
  showAddToList,
}) {
  const { setLocationState } = useLocationState();
  const { currentLocale } = useTranslationContext();

  const { addToFavoritesQuery } = useFavoritesQuery();
  const { openAddToListPopup } = useUserListQuery();

  const allUerLists = useSelector(selectAllUserLists);
  const allUserFavorites = useSelector(selectAllUserFavoritesIds);

  const isSavedToList = allUerLists.some((list) =>
    list.products.includes(productId)
  );

  const isSavedToFavorites = allUserFavorites.some(
    (product) => product._id === productId
  );

  function onAddToFavorites(e) {
    e.stopPropagation();
    e.preventDefault();
    addToFavoritesQuery({ productId });
  }

  function onAddToList(e) {
    e.stopPropagation();
    e.preventDefault();
    openAddToListPopup({ productId });
  }

  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  return (
    <Styled.CardFig
      className="product-fig"
      onMouseEnter={() => setThumbnailIndex(1)}
      onMouseLeave={() => setThumbnailIndex(0)}
    >
      <Link
        to={PATHS.active_product.fullPath({ productId })}
        state={setLocationState({ ...linkState })}
        className="card-fig__link"
      >
        <img
          src={assets[thumbnailIndex]}
          alt={alt[currentLocale]}
          loading="lazy"
        />
        {/* <img src={assets[1]} alt={alt[currentLocale]} loading="lazy" /> */}
        <SaveToListButtons
          onAddToFavorites={onAddToFavorites}
          onAddToList={onAddToList}
          isSavedToFavorites={isSavedToFavorites}
          isSavedToList={isSavedToList}
          showAddToList={showAddToList}
        />
      </Link>
    </Styled.CardFig>
  );
}

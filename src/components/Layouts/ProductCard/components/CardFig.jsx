import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { PATHS } from "config/routes";
import { useLocationState } from "hooks/utils";
import { useFavoritesQuery, useUserListQuery } from "hooks/api/user";
import { useTranslationContext } from "providers/I18nextProvider";
import { selectAllUserLists } from "store/selectors/user/userListsSelectors";
import { selectAllUserFavorites } from "store/selectors/user/userFavoritesSelector";

import SaveToListButtons from "./SaveToListButtons";
import * as Styled from "./styles/CardFig.styled";

export default function CardFig({
  productId,
  img,
  alt,
  linkState,
  showAddToList,
}) {
  const { setLocationState } = useLocationState();
  const { currentLocale } = useTranslationContext();

  const { addToFavoritesQuery } = useFavoritesQuery();
  const { openAddToListPopup } = useUserListQuery();

  const allUerLists = useSelector(selectAllUserLists);
  const allUserFavorites = useSelector(selectAllUserFavorites);

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

  return (
    <Styled.CardFig className="product-fig">
      <Link
        to={PATHS.active_product.fullPath({ productId })}
        state={setLocationState({ ...linkState })}
        className="card-fig__link"
      >
        <img src={img} alt={alt[currentLocale]} loading="lazy" />
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

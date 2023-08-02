import { useSelector } from "react-redux";

import { useFavoritesQuery } from "hooks/api/user";
import { useTranslationContext } from "providers/I18nextProvider";
import { selectActiveProductAssets } from "store/selectors/activeProductSelectors";
import { selectAllUserFavorites } from "store/selectors/user/userFavoritesSelector";

import { CircleButton } from "components/Layouts";
import { HeartIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/ProductView.styled";

export default function ProductView({ productId }) {
  const { currentLocale } = useTranslationContext();
  const { assets, alt } = useSelector(selectActiveProductAssets);

  const { addToFavoritesQuery } = useFavoritesQuery();

  const allUserFavorites = useSelector(selectAllUserFavorites);
  const isSavedToFavorites = allUserFavorites.some(
    (product) => product._id === productId
  );

  return (
    <Styled.ProductView className="editor-view">
      <figure className="editor-fig">
        <img src={assets[0]} alt={alt[currentLocale]} />
        <CircleButton
          className={isSavedToFavorites ? "is-saved-to-favorites" : ""}
          onClick={() => addToFavoritesQuery({ productId })}
        >
          <HeartIcon />
        </CircleButton>
      </figure>
    </Styled.ProductView>
  );
}

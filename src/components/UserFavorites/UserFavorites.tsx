/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppSelector } from "store/hooks";
import { useTranslation } from "react-i18next";

import * as favoritesSelectors from "store/selectors/user/userFavorites.selector";
import { useFavoritesQuery } from "hooks/api/user";
import { useUserFavoritesEvents } from "hooks/events";

import FavoritesList from "./FavoritesList";
import { Spinner, EmptyMessage } from "components/Layouts";
import * as Styled from "./UserFavorites.styled";

const UserFavorites: React.FC = () => {
  const { t } = useTranslation();

  const status = useAppSelector(favoritesSelectors.selectUserFavoritesStatus);

  const products = useAppSelector(favoritesSelectors.selectAllUserFavorites);

  const { getAllFavoritesQuery } = useFavoritesQuery();

  const { cleanUpUserFavoritesList } = useUserFavoritesEvents();

  useEffect(() => {
    getAllFavoritesQuery();

    return () => {
      cleanUpUserFavoritesList();
    };
  }, []);

  return (
    <Styled.UserFavorites>
      {!status.loading && (
        <>
          {products[0] && <FavoritesList products={products} />}

          {!products[0] && (
            <EmptyMessage message={t("favorites.empty_favorites_message")} />
          )}
        </>
      )}

      {status.loading && <Spinner />}
    </Styled.UserFavorites>
  );
};

export default UserFavorites;

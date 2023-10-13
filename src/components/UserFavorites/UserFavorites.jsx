/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  selectAllUserFavorites,
  selectUserFavoritesStatus,
} from "store/selectors/user/userFavorites.selector";
import { useFavoritesQuery } from "hooks/api/user";
import { useUserFavoritesEvents } from "hooks/events";

import { Spinner, EmptyMessage } from "components/Layouts";
import FavoritesList from "./FavoritesList";
import * as Styled from "./UserFavorites.styled";

export default function UserFavorites() {
  const { t } = useTranslation();

  const status = useSelector(selectUserFavoritesStatus);
  const products = useSelector(selectAllUserFavorites);

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
}

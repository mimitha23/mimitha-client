/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  selectAllUserFavorites,
  selectUserFavoritesStatus,
} from "store/selectors/user/userFavorites.selector";
import { useFavoritesQuery } from "hooks/api/user";

import { ProductCard, Spinner } from "components/Layouts";
import * as Styled from "./UserFavorites.styled";

export default function UserFavorites() {
  const { t } = useTranslation();

  const status = useSelector(selectUserFavoritesStatus);
  const products = useSelector(selectAllUserFavorites);

  const { getAllFavoritesQuery } = useFavoritesQuery();

  useEffect(() => {
    getAllFavoritesQuery();
  }, []);

  return (
    <Styled.UserFavorites>
      {!status.loading && (
        <>
          {products[0] && (
            <ul className="user-favorites__list">
              {products.map((product) => (
                <li key={product._id}>
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          )}

          {!products[0] && (
            <p className="user-favorites__empty-msg">
              {t("favorites.empty_favorites_message")}
            </p>
          )}
        </>
      )}

      {status.loading && <Spinner />}
    </Styled.UserFavorites>
  );
}

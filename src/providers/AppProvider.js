/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect } from "react";

import { useIsAuthenticated } from "hooks/auth";
import { useFavoritesQuery, useUserListQuery } from "hooks/api/user";

const AppContext = createContext({});

export default function AppProvider({ children }) {
  const { getAllFavoritesIdsQuery, cleanUpUserFavorites } = useFavoritesQuery();
  const { getAllListsQuery, cleanUpUserLists } = useUserListQuery();

  const { isAuthenticated, loading } = useIsAuthenticated();

  useEffect(() => {
    if (loading) return;

    if (isAuthenticated) {
      getAllFavoritesIdsQuery();
      getAllListsQuery();
    } else {
      cleanUpUserFavorites();
      cleanUpUserLists();
    }
  }, [isAuthenticated]);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useIsAuthenticated } from "hooks/auth";
import { RouterHistory } from "config/router";
import { useFavoritesQuery, useUserListQuery } from "hooks/api/user";

const AppContext = createContext({});

export default function AppProvider({ children }) {
  const { getAllFavoritesIdsQuery, cleanUpUserFavorites } = useFavoritesQuery();
  const { getAllListsQuery, cleanUpUserLists } = useUserListQuery();

  const { isAuthenticated, loading } = useIsAuthenticated();

  RouterHistory.navigate = useNavigate();
  RouterHistory.location = useLocation();

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

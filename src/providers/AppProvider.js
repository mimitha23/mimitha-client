/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { RouterHistory } from "config/router";
import { useFavoritesQuery, useUserListQuery } from "hooks/api/user";
import { useIsAuthenticated, useRestrictUnauthorized } from "hooks/auth";
import { useUserFavoritesEvents, useUserListEvents } from "hooks/events";

const AppContext = createContext({});

export default function AppProvider({ children }) {
  const { getAllFavoritesIdsQuery } = useFavoritesQuery();
  const { getAllListsQuery } = useUserListQuery();

  const { isAuthenticated, loading } = useIsAuthenticated();
  const { redirectIfUnauthorized } = useRestrictUnauthorized();

  RouterHistory.navigate = useNavigate();
  RouterHistory.location = useLocation();
  RouterHistory.redirectIfUnauthorized = redirectIfUnauthorized;

  const { cleanUpUserLists } = useUserListEvents();
  const { cleanUpUserFavorites } = useUserFavoritesEvents();

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

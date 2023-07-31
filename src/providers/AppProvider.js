/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect } from "react";

import { useFavoritesQuery, useUserListQuery } from "hooks/api/user";

const AppContext = createContext({});

export default function AppProvider({ children }) {
  const { getAllFavoritesIdsQuery } = useFavoritesQuery();
  const { getAllListsQuery } = useUserListQuery();

  useEffect(() => {
    getAllFavoritesIdsQuery();
    getAllListsQuery();
  }, []);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

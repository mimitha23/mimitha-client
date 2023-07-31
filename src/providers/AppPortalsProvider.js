import { createContext } from "react";
import { useSelector } from "react-redux";

import { selectProductToAddToListId } from "store/selectors/user/userListsSelectors";

import { AddToListPopup } from "components/Layouts";

const AppPortalsContext = createContext({});

export default function AppPortalsProvider({ children }) {
  const productToAddToListId = useSelector(selectProductToAddToListId);

  return (
    <AppPortalsContext.Provider value={{}}>
      {children}
      {productToAddToListId && <AddToListPopup />}
    </AppPortalsContext.Provider>
  );
}

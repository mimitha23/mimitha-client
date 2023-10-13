import { createContext } from "react";
import { useSelector } from "react-redux";

import { selectIsOpenPopup } from "store/selectors/auth.selectors";
import { selectProductToAddToListId } from "store/selectors/user/userLists.selectors";

import AuthPopUp from "components/Auth/AuthPopUp";
import { AddToListPopup } from "components/Layouts";

const AppPortalsContext = createContext({});

export default function AppPortalsProvider({ children }) {
  const openAuthPopup = useSelector(selectIsOpenPopup);
  const productToAddToListId = useSelector(selectProductToAddToListId);

  return (
    <AppPortalsContext.Provider value={{}}>
      {children}
      {productToAddToListId && <AddToListPopup />}
      {openAuthPopup && <AuthPopUp />}
    </AppPortalsContext.Provider>
  );
}

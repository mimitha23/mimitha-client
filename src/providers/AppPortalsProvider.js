import { createContext } from "react";
import { useSelector } from "react-redux";

import { selectIsOpenPopup } from "store/selectors/authSelectors";
import { selectProductToAddToListId } from "store/selectors/user/userListsSelectors";

import AuthPopUp from "components/Auth/AuthPopUp";
import { AddToListPopup } from "components/Layouts";

const AppPortalsContext = createContext({});

export default function AppPortalsProvider({ children }) {
  const productToAddToListId = useSelector(selectProductToAddToListId);
  const openAuthPopup = useSelector(selectIsOpenPopup);

  return (
    <AppPortalsContext.Provider value={{}}>
      {children}
      {productToAddToListId && <AddToListPopup />}
      {openAuthPopup && <AuthPopUp />}
    </AppPortalsContext.Provider>
  );
}

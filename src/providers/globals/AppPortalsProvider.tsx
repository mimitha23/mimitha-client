import { createContext } from "react";
import { useAppSelector } from "store/hooks";

import { selectIsOpenPopup } from "store/selectors/auth.selectors";
import { selectProductToAddToListId } from "store/selectors/user/userLists.selectors";

import AuthPopUp from "components/Auth/AuthPopUp";
import { AddToListPopup } from "components/Layouts";

type AppPortalsContextT = {};

type AppPortalsProviderT = {
  children: React.ReactNode;
};

const AppPortalsContext = createContext<AppPortalsContextT>({});

const AppPortalsProvider: React.FC<AppPortalsProviderT> = ({ children }) => {
  const openAuthPopup = useAppSelector(selectIsOpenPopup);
  const productToAddToListId = useAppSelector(selectProductToAddToListId);

  return (
    <AppPortalsContext.Provider value={{}}>
      {children}
      {openAuthPopup && <AuthPopUp />}
      {productToAddToListId && <AddToListPopup />}
    </AppPortalsContext.Provider>
  );
};

export default AppPortalsProvider;

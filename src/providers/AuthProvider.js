import { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  openPopup: false,
  startAuth: () => {},
});

export default function AuthProvider({ children }) {
  const [openPopup, setOpenPopup] = useState(false);

  function startAuth() {
    setOpenPopup(true);
  }

  return (
    <AuthContext.Provider value={{ openPopup, startAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);

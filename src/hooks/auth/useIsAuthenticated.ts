/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { useNavigate, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import { jwt } from "utils";

import { userActions } from "store/reducers/user/user.reducer";
import { PATHS, PUBLIC_ROUTES } from "config/paths";
import { selectUser } from "store/selectors/user/user.selectors";

export default function useIsAuthenticated(redirectUnauthorized = false) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const user = useAppSelector(selectUser);

  function stopCheck() {
    setLoading(false);

    if (isAuthenticated) {
      dispatch(userActions.cleanUpUser());
      setIsAuthenticated(false);
    }

    if (
      redirectUnauthorized &&
      !PUBLIC_ROUTES.some((route) => pathname.match(route))
    )
      navigate(PATHS.home_page, { replace: true });
  }

  async function checkAuthAsync() {
    const mimitha_passport = jwt.getJWT();

    if (!mimitha_passport) return false;

    const decodedUser = decode(mimitha_passport);

    if (!decodedUser) return false;

    return true;
  }

  useEffect(() => {
    const mimitha_passport = jwt.getJWT();

    if (!mimitha_passport) return stopCheck();

    const decodedUser = decode(mimitha_passport);

    if (!decodedUser) return stopCheck();

    setIsAuthenticated(true);

    setLoading(false);
  }, [user]);

  return { isAuthenticated, loading, checkAuthAsync };
}

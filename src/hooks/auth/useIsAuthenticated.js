/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
import { jwt } from "utils";

import { userActions } from "store/reducers/user/user.reducer";
import { PATHS, PUBLIC_ROUTES } from "config/routes";
import { selectUser } from "store/selectors/user/user.selectors";

export default function useIsAuthenticated(redirectUnauthorized = false) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const user = useSelector(selectUser);

  function stopCheck() {
    setLoading(false);

    if (isAuthenticated) {
      dispatch(userActions.resetUser());
      setIsAuthenticated(false);
    }

    if (
      redirectUnauthorized &&
      !PUBLIC_ROUTES.some((route) => pathname.match(route))
    )
      navigate(PATHS.home.fullPath, { replace: true });
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

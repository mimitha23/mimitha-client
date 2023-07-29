/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
import { jwt } from "utils";

import { authActions } from "store/reducers/authReducer";
import { PATHS, PUBLIC_ROUTES } from "config/routes";
import { selectUser } from "store/selectors/userSelectors";

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
      dispatch(authActions.resetUser());
      setIsAuthenticated(false);
    }

    if (
      redirectUnauthorized &&
      !PUBLIC_ROUTES.some((route) => pathname.match(route))
    )
      navigate(PATHS.home.fullPath, { replace: true });
  }

  useEffect(() => {
    const mimitha_passport = jwt.getJWT();

    if (!mimitha_passport) return stopCheck();

    const decodedUser = decode(mimitha_passport);

    if (!decodedUser) return stopCheck();

    setIsAuthenticated(true);

    setLoading(false);
  }, [user]);

  return { isAuthenticated, loading };
}

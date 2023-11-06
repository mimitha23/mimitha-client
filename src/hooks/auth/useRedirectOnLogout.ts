/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useIsAuthenticated from "./useIsAuthenticated";

export default function useRedirectOnLogout() {
  const navigate = useNavigate();

  const { isAuthenticated, loading } = useIsAuthenticated();

  useEffect(() => {
    if (!loading && !isAuthenticated) return navigate(-1);
  }, [isAuthenticated, loading]);
}

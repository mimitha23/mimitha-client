import { useNavigate } from "react-router-dom";
import useIsAuthenticated from "./useIsAuthenticated";

export default function useRestrictUnauthorized() {
  const navigate = useNavigate();

  const { checkAuthAsync } = useIsAuthenticated();

  async function redirectIfUnauthorized() {
    const isAuthenticated = await checkAuthAsync();
    if (!isAuthenticated) navigate(-1);
  }

  return { redirectIfUnauthorized };
}

import { RouterHistory } from "config/router";
import { useRedirectOnLogout } from "hooks/auth";

import { Navigation, Footer } from "components";
import UserFavorites from "components/UserFavorites/UserFavorites";

RouterHistory.redirectIfUnauthorized();

export default function UserFavoritesPage() {
  useRedirectOnLogout();

  return (
    <>
      <Navigation />
      <UserFavorites />
      <Footer />
    </>
  );
}

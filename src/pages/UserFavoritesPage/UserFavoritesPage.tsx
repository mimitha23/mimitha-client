import { RouterHistory } from "config/router";
import { useRedirectOnLogout } from "hooks/auth";

import { Navigation, Footer } from "components";
import UserFavorites from "components/UserFavorites/UserFavorites";

RouterHistory.redirectIfUnauthorized();

const UserFavoritesPage: React.FC = () => {
  useRedirectOnLogout();

  return (
    <>
      <Navigation />
      <UserFavorites />
      <Footer />
    </>
  );
};

export default UserFavoritesPage;

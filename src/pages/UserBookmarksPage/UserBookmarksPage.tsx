import { RouterHistory } from "config/router";
import { useRedirectOnLogout } from "hooks/auth";

import { Navigation, Footer } from "components";
import UserBookmarks from "components/UserBookmarks/UserBookmarks";

RouterHistory.redirectIfUnauthorized();

const UserBookmarksPage: React.FC = () => {
  useRedirectOnLogout();

  return (
    <>
      <Navigation />
      <UserBookmarks />
      <Footer />
    </>
  );
};

export default UserBookmarksPage;

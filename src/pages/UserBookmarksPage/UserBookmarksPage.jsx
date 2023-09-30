import { RouterHistory } from "config/router";
import { useRedirectOnLogout } from "hooks/auth";

import { Navigation, Footer } from "components";
import UserBookmarks from "components/UserBookmarks/UserBookmarks";

RouterHistory.redirectIfUnauthorized();

export default function UserBookmarksPage() {
  useRedirectOnLogout();

  return (
    <>
      <Navigation />
      <UserBookmarks />
      <Footer />
    </>
  );
}

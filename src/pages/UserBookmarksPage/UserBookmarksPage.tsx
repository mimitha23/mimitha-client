/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { RouterHistory } from "config/router";
import { useRedirectOnLogout } from "hooks/auth";
import { useUserListEvents } from "hooks/events";
import { useUserListQuery } from "hooks/api/user";

import { Navigation, Footer } from "components";
import UserBookmarks from "components/UserBookmarks/UserBookmarks";

RouterHistory.redirectIfUnauthorized();

const UserBookmarksPage: React.FC = () => {
  useRedirectOnLogout();

  const { listId } = useParams();

  const { getListQuery } = useUserListQuery();
  const { cleanUpUserActiveList } = useUserListEvents();

  useEffect(() => {
    if (!listId) return;

    getListQuery(listId);

    return () => {
      cleanUpUserActiveList();
    };
  }, [listId]);

  return (
    <>
      <Navigation />
      <UserBookmarks />
      <Footer />
    </>
  );
};

export default UserBookmarksPage;

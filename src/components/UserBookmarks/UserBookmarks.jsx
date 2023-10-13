/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  selectUserList,
  selectUserListStatus,
} from "store/selectors/user/userLists.selectors";
import { useUserListQuery } from "hooks/api/user";

import UserBookmarksHeader from "./components/UserBookmarksHeader";
import { EmptyMessage, Spinner } from "components/Layouts";
import BookmarksList from "./components/BookmarksList";
import * as Styled from "./UserBookmarks.styled";

export default function UserBookmarks() {
  const { t } = useTranslation();

  const { listId } = useParams();

  const status = useSelector(selectUserListStatus);
  const list = useSelector(selectUserList);

  const { getListQuery, deleteListQuery } = useUserListQuery();

  useEffect(() => {
    getListQuery(listId);
  }, [listId]);

  return (
    <Styled.UserBookmarks>
      {!status.loading && (
        <>
          <UserBookmarksHeader
            title={list.title}
            onDelete={() => deleteListQuery(listId)}
          />

          {list.products[0] && <BookmarksList list={list} />}

          {!list.products[0] && (
            <EmptyMessage message={t("user_list.empty_list_message")} />
          )}
        </>
      )}

      {status.loading && <Spinner />}
    </Styled.UserBookmarks>
  );
}

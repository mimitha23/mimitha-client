import { useAppSelector } from "store/hooks";
import { useTranslation } from "react-i18next";

import * as listSelectors from "store/selectors/user/userLists.selectors";

import { EmptyMessage, Spinner } from "components/Layouts";
import BookmarksList from "./components/BookmarksList";
import UserBookmarksHeader from "./components/UserBookmarksHeader";
import * as Styled from "./UserBookmarks.styled";

const UserBookmarks: React.FC = () => {
  const { t } = useTranslation();

  const list = useAppSelector(listSelectors.selectUserList);
  const status = useAppSelector(listSelectors.selectUserListStatus);

  return (
    <Styled.UserBookmarks>
      {!status.loading && (
        <>
          <UserBookmarksHeader />

          {list.products[0] && <BookmarksList list={list.products} />}

          {!list.products[0] && (
            <EmptyMessage message={t("user_list.empty_list_message")} />
          )}
        </>
      )}

      {status.loading && <Spinner />}
    </Styled.UserBookmarks>
  );
};

export default UserBookmarks;

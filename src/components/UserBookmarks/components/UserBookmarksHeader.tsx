import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "store/hooks";

import { selectUserListDetails } from "store/selectors/user/userLists.selectors";

import { DeletionPopup } from "components/Layouts";
import { OpenFolderIcon, DeleteFolderIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/UserBookmarksHeader.styled";
import { useUserListQuery } from "hooks/api/user";

const UserBookmarksHeader: React.FC = () => {
  const { t } = useTranslation();

  const { _id: listId, title } = useAppSelector(selectUserListDetails);

  const [startDelete, setStartDelete] = useState(false);
  const onStartDelete = () => setStartDelete(true);
  const onCloseDeletePopup = () => setStartDelete(false);

  const { deleteListQuery } = useUserListQuery();

  const onConfirmDelete = () => {
    deleteListQuery(listId);
    onCloseDeletePopup();
  };

  return (
    <Styled.UserBookmarksHeader>
      <span className="bookmarks-header__title">
        <span>
          <OpenFolderIcon />
        </span>
        &mdash;
        <span>{title}</span>
      </span>

      <button className="bookmarks-header__delete-btn" onClick={onStartDelete}>
        <span>
          <DeleteFolderIcon />
        </span>
        <span>{t("user_list.delete_list")}</span>
      </button>

      {startDelete && (
        <DeletionPopup
          onClose={onCloseDeletePopup}
          onConfirm={onConfirmDelete}
          targetName={t("crossover.list")}
        />
      )}
    </Styled.UserBookmarksHeader>
  );
};

export default UserBookmarksHeader;

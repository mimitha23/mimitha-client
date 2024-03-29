import { useState } from "react";
import { useTranslation } from "react-i18next";

import { DeletionPopup } from "components/Layouts";
import { OpenFolderIcon, DeleteFolderIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/UserBookmarksHeader.styled";

export default function UserBookmarksHeader({ title, onDelete }) {
  const { t } = useTranslation();

  const [startDelete, setStartDelete] = useState(false);

  const onCloseDeletePopup = () => setStartDelete(false);

  function onStartDelete() {
    setStartDelete(true);
  }

  function onConfirmDelete() {
    onDelete();
    onCloseDeletePopup();
  }

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
}

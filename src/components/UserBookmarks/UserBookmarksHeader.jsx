import { useState } from "react";
import { useTranslation } from "react-i18next";

import { DeletionPopup } from "components/Layouts";
import { OpenFolderIcon, DeleteFolderIcon } from "components/Layouts/Icons";

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
    <header className="user-bookmarks__header">
      <span className="user-bookmarks__header-title">
        <span>
          <OpenFolderIcon />
        </span>
        &mdash;
        <span>{title}</span>
      </span>
      <button
        className="user-bookmarks__header__delete-btn"
        onClick={onStartDelete}
      >
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
    </header>
  );
}

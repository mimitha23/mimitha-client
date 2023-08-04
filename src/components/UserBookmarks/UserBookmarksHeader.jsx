import { useTranslation } from "react-i18next";

import { DeletionPopup } from "components/Layouts";
import { OpenFolderIcon, DeleteFolderIcon } from "components/Layouts/Icons";

export default function UserBookmarksHeader({ title, onDelete }) {
  const { t } = useTranslation();

  return (
    <header className="user-bookmarks__header">
      <span className="user-bookmarks__header-title">
        <span>
          <OpenFolderIcon />
        </span>
        &mdash;
        <span>{title}</span>
      </span>
      <button className="user-bookmarks__header__delete-btn" onClick={onDelete}>
        <span>
          <DeleteFolderIcon />
        </span>
        <span>{t("user_list.delete_list")}</span>
      </button>

      {false && <DeletionPopup />}
    </header>
  );
}

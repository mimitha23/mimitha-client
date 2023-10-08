import { useTranslation } from "react-i18next";
import { useUserListEvents } from "hooks/events";

import { AddFolderIcon } from "components/Layouts/Icons";

export default function CreateListButton() {
  const { t } = useTranslation();

  const { onStartListCreation } = useUserListEvents();

  return (
    <button className="create-list__btn" onClick={onStartListCreation}>
      <span>
        <AddFolderIcon />
      </span>
      <span>{t("user_list.create_list")}</span>
    </button>
  );
}

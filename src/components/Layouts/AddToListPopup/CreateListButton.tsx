import { useTranslation } from "react-i18next";
import { useUserListEvents } from "hooks/events";

import { AddFolderIcon } from "components/Layouts/Icons";

const CreateListButton: React.FC = () => {
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
};

export default CreateListButton;

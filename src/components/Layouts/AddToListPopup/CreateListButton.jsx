import { useTranslation } from "react-i18next";
import { AddFolderIcon } from "components/Layouts/Icons";

export default function CreateListButton({ onClick }) {
  const { t } = useTranslation();

  return (
    <button className="create-list__btn" onClick={onClick}>
      <span>
        <AddFolderIcon />
      </span>
      <span>{t("user_list.create_list")}</span>
    </button>
  );
}

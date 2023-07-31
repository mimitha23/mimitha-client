import { useTranslation } from "react-i18next";
import { FolderIcon } from "components/Layouts/Icons";

export default function CreateListField({
  onCancel,
  onCreate,
  onChange,
  value,
}) {
  const { t } = useTranslation();

  return (
    <div className="create-list__field">
      <div className="create-list__field-box">
        <span>
          <FolderIcon />
        </span>
        <input
          type="text"
          placeholder={t("crossover.create_list_placeholder")}
          onChange={onChange}
          value={value}
        />
      </div>
      <div className="create-list__field-actions">
        <button className="cancel" onClick={onCancel}>
          {t("crossover.cancel")}
        </button>
        <button className="create" onClick={onCreate}>
          {t("crossover.create")}
        </button>
      </div>
    </div>
  );
}

import { useUserListEvents } from "hooks/events";

import { useTranslation } from "react-i18next";
import { FolderIcon } from "components/Layouts/Icons";
import { useUserListQuery } from "hooks/api/user";

export default function CreateListField({ productToAddToListId }) {
  const { t } = useTranslation();

  const { createListQuery } = useUserListQuery(productToAddToListId);

  const { onCancelListCreation, newListTitle, onSetNewListTitle } =
    useUserListEvents();

  return (
    <div className="create-list__field">
      <div className="create-list__field-box">
        <span>
          <FolderIcon />
        </span>
        <input
          type="text"
          placeholder={t("user_list.create_list_placeholder")}
          onChange={(e) => onSetNewListTitle(e.target.value)}
          value={newListTitle}
        />
      </div>
      <div className="create-list__field-actions">
        <button className="cancel" onClick={onCancelListCreation}>
          {t("crossover.cancel")}
        </button>
        <button
          className="create"
          onClick={() =>
            createListQuery({
              title: newListTitle,
              productId: productToAddToListId,
            })
          }
        >
          {t("crossover.create")}
        </button>
      </div>
    </div>
  );
}

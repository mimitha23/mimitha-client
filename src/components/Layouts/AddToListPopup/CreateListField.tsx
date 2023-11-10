import { useAppSelector } from "store/hooks";
import { useTranslation } from "react-i18next";

import { useUserListEvents } from "hooks/events";
import { useUserListQuery } from "hooks/api/user";
import { selectProductToAddToListId } from "store/selectors/user/userLists.selectors";

import { FolderIcon } from "components/Layouts/Icons";

const CreateListField: React.FC = () => {
  const { t } = useTranslation();

  const productId = useAppSelector(selectProductToAddToListId);

  const { createListQuery } = useUserListQuery();

  const {
    onCancelListCreation,
    newListTitle: title,
    onSetNewListTitle,
  } = useUserListEvents();

  const onCreateList = () => createListQuery({ title, productId });

  return (
    <div className="create-list__field">
      <div className="create-list__field-box">
        <span>
          <FolderIcon />
        </span>

        <input
          type="text"
          value={title}
          onChange={(e) => onSetNewListTitle(e.target.value)}
          placeholder={t("user_list.create_list_placeholder") as string}
        />
      </div>

      <div className="create-list__field-actions">
        <button className="cancel" onClick={onCancelListCreation}>
          {t("crossover.cancel")}
        </button>

        <button className="create" onClick={onCreateList}>
          {t("crossover.create")}
        </button>
      </div>
    </div>
  );
};

export default CreateListField;

import { useAppSelector } from "store/hooks";

import {
  selectAllUserLists,
  selectProductToAddToListId,
} from "store/selectors/user/userLists.selectors";
import { useUserListQuery } from "hooks/api/user";

import { FolderIcon, PlusIcon, MinusIcon } from "components/Layouts/Icons";

const UserLists: React.FC = () => {
  const allUserLists = useAppSelector(selectAllUserLists);
  const productId = useAppSelector(selectProductToAddToListId);

  const { addToListQuery } = useUserListQuery();

  const onAddToList = (listId: string) => addToListQuery({ listId, productId });

  return (
    <ul className="user-lists__list">
      {allUserLists.map((list) => (
        <li
          key={list._id}
          onClick={() => onAddToList(list._id)}
          className={list.products.includes(productId) ? "active" : ""}
        >
          <span>
            <FolderIcon />
          </span>
          <span>{list.title}</span>
          <span>
            {list.products.includes(productId) ? <MinusIcon /> : <PlusIcon />}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default UserLists;

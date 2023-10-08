import { useSelector } from "react-redux";

import { useUserListQuery } from "hooks/api/user";
import { selectAllUserLists } from "store/selectors/user/userLists.selectors";

import { FolderIcon, PlusIcon, MinusIcon } from "components/Layouts/Icons";

export default function UserLists({ productToAddToListId }) {
  const allUserLists = useSelector(selectAllUserLists);

  const { addToListQuery } = useUserListQuery(productToAddToListId);

  return (
    <ul className="user-lists__list">
      {allUserLists.map((list) => (
        <li
          key={list._id}
          onClick={() =>
            addToListQuery({
              listId: list._id,
              productId: productToAddToListId,
            })
          }
          className={
            list.products.includes(productToAddToListId) ? "active" : ""
          }
        >
          <span>
            <FolderIcon />
          </span>
          <span>{list.title}</span>
          <span>
            {list.products.includes(productToAddToListId) ? (
              <MinusIcon />
            ) : (
              <PlusIcon />
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

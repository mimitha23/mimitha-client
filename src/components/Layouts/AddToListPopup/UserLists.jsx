import { FolderIcon, PlusIcon } from "components/Layouts/Icons";

export default function UserLists({
  allUserLists,
  productToAddToListId,
  onAddToList,
}) {
  return (
    <ul className="user-lists__list">
      {allUserLists.map((list) => (
        <li
          key={list._id}
          onClick={() => onAddToList(list._id)}
          className={
            list.products.includes(productToAddToListId) ? "active" : ""
          }
        >
          <span>
            <FolderIcon />
          </span>
          <span>{list.title}</span>
          <span>
            <PlusIcon />
          </span>
        </li>
      ))}
    </ul>
  );
}

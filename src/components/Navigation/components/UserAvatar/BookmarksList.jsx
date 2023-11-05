import { Link, useParams } from "react-router-dom";

import { PATHS } from "config/paths";

import { FolderIcon, OpenFolderIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/BookmarksList.styled";

export default function BookmarksList({ list }) {
  const { listId } = useParams();

  return (
    <Styled.BookmarksList>
      {list.map((item) => (
        <li key={item._id}>
          <Link
            to={PATHS.bookmarks.fullPath({ listId: item._id })}
            className={item._id === listId ? "active" : ""}
          >
            <span className="icon">
              {item._id === listId ? <OpenFolderIcon /> : <FolderIcon />}
            </span>
            {item.title}
          </Link>
        </li>
      ))}
    </Styled.BookmarksList>
  );
}

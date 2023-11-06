import { Link, useParams } from "react-router-dom";

import { DYNAMIC_PATHS } from "config/paths";

import { FolderIcon, OpenFolderIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/BookmarksList.styled";

interface BookmarksListT {
  list: Array<{ title: string; _id: string }>;
}

const BookmarksList: React.FC<BookmarksListT> = ({ list }) => {
  const { listId } = useParams();

  return (
    <Styled.BookmarksList>
      {list.map((item) => (
        <li key={item._id}>
          <Link
            to={DYNAMIC_PATHS.bookmarks_page(item._id)}
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
};

export default BookmarksList;

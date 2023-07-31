import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserListsTitlesAndIds } from "store/selectors/user/userListsSelectors";

import {
  BookmarkIcon,
  ArrowBottomIcon,
  FolderIcon,
} from "components/Layouts/Icons";
import * as Styled from "./styles/BookmarksList.styled";

export default function BookmarksList() {
  const [showList, setShowList] = useState(false);
  const list = useSelector(selectUserListsTitlesAndIds);

  return (
    <Styled.BookmarksList>
      <button
        className="trigger-btn"
        onClick={() => setShowList((prev) => !prev)}
      >
        <span className="user__dropdown-item--icon">
          <BookmarkIcon />
        </span>
        სანიშნეები
        <span className="user__dropdown-item--icon arrow">
          <ArrowBottomIcon />
        </span>
      </button>

      {showList && (
        <ul className="bookmarks__list">
          {list.map((item) => (
            <li key={item._id}>
              <span className="icon">
                <FolderIcon />
              </span>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </Styled.BookmarksList>
  );
}

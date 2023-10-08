import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

import { PATHS } from "config/routes";
import { selectUserListsTitlesAndIds } from "store/selectors/user/userLists.selectors";

import {
  BookmarkIcon,
  ArrowBottomIcon,
  FolderIcon,
  OpenFolderIcon,
} from "components/Layouts/Icons";
import * as Styled from "./styles/BookmarksList.styled";

export default function BookmarksList() {
  const { listId } = useParams();

  const { t } = useTranslation();

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
        {t("user_list.bookmarks")}
        <span className="user__dropdown-item--icon arrow">
          <ArrowBottomIcon />
        </span>
      </button>

      {list[0] && showList && (
        <ul className="bookmarks__list">
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
        </ul>
      )}

      {!list[0] && showList && (
        <span className="empty-list">{t("user_list.no_list")}</span>
      )}
    </Styled.BookmarksList>
  );
}

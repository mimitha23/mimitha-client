import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { selectUserListsTitlesAndIds } from "store/selectors/user/userLists.selectors";

import BookmarksList from "./BookmarksList";
import BookmarksTriggerButton from "./BookmarksTriggerButton";
import * as Styled from "./styles/Bookmarks.styled";

export default function Bookmarks() {
  const { t } = useTranslation();

  const [showList, setShowList] = useState(false);
  const list = useSelector(selectUserListsTitlesAndIds);

  return (
    <Styled.Bookmarks>
      <BookmarksTriggerButton setShowList={setShowList} />

      {list[0] && showList && <BookmarksList list={list} />}

      {!list[0] && showList && (
        <span className="empty-list">{t("user_list.no_list")}</span>
      )}
    </Styled.Bookmarks>
  );
}

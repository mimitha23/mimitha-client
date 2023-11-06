import { useState } from "react";
import { useAppSelector } from "store/hooks";
import { useTranslation } from "react-i18next";

import { selectUserListsTitlesAndIds } from "store/selectors/user/userLists.selectors";

import BookmarksList from "./BookmarksList";
import BookmarksTriggerButton from "./BookmarksTriggerButton";
import * as Styled from "./styles/Bookmarks.styled";

const Bookmarks: React.FC = () => {
  const { t } = useTranslation();

  const [showList, setShowList] = useState(false);
  const list = useAppSelector(selectUserListsTitlesAndIds);

  return (
    <Styled.Bookmarks>
      <BookmarksTriggerButton setShowList={setShowList} />

      {list[0] && showList && <BookmarksList list={list} />}

      {!list[0] && showList && (
        <span className="empty-list">{t("user_list.no_list")}</span>
      )}
    </Styled.Bookmarks>
  );
};

export default Bookmarks;

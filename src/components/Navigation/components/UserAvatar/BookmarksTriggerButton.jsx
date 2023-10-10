import { useTranslation } from "react-i18next";

import { BookmarkIcon, ArrowBottomIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/BookmarksTriggerButton.styled";

export default function BookmarksTriggerButton({ setShowList }) {
  const { t } = useTranslation();

  return (
    <Styled.BookmarksTriggerButton onClick={() => setShowList((prev) => !prev)}>
      <span className="user__dropdown-item--icon">
        <BookmarkIcon />
      </span>
      {t("user_list.bookmarks")}
      <span className="user__dropdown-item--icon arrow">
        <ArrowBottomIcon />
      </span>
    </Styled.BookmarksTriggerButton>
  );
}

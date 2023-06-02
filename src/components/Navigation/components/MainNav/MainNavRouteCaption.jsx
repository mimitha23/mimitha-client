import { useTranslation } from "react-i18next";
import { ArrowBottomIcon } from "components/Layouts/Icons/index";

export default function MainNavRouteCaption({ route }) {
  const { t } = useTranslation();

  return (
    <span className="categories-nav__list-item--caption-box">
      <span className="categories-nav__list-item--caption-box__caption">
        {t(`navigation.main.${route}`)}
      </span>
      <span className="categories-nav__list-item--caption-box__icon">
        <ArrowBottomIcon />
      </span>
    </span>
  );
}

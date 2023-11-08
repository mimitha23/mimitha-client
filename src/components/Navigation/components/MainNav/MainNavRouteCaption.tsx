import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { PATHS } from "config/paths";

import { ArrowBottomIcon } from "components/Layouts/Icons/index";

import { LocationStateT } from "interface/common.types";

interface MainNavRouteCaptionT {
  route: string;
  isDirectLink: boolean;
  linkState?: LocationStateT;
}

const MainNavRouteCaption: React.FC<MainNavRouteCaptionT> = ({
  route,
  linkState,
  isDirectLink,
}) => {
  const { t } = useTranslation();

  const { state } = useLocation();

  return (
    <Link
      {...(linkState && { state: linkState })}
      to={isDirectLink ? PATHS.products_page : ""}
      className={`caption-box ${state?.category === route ? "active" : ""}`}
    >
      <span className="caption-box__caption">
        {t(`navigation.main.${route}`)}
      </span>
      <span className="caption-box__icon">
        <ArrowBottomIcon />
      </span>
    </Link>
  );
};

export default MainNavRouteCaption;

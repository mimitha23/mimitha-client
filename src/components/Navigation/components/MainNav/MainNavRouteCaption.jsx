import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { PATHS } from "config/routes";
import { useLocationState } from "hooks/utils";

import { ArrowBottomIcon } from "components/Layouts/Icons/index";

export default function MainNavRouteCaption({
  route,
  isDirectLink,
  linkState,
}) {
  const { t } = useTranslation();

  const { state } = useLocationState();

  return (
    <Link
      {...(linkState && { state: linkState })}
      to={isDirectLink ? PATHS.products.fullPath : ""}
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
}

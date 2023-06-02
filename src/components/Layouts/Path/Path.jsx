import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { useLocationState } from "hooks/utils/index";
import { useTranslationContext } from "Providers/I18nextProvider";

import * as Styled from "./Path.styled";

export default function Path() {
  const { t } = useTranslation();
  const { currentLocale } = useTranslationContext();

  const { getLocationState } = useLocationState();
  const locationState = getLocationState();

  return (
    <Styled.Path>
      {locationState.search_for && (
        <span>
          <Link to="">
            {t(`navigation.main.${[locationState.search_for]}`)}
          </Link>
        </span>
      )}

      {locationState.query.query && (
        <span>
          <Link to="">{locationState.query.label?.[currentLocale]}</Link>
        </span>
      )}
    </Styled.Path>
  );
}

import { memo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { PATHS } from "config/routes";
import { useLocationState } from "hooks/utils/index";
import { useTranslationContext } from "providers/I18nextProvider";

import * as Styled from "./Path.styled";

export default memo(function Path({ showSearch }) {
  const { t } = useTranslation();
  const { currentLocale } = useTranslationContext();

  const { getLocationState, setLocationState, getLocationStateDefaults } =
    useLocationState();
  const locationState = getLocationState();
  const locationStateDefaults = getLocationStateDefaults();

  return (
    <Styled.Path data-user-track-path>
      {locationState.category && (
        <span>
          <Link
            to={PATHS.products.fullPath}
            state={setLocationState({
              category: locationState.category,
              productType: locationStateDefaults.productType,
              title: locationStateDefaults.title,
              sale: locationStateDefaults.sale,
            })}
          >
            {t(`navigation.main.${[locationState.category]}`)}
          </Link>
        </span>
      )}

      {locationState.productType.query && (
        <span>
          <Link
            to={PATHS.products.fullPath}
            state={setLocationState({
              title: locationStateDefaults.title,
              productType: locationState.productType,
              category: locationState.category,
              sale: locationStateDefaults.sale,
            })}
          >
            {locationState.productType[currentLocale]}
          </Link>
        </span>
      )}

      {showSearch && locationState.search && (
        <span className="search_path-step">
          <pre>searching for</pre>&nbsp;&mdash;&nbsp;'{locationState.search}'
        </span>
      )}

      {locationState.title[currentLocale] && (
        <span className="title-path" title={locationState.title[currentLocale]}>
          {locationState.title[currentLocale]}
        </span>
      )}

      {locationState.sale && <span className="sale-path">Mimita Hot Sale</span>}
    </Styled.Path>
  );
});

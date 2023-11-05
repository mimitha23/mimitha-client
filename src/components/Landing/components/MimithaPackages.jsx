import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PATHS } from "config/paths";

import * as Styled from "./styles/MimithaPackages.styled";

export default function MimithaPackages() {
  const { t } = useTranslation();

  return (
    <Styled.MimithaPackagesContainer>
      <div className="packages-wrapper">
        <div className="packages-logo">
          <figure>
            <img src="/assets/mimitha-logo-large.png" alt="mimitha" />
          </figure>
        </div>
        <Styled.PackageBox position="bottom-right">
          <Link to={PATHS.products.fullPath}>
            <p>{t("landing.mimitha_packages.new_collection")}</p>
          </Link>
        </Styled.PackageBox>

        <Styled.PackageBox position="bottom-left">
          <Link to={PATHS.products.fullPath}>
            <p>{t("landing.mimitha_packages.choose_your_style")}</p>
          </Link>
        </Styled.PackageBox>

        <Styled.PackageBox position="top-right">
          <Link to={PATHS.goes_on.fullPath}>
            <p>{t("landing.mimitha_packages.goes_well")}</p>
          </Link>
        </Styled.PackageBox>

        <Styled.PackageBox position="top-left">
          <Link to={PATHS.gallery.fullPath}>
            <p>
              {t("landing.mimitha_packages.more_than_design.more")}{" "}
              <small>
                {t("landing.mimitha_packages.more_than_design.than")}
              </small>{" "}
              {t("landing.mimitha_packages.more_than_design.design")}
            </p>
          </Link>
        </Styled.PackageBox>
      </div>
    </Styled.MimithaPackagesContainer>
  );
}

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import * as Styled from "./styles/LandingCTAPhoto.styled";

export default function LandingCTAPhoto() {
  const { t } = useTranslation();

  return (
    <Styled.LandingCTAPhoto>
      <Link to={"/products/:productId"} className="cta-link">
        <div className="landingCTA">
          <span>{t("landing.create_your_style.create")}</span>
          <span>{t("landing.create_your_style.your")}</span>
          <span>{t("landing.create_your_style.style")}</span>
        </div>
      </Link>
    </Styled.LandingCTAPhoto>
  );
}

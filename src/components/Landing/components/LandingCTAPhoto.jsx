import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import graphic_cards from "lib/create-your-style-graphic-cards.json";

import { ModalWindow } from "components/Layouts/index";
import * as Styled from "./styles/LandingCTAPhoto.styled";

export default function LandingCTAPhoto() {
  const { t } = useTranslation();
  const [activeCTA_Modal, setActiveCTA_Modal] = useState(false);

  return (
    <Styled.LandingCTAPhoto>
      <button
        to={"/products/:productId"}
        className="cta-link"
        onClick={() => setActiveCTA_Modal(true)}
      >
        <div className="landingCTA">
          <span>{t("landing.create_your_style.create")}</span>
          <span>{t("landing.create_your_style.your")}</span>
          <span>{t("landing.create_your_style.style")}</span>
        </div>
      </button>

      <ModalWindow
        activeModal={activeCTA_Modal}
        closeModal={() => setActiveCTA_Modal(false)}
      >
        <div className="graphic-cards__modal">
          {graphic_cards.map((card) => (
            <Link
              key={card.src}
              to={card.route}
              title={card.title}
              className="graphic-cards__link"
            >
              <figure className="graphic-cards__link-fig">
                <img src={card.src} alt="" />
              </figure>
            </Link>
          ))}
        </div>
      </ModalWindow>
    </Styled.LandingCTAPhoto>
  );
}

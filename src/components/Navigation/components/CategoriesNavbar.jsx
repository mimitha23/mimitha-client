import { Link } from "react-router-dom";
import * as Styled from "./styles/CategoriesNavbar.styled";
import { useTranslation } from "react-i18next";

export default function CategoriesNavbar({ activeBurgerNav, onBurgerClose }) {
  const { t } = useTranslation();

  return (
    <Styled.CategoriesNavbar
      onClick={onBurgerClose}
      className={`${typeof activeBurgerNav === "boolean" ? "burger-nav" : ""} ${
        activeBurgerNav ? "active-burger--nav active-modal" : ""
      }`}
    >
      <ul className="categories-nav__list" onClick={(e) => e.stopPropagation()}>
        <li>
          <Link to={"/"}>{t("navigation.main.men")}</Link>
        </li>
        <li>
          <Link to="/">{t("navigation.main.women")}</Link>
        </li>
        <li>
          <Link to="/">{t("navigation.main.adult")}</Link>
        </li>
        <li>
          <Link to="/">{t("navigation.main.family")}</Link>
        </li>
        <li>
          <Link to="/">{t("navigation.main.combo")}</Link>
        </li>
        <li>
          <Link to="/">{t("navigation.main.my_style")}</Link>
        </li>
        <li>
          <Link to="/">{t("navigation.main.sale")}</Link>
        </li>
      </ul>
    </Styled.CategoriesNavbar>
  );
}

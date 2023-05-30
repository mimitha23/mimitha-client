import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import * as Styled from "./styles/ProductStyler.styled";

export default function ProductStyler() {
  const { t } = useTranslation();

  return (
    <Styled.ProductStyler>
      <div className="moderators__container">
        <div className="product-styler__colorizer-box">
          <h2 className="product-styler__box-title">
            {t("crossover.color_range")}
          </h2>

          <div className="product-styler__colorizer-box__colors-container">
            {["black", "grey", "orange", "purple", "white"].map((color) => (
              <Styled.ColorPicker
                color={color}
                className={color === "orange" ? "active-color" : ""}
                key={`colorizer-${color}`}
              />
            ))}
          </div>
        </div>

        <div className="product-styler__size-box">
          <h2 className="product-styler__box-title">
            {t("crossover.size_range")}
          </h2>

          <div className="product-styler__size-box__sizes-container">
            {["xxs", "xs", "s", "m", "l", "xl", "xxl"].map((size) => (
              <span
                key={`size-${size}`}
                className={`size ${size === "xs" ? "active-size" : ""}`}
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="fit-and-questions__container">
        <Link to="/products/:productId/fit" className="fit-btn">
          {t("crossover.goes_on")}
        </Link>

        <div>
          <p>{t("crossover.how_choose_right_size")}</p>
          <p>{t("crossover.indicate_your_size")}</p>
        </div>
      </div>
    </Styled.ProductStyler>
  );
}

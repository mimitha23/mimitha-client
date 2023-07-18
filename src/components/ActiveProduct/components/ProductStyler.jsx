import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { PATHS } from "config/routes";
import { activeProductActions } from "store/reducers/activeProductReducer";
import { selectActiveProductStyler } from "store/selectors/activeProductSelectors";

import * as Styled from "./styles/ProductStyler.styled";

export default function ProductStyler({ productId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const {
    size,
    activeSize,
    availableColors,
    color: activeProductColor,
  } = useSelector(selectActiveProductStyler);

  return (
    <Styled.ProductStyler>
      <div className="moderators__container">
        <div className="product-styler__colorizer-box">
          <h2 className="product-styler__box-title">
            {t("crossover.color_range")}
          </h2>

          <ul className="product-styler__colorizer-box__colors-container">
            {availableColors.map((color) => (
              <Styled.ColorPicker
                key={color._id}
                color={color.hex}
                onClick={() =>
                  navigate(
                    PATHS.active_product.fullPath({
                      productId: color.productId,
                    })
                  )
                }
                className={
                  color.hex === activeProductColor.hex ? "active-color" : ""
                }
              />
            ))}
          </ul>
        </div>

        <div className="product-styler__size-box">
          <h2 className="product-styler__box-title">
            {t("crossover.size_range")}
          </h2>

          <ul className="product-styler__size-box__sizes-container">
            {size.map((size) => (
              <li
                key={size._id}
                onClick={() => dispatch(activeProductActions.setSize(size._id))}
                className={`size ${
                  size.size === activeSize.size ? "active-size" : ""
                }`}
              >
                <span>{size.size}</span>
                <span
                  className="size-amount"
                  title={`size ${size.size.toUpperCase()} in total - ${
                    size.amount
                  }`}
                >
                  {size.amount}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="fit-and-questions__container">
        {/* <Link
          to={PATHS.fit_products.fullPath({ productId })}
          className="fit-btn"
        >
          {t("crossover.goes_on")}
        </Link> */}

        <div className="qa-box">
          <p>{t("crossover.how_choose_right_size")}</p>
          <p>{t("crossover.indicate_your_size")}</p>
        </div>
      </div>
    </Styled.ProductStyler>
  );
}

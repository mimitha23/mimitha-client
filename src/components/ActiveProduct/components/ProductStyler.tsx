import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";

import { DYNAMIC_PATHS } from "config/paths";
import { activeProductActions } from "store/reducers/activeProduct.reducer";
import { selectActiveProductStyler } from "store/selectors/activeProduct.selectors";

import * as Styled from "./styles/ProductStyler.styled";

interface ProductStylerT {
  productId: string;
}

const ProductStyler: React.FC<ProductStylerT> = ({ productId }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const styler = useAppSelector(selectActiveProductStyler);

  const onNavigateByColor = (id: string) =>
    navigate(DYNAMIC_PATHS.active_product_page(id));

  const onChangeSize = (sizeId: string) =>
    dispatch(activeProductActions.setSize({ sizeId }));

  return (
    <Styled.ProductStyler>
      <div className="moderators__container">
        <div className="product-styler__colorizer-box">
          <h2 className="product-styler__box-title">
            {t("crossover.color_range")}
          </h2>

          <ul className="product-styler__colorizer-box__colors-container">
            {styler.availableColors.map((color) => (
              <Styled.ColorPicker
                key={color._id}
                color={color.hex}
                onClick={() => onNavigateByColor(color.productId)}
                className={color.hex === styler.color.hex ? "active-color" : ""}
              />
            ))}
          </ul>
        </div>

        <div className="product-styler__size-box">
          <h2 className="product-styler__box-title">
            {t("crossover.size_range")}
          </h2>

          <ul className="product-styler__size-box__sizes-container">
            {styler.size.map((size) => (
              <li
                key={size._id}
                onClick={() => onChangeSize(size._id)}
                className={`size ${
                  size.size === styler.activeSize.size ? "active-size" : ""
                }`}
              >
                <span>{size.size}</span>
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
};

export default ProductStyler;

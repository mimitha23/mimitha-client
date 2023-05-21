import { Link } from "react-router-dom";
import * as Styled from "./styles/ProductStyler.styled";

export default function ProductStyler(props) {
  return (
    <Styled.ProductStyler>
      <div>
        <div className="product-styler__colorizer-box">
          <h2 className="product-styler__box-title">ფერების არჩევანი</h2>

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

        {/* <div className="product-styler__style-box">
          <h2 className="product-styler__box-title">სტილის არჩევანი</h2>

          <div className="product-styler__style-box__styles-container">
            {["black", "grey", "orange", "purple", "white"].map((color) => (
              <Styled.ColorPicker
                color={color}
                className={color === "purple" ? "active-color" : ""}
                key={`styler-${color}`}
              />
            ))}
          </div>
        </div> */}

        <div className="product-styler__size-box">
          <h2 className="product-styler__box-title">ზომების არჩევანი</h2>

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
          რას უხდება ?
        </Link>

        <div>
          <p>როგორ შევარჩიოთ ზომა ? </p>
          <p>მიუთითეთ თქვენი ზომები</p>
        </div>
      </div>
    </Styled.ProductStyler>
  );
}

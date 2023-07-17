/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { activeProductActions } from "store/reducers/activeProductReducer";
import { selectActiveProductStatus } from "store/selectors/activeProductSelectors";

import { useFitProduct } from "hooks/layoutBase";

import {
  EditorFitButtons,
  ContainerFull,
  Path,
  Spinner,
} from "components/Layouts";
import {
  ProductHeading,
  ProductDescription,
  ProductStyler,
  ProductShippingInfo,
  ProductView,
  ProductFooter,
  RelatedProducts,
} from "./components";
import * as Styled from "./ActiveProduct.styled";

export default function ActiveProduct() {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const status = useSelector(selectActiveProductStatus);

  const { handleFitMannequin, handleFitModel, activeFit } = useFitProduct();

  useEffect(() => {
    dispatch(activeProductActions.getActiveProduct(productId));

    return () => {
      dispatch(activeProductActions.resetActiveProduct());
    };
  }, [productId]);

  return (
    <Styled.ActiveProductContainer>
      {!status.loading && (
        <ContainerFull>
          <Path />

          <div className="active-product__fit-buttons--box">
            <EditorFitButtons
              activeFit={activeFit}
              onModel={handleFitModel}
              onMannequin={handleFitMannequin}
            />
          </div>

          <div className="product-main">
            <div className="product-main__product-view">
              <ProductView />
            </div>

            <div className="product-main__product-info">
              <ProductHeading productId={productId} />
              <ProductDescription />
              <ProductStyler productId={productId} />
              <ProductShippingInfo />
              <ProductFooter />
            </div>
          </div>

          <RelatedProducts />
        </ContainerFull>
      )}

      {status.loading && <Spinner />}
    </Styled.ActiveProductContainer>
  );
}

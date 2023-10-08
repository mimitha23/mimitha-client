/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { activeProductActions } from "store/reducers/activeProduct.reducer";
import { selectActiveProductStatus } from "store/selectors/activeProduct.selectors";

export default function useActiveProductQuery() {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const status = useSelector(selectActiveProductStatus);

  useEffect(() => {
    dispatch(activeProductActions.getActiveProduct(productId));
    dispatch(activeProductActions.getRelatedProducts(productId));

    return () => {
      dispatch(activeProductActions.resetActiveProduct());
      dispatch(activeProductActions.resetRelatedProducts());
    };
  }, [productId]);

  return { status, productId };
}

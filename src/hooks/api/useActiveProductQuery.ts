/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";

import { activeProductActions } from "store/reducers/activeProduct.reducer";
import { selectActiveProductStatus } from "store/selectors/activeProduct.selectors";

export default function useActiveProductQuery() {
  const dispatch = useAppDispatch();
  const { productId } = useParams();

  const status = useAppSelector(selectActiveProductStatus);

  useEffect(() => {
    dispatch(
      activeProductActions.getActiveProduct({ productId: productId || "" })
    );

    dispatch(
      activeProductActions.getRelatedProducts({ productId: productId || "" })
    );

    return () => {
      dispatch(activeProductActions.resetActiveProduct());
      dispatch(activeProductActions.resetRelatedProducts());
    };
  }, [productId]);

  return { status, productId };
}

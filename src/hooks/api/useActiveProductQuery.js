/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { activeProductActions } from "store/reducers/activeProductReducer";
import { selectActiveProductStatus } from "store/selectors/activeProductSelectors";

export default function useActiveProductQuery() {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const status = useSelector(selectActiveProductStatus);

  useEffect(() => {
    dispatch(activeProductActions.getActiveProduct(productId));
    return () => {
      dispatch(activeProductActions.resetActiveProduct());
    };
  }, [productId]);

  return { status, productId };
}

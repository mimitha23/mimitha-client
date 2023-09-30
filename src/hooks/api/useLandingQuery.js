import { useDispatch, useSelector } from "react-redux";
import { landingActions } from "store/reducers/landingReducer";
import { selectLandingStatus } from "store/selectors/landingSelectors";

export default function useLandingQuery() {
  const dispatch = useDispatch();

  const status = useSelector(selectLandingStatus);

  const getLanding = () => dispatch(landingActions.getLanding());

  const resetLanding = () => dispatch(landingActions.resetLanding());

  return { status, getLanding, resetLanding };
}

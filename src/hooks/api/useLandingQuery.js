import { useDispatch, useSelector } from "react-redux";
import { landingActions } from "store/reducers/landing.reducer";
import { selectLandingStatus } from "store/selectors/landing.selectors";

export default function useLandingQuery() {
  const dispatch = useDispatch();

  const status = useSelector(selectLandingStatus);

  const getLanding = () => dispatch(landingActions.getLanding());

  const resetLanding = () => dispatch(landingActions.resetLanding());

  return { status, getLanding, resetLanding };
}

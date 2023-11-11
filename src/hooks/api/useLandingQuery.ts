import { useAppDispatch, useAppSelector } from "store/hooks";
import { landingActions } from "store/reducers/landing.reducer";
import { selectLandingStatus } from "store/selectors/landing.selectors";

export default function useLandingQuery() {
  const dispatch = useAppDispatch();

  const status = useAppSelector(selectLandingStatus);

  const getLanding = () => dispatch(landingActions.getLanding());

  const resetLanding = () => dispatch(landingActions.cleanUpLanding());

  return { status, getLanding, resetLanding };
}

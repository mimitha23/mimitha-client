/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { landingActions } from "store/reducers/landingReducer";
import { selectLandingStatus } from "store/selectors/landingSelectors";

import { Container, Spinner } from "components/Layouts/index";
import LandingCTAPhoto from "./components/LandingCTAPhoto";
import MimithaPackages from "./components/MimithaPackages";
import PopularProducts from "./components/PopularProducts";
import * as Styled from "./Landing.styled";

export default function Landing() {
  const dispatch = useDispatch();

  const status = useSelector(selectLandingStatus);

  useEffect(() => {
    dispatch(landingActions.getLanding());

    return () => {
      dispatch(landingActions.resetLanding());
    };
  }, []);

  return (
    <Styled.LandingContainer>
      {!status.loading && (
        <>
          <LandingCTAPhoto />
          <Container>
            <MimithaPackages />
            <PopularProducts />
          </Container>
        </>
      )}

      {status.loading && <Spinner />}
    </Styled.LandingContainer>
  );
}

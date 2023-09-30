/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect } from "react";
// import { useLandingQuery } from "hooks/api";

// import { Container, Spinner } from "components/Layouts/index";
import LandingCTAPhoto from "./components/LandingCTAPhoto";
// import MimithaPackages from "./components/MimithaPackages";
// import PopularProducts from "./components/PopularProducts";
import * as Styled from "./Landing.styled";

export default function Landing() {
  // const { status, getLanding, resetLanding } = useLandingQuery();

  // useEffect(() => {
  //   getLanding();

  //   return () => {
  //     resetLanding();
  //   };
  // }, []);

  return (
    <Styled.LandingContainer>
      {!false && (
        <>
          <LandingCTAPhoto />
          {/* <Container>
            <MimithaPackages />
            <PopularProducts />
          </Container> */}
        </>
      )}

      {/* {status.loading && <Spinner />} */}
    </Styled.LandingContainer>
  );
}

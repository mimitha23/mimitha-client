import styled from "styled-components";

export const StyledLandingCTAPhoto = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
  width: 100%;
  height: 100%;
  position: absolute;
  }
`
export const LandingCTAContainer = styled.div`
  background-color: black;
  width: 750px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
`

export const LandingCTA = styled.div`
  width: 730px;
  height: 55px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  color: white;
  border: 1px solid white;
  border-radius: 10px;

  span {
  font-size: 2rem;
  font-weight: 500;
  margin: 2.5px 0 2.5px 0;
  letter-spacing: 2px;
  }

  :nth-child(2) {
  font-size: 3rem;
  letter-spacing: 10px;
}
`
import styled from "styled-components";

export const SearchBarResultsList = styled.div`
  width: 100%;
  margin-top: 4rem;
  max-height: 100%;
  min-height: 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, max-content));
  /* grid-auto-rows: 40rem; */
  gap: 4rem;
  justify-content: center;
  padding: 3rem 1rem;
  overflow: auto;
  background: ${({ theme }) => theme.colors.bg};
  box-shadow: 0 1rem 0.5rem ${({ theme }) => theme.colors.black_tr_05};
  transition: height 0.3s ease;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }

  [data-spinner] {
    position: absolute;
  }

  @media (${({ theme }) => theme.media.tablet_sm}) {
    justify-content: center;
  }

  @media (${({ theme }) => theme.media.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  }
`;

import styled from "styled-components";

const AppContainer = styled.div`
  width: ${({ theme }) => `min(${theme.app.container},100%)`};
  margin: 0 auto;

  @media (${({ theme }) => theme.media.desktop}) {
    padding: 0 1rem;
  }
`;

export default function Container({ children, className }) {
  return (
    <AppContainer data-container className={className || ""}>
      {children}
    </AppContainer>
  );
}

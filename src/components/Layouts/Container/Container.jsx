import styled from "styled-components";

const AppContainer = styled.div`
  width: ${({ theme }) => `min(${theme.app.container},100%)`};
  margin: 0 auto;
`;

export default function Container({ children, className }) {
  return <AppContainer className={className || ""}>{children}</AppContainer>;
}

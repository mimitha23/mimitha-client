import styled from "styled-components";

const ContainerFullEl = styled.div`
  min-height: calc(100vh - ${({ theme }) => theme.app.nav_h});
  padding: 4rem 3rem;
`;

function ContainerFull({ children, className }) {
  return (
    <ContainerFullEl className={className || ""}>{children}</ContainerFullEl>
  );
}

export default ContainerFull;

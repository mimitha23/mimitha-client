import styled from "styled-components";
import { media } from "styles/helpers/media";

const ContainerFullEl = styled.div`
  min-height: calc(100vh - ${({ theme }) => theme.app.nav_h});
  padding: 4rem 3rem;

  ${media.mobileLarge`
    padding:4rem 1rem;
  `}
`;

function ContainerFull({ children, className }) {
  return (
    <ContainerFullEl data-container-full className={className || ""}>
      {children}
    </ContainerFullEl>
  );
}

export default ContainerFull;

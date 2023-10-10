import styled from "styled-components";

const ContainerFullEl = styled.section`
  min-height: calc(100vh - ${({ theme }) => theme.app.nav_h});
  padding: 4rem 3rem;

  @media (${({ theme }) => theme.media.tablet_sm}) {
    padding: 4rem 1rem;
  }
`;

export default function ContainerFull({ children, className, ...props }) {
  return (
    <ContainerFullEl data-container-full className={className || ""} {...props}>
      {children}
    </ContainerFullEl>
  );
}

import { HTMLAttributes } from "react";
import styled from "styled-components";

const ContainerFullEl = styled.section`
  min-height: calc(100vh - ${({ theme }) => theme.app.nav_h});
  padding: 4rem 3rem;

  @media (${({ theme }) => theme.media.tablet_sm}) {
    padding: 4rem 1rem;
  }
`;

interface ContainerFullT {
  children: React.ReactNode;
  className?: string;
  attributes?: HTMLAttributes<HTMLDivElement>;
}

const ContainerFull: React.FC<ContainerFullT> = ({
  children,
  className,
  attributes = {},
}) => {
  return (
    <ContainerFullEl
      data-container-full
      className={className || ""}
      {...attributes}
    >
      {children}
    </ContainerFullEl>
  );
};

export default ContainerFull;

import styled from "styled-components";

export const SupportNavbarContainer = styled.div`
  width: 500px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  right: 0;
  top: 0;
  color: ${({ theme }) => theme.colors.text};

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    list-style-type: none;

    li {
      width: 100%;
      height: 80%;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0px 20px 0px 20px;

      border-right: 2px solid ${({ theme }) => theme.colors.text};

      font-size: 0.75rem;
      font-weight: 500;
      cursor: pointer;

      :nth-child(1) {
        border-left: 2px solid ${({ theme }) => theme.colors.text};
      }
    }
  }

  .language-switch {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .language-switch--item {
    padding: 5px;
    border-right: 2px solid ${({ theme }) => theme.colors.text};
  }
  .supportNavbarSocialNetworks {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

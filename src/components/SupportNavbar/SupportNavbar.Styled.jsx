import styled from "styled-components";

export const SupportNavbarContainer = styled.div`
  width: 500px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  right: 0;
`;

export const SupportNavbarList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  list-style-type: none;
`;

export const SupportNavbarListItem = styled.li`
  width: 100%;
  height: 80%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0px 20px 0px 20px;

  border-right: 2px solid black;

  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;

  :nth-child(1) {
    border-left: 2px solid black;
  }
`;

export const LanguageSwitch = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LanguageSwitchItem = styled.span`
  padding: 5px;
  border-right: 2px solid black;
`;

export const SupportNavbarSocialNetworks = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

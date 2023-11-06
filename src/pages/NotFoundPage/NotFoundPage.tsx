import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { PATHS } from "config/paths";

import { ArrowLeftIcon } from "components/Layouts/Icons";

const NotFoundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;

  .message {
    display: flex;
    align-items: center;
    gap: 14px;
    font-weight: 700;
    font-size: 32px;
    border: 1px solid rgba(51, 51, 51, 0.4);
    padding: 10px 25px;
    border-radius: 10px;
  }

  .status {
    color: ${({ theme }) => theme.colors.red};
    border-right: 1px solid rgba(51, 51, 51, 0.4);
    padding-right: 14px;
  }

  .go-back__btn {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 22px;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    padding: 10px 25px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.bottom_right_md_light};
    transition: all 0.23s ease;

    &:hover {
      box-shadow: ${({ theme }) => theme.shadow.bottom_right_md_dark};
      transform: translateY(-4px);
    }
  }
`;

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const onBackToHome = () => navigate(PATHS.home_page, { replace: true });

  return (
    <NotFoundContainer>
      <p className="message">
        <span className="status">404</span>
        <span>Page Not Found</span>
      </p>

      <button className="go-back__btn" onClick={onBackToHome}>
        <ArrowLeftIcon />
        Back To Home
      </button>
    </NotFoundContainer>
  );
};

export default NotFoundPage;

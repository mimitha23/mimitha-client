import styled from "styled-components";

export const SearchBarField = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  .search-icon {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    line-height: 1;
  }

  .search--input {
    width: 100%;
    height: 100%;
    border: 0;
    text-align: center;
    font-weight: 500;
    background: inherit;
    color: inherit;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: ${({ theme }) => theme.colors.text};
      font-weight: normal;
      letter-spacing: 0.8px;
      text-align: center;
    }
  }

  .search__close-btn {
    display: none;
  }
`;

import styled from "styled-components";

export const SearchBar = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;

  border-bottom: 2px solid ${({ theme }) => theme.colors.text};

  position: absolute;
  bottom: 5px;
  right: 230px;
  color: ${({ theme }) => theme.colors.text};

  .search--input {
    flex: 4;
    width: 100%;
    height: 100%;
    border: 0;

    background-color: ${({ theme }) => theme.colors.bg};
    text-align: center;
    font-size: 1rem;
    font-weight: 500;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1rem;
      font-weight: normal;
      letter-spacing: 0.8px;
      text-align: center;
    }
  }

  .search--icon {
    flex: 1;
  }
`;

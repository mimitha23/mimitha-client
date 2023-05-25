import styled from "styled-components";
import { media } from "styles/helpers/media";

export const SearchBar = styled.div`
  position: relative;
  width: 25rem;
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  margin-left: auto;

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

  ${media.desktop`
    margin-left:unset;
  `}
`;

import styled from "styled-components";

export const StyledEditorStyler = styled.div`
  width: fit-content;
  padding: 10px;
  
  display: flex;

  border: 2px solid ${({ theme }) => theme.colors.text};
  background-color: lightgrey;
`
export const StyledEditorLeftPanel = styled.div`

  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.1rem;
    font-weight: 500;
  }
`
export const StyledEditorColorsChanger = styled.div`
  display: flex;
  margin: 10px 10px 10px 0;
  div {
    margin-right: 10px;
    border: 2px solid ${({ theme }) => theme.colors.text};
    
    cursor: pointer;
    
    :nth-child(1){
      width: 35px;
      height: 35px;

      background-color: black;
      border-radius: 50%;
    }
    :nth-child(2){
      width: 35px;
      height: 35px;

      background-color: grey;
      border-radius: 50%;
    }
    :nth-child(3){
      width: 35px;
      height: 35px;

      background-color: orange;
      border-radius: 50%;
    }
    :nth-child(4){
      width: 35px;
      height: 35px;

      background-color: purple;
      border-radius: 50%;
    }
    :nth-child(5){
      width: 35px;
      height: 35px;

      background-color: white;
      border-radius: 50%;
    }
  
    :hover {
      border-radius: 2px;
      transition: 200ms;
    }
  }
`

export const StyledEditorStyleChanger = styled.div`
  display: flex;
  margin: 10px 10px 10px 0;
  div {
    margin-right: 10px;
    border: 2px solid ${({ theme }) => theme.colors.text};

    cursor: pointer;

    :nth-child(1){
      width: 35px;
      height: 35px;

      background-color: black;
      border-radius: 50%;
    }
    :nth-child(2){
      width: 35px;
      height: 35px;

      background-color: grey;
      border-radius: 50%;
    }
    :nth-child(3){
      width: 35px;
      height: 35px;

      background-color: orange;
      border-radius: 50%;
    }
    :nth-child(4){
      width: 35px;
      height: 35px;

      background-color: purple;
      border-radius: 50%;
    }
    :nth-child(5){
      width: 35px;
      height: 35px;

      background-color: white;
      border-radius: 50%;
    }

    :hover {
      border-radius: 2px;
      transition: 200ms;
    }
  }
`

export const StyledEditorSizeChanger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 5px;

  div {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;


    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    border-right: 2px solid ${({ theme }) => theme.colors.text};

    cursor: pointer;

    :last-child {
      border: 0;
    }

    :hover {
      background-color: ${({ theme }) => theme.colors.text};
      color: ${({ theme }) => theme.colors.bg};
      transition: 200ms;
    }
  }

`

export const StyledEditorRightPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    cursor: pointer;
    letter-spacing: normal.8;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};;
  }
`


export const StyledEditorSuggestionBTN = styled.div`
  width: 280px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.bg};
  background-color: ${({ theme }) => theme.colors.text};

  font-size: 1.5rem;
  font-weight: 900;

  border-radius: 25px;

  cursor: pointer;
  :hover {
    transition: 200ms;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.bg};

    box-shadow: 3px 3px 9px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 3px 3px 9px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 3px 9px 0px rgba(0,0,0,0.75);
  }
`

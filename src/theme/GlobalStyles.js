import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  body {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container-main {
    display: flex;
    flex-direction: column; 
    width: 280px;
    height: 360px;
    background-color: ${({ theme }) => theme.colors.base};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    box-shadow: 0px 0px 16px 4px rgb(0 0 0 / 40%);
    transition: all 0.50s linear;
  }

  .container-display {
    flex: 1;
    display: flex;
    flex-direction: row;
    color: white;
  }

  .input-display {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    font-size: 36px;
    text-align: right;
    color: white;
    margin: 12px 12px 0 0;
  }

  .container-btn {
    flex: 4;
    display: flex;
    flex-direction: column;
    padding: 1px;
  }

  .sub-container-btn {
    flex:1;
    display: flex;
    flex-direction: row;
    align-items: space-between;
  }

  .btn-padding {
    width: 25%;
    display:flex;
    justify-content: center;
    align-items: center;
  }

  .btn-padding.btn-zero {
    width: 50%; 
  }

  button {
    display: block;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    border: none;
    font-size: 20px;
    &:active {
      opacity: 0.7;
    }
    cursor: pointer;
  }

  button.btn-accent {
    background-color: ${({ theme }) => theme.colors.accent};
    color: white;
  }

  button.btn-secondary {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
  }

  button.btn-tertiary {
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.text};
  }
`
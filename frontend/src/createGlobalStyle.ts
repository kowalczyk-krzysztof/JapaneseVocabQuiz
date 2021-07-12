// Styling
import styled, { createGlobalStyle } from 'styled-components';
import '@fontsource/noto-sans-jp';

export const GlobalStyle = createGlobalStyle`
html {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  background: #00ABE7;
  color: #FAFAFA;
  font-family: "Noto Sans JP";
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  text-align: center;
}
body {
  width: 100%
}
`;

export const ButtonTemplate = styled.button`
  color: #ffff;
  width: 10rem;
  height: 4rem;
  user-select: none;
  margin: 2rem;
  text-align: center;
  box-sizing: border-box;
  border-radius: 10px;
  border: 2px solid #00abe7;
  cursor: pointer;
  outline: none;
`;

export const StyledTitle = styled.h1`
  font-size: 5rem;
  user-select: none;
  margin-bottom: 3rem;
  margin-top: 0;
`;

// Styling
import styled, { createGlobalStyle } from 'styled-components';
import '@fontsource/noto-sans-jp';

// Variables
// Colors
export const red: string = '#f74848';
export const lightRed: string = '#fa6868';
export const green: string = '#4df735';
export const lightGreen: string = '#74f861';
// Units
export const smallMargin: string = '5vh';
export const bigMargin: string = '20vh';

export const GlobalStyle = createGlobalStyle`
html, body {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  color: #FAFAFA;
  font-family: "Noto Sans JP";
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
}
`;

export const ButtonTemplate = styled.button`
  margin-top: 10px;
  width: 8rem;
  height: 4rem;
  user-select: none;
  text-align: center;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
`;

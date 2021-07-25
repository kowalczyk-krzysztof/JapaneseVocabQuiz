// Styling
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import '@fontsource/noto-sans-jp';

// Variables
// Colors
export const red: string = '#f74848';
export const lightRed: string = '#fa6868';
export const green: string = '#4df735';
export const lightGreen: string = '#74f861';
export const blackish: string = '#0a0713';
export const white: string = '#FAFAFA';
// Units
export const smallMargin: string = '15%';
export const mediumMargin: string = '20%';
export const bigMargin: string = '25%';

export const GlobalStyle = createGlobalStyle`
html, body {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  color: ${white};
  font-family: "Noto Sans JP";
  font-weight: 400;
  font-display: swap;
  margin: 0;
  padding: 0;
  text-align: center; 
}
body {
background-color: #4b32ae;
  background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23faf7ff' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
`;

export const StyledWordContainer = styled.div`
  grid-area: word;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
`;

const DotAnimation = keyframes`
  50% {
    opacity: 0;
    transform: scale(0.6) translateY(10px);
  }
`;

export const StyledLoadingDot = styled.span`
  background-color: ${white};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  animation: ${DotAnimation} 2s infinite ease-in-out;
`;

export const StyledLoadingContainer = styled.div`
  margin-top: 3rem;
  span:nth-child(2) {
    animation-delay: 0.4s;
  }
  span:nth-child(3) {
    animation-delay: 0.8s;
  }
`;

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
  margin: 0;
  padding: 0;
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

export const StyledWordContainerTemplate = styled.div`
  grid-area: word;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background: ${blackish};
  border: 1px solid ${white};
  margin-right: ${smallMargin};
  margin-left: ${smallMargin};
  text-align: center;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (min-width: 480px) {
    margin-right: ${mediumMargin};
    margin-left: ${mediumMargin};
  }

  @media only screen and (min-width: 992px) {
    margin-right: ${bigMargin};
    margin-left: ${bigMargin};
  }
`;

const Blah = keyframes`
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
  animation: ${Blah} 2s infinite ease-in-out;
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

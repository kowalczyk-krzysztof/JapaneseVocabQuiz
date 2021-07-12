// Styling
import { createGlobalStyle } from 'styled-components';
import '@fontsource/noto-sans-jp';

export const GlobalStyle = createGlobalStyle`
html, body {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  background: #8A2BE2;
  color: #FAFAFA;
  font-family: "Noto Sans JP";
  font-size: 1.125rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;  
}
`;

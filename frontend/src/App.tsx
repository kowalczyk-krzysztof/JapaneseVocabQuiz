import React, { Fragment } from 'react';
// Components
import { GameContainer } from './components/game/gameContainer';
// Styling
import { GlobalStyle, StyledTitle } from './createGlobalStyle';

function App() {
  return (
    <Fragment>
      <StyledTitle>JAPANESE WORD QUIZ</StyledTitle>
      <GlobalStyle />
      <GameContainer />
    </Fragment>
  );
}

export default App;

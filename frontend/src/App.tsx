import React, { Fragment } from 'react';
// Components
import { GameContainer } from './components/game/gameContainer';
// Styling
import { GlobalStyle } from './createGlobalStyle';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <GameContainer />
    </Fragment>
  );
}

export default App;

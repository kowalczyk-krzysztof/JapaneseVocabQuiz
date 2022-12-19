import { Fragment } from 'react';
// Components
import { GameContainer } from './components/game/GameContainer';
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

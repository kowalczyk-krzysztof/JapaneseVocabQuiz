// Testing libraries
import { render } from '@testing-library/react';
// Redux
import { createTestStore } from '../../app/store';
import { Provider } from 'react-redux';
import {
  SET_GAME_STARTED,
  SET_IS_GAME_OVER,
} from '../../features/game/gameSlice';
// Components
import { GameOverScreen } from './GameOverScreen';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing game over screen', () => {
  test('game over screen rendering properly when game is over', () => {
    let state = store.getState().game;
    expect(state.isGameStarted).toEqual(false);
    store.dispatch(SET_GAME_STARTED(true));
    store.dispatch(SET_IS_GAME_OVER(true));
    state = store.getState().game;
    expect(state.isGameStarted).toEqual(true);
    expect(state.isGameOver).toEqual(true);

    const { queryByTestId } = render(
      <Provider store={store}>
        <GameOverScreen />
      </Provider>
    );

    expect(queryByTestId('gameoverscreen')).toBeInTheDocument();
  });
});

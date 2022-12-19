// Testing libraries
import { render } from '@testing-library/react';
// Redux
import { createTestStore } from '../../app/store';
import { Provider } from 'react-redux';
import { SET_GAME_STARTED } from '../../features/game/gameSlice';
// Components
import { GameBoard } from './GameBoard';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing game board', () => {
  test('game board rendering properly when game has started', () => {
    let state = store.getState().game;
    expect(state.isGameStarted).toEqual(false);
    store.dispatch(SET_GAME_STARTED(true));
    state = store.getState().game;
    expect(state.isGameStarted).toEqual(true);

    const { queryByTestId } = render(
      <Provider store={store}>
        <GameBoard />
      </Provider>
    );
    expect(queryByTestId('gameboard')).toBeInTheDocument();
  });
});

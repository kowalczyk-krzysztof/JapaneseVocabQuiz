import { createTestStore } from '../../app/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { GameBoard } from './GameBoard';
import { SET_GAME_STARTED } from '../../features/game/gameSlice';

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
  test('game board not rendering when the game has not started', () => {
    let state = store.getState().game;
    expect(state.isGameStarted).toEqual(false);
    const { queryByTestId } = render(
      <Provider store={store}>
        <GameBoard />
      </Provider>
    );
    expect(queryByTestId('gameboard')).toEqual(null);
  });
});

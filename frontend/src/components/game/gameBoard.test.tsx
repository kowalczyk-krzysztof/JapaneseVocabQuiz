import '@testing-library/jest-dom/extend-expect';
import { createTestStore } from '../../app/store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { GameBoard } from './gameBoard';
import {
  SET_GAME_STARTED,
  SET_IS_GAME_OVER,
} from '../../features/game/gameSlice';

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
  test('game board rendering game over title when the game is over', () => {
    let state = store.getState().game;
    expect(state.isGameStarted).toEqual(false);
    store.dispatch(SET_GAME_STARTED(true));
    store.dispatch(SET_IS_GAME_OVER(true));
    state = store.getState().game;
    expect(state.isGameStarted).toEqual(true);
    expect(state.isGameOver).toEqual(true);

    render(
      <Provider store={store}>
        <GameBoard />
      </Provider>
    );

    const gameOver: HTMLElement = screen.getByText('GAME OVER', {
      exact: true,
    });
    expect(gameOver).toBeInTheDocument();
  });
});

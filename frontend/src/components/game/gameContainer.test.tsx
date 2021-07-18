import '@testing-library/jest-dom/extend-expect';
import { createTestStore } from '../../app/store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { GameContainer } from './GameContainer';
import { SET_GAME_STARTED } from '../../features/game/gameSlice';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing main game container', () => {
  test('game container rendering properly when game has started', () => {
    let state = store.getState().game;
    expect(state.isGameStarted).toEqual(false);
    store.dispatch(SET_GAME_STARTED(true));
    state = store.getState().game;
    expect(state.isGameStarted).toEqual(true);

    const { queryByTestId } = render(
      <Provider store={store}>
        <GameContainer />
      </Provider>
    );
    expect(queryByTestId('gamecontainer')).toBeInTheDocument();
  });
  test('game container rendering properly when the word is not started yet', () => {
    let state = store.getState().game;
    expect(state.isGameStarted).toEqual(false);
    render(
      <Provider store={store}>
        <GameContainer />
      </Provider>
    );
    const instructions: HTMLElement = screen.getByText(
      `Generate a two-kanji word and guess if it's a real Japanese word`,
      {
        exact: true,
      }
    );

    expect(instructions).toBeInTheDocument();
  });
});

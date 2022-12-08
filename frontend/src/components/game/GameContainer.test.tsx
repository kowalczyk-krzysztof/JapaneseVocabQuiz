import { render, screen } from '@testing-library/react';
import { createTestStore } from '../../app/store';
import { Provider } from 'react-redux';
import { GameContainer } from './GameContainer';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing main game container', () => {
  test('game container rendering properly', () => {
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

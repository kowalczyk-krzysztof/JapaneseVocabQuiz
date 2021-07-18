import '@testing-library/jest-dom/extend-expect';
import { createTestStore } from '../../app/store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Definitions } from './Definitions';
import { SET_GAME_STARTED } from '../../features/game/gameSlice';
import { SET_NEW_WORD, WordProps } from '../../features/words/wordsSlice';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing definitions container', () => {
  const realWord: WordProps = {
    word: '勝負',
    wordExists: true,
    reading: 'しょうぶ',
    definitions: ['victory or defeat'],
  };
  const fakeWord: WordProps = {
    word: '堤為',
    wordExists: false,
    reading: '',
    definitions: [],
  };
  test('definitions container rendering properly when the word has definitions', () => {
    let state = store.getState();
    store.dispatch(SET_GAME_STARTED(true));
    store.dispatch(SET_NEW_WORD(realWord));
    state = store.getState();
    expect(state.game.isGameStarted).toEqual(true);
    expect(state.words.word).toEqual(realWord);

    render(
      <Provider store={store}>
        <Definitions />
      </Provider>
    );
    const definitions: HTMLElement = screen.getByText('victory or defeat', {
      exact: true,
    });

    expect(definitions).toBeInTheDocument();
  });
  test('definitions container rendering properly when the word has no definitions', () => {
    let state = store.getState();
    store.dispatch(SET_GAME_STARTED(true));
    store.dispatch(SET_NEW_WORD(fakeWord));
    state = store.getState();
    expect(state.game.isGameStarted).toEqual(true);
    expect(state.words.word).toEqual(fakeWord);

    render(
      <Provider store={store}>
        <Definitions />
      </Provider>
    );
    const definitions: HTMLElement = screen.getByText('FAKE WORD', {
      exact: true,
    });

    expect(definitions).toBeInTheDocument();
  });
});

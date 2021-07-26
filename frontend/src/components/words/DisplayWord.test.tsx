// Testing libraries
import { render, act, screen } from '@testing-library/react';
// Redux
import { createTestStore } from '../../app/store';
import { Provider } from 'react-redux';
import { SET_GAME_STARTED } from '../../features/game/gameSlice';
import {
  SET_NEW_WORD,
  SET_WORD_LOADING,
  WordProps,
} from '../../features/words/wordsSlice';
// Components
import { DisplayWord } from './DisplayWord';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing displayword component', () => {
  const realWord: WordProps = {
    word: '勝負',
    wordExists: true,
    reading: 'しょうぶ',
    definitions: ['victory or defeat'],
  };
  test('word info container rendering properly when the word has been answered', () => {
    let state = store.getState();
    store.dispatch(SET_GAME_STARTED(true));
    store.dispatch(SET_NEW_WORD(realWord));

    state = store.getState();
    expect(state.game.isGameStarted).toEqual(true);
    expect(state.words.word).toEqual(realWord);

    render(
      <Provider store={store}>
        <DisplayWord />
      </Provider>
    );
    const word: HTMLElement = screen.getByText('勝負', {
      exact: true,
    });

    expect(word).toBeInTheDocument();
  });
  test('set timeout causing loading dots to render after 3 seconds of trying to fetch a word', () => {
    // USE FAKE TIMERS HAS TO BE AT THE BEGGINING OR IT WON'T WORK, FOR SOME REASON
    jest.useFakeTimers();
    let state = store.getState();
    store.dispatch(SET_GAME_STARTED(true));
    store.dispatch(SET_WORD_LOADING());
    state = store.getState();
    expect(state.game.isGameStarted).toEqual(true);

    const { queryByTestId } = render(
      <Provider store={store}>
        <DisplayWord />
      </Provider>
    );

    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(queryByTestId('loadingdots')).toBeInTheDocument();
  });
});

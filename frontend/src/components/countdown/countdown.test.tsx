import '@testing-library/jest-dom/extend-expect';
import { createTestStore } from '../../app/store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Countdown } from './countdown';
import {
  SET_DECREASE_TIME,
  SET_GAME_STARTED,
  startingTime,
} from '../../features/game/gameSlice';
import { SET_NEW_WORD, WordProps } from '../../features/words/wordsSlice';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing countdown timer', () => {
  const realWord: WordProps = {
    word: '勝負',
    wordExists: true,
    reading: 'しょうぶ',
    definitions: ['victory or defeat'],
  };
  test('countdown timer rendering properly when there is still time left', () => {
    let state = store.getState();
    store.dispatch(SET_GAME_STARTED(true));
    store.dispatch(SET_NEW_WORD(realWord));
    state = store.getState();
    expect(state.game.isGameStarted).toEqual(true);
    expect(state.game.is_question_answered).toEqual(false);
    expect(state.words.wordLoading).toEqual(false);
    expect(state.game.time_left).toEqual(startingTime);

    const { queryByTestId } = render(
      <Provider store={store}>
        <Countdown />
      </Provider>
    );

    expect(queryByTestId('countdown')).toBeInTheDocument();
    const timeLeft: HTMLElement = screen.getByText(startingTime, {
      exact: true,
    });

    expect(timeLeft).toBeInTheDocument();
  });
  test('countdown timer rendering properly when there is no time left', () => {
    let state = store.getState();
    store.dispatch(SET_GAME_STARTED(true));
    store.dispatch(SET_NEW_WORD(realWord));
    state = store.getState();
    expect(state.game.isGameStarted).toEqual(true);
    expect(state.game.is_question_answered).toEqual(false);
    expect(state.words.wordLoading).toEqual(false);
    expect(state.game.time_left).toEqual(startingTime);

    // Repeat x times
    Array.from({ length: startingTime }, () =>
      store.dispatch(SET_DECREASE_TIME())
    );

    state = store.getState();
    expect(state.game.time_left).toEqual(0);

    const { queryByTestId } = render(
      <Provider store={store}>
        <Countdown />
      </Provider>
    );

    expect(queryByTestId('countdown')).toBeInTheDocument();
    const timeup: HTMLElement = screen.getByText('TIME UP', {
      exact: true,
    });

    expect(timeup).toBeInTheDocument();
  });
  test('countdown set interval properly updating state', () => {
    // USE FAKE TIMERS HAS TO BE AT THE BEGGINING OR IT WON'T WORK, FOR SOME REASON
    jest.useFakeTimers();
    let state = store.getState();
    store.dispatch(SET_GAME_STARTED(true));
    store.dispatch(SET_NEW_WORD(realWord));
    state = store.getState();
    expect(state.game.isGameStarted).toEqual(true);
    expect(state.game.is_question_answered).toEqual(false);
    expect(state.words.wordLoading).toEqual(false);
    expect(state.game.time_left).toEqual(startingTime);

    const { queryByTestId } = render(
      <Provider store={store}>
        <Countdown />
      </Provider>
    );

    expect(queryByTestId('countdown')).toBeInTheDocument();
    jest.advanceTimersByTime(1000);
    state = store.getState();
    expect(state.game.time_left).toEqual(startingTime - 1);
  });
});

// Testing libraries
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
// Redux
import { createTestStore } from '../../app/store';
import { Provider } from 'react-redux';
import {
  SET_GAME_STARTED,
  SET_TIMER_START,
  startingLives,
  startingTime,
} from '../../features/game/gameSlice';
import { SET_NEW_WORD, WordProps } from '../../features/words/wordsSlice';
// Components
import { AnswerButton } from './AnswerButton';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing answer buttons', () => {
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
  test('true answer button rendering properly', () => {
    let state = store.getState();
    store.dispatch(SET_GAME_STARTED(true));
    state = store.getState();
    expect(state.game.isGameStarted).toEqual(true);
    expect(state.game.is_question_answered).toEqual(false);
    expect(state.words.wordLoading).toEqual(false);

    const { queryByTestId } = render(
      <Provider store={store}>
        <AnswerButton isTrue={true} />
      </Provider>
    );
    expect(queryByTestId('trueanswerbutton')).toBeInTheDocument();
  });
  test('false answer button rendering properly', () => {
    let state = store.getState();
    store.dispatch(SET_GAME_STARTED(true));
    state = store.getState();
    expect(state.game.isGameStarted).toEqual(true);
    expect(state.game.is_question_answered).toEqual(false);
    expect(state.words.wordLoading).toEqual(false);

    const { queryByTestId } = render(
      <Provider store={store}>
        <AnswerButton isTrue={false} />
      </Provider>
    );
    expect(queryByTestId('falseanswerbutton')).toBeInTheDocument();
  });
  test('true answer button onClick', () => {
    let state = store.getState();
    store.dispatch(SET_GAME_STARTED(true));

    // Checking correct answer
    store.dispatch(SET_NEW_WORD(realWord));
    store.dispatch(SET_TIMER_START());
    state = store.getState();
    expect(state.game.isGameStarted).toEqual(true);
    expect(state.game.is_question_answered).toEqual(false);
    expect(state.words.wordLoading).toEqual(false);
    expect(state.words.word).toEqual(realWord);
    expect(state.game.time_left).toEqual(startingTime);

    const { queryByTestId } = render(
      <Provider store={store}>
        <AnswerButton isTrue={true} />
      </Provider>
    );
    expect(queryByTestId('trueanswerbutton')).toBeInTheDocument();
    userEvent.click(queryByTestId('trueanswerbutton') as HTMLElement);

    state = store.getState();
    expect(state.game.user_answer).toEqual(true);
    expect(state.game.is_question_answered).toEqual(true);
    expect(state.game.points).toEqual(75);
    expect(state.game.points_gained).toEqual(75);
    expect(state.game.lives).toEqual(startingLives);
    // Checking wrong answer
    store.dispatch(SET_NEW_WORD(fakeWord));
    store.dispatch(SET_TIMER_START());
    state = store.getState();
    expect(state.game.is_question_answered).toEqual(true);
    expect(state.words.wordLoading).toEqual(false);
    expect(state.words.word).toEqual(fakeWord);
    expect(state.game.time_left).toEqual(startingTime);

    userEvent.click(queryByTestId('trueanswerbutton') as HTMLElement);
    state = store.getState();
    expect(state.game.user_answer).toEqual(true);
    expect(state.game.is_question_answered).toEqual(true);
    expect(state.game.points).toEqual(75);
    expect(state.game.points_gained).toEqual(0);
    expect(state.game.lives).toEqual(startingLives - 1);
  });
  test('false answer button onClick', () => {
    let state = store.getState();
    store.dispatch(SET_GAME_STARTED(true));

    // Checking correct answer
    store.dispatch(SET_NEW_WORD(fakeWord));
    store.dispatch(SET_TIMER_START());
    state = store.getState();
    expect(state.game.isGameStarted).toEqual(true);
    expect(state.game.is_question_answered).toEqual(false);
    expect(state.words.wordLoading).toEqual(false);
    expect(state.words.word).toEqual(fakeWord);
    expect(state.game.time_left).toEqual(startingTime);

    const { queryByTestId } = render(
      <Provider store={store}>
        <AnswerButton isTrue={false} />
      </Provider>
    );
    expect(queryByTestId('falseanswerbutton')).toBeInTheDocument();
    userEvent.click(queryByTestId('falseanswerbutton') as HTMLElement);

    state = store.getState();
    expect(state.game.user_answer).toEqual(false);
    expect(state.game.is_question_answered).toEqual(true);
    expect(state.game.points).toEqual(75);
    expect(state.game.points_gained).toEqual(75);
    expect(state.game.lives).toEqual(startingLives);
    // Checking wrong answer
    store.dispatch(SET_NEW_WORD(realWord));
    store.dispatch(SET_TIMER_START());
    state = store.getState();
    expect(state.game.is_question_answered).toEqual(true);
    expect(state.words.wordLoading).toEqual(false);
    expect(state.words.word).toEqual(realWord);
    expect(state.game.time_left).toEqual(startingTime);

    userEvent.click(queryByTestId('falseanswerbutton') as HTMLElement);
    state = store.getState();
    expect(state.game.user_answer).toEqual(false);
    expect(state.game.is_question_answered).toEqual(true);
    expect(state.game.points).toEqual(75);
    expect(state.game.points_gained).toEqual(0);
    expect(state.game.lives).toEqual(startingLives - 1);
  });
});

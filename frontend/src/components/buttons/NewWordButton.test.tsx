// Testing libraries
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
// Redux
import { createTestStore } from '../../app/store';
import { Provider } from 'react-redux';
import {
  SET_GAME_STARTED,
  SET_QUESTION_ANSWERED,
} from '../../features/game/gameSlice';
import { initialState } from '../../features/words/wordsSlice';
// Components
import { NewWordButton } from './NewWordButton';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing new word button', () => {
  test('new word button rendering properly', () => {
    let state = store.getState();
    store.dispatch(SET_GAME_STARTED(true));
    store.dispatch(SET_QUESTION_ANSWERED(true));
    state = store.getState();
    expect(state.game.isGameStarted).toEqual(true);
    expect(state.game.is_question_answered).toEqual(true);
    expect(state.game.lives).toBeGreaterThan(0);
    expect(state.words.wordLoading).toEqual(false);

    const { queryByTestId } = render(
      <Provider store={store}>
        <NewWordButton />
      </Provider>
    );
    expect(queryByTestId('newwordbutton')).toBeInTheDocument();
  });
  test('new word button onClick event', () => {
    let state = store.getState();
    store.dispatch(SET_GAME_STARTED(true));
    store.dispatch(SET_QUESTION_ANSWERED(true));
    state = store.getState();
    const { queryByTestId } = render(
      <Provider store={store}>
        <NewWordButton />
      </Provider>
    );
    expect(queryByTestId('newwordbutton')).toBeInTheDocument();
    userEvent.click(queryByTestId('newwordbutton') as HTMLElement);

    state = store.getState();

    expect(state.words.loadingTime).toBeGreaterThan(0);
    expect(state.words.wordLoading).toEqual(true);
    expect(state.words.word).toEqual(initialState.word);
    expect(state.game.points_gained).toEqual(0);
    expect(state.game.is_question_answered).toEqual(false);
  });
});

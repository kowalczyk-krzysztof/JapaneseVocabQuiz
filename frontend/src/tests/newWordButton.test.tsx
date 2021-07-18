import '@testing-library/jest-dom/extend-expect';
import { createTestStore } from '../app/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { NewWordButton } from '../components/startandnew/newWordButton';
import {
  SET_GAME_STARTED,
  SET_QUESTION_ANSWERED,
} from '../features/game/gameSlice';

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
});

import { createTestStore } from '../../app/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AnswerButtonsContainer } from './AnswerButtonsContainer';
import { SET_GAME_STARTED } from '../../features/game/gameSlice';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing answer buttons container', () => {
  test('answer buttons container rendering properly', () => {
    let state = store.getState();
    store.dispatch(SET_GAME_STARTED(true));
    state = store.getState();
    expect(state.game.isGameStarted).toEqual(true);
    expect(state.game.is_question_answered).toEqual(false);
    expect(state.words.wordLoading).toEqual(false);

    const { queryByTestId } = render(
      <Provider store={store}>
        <AnswerButtonsContainer />
      </Provider>
    );
    expect(queryByTestId('answerbuttons')).toBeInTheDocument();
  });
});

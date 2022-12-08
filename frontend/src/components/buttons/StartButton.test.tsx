import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { createTestStore } from '../../app/store';
import { Provider } from 'react-redux';
import {
  SET_GAME_STARTED,
  SET_IS_GAME_OVER,
  Game,
  startingLives,
} from '../../features/game/gameSlice';
import { initialState } from '../../features/words/wordsSlice';
import { StartButton } from './StartButton';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing start game button', () => {
  test('start game button rendering when the game is not started', () => {
    let state: boolean = store.getState().game.isGameStarted;
    expect(state).toEqual(false);
    const { queryByTestId } = render(
      <Provider store={store}>
        <StartButton />
      </Provider>
    );
    expect(queryByTestId('startbutton')).toBeInTheDocument();
  });
  test('start game button rendering when the game is over', () => {
    let state: Game = store.getState().game;
    expect(state.isGameOver).toEqual(false);
    expect(state.isGameStarted).toEqual(false);
    store.dispatch(SET_GAME_STARTED(true));
    state = store.getState().game;
    expect(state.isGameStarted).toEqual(true);
    store.dispatch(SET_IS_GAME_OVER(true));
    state = store.getState().game;
    expect(state.isGameOver).toEqual(true);
    expect(state.isGameStarted).toEqual(true);
    const { queryByTestId } = render(
      <Provider store={store}>
        <StartButton />
      </Provider>
    );
    expect(queryByTestId('startbutton')).toBeInTheDocument();
  });
  test('start button onClick event', () => {
    let state = store.getState();
    expect(state.game.isGameStarted).toEqual(false);
    const { queryByTestId } = render(
      <Provider store={store}>
        <StartButton />
      </Provider>
    );
    expect(queryByTestId('startbutton')).toBeInTheDocument();

    userEvent.click(queryByTestId('startbutton') as HTMLElement);

    state = store.getState();
    expect(state.game.isGameStarted).toEqual(true);
    expect(state.game.isGameOver).toEqual(false);
    expect(state.game.lives).toEqual(startingLives);
    expect(state.game.points).toEqual(0);
    expect(state.game.is_question_answered).toEqual(false);
    expect(state.game.user_answer).toEqual(null);
    expect(state.words.word).toEqual(initialState.word);
    expect(state.words.loadingTime).toBeGreaterThan(0);
  });
});

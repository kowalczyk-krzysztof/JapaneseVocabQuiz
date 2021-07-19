import '@testing-library/jest-dom/extend-expect';
import { createTestStore } from '../../app/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { LivesContainer } from './LivesContainer';
import { SET_GAME_STARTED, startingLives } from '../../features/game/gameSlice';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing lives container', () => {
  test('lives container rendering properly', () => {
    let state = store.getState().game;
    store.dispatch(SET_GAME_STARTED(true));
    state = store.getState().game;
    expect(state.isGameStarted).toEqual(true);
    expect(state.lives).toEqual(startingLives);
    expect(state.lives_lost).toEqual(0);

    const { queryByTestId } = render(
      <Provider store={store}>
        <LivesContainer />
      </Provider>
    );
    expect(queryByTestId('livescontainer')).toBeInTheDocument();
  });
});

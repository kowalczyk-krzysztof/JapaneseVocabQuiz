import { render } from '@testing-library/react';
import { createTestStore } from '../../app/store';
import { Provider } from 'react-redux';
import { StartGameScreen } from './StartGameScreen';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing start game screen', () => {
  test('start game screen rendering properly when game is not started', () => {
    let state = store.getState().game;
    expect(state.isGameStarted).toEqual(false);

    const { queryByTestId } = render(
      <Provider store={store}>
        <StartGameScreen />
      </Provider>
    );

    expect(queryByTestId('startgamescreen')).toBeInTheDocument();
  });
});

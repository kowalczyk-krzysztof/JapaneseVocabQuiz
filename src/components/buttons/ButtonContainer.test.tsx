// Testing libraries
import { render } from '@testing-library/react';
// Redux
import { createTestStore } from '../../app/store';
import { Provider } from 'react-redux';
// Components
import { ButtonContainer } from './ButtonContainer';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing button container', () => {
  test('button container button rendering properly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <ButtonContainer />
      </Provider>
    );
    expect(queryByTestId('buttoncontainer')).toBeInTheDocument();
  });
});

// Redux
import { createTestStore } from '../../app/store';
import {
  SET_NEW_WORD,
  SET_WORD_RESET,
  SET_WORD_LOADING,
  initialState,
  WordObject,
  WordProps,
} from './wordsSlice';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing word slice reducers', () => {
  const newWord: WordProps = {
    word: '勝負',
    wordExists: true,
    reading: 'しょうぶ',
    definitions: ['victory or defeat'],
  };
  test('sets a new word', () => {
    let state: WordObject = store.getState().words;
    expect(state).toEqual(initialState);
    store.dispatch(SET_NEW_WORD(newWord));

    state = store.getState().words;
    expect(state.word.word).toEqual('勝負');
    expect(state.word.wordExists).toEqual(true);
    expect(state.word.reading).toEqual('しょうぶ');
    expect(state.word.definitions).toEqual(['victory or defeat']);
    expect(state.wordLoading).toEqual(false);
    expect(state.loadingTime).toEqual(0);
  });
  test('resets a word', () => {
    store.dispatch(SET_NEW_WORD(newWord));
    let state: WordObject = store.getState().words;
    expect(state.word.word).toEqual('勝負');
    expect(state.word.wordExists).toEqual(true);
    expect(state.word.reading).toEqual('しょうぶ');
    expect(state.word.definitions).toEqual(['victory or defeat']);

    store.dispatch(SET_WORD_RESET());
    state = store.getState().words;

    expect(state.word.word).toEqual('');
    expect(state.word.wordExists).toEqual(false);
    expect(state.word.reading).toEqual('');
    expect(state.word.definitions).toEqual(['']);
  });
  test('sets word loading state', () => {
    let state: WordObject = store.getState().words;
    expect(state.wordLoading).toEqual(false);
    expect(state.loadingTime).toEqual(0);
    const now: number = Date.now();
    store.dispatch(SET_WORD_LOADING(now));
    state = store.getState().words;
    expect(state.wordLoading).toEqual(true);
    expect(state.loadingTime).toEqual(now);
  });
});

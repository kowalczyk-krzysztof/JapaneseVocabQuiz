import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface WordProps {
  word: string;
  wordExists: boolean;
  reading: string | null;
  definitions: string[][] | null;
}

export interface WordObject {
  word: WordProps;
  wordLoading: boolean;
}
const initialState: WordObject = {
  word: {
    word: '',
    wordExists: false,
    reading: null,
    definitions: null,
  },
  wordLoading: false,
};
// Slice
const wordsSlice = createSlice({
  name: `words`,
  initialState,
  reducers: {
    SET_NEW_WORD(state, action: PayloadAction<WordProps>) {
      state.wordLoading = false;
      state.word.word = action.payload.word;
      state.word.wordExists = action.payload.wordExists;
      state.word.reading = action.payload.reading;
      state.word.definitions = action.payload.definitions;
    },
    SET_WORD_RESET(state) {
      state.word.word = '';
      state.word.wordExists = false;
      state.word.reading = null;
      state.word.definitions = null;
    },
    SET_WORD_LOADING(state) {
      state.wordLoading = true;
    },
  },
});
// Selectors
export const wordsSelector = (state: RootState) => state.words;
// Actions and reducer
export const { SET_NEW_WORD, SET_WORD_RESET, SET_WORD_LOADING } =
  wordsSlice.actions;
export default wordsSlice.reducer;

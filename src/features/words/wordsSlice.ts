import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type WordDto = {
  readonly word: string;
  readonly wordExists: boolean;
  readonly reading: string;
  readonly definitions: string[];
};

export type WordDtoWithLoading = WordDto & {
  readonly wordLoading: boolean;
};
export const initialState: WordDtoWithLoading = {
  word: '',
  wordExists: false,
  reading: '',
  definitions: [],
  wordLoading: false,
};

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    SET_NEW_WORD(state, action: PayloadAction<WordDto>) {
      state.wordLoading = false;
      state.word = action.payload.word;
      state.wordExists = action.payload.wordExists;
      state.reading = action.payload.reading;
      state.definitions = action.payload.definitions;
    },
    SET_WORD_RESET(state) {
      state.word = '';
      state.wordExists = false;
      state.reading = '';
      state.definitions = [];
    },
    SET_WORD_LOADING(state) {
      state.wordLoading = true;
    },
  },
});

export const wordsSelector = (state: RootState) => state.words;

export const { SET_NEW_WORD, SET_WORD_RESET, SET_WORD_LOADING } =
  wordsSlice.actions;
export default wordsSlice.reducer;

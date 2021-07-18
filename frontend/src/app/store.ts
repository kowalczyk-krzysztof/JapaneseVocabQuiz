import {
  createStore,
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import wordsReducer from '../features/words/wordsSlice';
import gameReducer from '../features/game/gameSlice';

export const store = configureStore({
  reducer: {
    words: wordsReducer,
    game: gameReducer,
  },
});

// For testing
export const createTestStore = () => {
  const store = createStore(
    combineReducers({
      words: wordsReducer,
      game: gameReducer,
    })
  );
  return store;
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

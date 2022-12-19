import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type Game = {
  isGameStarted: boolean;
  points: number;
  points_gained: number;
  lives: number;
  user_answer: boolean | null;
  isAnswered: boolean;
  time_left: number;
};

export const MAX_LIVES = 5;
export const STARTING_TIME = 15;
export const POINTS_PER_SECOND = 5;

export const initialState: Game = {
  isGameStarted: false,
  points: 0,
  points_gained: 0,
  lives: MAX_LIVES,
  user_answer: null,
  isAnswered: false,
  time_left: STARTING_TIME,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    SET_START_GAME() {
      return { ...initialState, isGameStarted: true };
    },
    SET_IS_GAME_OVER(state) {
      state.lives = 0;
    },
    SET_RESET_POINTS(state) {
      state.points = 0;
    },
    SET_POINTS(state, action: PayloadAction<number>) {
      state.points = state.points + action.payload;
      state.points_gained = action.payload;
    },
    SET_RESET_POINTS_GAINED(state) {
      state.points_gained = 0;
    },
    SET_RESET_LIVES(state) {
      state.lives = MAX_LIVES;
    },
    SET_REMOVE_LIFE(state) {
      state.lives = state.lives - 1;
      state.points_gained = 0;
    },
    SET_USER_ANSWER(state, action: PayloadAction<boolean | null>) {
      state.user_answer = action.payload;
    },
    SET_QUESTION_ANSWERED(state, action: PayloadAction<boolean>) {
      state.isAnswered = action.payload;
    },
    SET_TIMER_START(state) {
      state.time_left = STARTING_TIME;
    },
    SET_DECREASE_TIME(state) {
      state.time_left = state.time_left - 1;
      if (!state.time_left) {
        state.lives = state.lives - 1;
      }
    },
  },
});
export const gameSelector = (state: RootState) => state.game;
export const {
  SET_START_GAME,
  SET_IS_GAME_OVER,
  SET_POINTS,
  SET_RESET_POINTS_GAINED,
  SET_RESET_LIVES,
  SET_REMOVE_LIFE,
  SET_USER_ANSWER,
  SET_QUESTION_ANSWERED,
  SET_RESET_POINTS,
  SET_TIMER_START,
  SET_DECREASE_TIME,
} = gameSlice.actions;
export default gameSlice.reducer;

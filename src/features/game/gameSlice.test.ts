// Redux
import { createTestStore } from '../../app/store';
import {
  SET_GAME_STARTED,
  SET_IS_GAME_OVER,
  SET_RESET_POINTS,
  SET_POINTS,
  SET_RESET_POINTS_GAINED,
  SET_RESET_LIVES,
  SET_REMOVE_LIFE,
  SET_USER_ANSWER,
  SET_QUESTION_ANSWERED,
  SET_TIMER_START,
  SET_DECREASE_TIME,
  Game,
  startingLives,
  startingTime,
} from './gameSlice';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing game slice reducers', () => {
  test('start game', () => {
    let state: boolean = store.getState().game.isGameStarted;
    expect(state).toEqual(false);
    store.dispatch(SET_GAME_STARTED(true));
    state = store.getState().game.isGameStarted;
    expect(state).toEqual(true);
  });
  test('setting game as not over', () => {
    let state: boolean = store.getState().game.isGameOver;
    expect(state).toEqual(false);
    store.dispatch(SET_IS_GAME_OVER(true));
    state = store.getState().game.isGameOver;
    expect(state).toEqual(true);
  });

  test('adding points', () => {
    let state: Game = store.getState().game;
    expect(state.points).toEqual(0);
    expect(state.points_gained).toEqual(0);
    store.dispatch(SET_POINTS(75));
    state = store.getState().game;
    expect(state.points).toEqual(75);
    expect(state.points_gained).toEqual(75);
    store.dispatch(SET_POINTS(75));
    state = store.getState().game;
    expect(state.points).toEqual(150);
    expect(state.points_gained).toEqual(75);
  });
  test('reseting points', () => {
    let state: number = store.getState().game.points;
    expect(state).toEqual(0);
    store.dispatch(SET_POINTS(75));
    state = store.getState().game.points;
    expect(state).toEqual(75);
    store.dispatch(SET_RESET_POINTS());
    state = store.getState().game.points;
    expect(state).toEqual(0);
  });
  test('reseting points gained', () => {
    let state: number = store.getState().game.points_gained;
    expect(state).toEqual(0);
    store.dispatch(SET_POINTS(75));
    state = store.getState().game.points_gained;
    expect(state).toEqual(75);
    store.dispatch(SET_RESET_POINTS_GAINED());
    state = store.getState().game.points_gained;
    expect(state).toEqual(0);
  });
  test('removing lives', () => {
    let state: Game = store.getState().game;
    expect(state.lives).toEqual(startingLives);
    expect(state.lives_lost).toEqual(0);
    store.dispatch(SET_REMOVE_LIFE());
    state = store.getState().game;
    expect(state.lives).toEqual(startingLives - 1);
    expect(state.lives_lost).toEqual(1);
    expect(state.points_gained).toEqual(0);
  });
  test('removing lives causing game to end', () => {
    let state: Game = store.getState().game;
    expect(state.lives).toEqual(startingLives);
    expect(state.lives_lost).toEqual(0);
    store.dispatch(SET_REMOVE_LIFE());
    store.dispatch(SET_REMOVE_LIFE());
    store.dispatch(SET_REMOVE_LIFE());
    store.dispatch(SET_REMOVE_LIFE());
    store.dispatch(SET_REMOVE_LIFE());
    state = store.getState().game;
    expect(state.lives).toEqual(startingLives - 5);
    expect(state.lives_lost).toEqual(5);
    expect(state.isGameOver).toEqual(true);
  });
  test('resetting lives to starting state', () => {
    let state: Game = store.getState().game;
    expect(state.lives).toEqual(startingLives);
    expect(state.lives_lost).toEqual(0);
    store.dispatch(SET_REMOVE_LIFE());
    state = store.getState().game;
    expect(state.lives).toEqual(startingLives - 1);
    expect(state.lives_lost).toEqual(1);
    store.dispatch(SET_RESET_LIVES());
    state = store.getState().game;
    expect(state.lives).toEqual(startingLives);
    expect(state.lives_lost).toEqual(0);
  });
  test('setting user answer', () => {
    let state: boolean | null = store.getState().game.user_answer;
    expect(state).toEqual(null);
    store.dispatch(SET_USER_ANSWER(false));
    state = store.getState().game.user_answer;
    expect(state).toEqual(false);
  });
  test('setting question answered', () => {
    let state: boolean = store.getState().game.is_question_answered;
    expect(state).toEqual(false);
    store.dispatch(SET_QUESTION_ANSWERED(true));
    state = store.getState().game.is_question_answered;
    expect(state).toEqual(true);
  });
  test('decreasing time left', () => {
    let state: number = store.getState().game.time_left;
    expect(state).toEqual(startingTime);
    store.dispatch(SET_DECREASE_TIME());
    state = store.getState().game.time_left;
    expect(state).toEqual(startingTime - 1);
  });
  test('set time left to starting state', () => {
    let state: number = store.getState().game.time_left;
    expect(state).toEqual(startingTime);
    store.dispatch(SET_DECREASE_TIME());
    state = store.getState().game.time_left;
    expect(state).toEqual(startingTime - 1);
    store.dispatch(SET_TIMER_START());
    state = store.getState().game.time_left;
    expect(state).toEqual(startingTime);
  });
});

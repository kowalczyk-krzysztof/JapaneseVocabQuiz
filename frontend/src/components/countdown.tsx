import React, { FC, Fragment, useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { wordsSelector, WordObject } from '../features/words/wordsSlice';
import {
  SET_DECREASE_TIME,
  gameSelector,
  Game,
} from '../features/game/gameSlice';

export const Countdown: FC = (): JSX.Element | null => {
  const dispatch = useDispatch();
  const game: Game = useSelector(gameSelector);
  const word: WordObject = useSelector(wordsSelector);

  useEffect(() => {
    if (
      game.time_left > 0 &&
      game.is_question_answered === false &&
      game.isGameStarted === true &&
      word.wordLoading === false
    ) {
      const interval = setInterval(() => {
        dispatch(SET_DECREASE_TIME());
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [
    dispatch,
    game.time_left,
    game.is_question_answered,
    game.isGameStarted,
    word.wordLoading,
  ]);

  if (
    word.wordLoading === false &&
    game.isGameStarted === true &&
    game.is_question_answered === false
  )
    return (
      <Fragment>
        <p>Time left: {game.time_left}s </p>
      </Fragment>
    );
  else return null;
};

export default Countdown;

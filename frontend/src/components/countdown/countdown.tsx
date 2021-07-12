import React, { FC, Fragment, useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { wordsSelector, WordObject } from '../../features/words/wordsSlice';
import {
  SET_DECREASE_TIME,
  gameSelector,
  Game,
} from '../../features/game/gameSlice';
// Styling
import { Testing } from './countdown-styling';

export const Countdown: FC = (): JSX.Element | null => {
  const dispatch = useDispatch();
  const game: Game = useSelector(gameSelector);
  const word: WordObject = useSelector(wordsSelector);

  const progress = (15 - game.time_left) * 6.67;

  const radius = 52;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (
      game.time_left >= 0 &&
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
      <div>
        <span>Time left:</span>
        <svg height="120" width="120">
          <Testing
            stroke="white"
            fill="transparent"
            strokeWidth="4"
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset }}
            r="52"
            cx="60"
            cy="60"
          />
          <text x="50%" y="50%" text-anchor="middle">
            {game.time_left}
          </text>
        </svg>
      </div>
    );
  else return null;
};

export default Countdown;

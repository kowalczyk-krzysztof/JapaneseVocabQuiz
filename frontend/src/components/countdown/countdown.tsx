import React, { FC, useEffect } from 'react';
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
  const stroke = 4;
  let strokeColor;
  if (game.time_left >= 7) strokeColor = '#4df735';
  else if (game.time_left > 3 && game.time_left < 7) strokeColor = 'yellow';
  else strokeColor = '#f74848';

  const radius = 26;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

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
      <div
        style={{
          gridArea: 'timer',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ width: '100%' }}>Time left:</span>
        <div style={{ width: '100%' }}>
          <svg height={(radius + stroke) * 2} width={(radius + stroke) * 2}>
            <Testing
              stroke={strokeColor}
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={circumference + ' ' + circumference}
              style={{ strokeDashoffset }}
              r={radius}
              cx={radius + stroke}
              cy={radius + stroke}
            />
            <text
              x="50%"
              y="50%"
              text-anchor="middle"
              alignment-baseline="middle"
            >
              {game.time_left}
            </text>
          </svg>
        </div>
      </div>
    );
  else if (game.time_left === 0 && game.lives > 0)
    return <h1 style={{ fontSize: '54' }}>TIME UP</h1>;
  else return null;
};

export default Countdown;

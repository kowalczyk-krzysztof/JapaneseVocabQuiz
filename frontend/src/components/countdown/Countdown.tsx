import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { wordsSelector } from '../../features/words/wordsSlice';
import { SET_DECREASE_TIME, gameSelector } from '../../features/game/gameSlice';

enum StrokeColor {
  GREEN = 'green',
  RED = 'red',
  YELLOW = 'yellow',
}

export const Countdown = () => {
  const dispatch = useDispatch();
  const game = useSelector(gameSelector);
  const word = useSelector(wordsSelector);
  const [strokeColor, setStrokeColor] = useState<StrokeColor>(
    StrokeColor.GREEN
  );

  const progress = (15 - game.time_left) * 6.67;
  const stroke = 4;
  const radius = 22;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  let strokeColor;
  if (game.time_left >= 7) strokeColor = green;
  else if (game.time_left > 3 && game.time_left < 7) strokeColor = 'yellow';
  else strokeColor = red;

  useEffect(() => {
    if (game.time_left && !game.is_question_answered && !word.wordLoading) {
      const interval = setInterval(() => {
        dispatch(SET_DECREASE_TIME());
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [dispatch, game.time_left, game.is_question_answered, word.wordLoading]);

  if (!word.wordLoading && !game.is_question_answered)
    return (
      <div>
        <span>Time left</span>
        <svg height={(radius + stroke) * 2} width={(radius + stroke) * 2}>
          <circle
            stroke={strokeColor}
            fill='transparent'
            strokeWidth={stroke}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset }}
            r={radius}
            cx={radius + stroke}
            cy={radius + stroke}
          />
          <text
            x='50%'
            y='50%'
            textAnchor='middle'
            dominantBaseline='middle'
            fill='#fafafa'
          >
            {game.time_left}
          </text>
        </svg>
      </div>
    );
  if (!game.time_left)
    return (
      <div>
        <p>TIME UP</p>
      </div>
    );
  return null;
};

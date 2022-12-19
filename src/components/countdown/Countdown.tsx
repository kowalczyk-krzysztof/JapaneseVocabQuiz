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
  const { time_left, isAnswered } = useSelector(gameSelector);
  const word = useSelector(wordsSelector);
  const [strokeColor, setStrokeColor] = useState<StrokeColor>(
    StrokeColor.GREEN
  );

  const progress = (15 - time_left) * 6.67;
  const stroke = 4;
  const radius = 22;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (time_left >= 7) setStrokeColor(StrokeColor.GREEN);
    else if (time_left > 3 && time_left < 7) setStrokeColor(StrokeColor.YELLOW);
    else setStrokeColor(StrokeColor.RED);
  }, [time_left]);

  useEffect(() => {
    if (time_left && !isAnswered && !word.wordLoading) {
      const interval = setInterval(() => {
        dispatch(SET_DECREASE_TIME());
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [dispatch, time_left, isAnswered, word.wordLoading]);

  if (!word.wordLoading && !isAnswered)
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
            {time_left}
          </text>
        </svg>
      </div>
    );
  if (!time_left)
    return (
      <div>
        <p>TIME UP</p>
      </div>
    );
  return null;
};

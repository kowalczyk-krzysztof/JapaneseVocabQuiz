import { FC, useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { wordsSelector, WordObject } from '../../features/words/wordsSlice';
import {
  SET_DECREASE_TIME,
  gameSelector,
  Game,
} from '../../features/game/gameSlice';
// Styling
import { red, green } from '../../createGlobalStyle';
import {
  StyledProgressCircle,
  StyledCountdownContainer,
} from './countdown-styling';

export const Countdown: FC = (): JSX.Element | null => {
  const dispatch = useDispatch();
  const game: Game = useSelector(gameSelector);
  const word: WordObject = useSelector(wordsSelector);

  // Progress circle variables
  const progress: number = (15 - game.time_left) * 6.67;
  const stroke: number = 4;
  const radius: number = 22;
  const circumference: number = radius * 2 * Math.PI;
  const strokeDashoffset: number =
    circumference - (progress / 100) * circumference;
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
      <StyledCountdownContainer data-testid={'countdown'}>
        <span>Time left</span>
        <svg height={(radius + stroke) * 2} width={(radius + stroke) * 2}>
          <StyledProgressCircle
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
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#fafafa"
          >
            {game.time_left}
          </text>
        </svg>
      </StyledCountdownContainer>
    );
  if (!game.time_left)
    return (
      <StyledCountdownContainer data-testid={'countdown'}>
        <p>TIME UP</p>
      </StyledCountdownContainer>
    );
  return null;
};

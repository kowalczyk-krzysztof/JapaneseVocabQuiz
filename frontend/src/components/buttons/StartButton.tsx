import { FC } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_GAME_STARTED,
  SET_RESET_LIVES,
  SET_RESET_POINTS,
  SET_QUESTION_ANSWERED,
  SET_USER_ANSWER,
  gameSelector,
  Game,
  SET_IS_GAME_OVER,
} from '../../features/game/gameSlice';
import {
  SET_WORD_RESET,
  SET_WORD_LOADING,
} from '../../features/words/wordsSlice';
// Styling
import { StyledGameStateButton } from './buttons-styling';

export const StartButton: FC = (): JSX.Element | null => {
  const dispatch = useDispatch();
  const game: Game = useSelector(gameSelector);
  const clickHandler = (): void => {
    if (!game.isGameStarted) dispatch(SET_GAME_STARTED(true));
    if (game.isGameOver) dispatch(SET_IS_GAME_OVER(false));
    dispatch(SET_RESET_LIVES());
    dispatch(SET_RESET_POINTS());
    dispatch(SET_QUESTION_ANSWERED(false));
    dispatch(SET_USER_ANSWER(null));
    dispatch(SET_WORD_RESET());
    dispatch(SET_WORD_LOADING());
  };
  if (game.isGameOver || !game.isGameStarted)
    return (
      <StyledGameStateButton onClick={clickHandler} data-testid={'startbutton'}>
        START
      </StyledGameStateButton>
    );
  return null;
};

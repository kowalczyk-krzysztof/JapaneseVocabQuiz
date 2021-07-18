import React, { FC } from 'react';
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
import {
  StyledGameStateButton,
  StyledStartAndNewButtonContainer,
} from './startandnew-styling';

export const StartGameButton: FC = (): JSX.Element | null => {
  const dispatch = useDispatch();
  const game: Game = useSelector(gameSelector);
  const clickHandler = async (): Promise<void> => {
    if (game.isGameStarted === false) dispatch(SET_GAME_STARTED(true));
    if (game.isGameOver === true) dispatch(SET_IS_GAME_OVER(false));
    dispatch(SET_RESET_LIVES());
    dispatch(SET_RESET_POINTS());
    dispatch(SET_QUESTION_ANSWERED(false));
    dispatch(SET_USER_ANSWER(null));
    dispatch(SET_WORD_RESET());
    dispatch(SET_WORD_LOADING(Date.now()));
  };
  if (game.isGameOver === true || game.isGameStarted === false)
    return (
      <StyledStartAndNewButtonContainer>
        <StyledGameStateButton
          onClick={clickHandler}
          data-testid={'startbutton'}
        >
          START
        </StyledGameStateButton>
      </StyledStartAndNewButtonContainer>
    );
  else return null;
};

export default StartGameButton;

import React, { FC } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_WORD_LOADING,
  SET_WORD_RESET,
  wordsSelector,
  WordObject,
} from '../../features/words/wordsSlice';
import {
  SET_QUESTION_ANSWERED,
  SET_RESET_POINTS_GAINED,
  Game,
  gameSelector,
} from '../../features/game/gameSlice';
// Styling
import {
  StyledGameStateButton,
  StyledStartAndNewButtonContainer,
} from './startandnew-styling';

export const NewWordButton: FC = (): JSX.Element | null => {
  const dispatch = useDispatch();
  const game: Game = useSelector(gameSelector);
  const word: WordObject = useSelector(wordsSelector);

  const clickHandler = async (): Promise<void> => {
    dispatch(SET_WORD_RESET());
    dispatch(SET_RESET_POINTS_GAINED());
    dispatch(SET_WORD_LOADING(Date.now()));
    dispatch(SET_QUESTION_ANSWERED(false));
  };
  if (
    game.isGameStarted === true &&
    game.is_question_answered === true &&
    game.lives > 0 &&
    word.wordLoading === false
  )
    return (
      <StyledStartAndNewButtonContainer>
        <StyledGameStateButton
          onClick={clickHandler}
          data-testid={'newwordbutton'}
        >
          NEW WORD
        </StyledGameStateButton>
      </StyledStartAndNewButtonContainer>
    );
  else return null;
};

export default NewWordButton;

import { FC } from 'react';
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
import { StyledGameStateButton } from './buttons-styling';

export const NewWordButton: FC = (): JSX.Element | null => {
  const dispatch = useDispatch();
  const game: Game = useSelector(gameSelector);
  const word: WordObject = useSelector(wordsSelector);

  const clickHandler = (): void => {
    dispatch(SET_WORD_RESET());
    dispatch(SET_RESET_POINTS_GAINED());
    dispatch(SET_QUESTION_ANSWERED(false));
    dispatch(SET_WORD_LOADING(Date.now()));
  };
  if (
    game.isGameStarted === true &&
    game.is_question_answered === true &&
    game.lives > 0 &&
    word.wordLoading === false
  )
    return (
      <StyledGameStateButton
        onClick={clickHandler}
        data-testid={'newwordbutton'}
      >
        NEW WORD
      </StyledGameStateButton>
    );
  else return null;
};

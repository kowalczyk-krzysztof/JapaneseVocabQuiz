import React, { FC } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_NEW_WORD,
  SET_WORD_LOADING,
  WordProps,
  wordsSelector,
  WordObject,
} from '../../features/words/wordsSlice';
import {
  SET_QUESTION_UNANSWERED,
  SET_TIMER_START,
  Game,
  gameSelector,
  SET_RESET_POINTS_GAINED,
} from '../../features/game/gameSlice';
// Utils
import { generateWord } from '../../features/words/generateWord';
import { checkWord } from '../../features/words/checkWord';
// Styling
import { StyledGameStateButton } from './gamestate-styling';

export const NewWordButton: FC = (): JSX.Element | null => {
  const dispatch = useDispatch();
  const game: Game = useSelector(gameSelector);
  const word: WordObject = useSelector(wordsSelector);

  const clickHandler = async (): Promise<void> => {
    dispatch(SET_RESET_POINTS_GAINED());
    dispatch(SET_WORD_LOADING());
    const generatedWord: string = await generateWord();
    const wordObject: WordProps = await checkWord(generatedWord);
    dispatch(SET_QUESTION_UNANSWERED());
    dispatch(SET_NEW_WORD(wordObject));
    dispatch(SET_TIMER_START());
  };
  if (
    game.isGameStarted === true &&
    game.is_question_answered === true &&
    game.lives > 0 &&
    word.wordLoading === false
  )
    return (
      <StyledGameStateButton onClick={clickHandler}>
        NEW WORD
      </StyledGameStateButton>
    );
  else return null;
};

export default NewWordButton;

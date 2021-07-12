import React, { FC } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_GAME_STARTED,
  SET_RESET_LIVES,
  SET_RESET_POINTS,
  SET_QUESTION_UNANSWERED,
  SET_USER_ANSWER,
  SET_TIMER_START,
  gameSelector,
  Game,
  SET_RESET_POINTS_GAINED,
} from '../../features/game/gameSlice';
import {
  SET_NEW_WORD,
  SET_WORD_RESET,
  SET_WORD_LOADING,
  WordObject,
  WordProps,
  wordsSelector,
} from '../../features/words/wordsSlice';
// Utils
import { generateWord } from '../../features/words/generateWord';
import { checkWord } from '../../features/words/checkWord';
// Styling
import { StyledGameStateButton } from './gamestate-styling';

export const StartGameButton: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const game: Game = useSelector(gameSelector);
  const word: WordObject = useSelector(wordsSelector);

  const clickHandler = async (): Promise<void> => {
    if (game.isGameStarted === false) dispatch(SET_GAME_STARTED());
    if (game.lives <= 0) dispatch(SET_RESET_LIVES());
    if (game.points > 0) dispatch(SET_RESET_POINTS());
    if (game.points_gained > 0) dispatch(SET_RESET_POINTS_GAINED());
    if (game.is_question_answered === true) dispatch(SET_QUESTION_UNANSWERED());
    if (game.user_answer !== null) dispatch(SET_USER_ANSWER(null));
    if (word.word.word !== '') dispatch(SET_WORD_RESET());
    dispatch(SET_WORD_LOADING());
    const generatedWord: string = await generateWord();
    const wordObject: WordProps = await checkWord(generatedWord);
    dispatch(SET_NEW_WORD(wordObject));
    dispatch(SET_TIMER_START());
  };
  return (
    <StyledGameStateButton onClick={clickHandler}>START</StyledGameStateButton>
  );
};

export default StartGameButton;

import React, { FC, useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import {
  wordsSelector,
  WordObject,
  SET_NEW_WORD,
  WordProps,
} from '../../features/words/wordsSlice';
import {
  Game,
  gameSelector,
  SET_TIMER_START,
} from '../../features/game/gameSlice';
// Components
import { DisplayWord } from './displayWord';
import { Definitions } from './definitions';
import { GameOverScreen } from '../game/gameOverScreen';
// Utils
import { checkWord } from '../../features/words/checkWord';
// Styling
import { StyledWordContainer, StyledReading } from './words-styling';

export const WordInfo: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const word: WordObject = useSelector(wordsSelector);
  const game: Game = useSelector(gameSelector);

  useEffect(() => {
    const fetchWord = async () => {
      const wordObject: WordProps = await checkWord();
      dispatch(SET_NEW_WORD(wordObject));
      dispatch(SET_TIMER_START());
    };
    if (word.wordLoading === true) fetchWord();
  }, [dispatch, word.wordLoading]);

  if (
    game.isGameStarted === true &&
    game.isGameOver === false &&
    game.is_question_answered === true &&
    word.wordLoading === false
  )
    return (
      <StyledWordContainer>
        <DisplayWord />
        <StyledReading>{word.word.reading}</StyledReading>
        <Definitions />
      </StyledWordContainer>
    );
  else if (game.isGameOver === true)
    return (
      <StyledWordContainer>
        <GameOverScreen />
      </StyledWordContainer>
    );
  else
    return (
      <StyledWordContainer>
        <DisplayWord />
      </StyledWordContainer>
    );
};

export default WordInfo;

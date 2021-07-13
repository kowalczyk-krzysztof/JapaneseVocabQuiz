import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { wordsSelector, WordObject } from '../../features/words/wordsSlice';
import { Game, gameSelector } from '../../features/game/gameSlice';
// Components
import { DisplayWord } from './displayWord';
import { Definitions } from './definitions';
import { GameOverScreen } from '../game/gameOverScreen';
// Styling
import { StyledWordContainer } from './words-styling';

export const WordInfo: FC = (): JSX.Element => {
  const word: WordObject = useSelector(wordsSelector);
  const game: Game = useSelector(gameSelector);

  if (
    game.isGameStarted === true &&
    game.isGameOver === false &&
    game.is_question_answered === true &&
    word.wordLoading === false
  )
    return (
      <StyledWordContainer>
        <DisplayWord />
        <span>{word.word.reading}</span>
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

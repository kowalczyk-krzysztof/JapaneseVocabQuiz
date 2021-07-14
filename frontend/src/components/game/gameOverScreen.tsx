import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
import { wordsSelector, WordObject } from '../../features/words/wordsSlice';
// Components
import { DisplayWord } from '../words/displayWord';
import { Definitions } from '../words/definitions';
// Styling
import { green } from '../../createGlobalStyle';
import { StyledGameOverStats } from './game-styling';
import { StyledReading } from '../words/words-styling';

export const GameOverScreen: FC = (): JSX.Element => {
  const word: WordObject = useSelector(wordsSelector);
  const game: Game = useSelector(gameSelector);

  return (
    <StyledGameOverStats>
      <p>FINAL SCORE</p>
      <h2 style={{ color: green }}>{game.points}</h2>
      <p>LAST WORD</p>
      <DisplayWord />
      <StyledReading>{word.word.reading}</StyledReading>
      <Definitions />
    </StyledGameOverStats>
  );
};

export default GameOverScreen;

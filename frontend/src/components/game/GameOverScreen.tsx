import { FC, Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
import { wordsSelector, WordObject } from '../../features/words/wordsSlice';
// Components
import { DisplayWord } from '../words/DisplayWord';
import { Definitions } from '../words/Definitions';
// Styling
import { green } from '../../createGlobalStyle';
import {
  StyledGameOverStats,
  StyledGameOver,
  StyledWordAndButtons,
  StyledButtons,
} from './game-styling';
import { StyledReading, StyledWordContainer } from '../words/words-styling';
import { StartButton } from '../startandnew/StartButton';

export const GameOverScreen: FC = (): JSX.Element => {
  const word: WordObject = useSelector(wordsSelector);
  const game: Game = useSelector(gameSelector);

  return (
    <Fragment>
      <StyledGameOver data-testid={'gameoverscreen'}>
        <h1>GAME OVER</h1>
      </StyledGameOver>
      <StyledWordAndButtons>
        <StyledWordContainer>
          <StyledGameOverStats>
            <p>FINAL SCORE</p>
            <h2 style={{ color: green }}>{game.points}</h2>
            <p>LAST WORD</p>
            <DisplayWord />
            <StyledReading>{word.word.reading}</StyledReading>
            <Definitions />
          </StyledGameOverStats>
        </StyledWordContainer>
        <StyledButtons>
          <StartButton />
        </StyledButtons>
      </StyledWordAndButtons>
    </Fragment>
  );
};

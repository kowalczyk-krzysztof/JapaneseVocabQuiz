import { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
import { wordsSelector, WordObject } from '../../features/words/wordsSlice';
// Components
import { DisplayWord } from '../words/DisplayWord';
import { Definitions } from '../words/Definitions';
// Styling
import { green, StyledWordContainer } from '../../createGlobalStyle';
import {
  StyledGameOverStats,
  StyledUserStatsBase,
  StyledWordAndButtons,
  StyledScreen,
} from './game-styling';
import { StyledReading } from '../words/words-styling';
import { ButtonContainer } from '../buttons/ButtonContainer';

export const GameOverScreen: FC = (): JSX.Element => {
  const word: WordObject = useSelector(wordsSelector);
  const game: Game = useSelector(gameSelector);

  return (
    <StyledScreen>
      <StyledUserStatsBase data-testid={'gameoverscreen'}>
        <h1>GAME OVER</h1>
      </StyledUserStatsBase>
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
        <ButtonContainer />
      </StyledWordAndButtons>
    </StyledScreen>
  );
};

import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import {
  gameSelector,
  Game,
  startingLives,
} from '../../features/game/gameSlice';
// Components
import { GameBoard } from './GameBoard';
import { StartButton } from '../startandnew/StartButton';
// Styling
import {
  StyledGameContainer,
  StyledWordAndButtons,
  StyledStartScreen,
  StyledGameTitle,
  StyledInstructionsContainer,
} from './game-styling';

export const GameContainer: FC = (): JSX.Element => {
  const game: Game = useSelector(gameSelector);
  if (game.isGameStarted === true)
    return (
      <StyledGameContainer data-testid={'gamecontainer'}>
        <GameBoard />
      </StyledGameContainer>
    );
  else
    return (
      <StyledGameContainer data-testid={'gamecontainer'}>
        <StyledGameTitle>
          <h1>JAPANESE WORDS QUIZ</h1>
        </StyledGameTitle>
        <StyledWordAndButtons>
          <StyledStartScreen>
            <StyledInstructionsContainer>
              <span>
                Generate a two-kanji word and guess if it's a real Japanese word
              </span>
              <span>
                Earn points - the quicker you answer, the more you get
              </span>
              <span>Providing a wrong answer loses you a life </span>
              <span>Take care you only have {startingLives} lives</span>
            </StyledInstructionsContainer>
          </StyledStartScreen>
          <StartButton />
        </StyledWordAndButtons>
      </StyledGameContainer>
    );
};

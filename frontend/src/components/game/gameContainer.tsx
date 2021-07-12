import React, { FC } from 'react';
// Components
import { GameBoard } from './gameBoard';
import { StartGameButton } from '../startandnew/startGameButton';
// Styling
import { StyledGameContainer } from './game-styling';

export const GameContainer: FC = (): JSX.Element => {
  return (
    <StyledGameContainer>
      <GameBoard />
      <StartGameButton />
    </StyledGameContainer>
  );
};

export default GameContainer;

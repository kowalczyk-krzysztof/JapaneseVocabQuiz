import React, { FC } from 'react';
// Components
import GameBoard from './gameBoard';
import GameOverScreen from './gameOverScreen';
// Styling
import { StyledGameContainer } from './game-styling';

export const GameContainer: FC = (): JSX.Element => {
  return (
    <StyledGameContainer>
      <GameBoard />
      <GameOverScreen />
    </StyledGameContainer>
  );
};

export default GameContainer;

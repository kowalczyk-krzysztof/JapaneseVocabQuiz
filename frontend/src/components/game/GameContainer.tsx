import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
// Components
import { GameBoard } from './GameBoard';
import { StartGameScreen } from './StartGameScreen';
import { GameOverScreen } from './GameOverScreen';
// Styling
import { StyledGameContainer } from './game-styling';

export const GameContainer: FC = (): JSX.Element => {
  const game: Game = useSelector(gameSelector);
  if (game.isGameStarted === true && game.isGameOver === false)
    return (
      <StyledGameContainer data-testid={'gamecontainer'}>
        <GameBoard />
      </StyledGameContainer>
    );
  else if (game.isGameStarted === true && game.isGameOver === true)
    return (
      <StyledGameContainer data-testid={'gamecontainer'}>
        <GameOverScreen />
      </StyledGameContainer>
    );
  else
    return (
      <StyledGameContainer data-testid={'gamecontainer'}>
        <StartGameScreen />
      </StyledGameContainer>
    );
};

import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
// Components
import { GameBoard } from './GameBoard';
import { StartGameScreen } from './StartGameScreen';
import { GameOverScreen } from './GameOverScreen';
// Styling
import { StyledScreen } from './game-styling';

export const GameContainer: FC = (): JSX.Element => {
  const game: Game = useSelector(gameSelector);
  if (game.isGameStarted === true && game.isGameOver === false)
    return (
      <StyledScreen data-testid={'gamecontainer'}>
        <GameBoard />
      </StyledScreen>
    );
  else if (game.isGameStarted === true && game.isGameOver === true)
    return (
      <StyledScreen data-testid={'gamecontainer'}>
        <GameOverScreen />
      </StyledScreen>
    );
  else
    return (
      <StyledScreen data-testid={'gamecontainer'}>
        <StartGameScreen />
      </StyledScreen>
    );
};

import { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
// Components
import { GameBoard } from './GameBoard';
import { StartGameScreen } from './StartGameScreen';
import { GameOverScreen } from './GameOverScreen';

export const GameContainer: FC = (): JSX.Element => {
  const game: Game = useSelector(gameSelector);
  if (game.isGameOver) return <GameOverScreen />;
  if (game.isGameStarted) return <GameBoard />;
  return <StartGameScreen />;
};

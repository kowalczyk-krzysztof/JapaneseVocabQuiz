import { useSelector } from 'react-redux';
import { gameSelector } from '../../features/game/gameSlice';
import { GameBoard } from './GameBoard';
import { StartGameScreen } from './StartGameScreen';
import { GameOverScreen } from './GameOverScreen';

export const GameContainer = () => {
  const game = useSelector(gameSelector);
  if (game.isGameOver) return <GameOverScreen />;
  if (game.isGameStarted) return <GameBoard />;
  return <StartGameScreen />;
};

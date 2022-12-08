import { useSelector } from 'react-redux';
import { gameSelector } from '../../features/game/gameSlice';
import { GameBoard } from './GameBoard';
import { StartGameScreen } from './StartGameScreen';
import { GameOverScreen } from './GameOverScreen';

export const GameContainer = () => {
  const { isGameStarted, lives } = useSelector(gameSelector);
  if (isGameStarted && !lives) return <GameOverScreen />;
  if (isGameStarted && lives) return <GameBoard />;
  return <StartGameScreen />;
};

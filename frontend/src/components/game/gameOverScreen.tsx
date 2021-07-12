import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
import { DisplayWord } from '../words/displayWord';

export const GameOverScreen: FC = (): JSX.Element => {
  const game: Game = useSelector(gameSelector);

  return (
    <div style={{ gridArea: 'word' }}>
      <h1>GAME OVER!</h1>
      <h1>FINAL SCORE: {game.points}</h1>
      <span>LAST WORD</span>
      <DisplayWord />
    </div>
  );
};

export default GameOverScreen;

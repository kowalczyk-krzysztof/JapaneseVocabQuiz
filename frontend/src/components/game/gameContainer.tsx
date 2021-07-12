import React, { FC } from 'react';
// Components
import GameBoard from './gameBoard';
import GameOverScreen from './gameOverScreen';

export const GameContainer: FC = (): JSX.Element => {
  return (
    <div
      style={{
        background: `red`,
        height: `500px`,
        width: `500px`,
        margin: `0 auto`,
      }}
    >
      <GameBoard />
      <GameOverScreen />
    </div>
  );
};

export default GameContainer;

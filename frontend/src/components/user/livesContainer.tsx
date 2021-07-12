import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
// Styling
import { Heart } from '@styled-icons/ionicons-solid';
import { HeartDislike } from '@styled-icons/ionicons-outline';

export const LivesContainer: FC = (): JSX.Element | null => {
  const game: Game = useSelector(gameSelector);
  const lives: number[] = new Array(game.lives).fill(null);
  const lostLives: number[] = new Array(game.lives_lost).fill(null);
  if (game.lives > 0)
    return (
      <div style={{ gridArea: 'lives', display: 'flex', flexWrap: 'wrap' }}>
        <span>Lives: </span>
        {lives.map(() => {
          return <Heart size="25" color="#f74848" />;
        })}
        {lostLives.map(() => {
          return <HeartDislike size="25" color="black" />;
        })}
      </div>
    );
  else return null;
};

export default LivesContainer;

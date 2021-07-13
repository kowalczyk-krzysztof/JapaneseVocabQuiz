import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
// Styling
import { Heart } from '@styled-icons/ionicons-solid';
import { HeartDislike } from '@styled-icons/ionicons-outline';
import { StyledLivesContainer } from './user-stats-styling';
import { red } from '../../createGlobalStyle';
export const LivesContainer: FC = (): JSX.Element | null => {
  const game: Game = useSelector(gameSelector);
  const heartSize: number = 20;
  const lives: number[] = new Array(game.lives).fill(null);
  const lostLives: number[] = new Array(game.lives_lost).fill(null);
  if (game.lives > 0)
    return (
      <StyledLivesContainer>
        {lives.map(() => {
          return <Heart size={heartSize} color={red} />;
        })}
        {lostLives.map(() => {
          return <HeartDislike size={heartSize} color="black" />;
        })}
      </StyledLivesContainer>
    );
  else return null;
};

export default LivesContainer;

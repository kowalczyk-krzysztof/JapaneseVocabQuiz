import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
import { wordsSelector, WordObject } from '../../features/words/wordsSlice';
// Styling
import {
  StyledLivesContainer,
  StyledHeart,
  StyledHeartDislike,
  StyledDyingHeart,
  StyledHeartsContainer,
} from './user-stats-styling';

export const LivesContainer: FC = (): JSX.Element | null => {
  const word: WordObject = useSelector(wordsSelector);
  const game: Game = useSelector(gameSelector);
  const lives: number[] = new Array(game.lives).fill(null);
  const lostLives: number[] = new Array(game.lives_lost).fill(null);
  if (game.lives > 0)
    return (
      <StyledLivesContainer data-testid={'livescontainer'}>
        <StyledHeartsContainer>
          {lives.map((el, index) => {
            return <StyledHeart key={index} />;
          })}
          {lostLives.map((el, index) => {
            return <StyledHeartDislike key={index} />;
          })}
        </StyledHeartsContainer>
        {game.points_gained === 0 &&
        game.is_question_answered === true &&
        word.wordLoading === false ? (
          <StyledHeartsContainer>
            <StyledDyingHeart />
          </StyledHeartsContainer>
        ) : null}
      </StyledLivesContainer>
    );
  else return null;
};

export default LivesContainer;

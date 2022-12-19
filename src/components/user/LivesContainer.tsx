import { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
import { wordsSelector, WordObject } from '../../features/words/wordsSlice';
// Styling
import {
  StyledHeart,
  StyledHeartDislike,
  StyledDyingHeart,
  StyledLivesContainer,
  StyledHeartsContainer,
} from './user-stats-styling';

export const LivesContainer: FC = (): JSX.Element => {
  const word: WordObject = useSelector(wordsSelector);
  const game: Game = useSelector(gameSelector);
  const lives: number[] = new Array(game.lives).fill(null);
  const lostLives: number[] = new Array(game.lives_lost).fill(null);

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

      {!game.points_gained && game.is_question_answered && !word.wordLoading ? (
        <StyledHeartsContainer>
          <StyledDyingHeart />
        </StyledHeartsContainer>
      ) : null}
    </StyledLivesContainer>
  );
};

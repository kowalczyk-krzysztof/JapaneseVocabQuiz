import { useSelector } from 'react-redux';
import { gameSelector } from '../../features/game/gameSlice';
import { wordsSelector } from '../../features/words/wordsSlice';

export const LivesContainer = () => {
  const word = useSelector(wordsSelector);
  const game = useSelector(gameSelector);
  const lives = new Array(game.lives).fill(null);
  const lostLives = new Array(game.lives_lost).fill(null);

  return (
    <div>
      <div>
        {lives.map((_, index) => {
          return <StyledHeart key={index} />;
        })}
        {lostLives.map((_, index) => {
          return <StyledHeartDislike key={index} />;
        })}
      </div>

      {!game.points_gained && game.is_question_answered && !word.wordLoading ? (
        <div>
          <StyledDyingHeart />
        </div>
      ) : null}
    </div>
  );
};

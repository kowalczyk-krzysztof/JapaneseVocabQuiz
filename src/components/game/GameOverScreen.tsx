import { useSelector } from 'react-redux';
import { gameSelector } from '../../features/game/gameSlice';
import { wordsSelector } from '../../features/words/wordsSlice';
import { DisplayWord } from '../words/DisplayWord';
import { Definitions } from '../words/Definitions';
import { StartButton } from '../buttons/StartButton';

export const GameOverScreen = () => {
  const word = useSelector(wordsSelector);
  const game = useSelector(gameSelector);

  return (
    <div>
      <div>
        <h1>GAME OVER</h1>
      </div>
      <div>
        <div>
          <div>
            <p>FINAL SCORE</p>
            <h2 style={{ color: ' green' }}>{game.points}</h2>
            <p>LAST WORD</p>
            <DisplayWord />
            <div>{word.word.reading}</div>
            <Definitions />
            <StartButton />
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

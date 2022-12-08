import { startingLives } from '../../features/game/gameSlice';
import { ButtonContainer } from '../buttons/ButtonContainer';

export const StartGameScreen = () => (
  <div>
    <div>
      <h1>JAPANESE WORDS QUIZ</h1>
    </div>
    <div>
      <div>
        <span>
          Generate a two-kanji word and guess if it's a real Japanese word
        </span>
        <span>Earn points - the quicker you answer, the more you get</span>
        <span>Providing a wrong answer loses you a life </span>
        <span>Take care you only have {startingLives} lives</span>
      </div>
      <ButtonContainer />
    </div>
  </div>
);

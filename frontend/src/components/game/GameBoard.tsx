import { PointsContainer } from '../user/PointsContainer';
import { LivesContainer } from '../user/LivesContainer';
import { WordInfo } from '../words/WordInfo';
import { Countdown } from '../countdown/Countdown';
import { ButtonContainer } from '../buttons/ButtonContainer';

export const GameBoard = () => (
  <div>
    <div>
      <Countdown />
      <PointsContainer />
      <LivesContainer />
    </div>
    <div>
      <WordInfo />
      <ButtonContainer />
    </div>
  </div>
);

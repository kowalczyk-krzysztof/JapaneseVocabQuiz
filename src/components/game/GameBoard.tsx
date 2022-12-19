import { PointsContainer } from '../user/PointsContainer';
import { LivesContainer } from '../user/LivesContainer';
import { WordInfo } from '../words/WordInfo';
import { Countdown } from '../countdown/Countdown';
import { AnswerButtons } from '../buttons/AnswerButtons';

export const GameBoard = () => (
  <div>
    <div>
      <Countdown />
      <PointsContainer />
      <LivesContainer />
    </div>
    <div>
      <WordInfo />
      <AnswerButtons />
    </div>
  </div>
);

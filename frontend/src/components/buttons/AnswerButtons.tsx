import { useSelector } from 'react-redux';
import { gameSelector } from '../../features/game/gameSlice';
import { AnswerButton } from './AnswerButton';
import { NewWordButton } from './NewWordButton';

export const AnswerButtons = () => {
  const { isAnswered } = useSelector(gameSelector);

  return (
    <div>
      <NewWordButton />
      {!isAnswered && (
        <>
          <AnswerButton isCorrectAnswer={true} />
          <AnswerButton isCorrectAnswer={false} />
        </>
      )}
    </div>
  );
};

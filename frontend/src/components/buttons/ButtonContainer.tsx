import { useSelector } from 'react-redux';
import { gameSelector } from '../../features/game/gameSlice';
import { wordsSelector } from '../../features/words/wordsSlice';
import { NewWordButton } from './NewWordButton';
import { AnswerButton } from './AnswerButton';
import { StartButton } from './StartButton';

export const ButtonContainer = () => {
  const game = useSelector(gameSelector);
  const word = useSelector(wordsSelector);
  return (
    <div>
      <button />
      <button />
      {!game.is_question_answered && game.isGameStarted && !word.wordLoading ? (
        <>
          <button isTrue={true} />
          <button isTrue={false} />
        </>
      ) : null}
    </div>
  );
};

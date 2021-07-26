import { FC, Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
import { wordsSelector, WordObject } from '../../features/words/wordsSlice';
// Components
import { NewWordButton } from './NewWordButton';
import { AnswerButton } from './AnswerButton';
import { StartButton } from './StartButton';
// Styling
import { StyledButtons } from './buttons-styling';

export const ButtonContainer: FC = (): JSX.Element => {
  const game: Game = useSelector(gameSelector);
  const word: WordObject = useSelector(wordsSelector);
  return (
    <StyledButtons data-testid={'buttoncontainer'}>
      {!game.isGameStarted || game.isGameOver ? <StartButton /> : null}
      <NewWordButton />
      {!game.is_question_answered && game.isGameStarted && !word.wordLoading ? (
        <Fragment>
          <AnswerButton isTrue={true} />
          <AnswerButton isTrue={false} />
        </Fragment>
      ) : null}
    </StyledButtons>
  );
};

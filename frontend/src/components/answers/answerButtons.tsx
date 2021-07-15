import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
import { wordsSelector, WordObject } from '../../features/words/wordsSlice';
// Components
import { AnswerButton } from './answerButton';
// Styling
import { AnswerButtonsContainer } from './answers-styling';

export const AnswerButtons: FC = (): JSX.Element | null => {
  const game: Game = useSelector(gameSelector);
  const word: WordObject = useSelector(wordsSelector);
  if (
    game.is_question_answered === false &&
    game.isGameStarted === true &&
    word.wordLoading === false
  )
    return (
      <AnswerButtonsContainer>
        {/* <AnswerTrueButton />
        <AnswerFalseButton /> */}
        <AnswerButton isTrue={true} />
        <AnswerButton isTrue={false} />
      </AnswerButtonsContainer>
    );
  else return null;
};

export default AnswerButtons;

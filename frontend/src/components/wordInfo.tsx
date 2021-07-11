import React, { FC, Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { wordsSelector, WordObject } from '../features/words/wordsSlice';
import { Game, gameSelector } from '../features/game/gameSlice';
// Components
import { DisplayWord } from './displayWord';

export const WordInfo: FC = (): JSX.Element => {
  const word: WordObject = useSelector(wordsSelector);
  const game: Game = useSelector(gameSelector);

  if (
    game.isGameStarted === true &&
    game.is_question_answered === true &&
    word.wordLoading === false
  )
    return (
      <Fragment>
        <DisplayWord />
        <p>{word.word.reading}</p>
        <ul>
          {word.word.definitions?.map((el: any, index: number) => {
            return <li key={index}>{el}</li>;
          })}
        </ul>
      </Fragment>
    );
  else
    return (
      <Fragment>
        <DisplayWord />
      </Fragment>
    );
};

export default WordInfo;

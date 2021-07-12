import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { wordsSelector, WordObject } from '../../features/words/wordsSlice';
import { Game, gameSelector } from '../../features/game/gameSlice';
// Components
import { DisplayWord } from './displayWord';
import { Definitions } from './definitions';
import { GameOverScreen } from '../game/gameOverScreen';

export const WordInfo: FC = (): JSX.Element => {
  const word: WordObject = useSelector(wordsSelector);
  const game: Game = useSelector(gameSelector);

  if (
    game.isGameStarted === true &&
    game.isGameOver === false &&
    game.is_question_answered === true &&
    word.wordLoading === false
  )
    return (
      <div
        style={{
          gridArea: 'word',
          background: 'black',
        }}
      >
        <DisplayWord />
        <span>{word.word.reading}</span>
        <Definitions />
      </div>
    );
  else if (game.isGameOver === true)
    return (
      <div
        style={{
          gridArea: 'word',
          background: 'black',
        }}
      >
        <GameOverScreen />
      </div>
    );
  else
    return (
      <div
        style={{
          gridArea: 'word',
          background: 'black',
        }}
      >
        <DisplayWord />
      </div>
    );
};

export default WordInfo;

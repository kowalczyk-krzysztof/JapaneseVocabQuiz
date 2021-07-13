import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { generateRandomNumber } from '../utils/generateRandomNumber';
import { findMatchingWords, Word } from '../utils/dictSearch';

dotenv.config({ path: 'config.env' });

// @desc    Check if word exists
// @route   GET /api/v1/game/wordcheck/:word
// @access  Public
export const wordCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const inputWord: string = req.params.word;
    const foundWords: Word[] = findMatchingWords(inputWord);
    let word: string;
    let wordExists: boolean;
    let reading: string;
    let definitions: string[];
    if (foundWords.length === 0) {
      if (inputWord.length === 1) word = inputWord + '々';
      else word = inputWord;
      wordExists = false;
      reading = '';
      definitions = [];
    } else if (foundWords.length > 1) {
      const index = generateRandomNumber(0, foundWords.length - 1);
      word = foundWords[index].kanji[0].text;
      wordExists = true;
      reading = foundWords[index].kana[0].text;
      definitions = foundWords[index].sense[0].gloss.map(
        (el: { text: string }) => el.text
      );
    } else {
      word = foundWords[0].kanji[0].text;
      wordExists = true;
      reading = foundWords[0].kana[0].text;
      definitions = foundWords[0].sense[0].gloss.map(
        (el: { text: string }) => el.text
      );
    }
    res.status(200).json({
      word,
      wordExists,
      reading,
      definitions,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      error: err,
    });
  }
};

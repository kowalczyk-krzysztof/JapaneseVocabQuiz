import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
// Utils
import { generateRandomNumber } from '../utils/generateRandomNumber';
import { generateWord } from '../utils/generateWord';
import { dictionarySearch, Word } from '../utils/dictionarySearch';

dotenv.config({ path: 'config.env' });

// @desc    Check if word exists
// @route   GET /api/v1/game/wordcheck
// @access  Public
export const wordCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // First generate a word then search for it in dictionary. If no worda are found then return the input word (if it was one kanji, add a noma). If only one word is found then return it. If more than one word is found, generate a number between 0 and foundWords.lenght - 1 and return a word at that index
    const generatedWord: string = generateWord();
    const foundWords: Word[] = dictionarySearch(generatedWord);
    let word: string;
    let wordExists: boolean;
    let reading: string;
    let definitions: string[];
    if (foundWords.length === 0) {
      if (generatedWord.length === 1) word = generatedWord + '々';
      else word = generatedWord;
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

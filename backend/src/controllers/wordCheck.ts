import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
// Utils
import { generateRandomNumber } from '../utils/generateRandomNumber';
import { generateWord } from '../utils/generateWord';
import { dictionarySearch, DictionaryObject } from '../utils/dictionarySearch';
import { generateWordObject, Word } from '../utils/generateWordObject';

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
    const generatedWord: string = generateWord(
      generateRandomNumber,
      generateRandomNumber,
      generateRandomNumber
    );
    const foundWords: DictionaryObject[] = dictionarySearch(generatedWord);

    const result: Word = generateWordObject(
      foundWords,
      generatedWord,
      generateRandomNumber
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      error: err,
    });
  }
};

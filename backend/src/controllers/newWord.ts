import { Request, Response, NextFunction } from 'express';
import { generateWord } from '../utils/generateWord';

// @desc    Generate new word
// @route   GET /api/v1/game/newword
// @access  Public
export const newWord = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const word: string = generateWord();
    res.status(200).json({
      word,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      error: err,
    });
  }
};

import { DictionaryObject } from './dictionarySearch';
import { generateRandomNumber } from './generateRandomNumber';

export interface Word {
  word: string;
  wordExists: boolean;
  reading: string;
  definitions: string[];
}

export const generateWordObject = (
  words: DictionaryObject[],
  generatedWord: string,
  index?: typeof generateRandomNumber
): Word => {
  if (!words.length) {
    let whatWord: string;
    if (generatedWord.length === 1) whatWord = generatedWord + '々';
    else whatWord = generatedWord;
    return {
      word: whatWord,
      wordExists: false,
      reading: '',
      definitions: [],
    };
  } else if (words.length > 1) {
    const indexOfWord: number = index!(0, words.length - 1);
    return {
      word: words[indexOfWord].kanji[0],
      wordExists: true,
      reading: words[indexOfWord].kana[0],
      definitions: words[indexOfWord].definition[0].map((el: string) => el),
    };
  } else
    return {
      word: words[0].kanji[0],
      wordExists: true,
      reading: words[0].kana[0],
      definitions: words[0].definition[0].map((el: string) => el),
    };
};

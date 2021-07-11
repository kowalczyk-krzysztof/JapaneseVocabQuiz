import { kanaList } from './kanaArray';

const dictionary = require('../../data/jmdict.json');

export interface Word {
  kanji: [{ text: string }];
  kana: [{ text: string }];
  sense: [
    {
      gloss: [{ text: string }];
    }
  ];
}

export const findMatchingWords = (inputWord: string): Word[] => {
  if (inputWord.length === 1) {
    return dictionary.words
      .filter((el: Word) => {
        return el.kanji.some(
          (el) =>
            el.text.length === 2 &&
            kanaList.includes(el.text.charAt(0)) === false &&
            kanaList.includes(el.text.charAt(1)) === false &&
            el.text.charAt(0) === inputWord
        );
      })
      .filter((el: Word) => el.kanji.length === 1);
  } else
    return dictionary.words.filter((el: Word) => {
      return el.kanji.some(
        (el) =>
          el.text.length === 2 &&
          kanaList.includes(el.text.charAt(0)) === false &&
          kanaList.includes(el.text.charAt(1)) === false &&
          el.text === inputWord
      );
    });
};

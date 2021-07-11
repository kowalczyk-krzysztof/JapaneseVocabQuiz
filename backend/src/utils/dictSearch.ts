import { kanaList } from './kanaArray';

const dictionary = require('../../data/jmdict.json');

export const findMatchingWords = (inputWord: string) => {
  if (inputWord.length === 1) {
    return dictionary.words
      .filter((el: any) => {
        return el.kanji.some(
          (el: any) =>
            el.text.length === 2 &&
            kanaList.includes(el.text.charAt(0)) === false &&
            kanaList.includes(el.text.charAt(1)) === false &&
            el.text.charAt(0) === inputWord
        );
      })
      .filter((el: any) => el.kanji.length === 1);
  } else
    return dictionary.words.filter((el: any) => {
      return el.kanji.some(
        (el: any) =>
          el.text.length === 2 &&
          kanaList.includes(el.text.charAt(0)) === false &&
          kanaList.includes(el.text.charAt(1)) === false &&
          el.text === inputWord
      );
    });
};
console.log(findMatchingWords('逃'));

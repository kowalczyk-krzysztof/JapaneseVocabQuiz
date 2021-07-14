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
    return dictionary.filter((el: Word) => {
      return el.kanji.some((el) => el.text.includes(inputWord));
    });
  } else {
    return dictionary.filter((el: Word) => {
      return el.kanji.some((el) => el.text === inputWord);
    });
  }
};

import { generateWord } from './generateWord';

describe('generating words', () => {
  test('generates word with .length === 2 and makes sure both of characters are included in kanjiList', () => {
    const index1 = jest.fn().mockReturnValue(0);
    const index2 = jest.fn().mockReturnValue(10);
    const generateOrNot = jest.fn().mockReturnValue(1);
    const result = generateWord(index1, generateOrNot, index2);
    expect(result.length).toEqual(2);
    expect(result).toEqual('一三');
  });
  test('generates word with .lenght === 1 and makes sure the character is included in kanjiList', () => {
    const index1 = jest.fn().mockReturnValue(6);
    const index2 = jest.fn().mockReturnValue(0);
    const generateOrNot = jest.fn().mockReturnValue(0);
    const result = generateWord(index1, generateOrNot, index2);
    expect(result.length).toEqual(1);
    expect(result).toEqual('八');
  });
  test('generates word with .lenght === 2 and the character is included in kanjiList and since the characters are the same, the charAt(1) gets replaced with 々', () => {
    const index1 = jest.fn().mockReturnValue(5);
    const index2 = jest.fn().mockReturnValue(5);
    const generateOrNot = jest.fn().mockReturnValue(1);
    const result = generateWord(index1, generateOrNot, index2);
    expect(result.length).toEqual(2);
    expect(result).toEqual('入々');
  });
});

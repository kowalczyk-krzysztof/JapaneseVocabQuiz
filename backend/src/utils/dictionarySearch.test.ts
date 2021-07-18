import { dictionarySearch } from './dictionarySearch';

describe('checking whether the word appears in dictionary or not', () => {
  test(`checks whether the non-exisitng word 田々 appears in dictionary - it shouldn't`, () => {
    expect(dictionarySearch('田々').length).toEqual(0);
  });
  test('checks whether the word 神々 appears in dictionary - it should and there should only be one (exact) match', () => {
    expect(dictionarySearch(`神々`).length).toEqual(1);
  });
  test('checks whether there are any words containing the kanji 神 - there should be multiple results', () => {
    expect(dictionarySearch('神').length).toBeGreaterThanOrEqual(2);
  });
});

import { generateRandomNumber } from '../utils/generateRandomNumber';

describe('generating random number between two values', () => {
  test('generates number between (and including) x and y', () => {
    const x: number = 0;
    const y: number = 10;
    const z: number = generateRandomNumber(x, y);
    expect(z).toBeGreaterThanOrEqual(x);
    expect(z).toBeLessThanOrEqual(y);
  });
});

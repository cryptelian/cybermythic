import { describe, it, expect } from 'vitest';
import { Misc } from '../src/modules/misc.js';

describe('Misc', () => {
  it('ascending sorts numbers', () => {
    const arr = [3, 1, 2];
    const sorted = arr.sort(Misc.ascending());
    expect(sorted).toEqual([1, 2, 3]);
  });

  it('distinct removes duplicates', () => {
    expect(Misc.distinct([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });
});

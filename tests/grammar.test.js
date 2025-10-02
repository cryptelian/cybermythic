import { describe, it, expect } from 'vitest';
import { Grammar } from '../src/modules/grammar.js';

describe('Grammar', () => {
  it('toLowerCaseNoAccent removes accents and lowercases', () => {
    expect(Grammar.toLowerCaseNoAccent('Élève Ça')).toBe('eleve ca');
  });

  it('toUpperCaseNoAccent removes accents and uppercases', () => {
    expect(Grammar.toUpperCaseNoAccent('Élève Ça')).toBe('ELEVE CA');
  });
});

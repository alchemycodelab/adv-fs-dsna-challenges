const {
  reverseSentence,
  sum,
  romanNumerals,
  fizzBuzz,
  fib,
} = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it.skip('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });

  describe('sum', () => {
    it.skip('should return the sum of an array', () => {
      expect(sum([1, 2, 3])).toBe(6);
      expect(sum([1, 2, 3, 4])).toBe(10);
    });
  });

  describe('roman numerals', () => {
    it.skip('should convert numbers', () => {
      expect(romanNumerals('I')).toBe(1);
      expect(romanNumerals('IV')).toBe(4);
      expect(romanNumerals('VI')).toBe(6);
      expect(romanNumerals('IX')).toBe(9);
      expect(romanNumerals('X')).toBe(10);
      expect(romanNumerals('XI')).toBe(11);
    });
  });

  describe('fizz buzz', () => {
    it.skip('should do the fizz buzz thing', () => {
      expect(fizzBuzz(16)).toEqual([
        1,
        2,
        'Fizz',
        4,
        'Buzz',
        'Fizz',
        7,
        8,
        'Fizz',
        'Buzz',
        11,
        'Fizz',
        13,
        14,
        'FizzBuzz',
        16,
      ]);
    });
  });

  describe('fibonacci sequence', () => {
    it('should return the fibonacci sequence at the specified index', () => {
      expect(fib(0)).toEqual(0);
      expect(fib(1)).toEqual(1);
      expect(fib(2)).toEqual(1);
      expect(fib(10)).toEqual(55);
    });
  });
});

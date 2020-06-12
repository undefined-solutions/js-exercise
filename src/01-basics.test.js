import {
  and,
  append,
  comparison,
  concat,
  curtail,
  globals,
  indexOf,
  or,
  parseInteger,
  prepend,
  truncate,
} from './01-basics';

describe('the basics', () => {
  it('you should understand strict comparison', () => {
    expect(comparison(1, '1')).toBeFalsy();
    expect(comparison(1, 1)).toBeTruthy();
    expect(comparison(0, false)).toBeFalsy();
  });

  it('you should avoid global variables', () => {
    globals();
    expect(window.myObject).not.toBeDefined();
  });

  it('you should use parseInt correctly', function () {
    expect(parseInteger('12')).toBe(12);
    expect(parseInteger('12px')).toBe(12);
    expect(parseInteger('0x12')).toBe(0);
  });

  it('you should be able to work with logical or', function () {
    expect(or(false, true)).toBeTruthy();
    expect(or(true, false)).toBeTruthy();
    expect(or(true, true)).toBeTruthy();
    expect(or(false, false)).toBeFalsy();
    expect(or(3, 4)).not.toBe(7);
  });

  it('you should be able to work with logical and', function () {
    expect(and(false, true)).toBeFalsy();
    expect(and(false, false)).toBeFalsy();
    expect(and(true, false)).toBeFalsy();
    expect(and(true, true)).toBeTruthy();
    expect(and(3, 4)).toBeTruthy();
  });
});

describe('array methods', () => {
  let sampleArray;

  beforeEach(() => {
    sampleArray = [1, 2, 3, 4];
  });

  it('you should be able to determine the location of an item in an array', () => {
    expect(indexOf(sampleArray, 3)).toBe(2);
    expect(indexOf(sampleArray, 5)).toBe(-1);
  });

  it('you should be able to add an item to the end of an array', () => {
    const result = append(sampleArray, 10);

    expect(result).toHaveLength(5);
    expect(result[result.length - 1]).toBe(10);
  });

  it('you should be able to remove the last item of an array', () => {
    const result = truncate(sampleArray);

    expect(result).toHaveLength(3);
    expect(result.join(' ')).toBe('1 2 3');
  });

  it('you should be able to add an item to the beginning of an array', function () {
    const result = prepend(sampleArray, 10);

    expect(result).toHaveLength(5);
    expect(result[0]).toBe(10);
  });

  it('you should be able to remove the first item of an array', function () {
    const result = curtail(sampleArray);

    expect(result).toHaveLength(3);
    expect(result.join(' ')).toBe('2 3 4');
  });

  it('you should be able to join together two arrays', () => {
    const secondArray = ['a', 'b', 'c', 1];
    const result = concat(sampleArray, secondArray);

    expect(result).toHaveLength(8);
    expect(result.join(' ')).toBe('1 2 3 4 a b c 1');
  });
});

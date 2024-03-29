import {
  duplicates,
  findAllOccurrences,
  insert,
  iterate,
  remove,
  square,
  sum
} from './02-arrays-objects';

describe('arrays', () => {
  let sampleArray;

  beforeEach(() => {
    sampleArray = [1, 2, 3, 4];
  });

  it('you should be able to sum the items of an array', () => {
    expect(sum(sampleArray)).toBe(10);
  });

  it('you should be able to remove all instances of a value from an array', () => {
    // Make sure the value appears more than one time
    sampleArray.push(2);
    // Make sure the value appears more than one time in a row
    sampleArray.push(2);

    const result = remove(sampleArray, 2);

    expect(result).toHaveLength(3);
    expect(result.join(' ')).toBe('1 3 4');
  });

  it('you should be able to add an item anywhere in an array', () => {
    const result = insert(sampleArray, 'z', 2);

    expect(result).toHaveLength(5);
    expect(result.join(' ')).toBe('1 2 z 3 4');
  });

  it('you should be able to find duplicates in an array', () => {
    const result = duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]);

    expect(result.sort()).toEqual([1, 3, 4]);
  });

  it('you should be able to square each number in an array', () => {
    const result = square(sampleArray);

    expect(result).toHaveLength(4);
    expect(result.join(' ')).toBe('1 4 9 16');
  });

  it('you should be able to find all occurrences of an item in an array', () => {
    const result = findAllOccurrences([1, 2, 3, 4, 5, 6, 1, 7], 1);

    expect(result.sort().join(' ')).toBe('0 6');
  });
});

describe('objects', () => {
  it('you should be able to iterate over an object\'s "own" properties', function () {
    // define a function for fn so that the following will pass
    let TypeC = function () {
      this.dog = 'Drake';
      this.cat = 'Twix';
    };

    TypeC.prototype.fish = 'Kenny';

    const obj = new TypeC();

    expect(iterate(obj)).toEqual(['dog: Drake', 'cat: Twix']);
  });
});

import {
  fizzBuzz,
  functionFunction,
  makeClosures,
  partial
} from './03-functions';

describe('functions', () => {
  it('you should be able to return a function from a function', () => {
    expect(functionFunction('Hello')('world')).toEqual('Hello, world');
    expect(functionFunction('Hai')('can i haz funxtion?')).toEqual(
      'Hai, can i haz funxtion?'
    );
  });

  it('you should be able to use closures', () => {
    const arr = [Math.random(), Math.random(), Math.random(), Math.random()];
    const square = function (x) {
      return x * x;
    };
    const funcs = makeClosures(arr, square);

    expect(funcs).toHaveLength(arr.length);

    for (let i = 0, len = arr.length; i < len; i++) {
      expect(funcs[i]()).toEqual(square(arr[i]));
    }
  });

  it('you should be able to create a "partial" function', () => {
    const sayIt = jest.fn(function (greeting, name, punctuation) {
      return greeting + ', ' + name + (punctuation || '!');
    });
    const result = partial(sayIt, 'Hello', 'Ellie');

    expect(result('!!!')).toEqual('Hello, Ellie!!!');
    expect(result('.')).toEqual('Hello, Ellie.');
    expect(sayIt).toHaveBeenCalled();
  });

  it('you should be able to conditionally branch your code', () => {
    let num = 0;

    while (num % 3 === 0 || num % 5 === 0) {
      num = Math.floor(Math.random() * 10) + 1;
    }

    expect(fizzBuzz()).toBeFalsy;
    expect(fizzBuzz('foo')).toBeFalsy;
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(101)).toBe(101);

    expect(fizzBuzz(3)).toBe('fizz');
    expect(fizzBuzz(6)).toBe('fizz');
    expect(fizzBuzz(num * 3)).toBe('fizz');

    expect(fizzBuzz(5)).toBe('buzz');
    expect(fizzBuzz(10)).toBe('buzz');
    expect(fizzBuzz(num * 5)).toBe('buzz');

    expect(fizzBuzz(15)).toBe('fizzbuzz');
    expect(fizzBuzz(num * 3 * 5)).toBe('fizzbuzz');
  });
});

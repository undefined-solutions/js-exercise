import { count } from './04-count';

describe('counter', () => {
  const logFn = jest.fn();
  afterEach(() => {
    logFn.mockClear();
  });
  it('should count from start number to end number, one per 1/10th of a second', () => {
    count(logFn, 1, 5);
    setTimeout(() => {
      expect(logFn).toHaveBeenCalledTimes(5);
      expect(logFn).toHaveBeenNthCalledWith(1, 1);
      expect(logFn).toHaveBeenNthCalledWith(5, 5);
    }, 550);
  });
  it('should provide a method to cancel the counting', () => {
    const counter = count(logFn, 1, 5);
    counter.cancel();
    setTimeout(() => {
      expect(logFn.mock.calls.length).toBeLessThan(5);
    }, 750);
  });
});

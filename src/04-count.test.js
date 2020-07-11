import { count } from './04-count';

describe('counter', () => {
  const logFn = jest.fn();

  afterEach(() => {
    logFn.mockClear();
  });

  it('should count from start number to end number, one per 1/10th of a second', (done) => {
    count(logFn, 1, 5);
    setTimeout(() => {
      expect(logFn).toHaveBeenCalledTimes(5);
      // expect(logFn).toHaveBeenNthCalledWith(1, 1);
      expect(logFn.mock.calls[0][0]).toBe(1);
      // expect(logFn).toHaveBeenNthCalledWith(5, 5);
      expect(logFn.mock.calls[4][0]).toBe(5);
      done();
    }, 550);
  });

  it('should provide a method to cancel the counting', (done) => {
    const counter = count(logFn, 1, 5);
    setTimeout(counter.cancel, 150);
    setTimeout(() => {
      // expect(logFn.mock.calls.length).toBeGreaterThan(1);
      expect(logFn.mock.calls.length > 1).toBeTruthy();
      // expect(logFn.mock.calls.length).toBeLessThan(5);
      expect(logFn.mock.calls.length < 5).toBeTruthy();
      done();
    }, 750);
  });
}, 1000);

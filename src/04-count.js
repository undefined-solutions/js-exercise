/**
 * This test describes a function, count, that takes three arguments: a
 * function, a starting number, and an ending number. The function should be
 * called with each number from the start number to the end number, one number
 * per 1/10th of a second. The function should return an object with a cancel
 * method, which should cancel the counting.
 *
 * @param {Function} fn A function to be called on interval.
 * @param {number} start The starting value for the iteration.
 * @param {end} end The final value to call for the iteration before
 *                    terminating the interval.
 * @returns {Object} counter An Object with a cancel() function that when
 *                     called will stop the counting.
 * @property {Function} counter.cancel
 */
export const count = (fn, start, end) => {
  return;
};

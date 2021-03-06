/**
 * A function that accepts an integer n and returns the n-th Fibonacci number, fib(n).
 * Given fib(0) = 0 and fib(1) = 1, fib(n) is recursively defined as follows:
 *   fib(n) = fib(n-1) + fib(n-2)
 *
 * @param  {integer} n
 * @return {integer} fib(n)
 */

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n-1) + fib(n-2);
}

module.exports = {
  fib
};
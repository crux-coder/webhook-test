// Fibonacci stuff
// [1,1,2,3,5,8,13,21 ....]
// 23.. za 15
// 44 za 21
function sumOddInFibonacci(num) {
  const fib = [1, 1];
  let lastOdd = 1;
  let currEl;
  for (let i = 2; (currEl = fib[i - 1] + fib[i - 2]) <= num; i++) {
    if (currEl % 2 === 1) lastOdd = currEl;
    fib.push(currEl);
  }
  if (lastOdd === 1) return 2;

  return lastOdd + sumOddInFibonacci(lastOdd - 1);
}

console.log(sumOddInFibonacci(21));

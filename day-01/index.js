function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

// sum([1, 2, 3, ... n]);
// 1 + sum([2, 3, ... n])
// 1 + 2 + sum([3,... n])
// ...
// 1 + 2 + 3 + ... + sum([n])
// 1 + 2 + 3 + ... + n
function sum(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[0] + sum(arr.slice(1));
    //  1 + sum([2, 3, 4, 5])
    // 1 + 2 + sum([3, 4, 5])
    // 1 + 2 + 3 + sum([4, 5])
    // 1 + 2 + 3 + 4 + sum([5])
    // 1 + 2 + 3 + 4 + 5
    // 15
  }
}
sum([1, 2, 3, 4, 5]);
// function helloBuilder(greeting) {
//   return (name) => {
//     console.log(`${greeting} ${name}!`);
//   };
// }
// const sayHello = helloBuilder('hello');
// sayHello('julie');
// // hello julie!

// const sayBonjour = helloBuilder('bonjour');
// sayBonjour('julie');
// // bonjour julie!

function romanNumerals(str) {
  const mapping = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
  };
  const chars = str.split('');
  let sum = 0;
  for (let i = 0; i < chars.length; i++) {
    if (mapping[chars[i]] < mapping[chars[i + 1]]) {
      sum += mapping[chars[i] + chars[i + 1]];
      i++;
    } else {
      sum += mapping[chars[i]];
    }
  }
  return sum;
}

function fizzBuzz(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    // if i divisable by 3 -- push fizz
    // if i divisable by 5 -- push buzz
    // if i divisable by 3 & 5 -- push fizbuzz
    // else push i
    if (i % 15 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else {
      arr.push(i);
    }
  }
  return arr;
}

// const arr = [1, 2];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     count++;
//   }
// }
// console.log('the count is:', count);

function fib(n) {
  // f(0) => 0
  // f(1) => 1
  // f(2) => f(2-2) + f(2 -1) => f(1) + f(0) => 1 + 0 => 2
  // f(3) => f(3-2) + f(3-1) => f(1) + f(2) => 1 + 2 => 3
  // f(4) => f(2) + f(3) => f(1) + f(0) + f(1) + f(2)
  //                     => f(1) + f(1) + f(1) + f(1) + fib(0)
  // f(n) => f(n-2) + f(n-1)

  if (n === 1 || n === 0) {
    return n;
  } else {
    return fib(n - 2) + fib(n - 1);
  }
}

module.exports = { reverseSentence, sum, romanNumerals, fizzBuzz, fib };

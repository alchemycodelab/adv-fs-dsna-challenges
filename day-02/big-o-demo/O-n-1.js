/* eslint-disable no-console */
console.log('O(n*1) | O(n)');

for (let count = 100; count <= 1000000; count *= 10) {
  const arr = [];

  for (let i = 0; i < count; i++) {
    arr[i] = `hello ${i}`;
  }

  // eslint-disable-next-line no-inner-declarations
  function hasDups(arr) {
    // [1, 2, 1, 3]
    // dict: {1: true, 2: true}
    const dict = {};
    let n;
    for (let i = 0; i < arr.length; i++) {
      n = arr[i]; // 1
      if (dict[n]) return true;
      else dict[n] = true;
    }

    return false;
  }

  console.log('count', count);
  console.time('has dups');
  console.log(hasDups(arr));
  console.timeEnd('has dups');
}

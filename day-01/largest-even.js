// Write a function that finds the largest number in an array nums that is also
// even. If there is no even number, return -1.
// 
// largestEven([3, 7, 2, 1, 7, 9, 10, 13]) ➞ 10
// largestEven([1, 3, 5, 7]) ➞ -1
// largestEven([0, 19, 18973623]) ➞ 0

const largestEven = (arr, largest=-1) => {
  const element = arr[0]
  if(element == null) {
    return largest
  } else if(element % 2 == 0 && element > largest) {
    largest = element
  } else {
    // Do nothing.
  }
  // arr = [3, 7, 2, 1, 7, 9, 10, 13]
  // arr.slice(...) = [7, 2, 1, 7, 9, 10, 13]
  return largestEven(arr.slice(1, arr.length), largest)
}

const largestEvenDestructure = (arr, largest=-1) => {
  // Array destructuring refresher:
  // const [results, setResults] = useState([])
  // const resultsUseState = useState([])
  // const results = resultsUseState[0]
  // const setResults = resultsUseState[1]
  // nextArr takes the remaining elements.
  const [element, ...nextArr] = arr
  if(element == null) {
    return largest
  } else if(element % 2 == 0 && element > largest) {
    largest = element
  } else {
    // Do nothing.
  }
  return largestEven(nextArr, largest)
}

// System Under Test (SUT)
const sut = true ? largestEven : largestEvenDestructure

console.log(sut([])) // -1
console.log(sut([1, 3, 5])) // -1
console.log(sut([2])) // 2
console.log(sut([2, 4])) // 4
console.log(sut([3, 7, 2, 1, 7, 9, 10, 13])) // 10
console.log(sut([1, 3, 5, 7])) // -1
console.log(sut([0, 19, 18973623])) // 0
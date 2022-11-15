// Recursion.
// Application: Data structures.

// 1
// 1
// 2
// 3
// 5
// 8
const fibonacci = (last, secondToLast, position) => {
  if(position == 0) {
    return last
  } else {
    const newNumber = last + secondToLast
    return fibonacci(newNumber, last, position - 1)
  }
}

// console.log(fibonacci(1, 1, 1000))

// Binary search

const node = (data) => {
  return {
    data,
    next: null,
  }
}

const node1 = node('quick')
const node2 = node('brown')
const node3 = node('fox')
node1.next = node2
node2.next = node3

const joinNodes = (node, joined = '') => {
  const result = joined + ' ' + node.data
  if(node.next == null) {
    return result
  } else {
    return joinNodes(node.next, result)
  }
}

const joinNodesWhile = (node) => {
  let result = ''
  do {
    result = result + ' ' + node.data
    node = node.next
  } while(node != null)
  return result
}

console.log(joinNodesWhile(node1))

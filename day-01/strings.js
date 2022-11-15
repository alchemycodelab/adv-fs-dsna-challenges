const str = 'the quick brown fox jumps over the lazy dog'
const char = str[0]
// console.log(char) // 't'
const words = str.split(' ')
// console.log(words)

const email = 'logan@alchemycodelab.com'
const [ user, domain ] = email.split('@')
// console.log(parts)

const myPath = process.cwd()
console.log('original path', myPath)

const getParentDirectory = (path) => {
  const dirs = path.split('/')
  const parents = dirs.slice(0, dirs.length - 1)
  const parentPath = parents.join('/')
  return parentPath
}

const getParentDirectoryWithoutVars = (path) => {
  const dirs = path.split('/')
  return dirs
    .slice(0, dirs.length - 1)
    .join('/')
}
const something = 5
const addSomething = x => {
  return x + something
}
[5, 5, 5].map(addSomething) // [ 10, 10, 10 ]

// f = a => b
function map(f, array) {
  const newArray = new Array(array.length)
  for(let i = 0; i < array.length; ++i) {
    newArray[i] = f(array[i + 1])
  }
  return newArray
}
map(n => n + 1, [1, 2, 3])
const addOneToArray = map.bind(null, add1(1))
// ramda has partialRight
// lodash-fp might have it
const addOneToArray2 = (array) => {
  return (f) => map(f, array)
}

const add2 = (x, y) => x + y
const add2Long = (x, y) => {
  return x + y
}
// curried - Functions take one param, return another function.
const add1 = x => y => x + y
const add1Long = x => {
  return y => x + y
}

[2, 3, 4].map(add1(3))
// y => 3 + y
// [5, 6, 7]

// Partial Application (partially apply)
[2, 3, 4].map(add2.bind(null, 3))

const add2Partial = add2.bind(null, 3)
[2, 3, 4].map(add2Partial)

class User {
  constructor(username) {
    this.username = username
  }

  getUsername() {
    return this.username
  }
  add(x, y) {
    return x + y
  }
}

const user2 = new User()
user2.getUsername()
user2.getUsername.bind(user2)
user2.add.bind(user2, 3)

const updateUserEmail = (updateFn, user, email) => {
  'logan+spam@alchemycodelab.com'
  'logan@alchemycodelab.com'
  'logan.barnett@alchemycodelab.com'
  'l.o.g.a.n.barnett+krogercard@alchemycodelab.com'
  updateFn('user', 'email', user, email)
}

// When we setup the DB.
const sqlUpdateFunction = (db, tableName, columnName, idObj, data) => {
  db.query(`UPDATE ${tableName} SET ${columnName} = $1 WHERE id = $2`, [data, idObj.id] )
}
const mongoDbUpdateFunction = (documentName, fieldName, idObj, data) => {
  const model = new models[documentName]
  model.id = idObj
  model[fieldName] = data
  model.save()
}

const db = pg.Pool()
const postgresSqlUpdateFunction = sqlUpdateFunction.bind(null, db)


add1(3) // y => 3 + y
add2.bind(null, 3) // y => 3 + y

const functions = []
const scope = {}
for(scope.i = 0; scope.i < 3; ++scope.i) {
  functions.push(() => console.log('i is', scope.i))
}
functions.forEach(f => f())

// console.log('parent path', getParentDirectory(process.cwd()))

//------
// Chaining
// quick => ['q', 'u', 'i', 'c', 'k']
str
  .split('')
  .map(letter => letter.toUpperCase()) // ['Q', 'U', 'I', 'C', 'K']
  .join('') // 'QUICK'

const bigNum = 1235
const biggerNum = parseInt(
  bigNum
    .toString()
    .split('')
    .map(s => parseInt(s))
    .map(n => n + 1)
    .join('')
) // 2345

// Ternary expressions
1 + 1
countSomething(1 + 1)
countSomething(2)
// countSomething => ?
countSomething(countSomething(2))

// Pretend this is big...
function bigFunction() {
  let status = 'undetermined'
  if(someCondition) {
    // ...
    // ...
    status = 'passing'
  } else {
    status = 'failing'
  }
  // ...
  status = 'undetermined'
}

function bigFunction2() {
  const status = someCondition ? 'passing' : 'failing'
  const status2 = someCondition ? checkTestStatus(vars) : 'failing'
}

function Component(props) {
  const [items, setItems ] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchItems = async () => {
      fetch({})
        .then(res => res.json())
        .then(res => res.status < 400 ? setItems : setError)
        .then(f => f())
    }
    fetchItems()
  })
}

// Array functions
// filter function: a => boolean

[1, 2, 3].filter((x) => x % 2 == 0) // [ 2 ]
const isEven = (x) => x % 2 == 0
const isOdd = (x) => !isEven(x)
const not = (f, x) => !f(x)
[1, 2, 3].filter(isEven) // [ 2 ]
[1, 2, 3].filter(not.bind(null, isEven)) // [ 1, 3 ]

// reduce
[1, 2, 3].reduce((acc, x) => acc + x.toString(), '') // '123'
[1, 2, 3].reduce(add2, 0) // 6
// add = (x, y) => x + y
['foo', 'bar', 'baz'].reduce(add2, '') // 'foobarbaz
'' + 'foo'
'foo' + 'bar'
'foobar' + 'baz'

const userReducer = (userCandidateState, action) => {
  if(action.type == 'update-user-first-name') {
    return {
      ...userCandidateState,
      firstName: action.firstName,
    }
  }
}

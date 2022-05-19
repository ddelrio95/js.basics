// Objects
let student1 = {
  firstName: 'Lex',
  lastName: 'Perez',
  State: 'NY',
  age: 23,
}

let student2 = {
  firstName: 'John',
  lastName: 'War',
  State: 'LA',
  age: 25,
}

let student3 = {
  firstName: 'Dario',
  lastName: 'del Rio',
  State: 'FL',
  age: 27,
}

console.log()

let selectorColors = ['red', 'blue', 'green'] // Arrays
selectorColors.push = 'brown'
console.log(selectorColors.length)

// Funtion performing a task
function greet(name, age) {
  console.log('Hello ' + name, 'you are ' + age, 'years old')
}
greet('Dario', 27)

// Function calculating a value
function square(number) {
  return number * number
}
console.log(square(2))

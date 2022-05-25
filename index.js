// // Objects
// let student1 = {
//   firstName: 'Lex',
//   lastName: 'Perez',
//   State: 'NY',
//   age: 23,
// }

// let student2 = {
//   firstName: 'John',
//   lastName: 'War',
//   State: 'LA',
//   age: 25,
// }

// let student3 = {
//   firstName: 'Dario',
//   lastName: 'del Rio',
//   State: 'FL',
//   age: 27,
// }

// console.log()

// let selectorColors = ['red', 'blue', 'green'] // Arrays
// selectorColors.push = 'brown'
// console.log(selectorColors.length)

// // Funtion performing a task
// function greet(name, age) {
//   console.log('Hello ' + name, 'you are ' + age, 'years old')
// }
// greet('Dario', 27)

// // Function calculating a value
// function square(number) {
//   return number * number
// }
// console.log(square(2))

// Functions

// function Car(brand, model) {
//   console.log('The car is a ' + brand + ' and the model is ' + model)
// }
// Car('Honda', 'Accord')
// Same as an Arrow Function

let car = (br, mod) => console.log('The car is a ' + br + ' ' + mod)
car('Honda', 'Accord')

let Flower = (type, color) =>
  console.log('The flower is a ' + type + ' ' + 'and it is ' + color)
Flower('Margarita', 'White')

let sum = (a, b) => console.log(a + b)
sum(1, 2)

function suma(e, f) {
  console.log(e + f)
}
suma(1, 2)

// More Objects
const Student = {
  firstName: 'Dario',
  lastName: 'del Rio',
  age: 27,
  eyeColor: 'brown',
}

// More Objects
let person = new Object()

person.name = 'Dario'
person.eyeColor = 'brown'
person.age = 27
person.updateAge = function () {
  return ++person.age
}
console.log(person)

let alum1 = {
  name: 'Daniel',
  eyeColor: 'blue',
  age: 27,
  updateAge: function () {
    return ++alum1.name
  },
}

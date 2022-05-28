// Function Declaration
function Student(fName, lName) {
  console.log('The student is ' + fName + ' ' + lName)
}
Student('Dario', 'del Rio')

function suma(num1, num2) {
  return num1 + num2
}
suma(2, 3)

// Functions Excercices
function greet() {
  console.log('Hello ')
  console.log('How are you?')
}
greet()

function saludar(time, name) {
  // console.log('Good ' + time + ' ' + name)
  console.log(`Good ${time}, ${name}`)
}
saludar('Afternoon', 'Dario')

//Function to calculate the average of two numbers
function average(numb1, numb2, numb3) {
  return (numb1 + numb2 + numb3) / 3
}
let s = average(5, 6, 7)
console.log(s)

if (s >= 5) {
  console.log('The evarage is bigger than 5')
} else {
  console.log('The average is smaller than 5')
}

// Find out if a number is even
function even(numero) {
  return numero % 2 == 0
}
let n = even(4)
console.log(n)

// Function that returns the square of a number
function findSquare(num) {
  return num * num
}
console.log(findSquare(2))

// Function to find the average of 3 numbers and find out its square root
// Function Expression
let avSquare = function (n1, n2, n3) {
  return n1 + n2 + n3 / 3
}
console.log(avSquare(2, 3, 4))
console.log(avSquare * avSquare) // Check this

// Function to convert from celcius to Fahrenheit
function toFahrenheit(cel) {
  return cel * 1.8 + 32
}
console.log(toFahrenheit(5))

// Function to find the area of a given rectangle
let area = function (a, b) {
  console.log(a * b)
}
area(10, 20)

// Other solution
function area1(w, l) {
  return `The area of the rectangle is ${w * l}`
}
console.log(area1(10, 20))

// Solution with user input
var rectangleWidth = prompt('Enter the width of the rectangle')
var rectangleLarge = prompt('Enter the large of the rectangle')

let result = function () {
  return `The are of the rectangle is ${rectangleWidth * rectangleLarge}`
}
result() // check

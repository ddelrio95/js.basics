// Convert the number to a string
let num = 123
console.log(num.toString()) //toString method

// Split the string into an Array
let num1 = 'a'
let num2 = 'b'
let num3 = 'c'
console.log(num1.split())
console.log(num2.split())
console.log(num3.split())

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'] // Check if at least one item is in the array
const result = fruits.some(itemInArray)

function itemInArray(itemF) {
  return itemF == 'Banana'
}

const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(n[4])

// Most used methods
//some(), //every(), //reduce(), //map(), //flat(), //filter(), //forEach(), //findIndex()

const carBrands = [
  'Acura',
  'Audi',
  'BMW',
  'Cadillac',
  'Chevrolet',
  'Dodge',
  'Ford',
  'GMC',
  'Honda',
  'Hyundai',
  'Kia',
  'Lexus',
  'Mercedes-Benz',
  'Mitsubishi',
  'Nissan',
  'Porsche',
  'Scion',
  'Tesla',
  'Volvo',
  'Wolkswagen',
]
const res = carBrands.some(letterH) // Function to check if at least one item is in the array

function letterH(letter) {
  return letter == 'Ferrari'
}
console.log(res)
console.log(
  '-----------------------------------------------------------------------------------'
)
//----------------------------------------------------------------------------------------------

const alumns = ['John', 'Max', 'Lucas', 'Antonio', 'Edgar'] // pop, shift, spice, filter
alumns.splice(3, 1)
console.log(alumns)

// Other examples of the use of "some"

var ages = [12, 15, 2, 7, 19, 35, 57, 14, 21, 29, 26, 15, 22]
ages.some(checkAdult)
function checkAdult(age) {
  return age > 18
}
console.log(ages)

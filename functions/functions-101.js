// Function - input, code, output
let greetUser = function () {
  console.log('Welcome')
}

greetUser()

let square = function (num) {
  let result = num * num
  return result
}

let value = square(3)
let anotherValue = square(10)
console.log(value)
console.log(anotherValue)

/*
  ** Challenge area
  convertFahrenheitToCelsius
  Call a couple of times (32, 68)
 */
let convertFahrenheitToCelsius = function(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9)
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))
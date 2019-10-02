// undefined for variable
let name 

// name = 'Jan'

if (name === undefined) {
  console.log('Please provide a name')
} else {
  console.log(name)
}


// 2. undefined for function assignments
let squre = function (num) {
  console.log(num)
}

// 3. undefined as function return default value
let result = squre()

// null as assigned value (reset)
let age = 27
age = null 
console.log(age)
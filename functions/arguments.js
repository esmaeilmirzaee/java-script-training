// Multiple Arguments
function add(a, b) {
  return a + b
}
console.log(add(2, 3))

// Default arguments
function getScoreText(name = 'Anonymous', score = 0) {
  return `Name: ${name} - Score: ${score}`
  // return 'Name: ' + name + ', Score: ' + score
}

console.log(getScoreText(null, 20))
console.log(getScoreText(undefined, 20))

// Challenge area
function calculateTip(total = 0, tip = 0.2) {
  console.log(`A ${tip * 100}% tip on $${total} would be $${(total * tip)}.`)
  return (total * tip) + total
}

console.log(calculateTip(23000, .25))
calculateTip(60, 0.6)
calculateTip(60)
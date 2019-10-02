// students score, total possible score
// 15/20 -> you got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

function gradeCalc(score, totalScore) {
  let percentage = score / totalScore * 100
  let letterGrade
  if (percentage >= 90) {
    letterGrade = `A`
  } else if (percentage >= 80 && percentage < 90) {
    letterGrade = `B`
  } else if (percentage >= 70 && percentage < 80) {
    letterGrade = `C`
  } else if (percentage >= 60 && percentage < 70) {
    letterGrade = `D`
  } else {
    letterGrade = `F`
  }
  return `You got a(n) ${letterGrade} (${percentage}%).`
}

console.log(gradeCalc(15, 20))
console.log(gradeCalc(80, 100))
console.log(gradeCalc(15, 100))
console.log(gradeCalc(85, 100))
console.log(gradeCalc(95, 100))
console.log(gradeCalc(90, 100))
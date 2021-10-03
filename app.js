// Import input
const jsonData = require('./input.json')

const inputArr = jsonData.input.split('')
let total = 0


function addToTotal(digit) {
  total += Number.parseInt(digit)
}

function checkAhead(input, distanceAhead) {
  for (let i = 0; i <= input.length - 1; i++) {
    const firstDigit = input[0]
    const secondDigit = input[distanceAhead]

    input.push(input.shift())

    if (firstDigit === secondDigit) addToTotal(firstDigit)
  }
}

console.time('test0')
checkAhead(inputArr, 1)
console.timeEnd('test0')

console.log('Answer one ahead: ' + total)

total = 0

const halfLengthOfArr = inputArr.length / 2

console.time('test1')
checkAhead(inputArr, halfLengthOfArr)
console.timeEnd('test1')

console.log('Answer halfway ahead: ' + total)

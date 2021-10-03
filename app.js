// Import input
const jsonData = require('./input.json')

const arr = jsonData.input.split('')
let total = 0


function addToTotal(digit) {
  total += Number.parseInt(digit)
}

function checkAhead(distanceAhead) {
  for (let i = 0; i <= arr.length - 1; i++) {
    const firstDigit = arr[0]
    const secondDigit = arr[distanceAhead]

    arr.push(arr.shift())

    if (firstDigit === secondDigit) addToTotal(firstDigit)
  }
}

console.time('test0')
checkAhead(1)
console.timeEnd('test0')

console.log('Answer one ahead: ' + total)

total = 0

console.time('test1')
checkAhead(arr.length / 2)
console.timeEnd('test1')

console.log('Answer halfway ahead: ' + total)

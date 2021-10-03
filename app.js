// Import input
const jsonData = require('./input.json')
const halfway = jsonData.input.length / 2
// const testArr1 = ['1122', '1111', '1234', '91212129']
// const testArr2 = ['1212', '1221', '123425', '123123', '12131415']

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

function printToConsoleAndReset() {
  console.log(`Answer: ${total}`)
  total = 0
}

// Split input into an array
const inputData = jsonData.input.split('')

//Part1
console.time('Part 1')
checkAhead(inputData, 1)
console.timeEnd('Part 1')

printToConsoleAndReset()

// Part2
console.time('Part 2')
checkAhead(inputData, halfway)
console.timeEnd('Part 2')

printToConsoleAndReset()


// // Test function
// function testAhead(testArr, distanceAhead) {
//   testArr.forEach((e) => {
//     if (distanceAhead === 'one') {
//       checkAhead(e.split(''), 1)
//     } else {
//       checkAhead(e.split(''), e.toString().length / 2)
//     }
//     printToConsoleAndReset()
//   })
// }

// console.log('Tests part 1: ')
// testAhead(testArr1, 'one')
// console.log('Tests part 2: ')
// testAhead(testArr2, 'halfway')

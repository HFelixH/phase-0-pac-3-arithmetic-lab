//const a = Math.floor(Math.random() * 1000)
//const b = Math.floor(Math.random() * 1000)

const a = 10
const b = 4

function add (a,b) {
    return a + b
}

console.log(add(a,b))

//===================

function subtract (a,b) {
    return a - b
}

console.log(subtract(a,b))

//===================

function multiply (a,b) {
    return a * b
}

console.log(multiply(a,b))

//===================


function divide (a,b) {
    return a / b
}

console.log(divide(a,b))

//===================


function increment (n) {
    return n += 1
}

console.log(increment(a))

//===================

function decrement (n) {
    return n -= 1
}

console.log(decrement(a))

//===================

console.log(makeInt(a))

function makeInt(string) {
    return parseInt(string,10)
    }


console.log(makeInt('0x2328x'))

function isNan(string) {
    if (isNaN(string)) {
        return true
    }
}

console.log(isNan(makeInt('ldkjflksjf')))

//==================

function preserveDecimal(n) {
    return parseFloat(n)
  }
  console.log(preserveDecimal('2.222'))

  console.log(isNan(preserveDecimal('ldkjflksjf')))
// Number

let balance = 120;
let anotherbalance = new Number(120);

// console.log(balance);

// console.log(anotherbalance)
// console.log(anotherbalance.valueOf())

console.log(typeof balance);
console.log(typeof(anotherbalance))


// String

let isActive = true
let isReallyactive = new Boolean(true) // not recommended

console.log(typeof (isActive))

console.log(typeof(isReallyactive))

// Null and Undefined

let firstName;
console.log(firstName);

let lastname = null
console.log(lastname)

let middlename = undefined
console.log(middlename)

// String

let myString = "Hello"

let myStringone = 'hola'

let username = "Gudakesh"

let oldGreet = myString + " Nika?"
console.log(oldGreet)

let greetMessage = `Hello ${username} !`

let demoOne = `Value is ${69*69}`
console.log(demoOne)
console.log(greetMessage)

// Symbol

let sm1 = Symbol("Gudakesh")
let sm2 = Symbol("Gudakesh")
let sm3 = Symbol()

console.log(sm1);
console.log(sm3)

console.log(sm1 == sm2)

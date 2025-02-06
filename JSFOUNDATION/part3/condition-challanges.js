// checking if a number is greater than another number:-

let num1 = 5
let num2 = 8

console.log("I am a regular upper code")


if(num1 > num2) {
    console.log("Num1 is greater than Num2")

} else {
    console.log("Num2 is greater than Num1")
}


console.log("I am a regular botttom code")

//  Checking if a string is equal to another String:

let username = "chai"
let anotherUsername = "chai"

if(username == anotherUsername){
    console.log("The Strings are equal.")
} else {
    console.log("The Strings are'nt equal.")
}

// Checking if a variable is a number or not;

let score = 44

if(typeof(score) === 'number'){
    console.log("Yes, the score is a number")
} else{
    console.log("Nope,please enter the write format")
}

// Checking if a boolean value is true or false.

let isTeaready =  true

if(isTeaready){
    console.log("The tea is ready")
} else {
    console.log("The tea isnt ready")
}

// Checking if an array is empty or not.

let items = ["item1"]

console.log(items.length)

if(items.length === 0) {
    console.log("Array is empty")
} else{
    console.log("Array isn't empty you fool!!!!")
}
// Checking if a number is greater than another number.

let num1 = 5;
let num2 = 10;

if (num1 > num2) {
    console.log("The first number is greater than the second number.")
    
} else {
    console.log("The second number is greater than the first number.")
}

// Checking if a string is equal to another String:

let username = "John";
let anotherUsername = "Jo";

if (username == anotherUsername) {
    console.log("Pick another username, this one is already taken.")
}else {
    console.log("Username is available.")
}

// Checking if a variable is a number or not:

let score = "40";

if (typeof score == "number") {
    console.log("The variable is a number.")
} else {
    console.log("The variable is not a number")
}

//  Check if a boolean value is true or false:

let isTeaReady = true;

if (isTeaReady) {
    console.log("The tea is ready.");
    
} else {
    console.log("The tea is not ready.");
}

// Checking if an array is empty or not:

let items = ["Jkjk"];

if (items.length == 0) {
    console.log("The array is empty.");
} else {
    console.log('The array is not empty')
}
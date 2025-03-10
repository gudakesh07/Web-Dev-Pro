let username = {
    firstName: "Gudakesh",
    "last Name": "Gupta",
    email: "gg@gmail.com",
    isloggedin: true
};

// const Firstname = "GG";
// Firstname = "Gudakesh";

// console.log(Firstname);

console.log(username["last Name"]);

username.firstName = "gg";

username.isloggedin = false

console.log(username);

console.log(username.firstName);

console.log(typeof obj); 


let today = new Date();
console.log(today.getDate());

// Array

let heroes = ["Batman", "Superman", "Flash", "Action Kamen",["Luffy", "Zoro", "Sanji"]];

console.log(heroes)
console.log(heroes[0])
console.log(heroes[1])
console.log(heroes[4])  

console.log(1 + "1")
console.log("1" + 1)

let isValue = true;
console.log(isValue + 1)
console.log(Number(isValue) + 1);

let myValue = "2";
console.log(typeof Number(myValue))

let nika = "2abc";
console.log(Number(nika)) // NaN
console.log(Number("abc")) // NaN
console.log(typeof Number(nika)) // number
console.log(Number(null)) // number

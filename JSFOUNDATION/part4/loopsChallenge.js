/*
1. Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named "Sum".
*/

let sum = 0;
let i = 1;

while (i <= 5) {
    sum += i;
    i++;
}
console.log(sum)

/*
2. Write a 'while' loop that calculates the sum of all numbers from 5 to 1 and store the numbers in an array named "countdown". 
*/

let countdown = []

let j = 5;

while (j<=5 && j >= 1) {
    countdown.push(j)
    j--;
}
console.log(countdown)

/* 
3. Write a 'do while' loop that prompts a user to enter their favourite tea type until they enter '"stop"'.
    Store each type in an array named 'teaCollection'.
*/

let teaCollection = []

let tea

do {
    tea = prompt(`Enter your favourite tea(type "stop" to finish)`)

    if (tea != "stop") {
        teaCollection.push(tea)
    }
        
} while (tea !== "stop");


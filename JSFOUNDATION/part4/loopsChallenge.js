/*
1. Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named "Sum".
*/

let sum = 0;
let i = 1;

while (i <= 5) {
    sum += i;
    i++;
}
console.log(sum);

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

// let teaCollection = []

// let tea

// do {
//     tea = prompt(`Enter your favourite tea(type "stop" to finish)`)

//     if (tea != "stop") {
//         teaCollection.push(tea)
//     }
        
// } while (tea !== "stop");


/*
4. Write a 'do-while' loop that adds numbers from 1 to 3 and stores the result in a variable named "total".
*/

let total = 0;

let k = 1;
do {
    total += k;
    console.log(total)
    k++;
} while (k <= 5);


/* 
5. Write a 'for' loop that multiplies each element in the array   '[2,4,6]' by 2 and stores the result in a new array named 'multipliedNumbers'.
*/

let multipliedNumbers = []

let numbers = [2, 4, 6]

for (let i = 0; i < numbers.length; i++) {
    // takeNumbers = numbers[i] * 2;
    // multipliedNumbers.push(takeNumbers)

    multipliedNumbers.push(numbers[2] * 2)
}

console.log(multipliedNumbers);



// for (initPhase; condition; incre/decre){
    
// }

// for (let j = 8; j>0; --j) {
//   const element = j;
//   console.log(j);
// }
// let m = 1112;
// for (let i = 0; i < 100; i++) {
//     console.log(m);
//     m = m + 2;
// }

/*
6. Write a 'for' loop that lists all the cities in the array '["Paris", "New York", "Tokyo","London"]' and stores each city in a new array named 'cityList'.
*/

let cityList = []
let cities = ["Paris", "New York", "Tokyo","London"]
for (let index = 0; index < cities.length; index++) {
    const myCity = cities[index];
    cityList.push(myCity)
    
    
}
console.log(cityList);



// let cityList = [];
// let cities = ["Paris", "New York", "Tokyo", "London"];
// for (let index = 0; index < cities.length; index++) {
//   const myCity = cities[index];
//     cityList.push(myCity);
//     console.log(cityList);
//     cityList.shift();
// }
// console.log(cityList);


/* 
1.Write a 'for' loop that loops through the array '["green tea", "black tea", "chai", "oolong tea"]' and stops the loop when it finds '"chai"'.
    Stores all the teas before "chai" in a new array named 'selectedTeas'.
*/

let selectedTeas = [];

let teaCollection = ["green tea", "black tea", "chai", "oolong tea"];

for (let i = 0; i < teaCollection.length; i++) {
    const order = teaCollection[i]
    if (order == "chai") {
        break
    }
    selectedTeas.push(order);
    
    console.log(selectedTeas)
}

/*
2. Write a 'for' loop that loops through the array '["london", "New York", "Paris", "Berlin"]' and skips '"Paris"'.
    Store the other cities in a new array named 'visitedCities'.
*/
let cities = ["london", "New York", "Paris", "Berlin"];

let visitedCities = [];

for (let j = 0; j < cities.length; j++) {
    if (cities[j] == "Paris" || cities[j] == "paris") {
        continue;
    }
    visitedCities.push(cities[j])
}
console.log(visitedCities)


/*
3. Use a 'for-of' loop to iterate through the array '[1,2,3,4,5]' and stop when the number '4' is found.
Store the numbers before '4' in an array named 'smallNumbers'.
*/
let numbers = [1, 2, 3, 4, 5];

let smallNumbers = []


for (const num of numbers) {
    if (num == 4) {
        break
    }
    smallNumbers.push(num)
}
console.log(smallNumbers)


/*
4. Use a 'for-of' loop to iterate through the array '["Chai", "green tea", "herbal tea", "black tea"]' and skip '"herbal tea"'.

    Store the other teas in an array named 'preferredTeas'.
*/


let menu = ["Chai", "green tea", "herbal tea", "black tea"];

let preferredTeas = [];

for (const tea of menu) {
    if (tea == "herbal tea") {
        continue;
    }
    preferredTeas.push(tea)
}
console.log(preferredTeas)

/*
5. Use a 'for-in' loop to loop through an object contaning city populations.
    Stop the loop when the population of '"Berlin"' is found and store all previous cities populations in a new object named 'cityPopulations'.

    let citiespopulation = {
    "London": 8900000,
    "New York" : 8400000,
    "Paris": 2200000,
    "Berlin" : 3500000
};
*/

let citiespopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let cityPopulations = {}
// console.log(Object.values(citiespopulation))

for (const city in citiespopulation) {
    console.log(city)
}

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
    if (cities[j] == "Paris") {
        continue;
    }
    visitedCities.push(cities[j])
}
console.log(visitedCities)


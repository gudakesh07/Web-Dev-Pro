/* 
1. Declare an array named "teaFlavors"  that contains the string '"green tea"', '"black tea"', and '"oolong tea"'.

    Access the first element of the array and store it in a variable named 'firstTea'.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];

let teaFl = new Array("green tea", "black tea", "oolong tea");

let firstTea = teaFlavors[0];
console.log(firstTea);

/*
2. Declare an array 'cities' containing '"London"' , '"Tokyo"' , '"Paris"', and '"New York"'.
   Access the third element in the array and store it in a variable named 'favoritecity'
*/

let cities = ["London", "Tokyo", "Paris", "New York"];

let favoritecity = cities[2];

console.log(favoritecity);

/*
3. You have an array named 'teaTypes' containing '"herbal tea"', '"white tea"', and '"masala chai"'.
    Change the second element of the array to '"jasmine tea"'
*/

let teaTypes = ["herba; tea", "white tea", "masala tea"];

teaTypes[2] = "jasmine tea";

console.log(teaTypes);

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"];

citiesVisited.push("Berlin");

// citiesVisited[citiesVisited.length] = "Berlin"

console.log(citiesVisited);

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["chai", "iced Tea", "matcha", "earl grey"];

let lastOrder = teaOrders.pop();

console.log(teaOrders);

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];




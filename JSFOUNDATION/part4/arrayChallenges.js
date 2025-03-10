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

let softCopyTeas = popularTeas

console.log(softCopyTeas);

// in js when we say that go make a soft copy of the array you can just go and do it... as it'd not like variables where the value will change 
// but in arrays the reference is direct to the the arrays for example
// tea ----->Arrays
/*
Here when we create another variable named anotherTea and give it a value tea. Anothertea will refer to the array not

*/

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"]

let hardCopyCities = [...topCities]

let hardCopyCitiess = topCities.slice();

console.log(hardCopyCities);
console.log(hardCopyCitiess);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];

let asianCities = ["Tokyo", "Bangkok"];

let worldCities = europeanCities.concat(asianCities);

// let worldCities = [europeanCities, asianCities]

// let Worldcities = europeanCities + asianCities;

console.log(worldCities);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["Masala Chai", "Oolong Tea", "Green Tea", "earl grey"];

menuLength = teaMenu.length;

console.log(menuLength);


/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("london");

console.log(isLondonInList);


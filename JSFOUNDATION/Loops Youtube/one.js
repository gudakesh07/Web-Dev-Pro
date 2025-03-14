// for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(i)
// }

// for (let j = 9; j >0; --j){
//     const element = j;
//     if (j == 7) {
//         console.log("thala for a reason")
//     }
//   console.log(j);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop ${j} and inner loop ${i}`)
//     }
// }

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`)
    }
    console.log(`Table of ${i} ends here`)
    console.log('-------------------')
}

let myArray = ["Flash", "Arrow", "Superman", "Batman", "Wonder"];
console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}

// break and continue

// for (let i = 1; i < 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`)
//         break
//     }
//      console.log(`Value of i is ${i}`)
// }


for (let i = 1; i < 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`)
        continue
    }
     console.log(`Value of i is ${i}`)
}
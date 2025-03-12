// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(i);
//     if (element == 5) {
//         console.log("5 is the best number")
//     } else {
//         console.log("Jkjk")
//     }
    
    
// }

// // console.log(i)

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`)
        console.log(i + '*' + j + '=' + i * j )
    }

}
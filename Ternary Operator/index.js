// ternary operator = a shortcut to if{} and else{} statements helps to assign
//a variable based on a condition
// condition ? CodeIfTrue : CodeIfFalse

//let age = 21;
//let message = age >= 18 ? "you're an adult" : "you're a minor";
//console.log(message);

//let time = 16;
//let greeting = time < 12 ? "Good MOrning" : "Good Afternoon";
//console.log(greeting)

//let isStudent = true;
//let message = isStudent ? "You are a student" : "You are not a student";
//console.log(message)

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $ ${purchaseAmount - purchaseAmount * (discount/100)}`);
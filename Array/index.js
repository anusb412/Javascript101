// Array - a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange"];
//fruits[1] = "coconut";



//cycles through the array. PRINTS APPLE, ORANGE
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

for(let fruit of fruits) {
    console.log(fruit)
}


.sort() // sorts in alphabet order
.reverse() // reverse alphabet order after sort
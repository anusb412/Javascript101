// String Slicing = creating a substring from a portion of another string

// string.slice(start, end)

//const fullName = "Broseph Code";

//let firstName = fullName.slice(0,3) // displays BRO
//let lastName = fullName.slice(4, 8) // displays CODE

//let firstChar = fullName.slice(0,1)
//let lastChar = fullName.slice(7, 8) // (-1 = e), (-2 = de), (-3 = ode), (-4 = code)

//let firstName = fullName.slice(0, fullName.indexOf(" "))
// gives full name until space is found
//let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// +1 at the end gets rid of space, returns CODE not " "CODE

//console.log(firstName)
//console.log(lastName)
//console.log(firstChar)
//console.log(lastChar)

const email = "Bro1@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);

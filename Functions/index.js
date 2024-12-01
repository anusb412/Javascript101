// functions = a section of reuseable code.
//  declare code once, use it whenever you want.
//  call the function to execute that code
// function(){}

/*function happyBirthday(username, age){
    console.log("Happy b-day to you!")
    console.log("Happy b-day to you!")
    console.log(`Happy b-day dear ${username}!`)
    console.log("Happy b-day to you!")
    console.log(`You are ${age} years old.`)
}

happyBirthday("BroCode", 25); */

function add(x, y) {
    return x + y;
}

function subtract(x, y){
    return x - y;
}
function multiple(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}

function isEven(number){

    //return number % 2 === 0 ? true : false;
    if(number % 2 === 0) {
        return true;
    }
    else  {
        return false;
    }
}
function isValidEmail(email){
    //return email.includes("@") ? true : false;
    if(email.includes("@")){
        return true;
    }
    else {
        return false;
    }
}

console.log(add(2, 3));
console.log(subtract(10, 5));
console.log(multiple(2, 3));
console.log(divide(10 ,5));
console.log(isEven(11));
console.log(isValidEmail("brocode@gmail.com"));
console.log(isValidEmail("fakeelo.com"))

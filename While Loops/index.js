// while loop = repeat some code WHILE some condition is true

//let username = "";
//while (username === "" || username === null){
//    username = window.prompt("Enter your name");
//}
// 
//    console.log(`Hello ${username}`)

// DO WHILE LOOP

//let username;
//do {
//    username = window.prompt(`Enter your Name`)
//} while(username === "" || username === null)

//    console.log(`Hello ${username}`)

let loggedIn = true;
let username;
let password;

do{
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        window.alert("WRONG")
    }
}while(!loggedIn)
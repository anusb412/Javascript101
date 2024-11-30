// Method Chaining = calling one method after another in one continuous line of code.

// NO METHOD CHAINING

let username = window.prompt("Enter your Username: ");

// After entering username:
// - Trim any Whitespace around the username
// - Make first Character uppercase
// - make the rest of the character lowercase
// - Display Output




// METHOD CHAINING //

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);
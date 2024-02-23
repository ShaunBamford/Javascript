// Type conversion

// String to Integer

let age = window.prompt("How old are you?");
age = Number(age)
age+=1;
console.log(age, typeof age);

// Will display "TRUE" in the console as the string is empty
let z = "pizza";
z = Boolean(z);
console.log(z, typeof z);

// Will display "FALSE" in the console as the string is empty
a = "";
a = Boolean(a);
console.log(a, typeof a);

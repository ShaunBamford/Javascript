// Declaring username variable
let username;
// Accepting user input via alert box
username = window.prompt("What is your username?");
console.log(username)

// Accepting user input via HTML textbox
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello, ${username}!`;
    console.log(username);
}

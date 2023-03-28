// declares and stores the amount of possible characters for the password in a variable called characters
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// declares a variable called password Length and assigns value to 15
let passwordLength = 15;

// creates a variable for each password that relates back to the html element where the password should display.
let password1El = document.getElementById("pw1")
let password2El = document.getElementById("pw2")

// function to create a string as long as passwordLength that consists of any of the characters in characters array
function generatePassword() {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
}
return password;
}

// inputs the password created in generatePassword() inside both text boxes
function getGeneratePassword() {
    password1El.textContent = generatePassword();
    password2El.textContent = generatePassword();
}
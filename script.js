// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let password ='';
  
  var passwordLength = prompt("Please enter a password length between 8 and 128 characters:");
    if (passwordLength < 8) { generatePassword()
      } else if (passwordLength > 128) { generatePassword()
        } else {console.log("Successful password length set.")
      };

  var UpperCase = confirm("Allow uppercase letters?");
  console.log(`Uppercase Selection = ${UpperCase}.`)

  var LowerCase = confirm("Allow lowercase letters?");
  console.log(`Lowercase Selection = ${LowerCase}.`)

  var Numeric = confirm("Allow numeric characters?");
  console.log(`Numeric Selection = ${Numeric}.`)

  var Special = confirm("Allow special characters?");
  console.log(`Special Character Selection = ${Special}.`)

  if (UpperCase == true && LowerCase == true && Numeric == true && Special == true){
    console.log("1st Condition Met.")
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={}[]|:;"<,>.?/';
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }
  
  else if (UpperCase == false && LowerCase == true && Numeric == true && Special == true){
    console.log("2nd Condition Met.")
    let chars = 'abcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={}[]|:;"<,>.?/';
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  else if (UpperCase == true && LowerCase == false && Numeric == true && Special == true){
    console.log("1st Condition Met.")
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_-+={}[]|:;"<,>.?/';
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  else (console.log("No Condition Met."));
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

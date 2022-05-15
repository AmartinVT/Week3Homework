// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Please enter a password length between 8 and 128 characters:");
    if (passwordLength < 8) { generatePassword()
      } else if (passwordLength > 128) { generatePassword()
        } else {console.log("Successful password length set.")};

  var UpperCase = confirm("Allow uppercase letters?");
  console.log(`Uppercase Selection = ${UpperCase}.`)

  var LowerCase = confirm("Allow lowercase letters?");
  console.log(`Lowercase Selection = ${LowerCase}.`)

  var Numeric = confirm("Allow numeric characters?");
  console.log(`Numeric Selection = ${Numeric}.`)

  var Special = confirm("Allow special characters?");
  console.log(`Special Character Selection = ${Special}.`)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

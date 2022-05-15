// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let password ='';
  
  // All character condition
  let charAllCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={}[]|:;"<,>.?/'; //1st Condition
  
  // Missing 1 type conditions
  let charNoUpper = 'abcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={}[]|:;"<,>.?/';//2nd Condition
  let charNoLower = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_-+={}[]|:;"<,>.?/';//3rd Condition
  let charNoNumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~`!@#$%^&*()_-+={}[]|:;"<,>.?/';//4th Condition
  let charNoSpecial = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';//5th Condition
  
  // Missing 2 types conditions
  let charNoNumericNoUpper = 'abcdefghijklmnopqrstuvwxyz~`!@#$%^&*()_-+={}[]|:;"<,>.?/';//6th Condition
  let charNoNumericNoLower = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()_-+={}[]|:;"<,>.?/';//7th Condition
  let charNoNumericNoSpecial = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';//8th Condition
  let charNoSpecialNoUpper = 'abcdefghijklmnopqrstuvwxyz0123456789';//9th Condition
  let charNoSpecialNoLower = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';//10th Condition
  let charNoUpperNoLower = '0123456789~`!@#$%^&*()_-+={}[]|:;"<,>.?/';//11th Condition

  // Missing 3 types conditions
  let charOnlyLower = 'abcdefghijklmnopqrstuvwxyz';//12th Condition
  let charOnlyUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';//13th Condition
  let charOnlyNumeric = '0123456789';//14th Condition
  let charOnlySpecial = '~`!@#$%^&*()_-+={}[]|:;"<,>.?/';//15th Condition
  
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

  //1st Condition
  if (UpperCase == true && LowerCase == true && Numeric == true && Special == true){
    console.log("1st Condition Met.")
    let chars = charAllCharacters;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }
  
  //2nd Condition
  else if (UpperCase == false && LowerCase == true && Numeric == true && Special == true){
    console.log("2nd Condition Met.")
    let chars = charNoUpper;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //3rd Condition
  else if (UpperCase == false && LowerCase == true && Numeric == true && Special == true){
    console.log("3rd Condition Met.")
    let chars = charNoLower;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //4th Condition
  else if (UpperCase == false && LowerCase == true && Numeric == true && Special == true){
    console.log("4th Condition Met.")
    let chars = charNoNumeric;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //5th Condition
  else if (UpperCase == false && LowerCase == true && Numeric == true && Special == true){
    console.log("5th Condition Met.")
    let chars = charNoSpecial;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //6th Condition
  else if (UpperCase == false && LowerCase == true && Numeric == true && Special == true){
    console.log("6th Condition Met.")
    let chars = charNoNumericNoUpper;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //7th Condition
  else if (UpperCase == false && LowerCase == true && Numeric == true && Special == true){
    console.log("7th Condition Met.")
    let chars = charNoNumericNoLower;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //8th Condition
  else if (UpperCase == false && LowerCase == true && Numeric == true && Special == true){
    console.log("8th Condition Met.")
    let chars = charNoNumericNoSpecial;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //9th Condition
  else if (UpperCase == false && LowerCase == true && Numeric == true && Special == true){
    console.log("9th Condition Met.")
    let chars = charNoSpecialNoUpper;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //10th Condition
  else if (UpperCase == false && LowerCase == true && Numeric == true && Special == true){
    console.log("10th Condition Met.")
    let chars = charNoSpecialNoLower;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //11th Condition
  else if (UpperCase == false && LowerCase == true && Numeric == true && Special == true){
    console.log("11th Condition Met.")
    let chars = charNoUpperNoLower;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //12th Condition
  else if (UpperCase == false && LowerCase == true && Numeric == true && Special == true){
    console.log("12th Condition Met.")
    let chars = charOnlyLower;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //13th Condition
  else if (UpperCase == false && LowerCase == true && Numeric == true && Special == true){
    console.log("13th Condition Met.")
    let chars = charOnlyUpper;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //14th Condition
  else if (UpperCase == false && LowerCase == true && Numeric == true && Special == true){
    console.log("14th Condition Met.")
    let chars = charOnlyNumeric;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //15th Condition
  else if (UpperCase == false && LowerCase == true && Numeric == true && Special == true){
    console.log("15th Condition Met.")
    let chars = charOnlySpecial;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //16th Condition
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

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let password =''; //Initialize password variable as an empty string
  
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
  
  var passwordLength = prompt("Please enter a password length between 8 and 128 characters:"); //User prompt for password length
    if (passwordLength < 8) { 
        alert('Password length too short. Please ensure length is between 8 and 128 characters.') //Condition to re-run password prompt if the length entered is less than 8
        console.log("Password length input too short.")
        return;
      } else if (passwordLength > 128) { 
        alert('Password length too long. Please ensure length is between 8 and 128 characters.') //Condition to re-run password prompt if the length entered is greater than 128
        console.log("Password length input too long.")
        return;  
      } else {console.log("Successful password length set.") //Console verification of valid password length (8 to 128)
      };

  //Prompt asking user if uppercase characters are valid
  var UpperCase = confirm("Allow uppercase letters?");
  console.log(`Uppercase Selection = ${UpperCase}.`)

  //Prompt asking user if lowercase characters are valid
  var LowerCase = confirm("Allow lowercase letters?");
  console.log(`Lowercase Selection = ${LowerCase}.`)

  //Prompt asking user if numeric characters are valid
  var Numeric = confirm("Allow numeric characters?");
  console.log(`Numeric Selection = ${Numeric}.`)

  //Prompt asking user if special characters are valid
  var Special = confirm("Allow special characters?");
  console.log(`Special Character Selection = ${Special}.`)

  //1st Condition
  if (UpperCase == true && LowerCase == true && Numeric == true && Special == true){
    console.log("1st Condition Met - All Characters.")
    let chars = charAllCharacters;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }
  
  //2nd Condition
  else if (UpperCase == false && LowerCase == true && Numeric == true && Special == true){
    console.log("2nd Condition Met - No Uppercase.")
    let chars = charNoUpper;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //3rd Condition
  else if (UpperCase == true && LowerCase == false && Numeric == true && Special == true){
    console.log("3rd Condition Met - No Lowercase.")
    let chars = charNoLower;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //4th Condition
  else if (UpperCase == true && LowerCase == true && Numeric == false && Special == true){
    console.log("4th Condition Met - No Numeric.")
    let chars = charNoNumeric;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //5th Condition
  else if (UpperCase == true && LowerCase == true && Numeric == true && Special == false){
    console.log("5th Condition Met - No Special.")
    let chars = charNoSpecial;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //6th Condition
  else if (UpperCase == false && LowerCase == true && Numeric == false && Special == true){
    console.log("6th Condition Met - No Uppercase No Numeric.")
    let chars = charNoNumericNoUpper;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //7th Condition
  else if (UpperCase == true && LowerCase == false && Numeric == false && Special == true){
    console.log("7th Condition Met - No Lowercase No Numeric.")
    let chars = charNoNumericNoLower;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //8th Condition
  else if (UpperCase == true && LowerCase == true && Numeric == false && Special == false){
    console.log("8th Condition Met - No Numeric No Special.")
    let chars = charNoNumericNoSpecial;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //9th Condition
  else if (UpperCase == false && LowerCase == true && Numeric == true && Special == false){
    console.log("9th Condition Met - No Uppercase No Special.")
    let chars = charNoSpecialNoUpper;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //10th Condition
  else if (UpperCase == true && LowerCase == false && Numeric == true && Special == false){
    console.log("10th Condition Met - No Lowercase No Special.")
    let chars = charNoSpecialNoLower;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //11th Condition
  else if (UpperCase == false && LowerCase == false && Numeric == true && Special == true){
    console.log("11th Condition Met - No Upeercase No Lowercase.")
    let chars = charNoUpperNoLower;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //12th Condition
  else if (UpperCase == false && LowerCase == true && Numeric == false && Special == false){
    console.log("12th Condition Met - Only Lowercase.")
    let chars = charOnlyLower;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //13th Condition
  else if (UpperCase == true && LowerCase == false && Numeric == false && Special == false){
    console.log("13th Condition Met - Only Uppercase.")
    let chars = charOnlyUpper;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //14th Condition
  else if (UpperCase == false && LowerCase == false && Numeric == true && Special == false){
    console.log("14th Condition Met - Only Numeric.")
    let chars = charOnlyNumeric;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //15th Condition
  else if (UpperCase == false && LowerCase == false && Numeric == false && Special == true){
    console.log("15th Condition Met - Only Special.")
    let chars = charOnlySpecial;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  //16th Condition
  else {
    password = "ERROR: No character types selected. Please regenerate your password and select at least (1) character type.";
    console.log("16th Condition Met - No Character Types Selected.")
    return password;
    };
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

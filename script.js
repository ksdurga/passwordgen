var generateButton = document.querySelector("#generate");
var numbers = document.getElementById("numbers");
var lowerCase = document.getElementById("lowerCase");
var upperCase = document.getElementById("upperCase");
var specialChar = document.getElementById("specialChars");
var passwordDisplay = document.getElementById("passwordDisplay");
var inputLength=0;

var result = [];
// var result = "";
// lengthInput(passLength);

var charsets = {
   lowerCase: {
      checked: false,
      charset: "abcdefghijklmnopqrstuvwxyz"
   },
   upperCase: {
      checked: false,
      charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   },
   numbers: {
      checked: false,
      charset: "0123456789"
   },
   specialChar: {
      checked: false,
      charset: "!#$%&()*+-.;:<>=?[]^_{}|"
   }
};

//grabs user input, verifies length requirement
generateButton.addEventListener("click", function(e){
   e.preventDefault();
   //grabs form value for password length
   passwordDisplay.placeholder=generatePassword();
});


// password length set
function lengthInput(num) {
   if (num >= 8 && num <= 128) {
      // getChars();
      return num
   }
   else {
   alert("Please enter a number between 8 and 128")
   return null
   }
}



function getChars() {
   if (numbers.checked == true) {
      result = result += charsets.numbers.charset;
   }
   if (upperCase.checked == true) {
      result = result += charsets.upperCase.charset;
      // console.log(result);
   }
   if (lowerCase.checked == true) {
      result = result += charsets.lowerCase.charset;
      // console.log(result);
   }
   if (specialChar.checked == true) {
      result = result += charsets.specialChar.charset;
      // console.log(result);
   }
   console.log(result);
   return result;
};

//chooses random integer inside length of charset array
function randomInt(charsetLength) {
	var x = Math.floor(Math.random() * charsetLength) + 1;
	if (x < 0 || x >= charsetLength) {
      alert ("Random integer not in index");
      return null;
   }   
	return x;
};


// chooses random char from chaset array for each spot in password
function generatePassword() {
   var password = "";
   var passLength = document.getElementById("length").value;
   var charArray = getChars();

   //if user doesn't choose any charset options
   if (charArray.length) {
      for (var i = 0; i < parseInt(passLength); i++){
         password += charArray[randomInt(charArray.length)];
      }
      console.log(password);
      return password;
   }
   else {
      alert("Select a character set");
      return null;
   }
}


function doCopy() {
   navigator.clipboard.writeText(generatedPassword);
}




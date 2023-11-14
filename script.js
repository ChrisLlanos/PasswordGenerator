function generatePassword(){
  //create const string of available char to pick from later
  const upperchar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerchar = 'abcdefghijklmnopqrstuvwxyz';
  const numericchar = '0123456789';
  const specialcharacters = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
  //prompt for user input length of password
  var passLength = Number(prompt("Enter the length of your password as a number (Between 8-128)"));
  //Check for successful number conversion
  if(passLength){
    //Check for valid range
    if((passLength>=8)&&(passLength<=128)){
      //prompts for what char to include. any input not 'y' will not be picked up below.
      var lower = prompt("Would you like lowercase characters in your password? (y/n)");
      var upper = prompt("Would you like uppercase characters in your password? (y/n)");
      var numeric = prompt("Would you like numeric characters in your password? (y/n)");
      var specialChar = prompt("Would you like special characters in your password? (y/n)");
      var availableChar = '';
      //these vars will be guaranteed char of each type upon 'y' selection
      var first = '';
      var second = '';
      var third = '';
      var fourth = '';
      //checks for inclusion and adds to avialable choices, then picks one guaranteed, then subtracts guranteed one from total length
      if(lower==='y'){
        availableChar= availableChar+lowerchar;
        first = lowerchar.charAt(Math.floor(Math.random()*lowerchar.length));
        passLength--;
      };
      if(upper==='y'){
        availableChar= availableChar+upperchar;
        second = upperchar.charAt(Math.floor(Math.random()*upperchar.length));
        passLength--;
      };
      if(numeric==='y'){
        availableChar= availableChar+numericchar;
        third = numericchar.charAt(Math.floor(Math.random()*numericchar.length));
        passLength--;
      };
      if(specialChar==='y'){
        availableChar= availableChar+specialcharacters;
        fourth = specialcharacters.charAt(Math.floor(Math.random()*specialcharacters.length));
        passLength--;
      };
      //create new var that will aggregate guaranteed choices + random selection from bigger string (availablechar).
      var result = '';
      //for loop that traverses available char from selection and uses Math.random to pick randomly and adds it to result
      for ( let i = 0; i < passLength; i++ ) {
        result += availableChar.charAt(Math.floor(Math.random() * availableChar.length));
      }
      //combines random choices with guaranteed choices
      result = result+first+second+third+fourth;
      //jumbles string for better password generation
      result = result.split('').sort(function(){return 0.5-Math.random()}).join('');

      return result;   
      }
      //return alert and undefined if not successful input
      else{alert('please choose a length between 8-128');return '';}
      }
      else
      {
        //return alert and undefined if not successful input
        alert('please enter a number');
        return '';
      }
    
  };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

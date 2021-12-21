let myStr = "I am a \"double quoted\" string inside \"double quotes\".";
console.log(myStr)

let myStr1 = "FirstLine\n\tSecondLine\fThirdLine"
console.log(myStr1) 

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length;
console.log(lastNameLength);

var threeArr = [1, 4, 6];
var oneDown = threeArr.push(5);
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
console.log(ourArray)
console.log(removedFromOurArray)    
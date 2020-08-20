

// Behavior: When a user enters 6-9 the function returns the correct roman numeral.
// Input: "6 7 8 9"
// Output: "VI, VII, VIII, IX"

// Behavior: When a user enters 11 through 99 the function returns the correct roman numeral.
// Input: "11 99"
// Output: "XI XCIX"

// Behavior: When a user enters 101 - 499 the function returns the correct roman numeral.
// Input: "101 499"
// Output: "CI  CDXCIX"

// Behavior: When a user enters 501 - 999 the function returns the correct roman numeral.
// Input: "501 999"
// Output: "DI CMXCIX"


// Business Logic

const romanArray = ["I", "V", "X", "L", "C", "D", "M", "O"]

function numToRomanNum (num) {
  let result;
  let romanArrayIndex;
  let reLessThan5 = /[1-4]/;
  let reLessThan10 = /[5-9]/;

  if (reLessThan5.test(num)){
    romanArrayIndex = 0;
    if (num === "1" || num === "2" || num === "3"){
      result = romanArray[romanArrayIndex].repeat(parseInt(num));
    } else {
    result = romanArray[romanArrayIndex].concat(romanArray[romanArrayIndex+1]);
    };
  
  } else if (reLessThan10.test(num)){
    romanArrayIndex = 1;
    if (num === "5") {
      result =  romanArray[romanArrayIndex];
    } else if (num === "6" || num === "7" || num === "8"){
      // result ="V".concat("I".repeat(parseInt(num)-5));
      result = romanArray[romanArrayIndex].concat(romanArray[romanArrayIndex-1].repeat(parseInt(num)-5));
    } else {
    // result = "IX"
    result = romanArray[romanArrayIndex-1].concat(romanArray[romanArrayIndex+1]);
  };

    
  } else if (num === 10){
    result =  "X";
  } else if (num === 50){
    result =  "L"; 
  } else if (num === 100){
    result =  "C";
  } else if (num === 500){
    result =  "D";
  } else if (num === 1,000){
    result =  "M";
  } else {
    result = "0";
  }
  return result;
};


// Test 1
// When a user enters a [1, 5, 10, 50, 100, 500, 1,000], the function returns that correct roman number.
// expectedReturn = "I";
// console.log(numToRomanNum(1) === expectedReturn); // Expect true

// expectedReturn = "I";
// console.log(numToRomanNum(2) === expectedReturn); // Expect false


// // Test 2
// When a user enters 2, 3, and 4, the function returns the correct roman numeral.
expectedReturn = "I";
console.log("Test with 1 : " + (numToRomanNum("1") === expectedReturn)); // Expect true

expectedReturn = "II";
console.log("Test with 2 : " + (numToRomanNum("2") === expectedReturn)); // Expect true

expectedReturn = "III";
console.log("Test with 3 : " + (numToRomanNum("3") === expectedReturn)); // Expect true

expectedReturn = "IV";
console.log("Test with 4 : " + (numToRomanNum("4") === expectedReturn)); // Expect true


// Test 3
// When a user enters 6-9 the function returns the correct roman numeral.
expectedReturn = "V";
console.log("Test with 5 : " + (numToRomanNum("5") === expectedReturn)); // Expect true

expectedReturn = "VI";
console.log("Test with 6 : " + (numToRomanNum("6") === expectedReturn)); // Expect true

expectedReturn = "VII";
console.log("Test with 7 : " + (numToRomanNum("7") === expectedReturn)); // Expect true

expectedReturn = "VIII";
console.log("Test with 8 : " + (numToRomanNum("8") === expectedReturn)); // Expect true

expectedReturn = "IX";
console.log("Test with 9 : " + (numToRomanNum("9") === expectedReturn)); // Expect true
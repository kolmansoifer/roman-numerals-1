// Behavior: When a user enters a [1, 5, 10, 50, 100, 500, 1,000], the function returns that correct roman number.
// Input: "1, 5, 10, 50, 100, 500, 1,000"
// Output: "I, V, X, L, C, D, M"

// Behavior: When a user enters 2, 3, and 4, the function returns the correct roman numeral.
// Input: "2, 3, 4"
// Output: "II, III, IV"

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

function numToRomanNum (num) {
  let result;
  if (num === 1){
    result = "I";
  } else if (num ===5){
    result =  "V";
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
    // alert ("Plese enter another number.")
    result = "0";
  }
  return result;
};


// Test 1
// When a user enters a [1, 5, 10, 50, 100, 500, 1,000], the function returns that correct roman number.
expectedReturn = "I";
console.log(numToRomanNum(1) === expectedReturn); // Expect true

expectedReturn = "I";
console.log(numToRomanNum(2) === expectedReturn); // Expect false
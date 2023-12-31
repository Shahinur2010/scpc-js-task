/* ............................................................................ */

// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const reverseIt = (str) => {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

console.log(reverseIt("hello world"));

/* ............................................................................ */

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

let arr = [2, -5, 10, -3, 7];

const total = arr.reduce((sum, current) => {
  if (current > 0) {
    return sum + current;
  }
  return sum;
}, 0);

console.log(total);

/* ............................................................................ */

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const arr1=[3, 5, 2, 5, 3, 3, 1, 4, 5];
let mf = 1;
let m = 0;
let item;
for (let i=0; i<arr1.length; i++)
{
        for (let j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log("Most frequent element in the array",  item) ;

/* ............................................................................ */

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersWithSum(nums, target) {
  let left = 1;
  let right = nums.length - 1;

  while (left < right) {
    const currentSum = nums[left] + nums[right];

    if (currentSum === target) {
      return [left, right];
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result = findTwoNumbersWithSum(inputArray, targetValue);
console.log(result); 

/* ............................................................................ */

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return num1 / num2;
    default:
      throw new Error("Invalid operator. Please use '+', '-', '*', or '/'.");
  }
}

const num1 = 10;
const num2 = 5;
const operator = '+';
const output = calculate(num1, operator, num2);
console.log("output:", output); 



/* ............................................................................ */

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()_-+=<>?/{}~|';

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

/* ............................................................................ */

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(roman) {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentNumeral = romanNumerals[roman[i]];
    const nextNumeral = romanNumerals[roman[i + 1]];

    if (nextNumeral > currentNumeral) {
      result += nextNumeral - currentNumeral;
      i++; 
    } else {
      result += currentNumeral;
    }
  }

  return result;
}

console.log(romanToInteger("IX")); 
console.log(romanToInteger("XXI")); 
console.log(romanToInteger("MCMXCIV")); 

/* ............................................................................ */

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(numbers) {
  if (numbers.length < 2) {
    throw new Error("The array must contain at least two elements.");
  }

  const sortedArray = numbers.slice().sort((a, b) => a - b);

  return sortedArray[1];
}

const numbersArray = [7, 2, 11, 5, 9, 3];
const secondSmallest = findSecondSmallest(numbersArray);
console.log("Second Smallest Element:", secondSmallest); 

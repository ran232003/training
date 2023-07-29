//1. check Prime
//1 regular way, only divide 1 and himself

const checkPrime1 = (num) => {
  if (num === 1) {
    return true;
  }
  for (let index = 2; index < num; index++) {
    if (num % index === 0) {
      return false;
    }
  }
  return true;
};
//console.log(checkPrime1(11));
//index move 2 at a time. only equal num that prime is 2
//you can go up to half of the number, there is no chance that 100 will be divide by 51,52,53.....
const checkPrime2 = (num) => {
  if (num === 2 || num === 1) {
    return true;
  }
  let divider = Math.floor(num / 2);
  for (let index = 3; index < divider; index = index + 2) {
    if (num % index === 0) {
      return false;
    }
  }
  return true;
};
//console.log(checkPrime2(100));
//2. Prime Factors Question: How could you find all prime factors of a number?
//divide the num until its 1
//if %=== 0 then take the divider and divide the original num

function primeFactors(num) {
  let divider = 2;
  let primeArray = [];

  while (num > 1) {
    if (num % divider === 0) {
      primeArray.push(divider);
      num = num / divider;
    } else {
      divider++;
    }
  }
  return primeArray;
}
//improvments: divider can be as big as half of num
//after divider is 2 you can increase by 2
function primeFactors2(num) {
  let divider = 2;
  let primeArray = [];
  let halfOriginalNum = Math.floor(num / 2);
  while (num > 1 || halfOriginalNum > divider) {
    if (num % divider === 0) {
      primeArray.push(divider);
      num = num / divider;
    } else {
      if (divider === 2) {
        divider++;
      }
      divider = divider + 2;
    }
  }
  console.log(divider);
  return primeArray;
}
//console.log(primeFactors2(100));
//Fibonacci היא הסדרה ששני איבריה הראשונים הם 1,1 וכל איבר לאחר מכן שווה לסכום שני קודמיו.
//תחזיר את המספר ה N בסדרת פיבונאצ'י
//first let create fib function

function fib(n) {
  let a1 = 1;
  let a2 = 1;
  let fibArray = [];
  fibArray.push(a1);
  fibArray.push(a2);

  for (let index = 2; index <= n; index++) {
    let next = a1 + a2;
    a1 = a2;
    a2 = next;

    fibArray.push(next);
  }
  return fibArray;
}
//console.log(fib(10));
//find n in Fibonacci

function findFib(n) {
  if (n <= 2) {
    return 1;
  }
  let fibArray = fib(n);
  return fibArray[n - 1];
}
//console.log(findFib(5));

//recursive fib

function recursiveFib(n) {
  if (n <= 1) return n;
  else return recursiveFib(n - 1) + recursiveFib(n - 2);
}

//4. Greatest Common Divisor
//Question: How would you find the greatest common divisor of two numbers?
//we will check for both numbers
function bigestCommonDivider(num1, num2) {
  let divider = 2;
  //we put 1 in case no common divider
  let greatestDivider = 1;

  if (num1 === 1 || num2 === 1) {
    return 1;
  }
  while (num1 >= divider && num2 >= divider) {
    if (num1 % divider === 0 && num2 % divider === 0) {
      greatestDivider = divider;
    }
    divider++;
  }
  return greatestDivider;
}

//console.log(bigestCommonDivider(31, 32));
//remove Duplicate array

function removeDuplicate1(arr) {
  //array is sorted  remove if arr[i] === arr[i+1]
  let returnArray = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== arr[index + 1]) {
      returnArray.push(arr[index]);
    }
  }
  return returnArray;
}
//console.log(removeDuplicate1([1, 1, 1, 2, 3, 3, 4, 4, 4]));
function removeDuplicate2(arr) {
  //no sorted array, will put everything inside set and then change to array
  let returnArray = [];
  let set = new Set();
  for (let index = 0; index < arr.length; index++) {
    set.add(arr[index]);
  }
  return [...set];
}
//console.log(removeDuplicate2([1, 4, 2, 1, 2, 6]));

//find missing number
//1. sorted array

function missingNumber(arr) {
  let num;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index + 1] - arr[index] !== 1) {
      num = arr[index] + 1;
      return num;
    }
  }
}
//console.log(missingNumber([1, 2, 3, 4, 6]));
//missing num no sorted array

const findMissingNoSorted = (arr) => {
  //we will series of the array, meaning,  (n+1) * (n+2)/2
  let n = arr.length;
  let sum = ((n + 1) * (n + 2)) / 2; //this is sum of the series if the missing number was there

  for (let index = 0; index < arr.length; index++) {
    sum = sum - arr[index];
  }
  console.log(sum);
  return sum;
};
//findMissingNoSorted([1, 7, 3, 4, 2, 6]);
//6. merge two sorted array
//[1,2,7,9], [1,3,6,8]
//keep pointer for every array, take the smaller one and advance him
//after finish one of them, put the rest in the merge array
function mergeSortedArray1(arr1, arr2) {
  let returnArray = [];
  let i = 0;
  let j = 0;
  while (arr1.length > i && arr2.length > j) {
    if (arr1[i] >= arr2[j]) {
      returnArray.push(arr2[j]);
      j++;
    } else {
      returnArray.push(arr1[i]);
      i++;
    }
  }
  if (arr1.length === i) {
    for (let index = j; index < arr2.length; index++) {
      returnArray.push(arr2[index]);
    }
    return returnArray;
  }
  for (let index = i; index < arr1.length; index++) {
    returnArray.push(arr1[index]);
  }
  return returnArray;
}
//console.log(mergeSortedArray1([1, 2, 7, 9], []));

//palindrome
var isPalindrome = function (x) {
  console.log(String(x));
  return String(x).split("").reverse().join("") == x;
};

//console.log(isPalindrome(71237));
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

var romanToInt = function (s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    XC: 90,
    IV: 4,
    IX: 9,
    XL: 40,
    CD: 400,
    CM: 900,
  };
  let sum = 0;
  for (let index = 0; index < s.length; index++) {
    let check = s[index] + s[index + 1];

    if (map[check]) {
      sum += map[s[index] + s[index + 1]];
      index++;
    } else {
      sum += map[s[index]];
    }
  }
  return sum;
};
//console.log(romanToInt("CXCI"));
//14. Longest Common Prefix
//every() checking on every index a condition returning true false
const commonPrefix = (strs) => {
  let prefix = "";
  for (let index = 0; index < strs[0].length; index++) {
    let currentChar = strs[0][index];
    let check = strs.every((charArray) => {
      return charArray[index] === currentChar;
    });
    if (check) {
      prefix = prefix + currentChar;
    } else {
      return prefix;
    }
  }
  return prefix;
};
//console.log(commonPrefix(["cir", "car"]));
//20. Valid Parentheses

var isValid = function (s) {
  let map = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  let stack = [];
  let top = 0;
  if (s.length % 2 !== 0) {
    return false;
  }
  stack.push(map[s[0]]);
  top++;
  for (let index = 1; index < s.length; index++) {
    if (stack[top - 1] === s[index]) {
      stack.pop();
      top--;
    } else {
      console.log(s[index]);
      stack[top] = map[s[index]];
      top++;
    }
  }
  console.log(stack);
  return stack.length === 0;
};
console.log(isValid("([])"));

//idea example
//[1,2,3],6
//current_sum = 6-1 =>5
//check if set has(5-2) = >3 if yes we will take them all
//
function tripletsSumAllValues(array, sum) {
  let res = [];
  for (let index = 0; index < array.length - 2; index++) {
    let set = new Set();
    let current_sum = sum - array[index];
    for (let j = 0; j < array.length; j++) {
      if (set.has(current_sum - array[j])) {
        res.push([array[index], array[j], current_sum - array[j]]);
        break;
      }

      set.add(array[j]);
    }
  }
  return res;
}
//console.log(tripletsSumAllValues([1, 2, 3, 7, 9], 14));

//put 1 at begining of array and 0 at the end, without any other arrays
//funSortingNums([3, 0, 0, 0, 1, 3, 3, 2, 2, 1, 0]);
const funSortingNums = (array) => {
  let end = array.length - 1;
  for (let index = 0; index < array.length; index++) {
    if (end <= index) {
      break;
    }
    if (array[index] === 1) {
      continue;
    }
    //starting with 1
    if (array[index] !== 1 && array[end] === 1) {
      let temp = array[end];
      array[end] = array[index];
      array[index] = temp;
      index++;
      end--;
    }
    end--;
    index--;
  }
  console.log(array);
  end = array.length - 1;

  for (let index = 0; index < array.length; index++) {
    //starting with 1
    if (end <= index) {
      break;
    }
    if (array[index] !== 0) {
      continue;
    }
    if (array[index] === 0 && array[end] !== 0) {
      let temp = array[end];
      array[end] = array[index];
      array[index] = temp;

      end--;
    }

    if (array[index] === 0 && array[end] === 0) {
      end--;
      index--;
    }
  }
  console.log(array);
};

//funSortingNums([3, 0, 0, 0, 1, 3, 3, 2, 2, 1, 0]);

//that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
function solution(A) {
  // Implement your solution here
  A = A.sort();
  console.log(A);
  let num;
  for (let index = 0; index < A.length - 1; index++) {
    if (A[index] !== A[index + 1] && A[index] + 1 !== A[index + 1]) {
      num = A[index] + 1;
    }
  }
  if (num == "undefined") {
    return A.pop() + 1;
  }

  return num < 1 ? 1 : num;
}
// console.log(solution([-1, -3]));
// console.log(solution([1, 21, 1, 1, 2, 5, 7]));
var maxProfit = function (prices) {
  let profit = 0;
  for (let index = 0; index < prices.length; index++) {
    for (let j = index + 1; j < prices.length; j++) {
      if (prices[index] - prices[j] < profit) {
        profit = prices[index] - prices[j];
      }
    }
  }
  return profit === 0 ? 0 : profit * -1;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
var maxProfit2 = function (prices) {
  let min = prices[0],
    max = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > max) {
      max = prices[i] - min;
    }

    if (prices[i] < min) min = prices[i];
  }

  return max;
};
const keyboardRowList = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
/*
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of QWERTY keyboard.
*/
function findOneRowWords(wordList) {
  // Implement this
  let returnStrings = [];
  let map = {};
  for (let i = 0; i < keyboardRowList.length; i++) {
    for (let j = 0; j < keyboardRowList[i].length; j++) {
      map[keyboardRowList[i][j]] = i + 1;
    }
  }
  //console.log(map);

  for (let i = 0; i < wordList.length; i++) {
    let temp = wordList[i].toLocaleLowerCase();
    let row = map[temp[0]];
    let count = 1;
    for (let j = 1; j < temp.length; j++) {
      if (row === map[temp[j]]) {
        count++;
      }
    }
    if (count === temp.length) {
      returnStrings.push(wordList[i]);
    }
  }
  return returnStrings;
}

// Tests

// Expected output: ['dad', 'flash']
// console.log(findOneRowWords(["Dad", "flash", "mom"]));

// // Expected output: []
// console.log(findOneRowWords(["cool", "hot"]));

// function f12() {
//   console.log("F2");
// }
// function f13() {
//   console.log("F3");
// }
// setTimeout(f12);
// f13();
//Q2: Given a string, reverse each word in the sentence
//Input : Hello World
//Output : olleH dlroW
function reverseSentence(sentence) {
  let newSentence = sentence.split("").reverse().join("");
  console.log(sentence.split("").reverse().join("")); //reverse order dlroW olleH
  newSentence = newSentence.split(" ");
  console.log(newSentence); // spliting on base of space [ 'dlroW', 'olleH' ]
  newSentence = newSentence.reverse().join(" "); // revers the order and join the index and put space between them
  console.log(newSentence);
}
//reverseSentence("Hello World");
//Q3: How to check if an object is an array or not? Provide some code.

function checkIfArray(arr) {
  console.log(typeof arr);
  console.log(arr instanceof Array);
  console.log(Array.isArray(arr));
}
//checkIfArray([]);

function emptyArray() {
  let arr = [1, 2, 3];
  arr.length = 0;
}
function checkIfInt(num) {
  console.log(Number.isInteger(num));
}
//checkIfInt("2a");
//// Q7: Make this work duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicateArray(arr) {
  console.log([...arr, ...arr]);
  console.log(arr.concat(arr));
}
//duplicateArray([1, 2, 3]);
//// Q8: Write a "mul" function which will properly when invoked as below syntax console.log(mul(2)(3)(4)); // output : 24

function multiplay(x) {
  return (y) => {
    return (z) => {
      return x * y * z;
    };
  };
}
//console.log(multiplay(2)(3)(4));

//Q9: Write a function that would allow you to do this?
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27
function createBase(base) {
  return (x) => {
    console.log(x + base);
    return x + base;
  };
}
var addSix = createBase(6);
//addSix(10); // returns 16
//Q11: Given two strings, return true if they are anagrams of one another For example: Mary is an anagram of Army

function anagramCheck(str1, str2) {
  console.log(
    str1.split("").sort().join("") === str2.split("").sort().join("")
  );
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
//anagramCheck("mary", "army");

//put 1 at begining of array and 0 at the end, without any other arrays
function sortOneZero(arr) {
  let j = arr.length - 1;
  let index = 0;
  while (index !== j) {
    if (arr[index] === 1) {
      index++;
      continue;
    } else if (arr[index] !== 1 && arr[j] === 1) {
      let temp = arr[index];
      arr[index] = arr[j];
      arr[j] = temp;
      index++;
      j--;
    } else if (arr[index] !== 1 && arr[j] !== 1) {
      j--;
    }
  }
  console.log(arr);
  j = arr.length - 1;
  index = 0;
  while (index < j) {
    if (arr[index] === 1) {
      index++;
      continue;
    } else if (arr[index] === 0 && arr[j] !== 0) {
      let temp = arr[index];
      arr[index] = arr[j];
      arr[j] = temp;
      index++;
      j--;
    } else if (arr[index] !== 0 && arr[j] !== 0) {
      index++;
    } else if (arr[index] !== 0 && arr[j] === 0) {
      index++;
      j--;
    }
  }
  console.log(arr);
}
//sortOneZero([1, 0, 2, 2, 0, 1, 1]);

//Find the missing number in a given integer array of 1 to 100 sorted array
function findNumberSortedArray(arr) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== arr[index + 1] - 1) {
      console.log(arr[index] + 1);
      return arr[index] + 1;
    }
  }
}
findNumberSortedArray([1, 2, 3, 4, 6, 7]);

//Find the missing number in a given integer array of 1 to 100 not sorted array

function findNumberNoSortedArray() {
  let arr = [];
  for (let index = 1; index < 101; index++) {
    if (index === 10) {
      continue;
    }
    arr.push(index);
  }
  //s=n*(a1+an)/2
  //console.log(arr);
  let sum = (100 * (1 + 100)) / 2;
  console.log(sum);
  for (let index = 0; index < arr.length; index++) {
    sum = sum - arr[index];
  }
  console.log(sum);
}
//findNumberNoSortedArray();

// Find a duplicate number in an array of integers
function findDuplicate(arr = [1, 5, 3, 2, 7, 9, 2]) {
  let map = {};
  for (let index = 0; index < arr.length; index++) {
    if (!map[arr[index]]) {
      map[[arr[index]]] = 1;
    } else {
      console.log(arr[index]);
      return arr[index];
    }
  }
}
//findDuplicate();
////Find the largest and smallest number in an unsorted array of integers
function findMaxMin(arr = [1, 2, -11, 222, 4]) {
  let max = arr[0];
  let min = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (max < arr[index]) {
      max = arr[index];
    }
    if (min > arr[index]) {
      min = arr[index];
    }
  }
  console.log(max, min);
}
//findMaxMin();

var isHappy = function (n) {
  let sum = 0;
  let set = new Set();
  while (sum !== 1) {
    let array = String(n).split("");
    for (let index = 0; index < array.length; index++) {
      sum = sum + Math.pow(Number(array[index]), 2);
    }
    if (set.has(sum)) {
      return false;
    }
    if (sum !== 1) {
      n = sum;
      set.add(sum);
      sum = 0;
    }
  }
  return true;
};
//console.log(isHappy(19));

var isIsomorphic = function (s, t) {
  let map = {};
  let map2 = {};
  for (let index = 0; index < s.length; index++) {
    const re = new RegExp(s[index], "g");

    // matching the pattern
    const count = s.match(re).length;
    if (!map[count]) {
      map[count] = 1;
    } else {
      map[count] = map[count] + 1;
    }
  }
  console.log(map);
  for (let index = 0; index < t.length; index++) {
    const re = new RegExp(t[index], "g");

    // matching the pattern
    const count = t.match(re).length;
    if (!map2[count]) {
      map2[count] = 1;
    } else {
      map2[count] = map2[count] + 1;
    }
  }
  console.log(map2);
  for (const key in map) {
    if (map2[key] !== map[key]) {
      return false;
    }
  }
  return true;
};
//console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
var isIsomorphic2 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let map = {};
  let j = 0;
  for (let index = 0; index < s.length; index++) {
    if (!map[s[index]]) {
      map[s[index]] = t[index];
      // map[t[j]] = s[index];
    } else if (map[s[index]] !== t[index]) {
      return false;
    }
  }
  console.log(map);

  s = new Set([...Object.values(map)]);
  console.log(s, s.size);
  return s.size === Object.keys(map).length;
};
//console.log(isIsomorphic2("paper", "title"));

var containsDuplicate = function (nums) {
  let set = new Set();
  for (let index = 0; index < nums.length; index++) {
    if (set.has(nums[index])) {
      return true;
    }
    set.add(nums[index]);
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 4, 1]));
var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

var addDigits = function (num) {
  if (num < 10) {
    return num;
  }
  let array = String(num).split("");
  const initialValue = 0;
  let sum = array.reduce(
    (accumulator, currentValue) =>
      parseInt(accumulator) + parseInt(currentValue),
    initialValue
  );
  while (sum >= 10) {
    // if (sum >= 10) {
    array = String(sum).split("");
    sum = array.reduce(
      (accumulator, currentValue) =>
        parseInt(accumulator) + parseInt(currentValue),
      initialValue
    );
    // } else {
    //   return sum;
    // }
  }
  return sum;
};
//console.log(addDigits(101));
const object = {
  message: "Hello, World!",

  getMessage() {
    const message = "Hello, Earth!";
    return this.message;
  },
};

console.log(object.getMessage()); //'Hello, World!'
//Find all duplicate numbers in an array with multiple duplicates

function findAllDuplicates(array = [1, 2, 3, 3, 4, 1, 1, 6, 7, 4]) {
  let setReturn = new Set();
  let set = new Set();
  for (let index = 0; index < array.length; index++) {
    if (set.has(array[index])) {
      setReturn.add(array[index]);
    } else {
      set.add(array[index]);
    }
  }
  console.log(Array.from(setReturn));
  return setReturn;
}
//findAllDuplicates();
function removeAllDuplicates(array = [1, 2, 1, 3, 3, 6, 6, 7, 54]) {
  let set = new Set();
  for (let index = 0; index < array.length; index++) {
    set.add(array[index]);
  }
  console.log(Array.from(set));
  return Array.from(set);
}
//removeAllDuplicates();

//7. Find all pairs in an array of integers whose sum is equal to a given number
function findAllPair(array = [1, 4, 2, 3, 6, 5, 3, 2], num = 9) {
  let map = {};
  let arr = [];
  for (let index = 0; index < array.length; index++) {
    let key = num - array[index];
    map[key] = array[index];
  }
  for (let index = 0; index < array.length; index++) {
    if (map[array[index]]) {
      arr.push([array[index], map[array[index]]]);
      let val = map[array[index]];
      delete map[array[index]];

      delete map[val];
    }
  }
  console.log(arr);
  return arr;
}
//findAllPair();

var isUgly = function (n) {
  let arr = [2, 3, 5];
  let index = 0;
  let temp = n;
  while (temp > 1 && index < 3) {
    if (temp % arr[index] === 0) {
      temp = temp / arr[index];
    } else {
      index++;
    }
  }
  console.log(temp, temp === 1 ? true : false);
  return temp === 1 ? true : false;
};
//isUgly(10);
// Javascript program to find triplets in a given
// array whose sum is zero
function findTripleSum(array = [2, 3, -5, 9, 1, 4], sum = 7) {
  let arr = [];
  for (let index = 0; index < array.length - 2; index++) {
    let set = new Set();
    let currentSum = sum - array[index];
    for (let j = index + 1; j < array.length; j++) {
      if (set.has(currentSum - array[j])) {
        arr.push([array[index], array[j], currentSum - array[j]]);
        break;
      } else {
        set.add(array[j]);
      }
    }
  }
  console.log(arr);
}
//findTripleSum();
var missingNumberFromArray = function (nums) {
  //Sum = (n / 2) * (2 * a1 + (n - 1) * d)
  let newLength = nums.length + 1;
  let sum = (newLength / 2) * (2 * 0 + (newLength - 1) * 1);
  console.log(sum);
  for (let index = 0; index < nums.length; index++) {
    sum = sum - nums[index];
  }
  console.log(sum);
  return sum;
};
//missingNumberFromArray([0, 1, 2, 3, 5]);

const deepMergeObjects = (obj1, obj2) => {
  for (const key in obj2) {
    if (!obj1[key]) {
      obj1[key] = obj2[key];
    } else {
      if (typeof obj1[key] == "number") {
        obj1[key] = obj1[key] + obj2[key];
      }
      if (Array.isArray(obj1[key])) {
        obj1[key] = obj1[key].concat(obj2[key]);
      }
    }
  }
  console.log(obj1);
};
// deepMergeObjects(
//   { name: "ran", person2: ["raas", "saas"], num: 4 },
//   { test: "asd", name: "bar", person2: ["2", "2"], num: 3 }
// );

///Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

//You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version.
//You should minimize the number of calls to the API.

var isBadVersion = function (n) {
  return n >= 2;
};
var solution2 = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let max = n;
    let min = 0;
    while (true) {
      let half = Math.floor((max + min) / 2);
      if (isBadVersion(half) === true) {
        max = half;
        if (isBadVersion(half - 1) === false) {
          return half;
        }
      } else {
        min = half;
        if (isBadVersion(half + 1) === true) {
          return half + 1;
        }
      }
    }
  };
};
//let check = solution2(isBadVersion);
//console.log(check(6));

//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const moveZeroes = (nums = [1, 0, 0, 2, 0, 5]) => {
  let size = nums.length;
  for (let index = 0; index < size; index++) {
    if (nums[index] === 0) {
      nums.push(nums[index]);
      //nums[index] = false;
      nums.splice(index, 1);
      index--;
      size--;
    }
  }
  console.log(nums);
  // for (let i = nums.length - 1; i >= 0; i--) {
  //   if (nums[i] === false) {
  //     nums.splice(i, 1);
  //   }
  // }
};
//moveZeroes();
//Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
//Input: pattern = "abba", s = "dog cat cat dog"
//Output: true

var wordPattern = function (pattern, s) {
  let str = s.split(" ");
  if (str.length !== pattern.length) {
    return false;
  }
  let map = new Map();
  for (let index = 0; index < str.length; index++) {
    if (!map.has(pattern[index])) {
      map.set(pattern[index], str[index]);
    } else if (map.get(pattern[index]) !== str[index]) {
      return false;
    }
  }
  let set = new Set(Array.from(map.values()));
  console.log(set, set.size);
  return set.size === Array.from(map.keys()).length;
};
//console.log(wordPattern("abc", "b c a"));

//On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
//The one who removes the last stone is the winner.
var canWinNim = function (n) {
  return n % 4 === 0 ? false : true;
};

//You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate
// of a point. Check if these points make a straight line in the XY plane.
//y = mx + b
//m = (y2 - y1) / (x2 - x1)
var checkStraightLine = function (coordinates) {
  let point1 = coordinates[0];
  let point2 = coordinates[1];
  if (point1[0] === point2[0]) {
    let check = point1[0];
    // need to check x not changing
    for (let index = 1; index < coordinates.length; index++) {
      if (check !== coordinates[index][0]) {
        return false;
      }
    }
    return true;
  } else if (point1[1] === point2[1]) {
    let check = point1[1];
    // need to check x not changing
    for (let index = 1; index < coordinates.length; index++) {
      if (check !== coordinates[index][1]) {
        return false;
      }
    }
    return true;
  }
  let m = (point2[1] - point1[1]) / (point2[0] - point1[0]);
  console.log(m);
  let b = point1[1] - point1[0] * m;
  console.log(b);

  for (let index = 1; index < coordinates.length; index++) {
    if (coordinates[index][1] - coordinates[index][0] * m !== b) {
      return false;
    }
  }
  return true;
};
// console.log(
//   checkStraightLine([
//     [2, 1],
//     [4, 2],
//     [6, 3],
//   ])
// );
//Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function (s) {
  let tempString = "";
  let maxLength = "";
  for (let index = 0; index < s.length; index++) {
    tempString = tempString + s[index];
    let set = new Set();
    set.add(s[index]);
    for (let j = index + 1; j < s.length; j++) {
      if (set.has(s[j])) {
        break;
      } else {
        set.add(s[j]);
        tempString = tempString + s[j];
      }
    }
    if (tempString.length > maxLength.length) {
      maxLength = tempString;
    }
    tempString = "";
  }
  console.log(maxLength);
  return maxLength;
};
//lengthOfLongestSubstring("abcabcbb");
//2634. Filter Elements from Array
var filter = function (arr, fn) {
  let array = arr.filter((item, index) => {
    return fn(item, index);
  });
  console.log(array);
  return array;
};

// filter([3, 2, 3], function returnFirst(n, i) {
//   return i === 0;
// });

//Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

//You must do this by modifying the
// input array in-place with O(1) extra memory.
var reverseString = function (s) {
  let j = 0;
  console.log(Math.ceil(s.length / 2));
  for (let index = s.length - 1; index >= Math.ceil(s.length / 2); index--) {
    let temp = s[index];
    s[index] = s[j];
    s[j] = temp;
    j++;
  }
  return s;
};

//console.log(reverseString(["h", "e", "l", "l", "o"]));
//Given a string s, reverse only all the vowels in the string
// and return it.
var reverseVowels = function (s) {
  //'a', 'e', 'i', 'o'
  let map = { a: true, e: true, i: true, o: true };
  s = s.split("");
  let j = s.length - 1;
  let index = 0;
  while (j > index) {
    if (!map[s[index].toLowerCase()] && !map[s[j].toLowerCase()]) {
      j--;
      index++;
      continue;
    }
    if (map[s[index].toLowerCase()] && !map[s[j].toLowerCase()]) {
      j--;
      continue;
    }
    if (!map[s[index].toLowerCase()] && map[s[j].toLowerCase()]) {
      index++;
      continue;
    }
    if (map[s[index].toLowerCase()] && map[s[j].toLowerCase()]) {
      let temp = s[index];
      console.log(s[j]);
      s[index] = s[j];
      s[j] = temp;
      index++;
      j--;
    }
  }
  return s.join("");
};
console.log(reverseVowels("hello"));

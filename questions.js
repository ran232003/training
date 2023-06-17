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
  divider = Math.floor(num / 2);
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
  fibArray = [];
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
  else return fibonacci(n - 1) + fibonacci(n - 2);
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

//remove Duplicate array

const removeDuplicate = (array) => {
  return Array.from(new Set(array));
};
//console.log(removeDuplicate([1, 2, 3, 3, 4, 5, 6, 6]));
//find missing number in sorted array

const findMissingSortedArray = (array) => {
  for (let index = 0; index < array.length - 1; index++) {
    if (array[index] + 1 !== array[index + 1]) {
      return array[index] + 1;
    }
  }
};
//console.log(findMissingSortedArray([1, 2, 3, 4]));
const findMissingNoSortedArray = (array) => {
  //we will do sum of the array
  let n = array.length + 1; //1 number is missing
  let sum = (n / 2) * (array[0] + array[array.length - 1]);
  for (let index = 0; index < array.length; index++) {
    sum = sum - array[index];
  }
  return sum;
};

//console.log(findMissingNoSortedArray([1, 2, 3, 5]));
//merge two sorted array

const merge2SortedArray1 = (array1, array2) => {
  return [...array1, ...array2].sort((a, b) => a - b);
};
//console.log(merge2SortedArray1([1, 2, 5], [3, 4, 7]));

const merge2SortedArray2 = (array1, array2) => {
  let i = 0;
  let j = 0;
  let returnArray = [];
  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
      returnArray.push(array1[i]);
      i++;
    } else {
      returnArray.push(array2[j]);
      j++;
    }
  }
  if (i === array1.length) {
    for (let index = j; index < array2.length; index++) {
      returnArray.push(array2[index]);
    }
  } else {
    for (let index = i; index < array1.length; index++) {
      returnArray.push(array1[index]);
    }
  }
  return returnArray;
};
//console.log(merge2SortedArray2([1, 2, 5], [3, 4, 7]));

//check palindrom

const isPalindrome = (str) => {
  //reverse the string and compare to the original
  return str.split("").reverse().join("") === str;
};
//console.log(isPalindrome("aba"));

//check if 2 numbers have sum from parameters
const doubleSum = (array, sum) => {
  let set = new Set();
  for (let index = 0; index < array.length; index++) {
    if (set.has(sum - array[index])) {
      return [sum - array[index], array[index]];
    } else {
      set.add(array[index]);
    }
  }
};
// console.log(doubleSum([1, 4, 7, 9], 10));

//tripleSum

const tripleSum = (array, sum) => {
  for (let index = 0; index < array.length; index++) {
    let set = new Set();
    let tempSum = sum - array[index];
    for (let j = 0; j < array.length; j++) {
      if (set.has(tempSum - array[j])) {
        return [tempSum - array[j], array[index], array[j]];
      } else {
        set.add(array[j]);
      }
    }
  }
};
//console.log(tripleSum([1, 4, 7, 9, 12], 17));

////put 1 at begining of array and 0 at the end, without any other arrays
//funSortingNums([3, 0, 0, 0, 1, 3, 3, 2, 2, 1, 0]);

const funSortingNums = (array) => {
  let j = array.length - 1;
  let index = 0;
  while (index !== j) {
    if (array[index] !== 1 && array[j] === 1) {
      console.log(index);
      let temp = array[index];
      array[index] = 1;
      array[j] = temp;
      j--;
      index++;
    } else if (array[index] === 1 && array[j] !== 1) {
      j--;
      index++;
    } else {
      j--;
    }
  }
  j = array.length - 1;
  index = 0;
  while (index !== j) {
    if (array[index] !== 0 && array[j] === 0) {
      j--;
      index++;
    } else if (array[index] === 0 && array[j] !== 0) {
      let temp = array[j];
      array[j] = 0;
      array[index] = temp;
      j--;
      index++;
    } else if (array[index] !== 0 && array[j] !== 0) {
      index++;
    }
  }
  return array;
};
//console.log(funSortingNums([3, 0, 0, 0, 1, 3, 3, 2, 2, 1, 0]));\

//that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

function solution(A) {
  // Implement your solution here
  //sort becasue we need to know that samallest will be at the begining
  A = A.sort((a, b) => {
    return a - b;
  });
  let small = 1; //we will return 1 if its not in the array
  for (let index = 0; index < A.length; index++) {
    if (A[index] === small) {
      //if A[index] === small we will increment small
      small++;
    } else if (small < A[index]) {
      //only if small is smaller the A[index] we will return it
      return small;
    }
  }
}
//console.log(solution([1, 21, 1, 1, 2, 5, 7])); //here it will be
//7. Find all pairs in an array of integers whose sum is equal to a given number
const pairSum = (array, sum) => {
  const set = new Set();
  let returnArray = [];
  for (let index = 0; index < array.length; index++) {
    if (set.has(sum - array[index])) {
      returnArray.push([sum - array[index], array[index]]);
    }
    set.add(array[index]);
  }
  return returnArray;
};
//console.log(pairSum([1, 4, 6, 8, 11, 2], 10));
// let arr = [1, 2, 3, 4, 5];
// let indexToRemove = 2; // index of the element to remove
// arr.splice(indexToRemove, 1); // remove 1 element starting from indexToRemove
// console.log(arr); // Output: [1, 2, 4, 5]

// function test1(var1) {
//   setTimeout(() => {
//     console.log("in time", var1);
//   }, 0);
// }
// for (var i = 0; i < 3; i++) {
//   test1(i);
//   setTimeout(() => {
//     console.log("in time2", i);
//   }, 0);
// }

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person("Lydia", "Hallie");
// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());

// const obj = { 1: 2 };
// console.log(obj.hasOwnProperty("1")); //true
// console.log(obj.hasOwnProperty(1)); //true

// const obj = new Map();
// obj.set(1, 2);
// console.log(obj.has("1")); //false
// console.log(obj.has(1)); //true

// function wait(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// function* generator(i) {
//   yield i;
//   yield i * 2;
// }
// // Usage
// async function myFunction() {
//   console.log("Start");

//   const gen = generator(10);
//   console.log(gen.next().value);
//   // Wait for 5 seconds
//   await wait(5000);
//   console.log(gen.next().value);
//   console.log("End");
// }

// myFunction();

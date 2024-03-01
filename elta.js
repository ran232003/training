const { forIn } = require("lodash");
const { array } = require("yup");

//event loop test
const eventLoopTest = () => {
  console.log("Start");
  setTimeout(function timeoutCallback() {
    console.log("Timeout");
  }, 0);
  async function asyncFunction() {
    console.log("Before await");
    await Promise.resolve();
    console.log("After await");
  }
  asyncFunction();
  console.log("End");
};

//random song:
//in this case we will get an array, shuffal the songs and when songs array will end
//we will start again from start

const randomSongs = (songs) => {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements using a temporary variable
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  //console.log(shuffleArray(songs));
  let shuffledSongs = shuffleArray(songs.slice()); // Make a copy and shuffle it
  let currentIndex = 0;
  return function getNextSong() {
    if (currentIndex >= shuffledSongs.length) {
      // If all songs have been played, shuffle the array again
      shuffledSongs = shuffleArray(songs.slice());
      currentIndex = 0;
    }
    const nextSong = shuffledSongs[currentIndex];
    currentIndex++;
    return nextSong;
  };
};

const randomSongsMain = () => {
  const songs = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];
  const getNextSong = randomSongs(songs);

  console.log(getNextSong()); // Random song 1
  console.log(getNextSong()); // Random song 2
  console.log(getNextSong()); // Random song 3
  console.log(getNextSong()); // Random song 4
  console.log(getNextSong()); // Random song 5
  console.log(getNextSong()); // Random song 1 (because the array is shuffled again)
};
//randomSongsMain();
const testHoist = () => {
  hello();
  testHoist2();
  function hello() {
    console.log("hello");
  }
  const testHoist2 = () => {
    console.log("hello2");
  };
};
//testHoist();
const checkTimeOut = () => {
  setTimeout(() => {
    console.log("hi");
  }, 1000);
  console.log("hi first");
};
//checkTimeOut();

const testScope = () => {
  {
    var x = 1;
  }
  console.log(x);
  if (x) {
    var y = 0;
  }
  console.log(y);

  var t = 11;
  setTimeout(function timeoutCallback() {
    console.log("Timeout", t);
  }, 0);
  for (let index = 0; index < 5; index++) {
    t++;
  }
};
// let arr = [33, 123, 2, 89, 5];
// arr.sort(function (a, b) {
//   console.log(a, b);
//   return a - b;
// });
//testScope();

const deppShalowObj = () => {
  let a = { name: "ran", age: 23 };
  let obj = { lastName: "farjun", person: a };
  let ShallowCopy = { ...obj };
  ShallowCopy.person.name = "BAR";
  ShallowCopy.lastName = "test";
  console.log(ShallowCopy);
  console.log(obj);
  let b = { name: "ran2", age: 63 };
  let obj2 = { lastName: "farjun", person: b };
  let deppCopy = JSON.parse(JSON.stringify(obj2));
  deppCopy.person.name = "BAR";
  deppCopy.lastName = "test";
  console.log(deppCopy);
  console.log(obj2);
};
//deppShalowObj();
// Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions.

const merge2SortedArray = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let merge = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merge.push(arr1[i]);
      i++;
    } else {
      merge.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length) {
    while (i < arr1.length) {
      merge.push(arr1[i]);
      i++;
    }
    return merge;
  }
  while (j < arr2.length) {
    merge.push(arr2[j]);
    j++;
  }
  return merge;
};
//console.log(merge2SortedArray([1, 5, 8, 10], [2, 3, 7, 11]));

function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
//console.log(mergeSortedArrays([1, 5, 8, 10], [2, 3, 7, 11]));

//Write a function that checks if a given string is a palindrome, considering only alphanumeric characters and ignoring case

const checkPalindrome = (str) => {
  return str.toUpperCase().split("").reverse().join("") === str.toUpperCase();
};

//console.log(checkPalindrome("Abcba"));

//7. Create a JavaScript class for a linked list with methods to insert a node at the beginning, end, or at a specific position, and to delete a node from a given position

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }
  inserAtStart(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.head;
      this.head = node;
      node.next = temp;
    }
  }
  insertAtEnd(data) {
    let node = new Node(data);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.tail;
      this.tail = node;
      temp.next = node;
    }
  }
  insertAtPosition(data, position) {
    if (position === 0) {
      return this.inserAtStart(data);
    }
    let node = new Node(data);
    let pointer = this.head;
    let index = 0;
    while (pointer !== null && position > index + 2) {
      pointer = pointer.next;
      index++;
    }
    if (position === index + 2) {
      let temp = pointer.next;
      pointer.next = node;
      node.next = temp;
    }
  }
  deleteAtPosition(position) {
    if (position === 1) {
      return (this.head = this.head.next);
    }
    let pointer = this.head;
    let index = 0;
    while (pointer !== null && position > index + 2) {
      pointer = pointer.next;
      index++;
    }
    if (position === index + 2) {
      pointer.next = pointer.next.next;
    }
  }
  display() {
    let current = this.head;
    let result = [];
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

// let list = new LinkedList();
// list.inserAtStart(1);
// list.inserAtStart(2);
// list.inserAtStart(3);
// list.insertAtEnd(4);
// list.insertAtEnd(9);
// list.insertAtPosition(33, 3);
// list.display();
// list.deleteAtPosition(4);
// list.display();

const nestedArrayToarray = (nestedArr) => {
  let newArr = [];
  for (let index = 0; index < nestedArr.length; index++) {
    if (Array.isArray(nestedArr[index])) {
      newArr = newArr.concat(nestedArr[index]);
    } else {
      newArr.push(nestedArr[index]);
    }
  }
  return newArr;
};
//console.log(nestedArrayToarray([1, 2, 3, [7, 8, 9], 10, 12]));

//Write a function that determines if two strings are anagrams of each other

const checkAnagram = (str1, str2) => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};
//console.log(checkAnagram("wwws", "swww"));

//palindrome

//2. Implement a function to reverse a string without using the built-in reverse() method

const reverseString = (str) => {
  let reverseStr = "";
  for (let index = str.length - 1; index >= 0; index--) {
    reverseStr = reverseStr + str[index];
  }
  return reverseStr;
};
//console.log(reverseString("abcd"));

//3. Given an array of numbers, write a function to find the largest and smallest numbers in the array.

const findMaxAndMin = (arr) => {
  let max = arr[0];
  let min = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (max < arr[index]) {
      max = arr[index];
    } else if (min > arr[index]) {
      min = arr[index];
    }
  }
  console.log(max, min);
};
// findMaxAndMin([22, 33, 1, 15]);
const findMaxAndMin2 = (arr) => {
  let max = Math.min(...arr);
  let min = Math.max(...arr);

  console.log(max, min);
};
//4. Write a function that takes an array of integers as input and returns a new array with only the unique elements.
const findUnique = (arr) => {
  let map = {};
  let arrUnique = [];
  for (let index = 0; index < arr.length; index++) {
    if (!map[arr[index]]) {
      map[arr[index]] = 1;
    } else {
      map[arr[index]] = map[arr[index]] + 1;
    }
  }
  for (const key in map) {
    if (map[key] === 1) {
      arrUnique.push(Number.parseInt(key));
    }
  }
  return arrUnique;
};
//console.log(findUnique([1, 1, 2, 2, 3, 4, 5, 6, 6]));

const sumOfAllNumInArray = function (arr) {
  const initialValue = 0;
  return arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, initialValue);
};
//console.log(sumOfAllNumInArray([1, 2, 3, 4]));

//8. Given a string, write a function to count the occurrences of each character in the string.
const countChars = (str) => {
  let map = {};
  for (let index = 0; index < str.length; index++) {
    if (!map[str[index]]) {
      map[str[index]] = 1;
    } else {
      map[str[index]] = map[str[index]] + 1;
    }
  }
  return map;
};
// console.log(countChars("testt"));
//9. Implement a function to remove duplicates from an array.
const removeDuplicate = (arr) => {
  return Array.from(new Set(arr));
};
//console.log(removeDuplicate([1, 1, 1, 2, 2, 3, 4, 5]));
//1. Write a function that reverses the order of words in a sentence without using the built-in reverse() method.
class Stack {
  constructor() {
    this.items = [];
  }

  // Add element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element of the stack
  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }
}
const reverseOrderWords = (sentence) => {
  let newSentence = "";
  let stack = new Stack();
  for (let index = sentence.length - 1; index >= 0; index--) {
    if (sentence[index] !== " ") {
      stack.push(sentence[index]);
    }
    if (sentence[index] === " " || index === 0) {
      while (!stack.isEmpty()) {
        newSentence = newSentence + stack.pop();
      }
      newSentence = newSentence + " ";
    }
  }
  return newSentence.trim();
};
//console.log(reverseOrderWords("hello world ran new"), "test");
function reverseOrderWords2(sentence) {
  // Split the sentence into an array of words, becasue split in the space between the words
  let words = sentence.split(" ");

  // Reverse the array of words
  let reversedWords = words.reverse();

  // Join the reversed words back into a sentence
  let reversedSentence = reversedWords.join(" ");

  return reversedSentence;
}

//console.log(reverseOrderWords2("hello world ran new"), "test");

//protect father class from create instance of it

class BaseClass {
  constructor() {
    console.log(new.target);
    if (new.target === BaseClass) {
      throw new Error("Cannot instantiate base class directly.");
    }
  }
}

class DerivedClass extends BaseClass {
  constructor() {
    super();
    // Additional initialization for the derived class
  }
}

let testClass = () => {
  // Example usage:
  // Attempting to create an instance of BaseClass will throw an error
  try {
    let baseObj = new BaseClass();
  } catch (error) {
    console.log(error.message); // Output: Cannot instantiate base class directly.
  }

  // Creating an instance of DerivedClass is allowed
  let derivedObj = new DerivedClass();
  console.log(derivedObj instanceof BaseClass);
};

//testClass();
//new and not new

const newTest = () => {
  function f1() {
    this.y = 21;
    let x = 10;
    console.log("hi");
    return x;
  }

  let noNewFunc = f1();
  let noNewFunc2 = new f1();
  console.log(noNewFunc);
  console.log(noNewFunc2, noNewFunc2.y); //f1 { y: 21 }
  ///class:
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  }

  //let circle = Circle(5);
  //console.log(circle);
};
//newTest();

//11. What's the output?
const methods = () => {
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  const member = new Person("Lydia", "Hallie");
  Person.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };

  //console.log(member.getFullName());
  console.log(Person.getFullName.call(member));
};
//methods();

//2. Implement a function that checks if a given string is a palindrome (reads the same forwards and backwards) while ignoring whitespace and
//punctuation.

const whitSpacePalindrome = (str) => {
  // \s is a regular expression pattern that matches any whitespace character (spaces, tabs, newlines, etc.).
  //The g flag stands for global, which means it will replace all occurrences of whitespace in the string, not just the first one.
  return (
    str.replace(/\s/g, "").split("").reverse().join("") ===
    str.replace(/\s/g, "")
  );
};

//console.log(whitSpacePalindrome(" 123 2   1"));

//3. Write a function that takes an array of integers and returns the largest difference between any two numbers in the array.

const maxDifference = (array) => {
  let difference = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    for (let j = 1; j < array.length; j++) {
      if (Math.abs(array[index] - array[j]) > difference) {
        difference = Math.abs(array[index] - array[j]);
      }
    }
  }
  return difference;
};
// console.log(maxDifference([1, 2, 6, 7, 8, -8]));
const maxDifference2 = (array) => {
  //check for min and max
  let min = array[0];
  let max = array[0];
  for (let index = 0; index < array.length; index++) {
    if (min > array[index]) {
      min = array[index];
    } else if (max < array[index]) {
      max = array[index];
    }
  }
  return Math.abs(max - min);
};
//console.log(maxDifference2([1, 2, 6, 7, 8]));

//6. Implement a function that flattens a nested array into a single-dimensional array.

const singleDimensionalArray = (array) => {
  let resultArray = [];
  for (let index = 0; index < array.length; index++) {
    if (Array.isArray(array[index])) {
      resultArray = resultArray.concat(array[index]);
    } else {
      resultArray.push(array[index]);
    }
  }
  return resultArray;
};
//console.log(singleDimensionalArray([1, 2, 3, [4, 5, 6], 9, 10]));
function flattenArray(arr) {
  let flattenedArray = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flattenedArray = flattenedArray.concat(flattenArray(element));
    } else {
      flattenedArray.push(element);
    }
  });

  return flattenedArray;
}
//console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));
//lightbolb and turn on and off
const lightbolb = (numOfBolbs) => {
  let results = [];
  for (let index = 1; index <= numOfBolbs; index++) {
    let counter = 0;
    for (let j = 1; j <= numOfBolbs; j++) {
      if (index % j === 0) {
        counter++;
      }
    }
    if (counter % 2 !== 0) {
      results.push(index);
    }
  }
  return results;
};
//console.log(lightbolb(100));

//8. Implement a function that finds the second smallest element in an array of integers.
const secondSmallest = (arr) => {
  return arr.sort((a, b) => {
    return a - b;
  })[1];
};
//console.log(secondSmallest([1, 9, 3, 4, 5, 6, 7]));

//9. Write a function that generates a random alphanumeric string of a given length.
const randomAlphaNumeric = (len) => {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let str = "";
  for (let index = 0; index < len; index++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    str = str + charset[randomIndex];
  }
  return str;
};
//console.log(randomAlphaNumeric(10));

//dataStructure the will do get,set,setAll in O(1)

class Entry {
  constructor(timestamp = 0, value = 0) {
    this.timestamp = timestamp;
    this.value = value;
  }
}

class Structure {
  constructor() {
    this.id = 0;
    this.all = new Entry();
    this.array = [];
  }

  setValue(i, v) {
    this.array[i] = new Entry(Date.now(), v);
  }

  getValue(i) {
    if (this.all.timestamp > this.array[i].timestamp) {
      return this.all.value;
    } else {
      return this.array[i].value;
    }
  }

  setAll(v) {
    this.all = new Entry(Date.now(), v); // Update timestamp to current time
  }
}

const dataStructure = () => {
  const dataStructure = new Structure();
  dataStructure.setValue(0, 10);
  dataStructure.setValue(1, 20);
  console.log(dataStructure.getValue(0)); // Output: 10
  dataStructure.setAll(5);
  console.log(dataStructure.getValue(0)); // Out 10
  console.log(dataStructure.getValue(1)); // Out 10
  dataStructure.setValue(1, 25);
  console.log(dataStructure.getValue(0)); // Out 10
  console.log(dataStructure.getValue(1)); // Out 25
};

//sort: 1 at start, 2 at end

const colors1 = (array) => {
  let red = [];
  let otherCollors = [];
  let green = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] === "red") {
      red.push(array[index]);
    } else if (array[index] === "green") {
      green.push(array[index]);
    } else {
      otherCollors.push(array[index]);
    }
  }
  return [...red, ...otherCollors, ...green];
};
//console.log(colors1(["red", "green", "red", "green", "y", "h", "green"]));

//colors2
const colors2 = (array) => {
  let countRed = 0;
  let countGreen = 0;

  let countOtherCollor = 0;
  let results = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] === "green") {
      countGreen++;
    } else if (array[index] === "red") {
      countRed++;
    } else {
      countOtherCollor++;
    }
  }
  for (let index = 0; index < countRed; index++) {
    results.push("red");
  }
  for (let index = 0; index < countOtherCollor; index++) {
    results.push("h");
  }
  for (let index = 0; index < countGreen; index++) {
    results.push("green");
  }
  return results;
};
//console.log(colors2(["red", "green", "red", "green", "y", "h", "green"]));

//Array with random numbers is given, please sort the numbers in a reverse order

const reverseSort = (array) => {
  return array.sort((a, b) => {
    console.log("a = ", a, " b = ", b);
    return b - a;
  });
};
//console.log(reverseSort([9, 4, 1, 2, 6]));

//count words

const mainFunc = () => {
  let map = {};
  return (word) => {
    if (word) {
      if (map[word]) {
        map[word]++;
      } else {
        map[word] = 1;
      }
    } else {
      let max = 0;
      let mostTimeWord = "";
      for (const property in map) {
        if (map[property] > max) {
          max = map[property];
          mostTimeWord = property;
        }
      }
      return { mostTimeWord, max };
    }
  };
};
// let bookFunc = mainFunc();
// bookFunc("hello");
// bookFunc("hello");
// bookFunc("hello");
// bookFunc("hello2");
// bookFunc("hello2");
// // bookFunc("hello2");
// // bookFunc("hello2");
// console.log(bookFunc());

//an array with integers. keep order but move all zero's to the end of the array.

const moveZero = (array) => {
  let start = 0;
  let end = array.length - 1;
  while (start !== end) {
    if (array[start] === 0 && array[end] === 0) {
      end--;
    } else if (array[start] === 0 && array[end] !== 0) {
      let temp = array[end];
      array[end] = 0;
      array[start] = temp;
      start++;
      end--;
    } else {
      start++;
    }
  }
  return array;
};
//console.log(moveZero([1, 2, 0, 0, 2, 4, 6, 0, 1]));
//fixing loop var issue
const setTimeOutIssue = () => {
  function delayedLog(message, delay) {
    setTimeout(() => {
      console.log(message);
    }, delay);
  }
  for (var index = 0; index < 3; index++) {
    delayedLog(index, 1);
  }
};
setTimeOutIssue();

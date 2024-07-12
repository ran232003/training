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

//deep copy and shalow
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
  function delayedLog(index, delay) {
    setTimeout(() => {
      console.log(index);
    }, delay);
  }
  // function delayedLog2(index, delay) {
  //   console.log(index);
  // }
  for (var index = 0; index < 3; index++) {
    delayedLog(index, 1); //the function will save the var value
  }
};
//setTimeOutIssue();
//make this works:console.log(mul(2)(3)(4))=>24;

const mul = (x) => {
  return (y) => {
    return (z) => {
      return x * y * z;
    };
  };
};
//console.log(mul(2)(3)(4));
//make this works:
const createBase = (base) => {
  return (add) => {
    return add + base;
  };
};
const addSix = createBase(6);
// console.log(addSix(10));

//prototype use

const checkPrototype = () => {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  let p1 = new Person("ran", 34);
  let p2 = new Person("ran2", 234);
  Person.prototype.checkName = function () {
    console.log("Hello, my name is " + this.name);
  };
  p1.checkName();
  p2.checkName();
  console.log(p1);
};
//checkPrototype();

//call apply bind

const callApplyBind = () => {
  const obj = { name: "ran" };
  let f1 = function (age, home) {
    console.log(this.name, age, home);
  };
  //call
  f1(); //undifiend
  f1.call(obj, 15, "Kramim"); //ran 15 Kramim
  f1.apply(obj, [15, "Kramim"]);
  let f = f1.bind(obj);
  f(15, "Kramim");
};
//callApplyBind();

const mapObject = () => {
  const obj = {};
  const map = new Map();
  let obj2 = { test: "test1" };
  let arr = [1, 2, 3];
  map.set(obj2, "obj2");
  map.set(arr, "arr");
  console.log(map); //Map(2) { { test: 'test1' } => 'obj2', [ 1, 2, 3 ] => 'arr' }
  obj[obj2] = "obj2";
  obj[arr] = "arr";
  console.log(obj); //{ '[object Object]': 'obj2', '1,2,3': 'arr' }
};
//mapObject();

//how to do singleton in js

const createSingelton = () => {
  class MySingletonClass {
    static instance = null; //this will check if the class was created
    constructor() {
      if (MySingletonClass.instance) {
        //instance is no null so object was created so throw exception
        throw new Error("Object was already init");
      }
      this.name = "single";
      this.age = 20;
      MySingletonClass.instance = this;
    }
    static getInstance() {
      if (MySingletonClass.instance) {
        return MySingletonClass.instance;
      }
      return new MySingletonClass();
    }
  }
  try {
    const obj = MySingletonClass.getInstance();
    const obj2 = MySingletonClass.getInstance();
    console.log(obj, obj2);

    const obj3 = new MySingletonClass(); //error
  } catch (error) {
    console.log(error);
  }
};
//createSingelton();
//Find Subarray with given sum
const subArraySum = (array, sum) => {
  for (let index = 0; index < array.length; index++) {
    let tempSum = array[index];
    let j = index + 1;
    while (j < array.length) {
      if (tempSum + array[j] < sum) {
        tempSum = tempSum + array[j];
        j++;
      } else if (tempSum + array[j] === sum) {
        return { start: index, end: j };
      } else {
        break;
      }
    }
  }
  return false;
};
//console.log(subArraySum([1, 2, 3, 4, 5], 5));

const fidnDuplicate = (array) => {
  let set = new Set();
  for (let index = 0; index < array.length; index++) {
    if (!set.has(array[index])) {
      set.add(array[index]);
    } else {
      return array[index];
    }
  }
};
//console.log(fidnDuplicate([1, 4, 2, 9, 2]));
//find duplicate without memory

const findWithout = (array) => {
  array = array.sort((a, b) => {
    return a - b;
  });

  for (let index = 0; index < array.length - 1; index++) {
    if (array[index] === array[index + 1]) {
      return array[index];
    }
  }
};

//console.log(findWithout([1, 4, 2, 41, 9]));

function aa() {
  console.log(this);
}

//this:

// function f() {
//   console.log(this); //global
// }

// console.log(this); //module.export
// const obj = {
//   title: "party",
//   names: ["ran", "ran2"],
//   checkName() {
//     this.names.map(function (item, index) {
//       console.log(this.title); //undefined inside regular function this is global
//       return item;
//     });
//   },
//   checkName2() {
//     this.names.map((item, index) => {
//       console.log(this.title); //party, in arrow function this wiil be the this from the outside object
//       return item;
//     });
//   },
//   checkName3() {
//     let that = this;
//     this.names.map(function (item, index) {
//       console.log(that.title); //party, we are saving the this before the function and then we will use it
//       return item;
//     });
//   },
//   checkName4: () => {
//     console.log(this);
//   },
// };
// module.exports.test = "testt";
// obj.checkName4.call(obj);

// const fn = () => {
//   console.log("middle");
//   setTimeout(() => {
//     console.log("setTimeout");
//   }, 0);
//   console.log("after");
// };
// const checkCallback = (fn) => {
//   console.log("hi");
//   fn();
//   console.log("by");
// };
// checkCallback(fn);

//promise:

const checkPromise = () => {
  const promiseTest = new Promise((resolve, reject) => {
    const num = Math.random();
    console.log("num is ", num);
    if (num >= 0.5) {
      resolve("Promise is fulfilled! " + num);
    } else {
      reject("Promise failed! " + num);
    }
  });

  //value will be Promise is fulfilled! or Promise failed!
  function handleResolve(value) {
    console.log("handleResolve", value);
  }

  function handleReject(reason) {
    console.error("handleReject", reason);
  }

  promiseTest.then(handleResolve, handleReject);
  // Promise is fulfilled!
  // or
  // Promise failed!
  console.log("test");
  //order of logs:
  //1. num is
  //2. test
  //3. handleReject or handleResolve
  //when you do then, this function is trigger: const num = Math.random().....
  //after that, when we get to resolve or reject the function is done
  //now we will finish the original function checkPromise
  //and the end we will activate callback handleResolve or handleReject
};
//checkPromise();
const checkPromise2 = () => {
  const myPromise = () => {
    return new Promise((resolve, reject) => {
      const num = Math.random();
      console.log("num is ", num);
      if (num >= 0.5) {
        resolve("Promise is fulfilled! " + num);
      } else {
        reject("Promise failed! " + num);
      }
    });
  };
  myPromise()
    .then((val) => {
      console.log("resolve val = ", val);
    })
    .catch((val) => {
      console.log("reject val = ", val);
    });
};
//checkPromise2();

const checkPromiseRace = () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("yes");
    }, 500);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("yes fast");
    }, 100);
  });

  Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
  });
};
//checkPromiseRace();

const checkPromiseAll = () => {
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "foo");
  });

  Promise.all([promise1, promise2, promise3])
    .then((values) => {
      console.log(values);
    })
    .catch(() => {
      console.log("reject");
    });
};
//checkPromiseAll();

const checkPromiseAllSettled = () => {
  const promise1 = Promise.resolve(3);
  const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, "foo")
  );
  const promises = [promise1, promise2];

  Promise.allSettled(promises).then((results) =>
    results.forEach((result) => console.log(result.status))
  );
};

const checkPromiseAny = () => {
  const promise1 = Promise.reject(0);
  const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
  const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

  const promises = [promise1, promise2, promise3];

  Promise.any(promises).then((value) => console.log(value)); //quick
};

//Q1: Write code to get an array of names from given array of users
//Result
// ['Jack', 'John', 'Mike']
const arrayOfUsers = () => {
  ///Q1: Write code to get an array of names from given array of users
  const users = [
    { id: 1, name: "Jack", isActive: true, age: 22 },
    { id: 2, name: "John", isActive: true, age: 23 },
    { id: 3, name: "Mike", isActive: false, age: 1 },
  ];
  let array = users.map((user) => {
    return user.name;
  });
  console.log(array);
  //get only active users
  let activeArray = users
    .filter((user) => {
      return user.isActive;
    })
    .map((user) => {
      return user.name;
    });
  console.log(activeArray);
  //sort by age
  let usersArraySortByAge = users
    .sort((a, b) => {
      if (a.age < b.age) {
        return -1; // a should come before b
      } else if (a.age > b.age) {
        return 1; // a should come after b
      } else {
        return 0; // a and b are equal in terms of 'name'
      }
    })
    .map((user) => {
      return user.name;
    });
  console.log(usersArraySortByAge);

  //different approch
};
//arrayOfUsers();

const nullUndefined = () => {
  let var1;
  console.log(var1); //undefined
  console.log(typeof var1); //undefined

  let var2 = null;
  console.log(var2); //null
  console.log(typeof var2); //object
  console.log(var2 == var1);
  console.log(var2 === var1);
};
//nullUndefined();

const checkHoisting = () => {
  foo2 = 3;
  console.log(foo2);
  var foo2;
  //will look like so:var foo2;, foo2 = 3;, console.log(foo2);
};
//checkHoisting();

// Closures
// Q1: Create a counter function which has increment and getValue
// functionality

const counterClosure = () => {
  let x = 0;
  return {
    getValue: () => {
      return x;
    },
    increment: () => {
      x = x + 1;
    },
  };
};
// let privateCounter = counterClosure();
// console.log(privateCounter.getValue());
// privateCounter.increment();
// console.log(privateCounter.getValue());

//check user name by name

const checkUserName = (name) => {
  const users = [
    { id: 1, name: "Jack", isActive: true, age: 22 },
    { id: 2, name: "John", isActive: true, age: 23 },
    { id: 3, name: "Mike", isActive: false, age: 1 },
  ];
  //check if username exist John:
  const checkUserName = users.some((user) => {
    return user.name === name;
  });
  console.log(checkUserName); //true/false
  //another method
  const checkUserName2 = users.find((user) => {
    return user.name === name;
  });
  console.log(checkUserName2, Boolean(checkUserName2)); //the element {....}/OR UNDEFIEND no boolean, we can use Bool CONSTRUCTOR

  const checkUserName3 = users.findIndex((user) => {
    return user.name === name;
  });
  console.log(checkUserName3); // here we will get the index or -1 if no result
};
//checkUserName("Jack");

const removeAllDuplicate = (array) => {
  console.log(Array.from(new Set(array)));
  return Array.from(new Set(array));
};
//removeAllDuplicate([1, 2, 3, 3, 4, 5, 5]);

//sorting array

const sort1 = (array) => {
  //sort will mutate the array, not create new array
  return array.sort((a, b) => {
    //if a-b is negative so a is biiger then b, so b is first
    //if a-b is positive so a is smaller then a first
    return a - b;
  });
};
//console.log(sort1([1, 5, 3, 2]));
const sortObjects = (array) => {
  return array.sort((a, b) => {
    return a.age - b.age;
  });
};
// console.log(
//   sortObjects([
//     { age: 5, name: "bar" },
//     { age: 55, name: "gad" },
//     { age: 2, name: "ran" },
//     { age: 11, name: "sar" },
//   ])
// );

//create range func will create array

const rangeArray = (start, end) => {
  let array = [];
  if (end < start) {
    return [];
  }
  for (let index = start; index < end; index++) {
    array.push(index);
  }
  return array;
};
//console.log(rangeArray(5, 20));

const rangAarray2 = (start, end) => {
  // Array(end-start) = length of the array 20-5 = 15
  const a = Array(end - start);
  //console.log(Array(end - start)); //[ <15 empty items> ]

  let b = Array(end - start).keys();
  //console.log(Array(end - start).keys()); //Object [Array Iterator] {}

  let c = [...Array(end - start).keys()];
  //console.log([...Array(end - start).keys()]); //will create an array from 0 to end-start-1.
  //The spread operator (...) spreads out each value from the iterator (Array(end - start).keys()) into a new array.
  //Since the iterator goes from 0 to end - start - 1 (the indices of the array), the spread operator collects these values into a new array.

  //but we want to create an array from start number not from 0 so:
  console.log(
    [...Array(end - start).keys()].map((num) => {
      return num + start;
    })
  );
  //so the array we got before: [0-15], now we will add the start number 5 for every num in the array so [0+5,1+5,...]

  return [...Array(end - start).keys()].map((num) => {
    return num + start;
  });
};
//rangAarray2(5, 20);
//shuffle function
//take array and change posotions for all elements
const myShuffle = (array) => {
  for (let index = array.length - 1; index > 0; index--) {
    let newIndex = Math.floor(Math.random() * index);
    let temp = array[newIndex];
    array[newIndex] = array[index];
    array[index] = temp;
  }
  return array;
};
//console.log(myShuffle([1, 2, 3, 4, 5]));

//find number of times minimum is in the list: [1,2,5,1,3,1] => 3 times

const countMin = (array) => {
  const min = array[0];
  const obj = new Map();
  obj.set(array[0], 1);
  for (let index = 1; index < array.length; index++) {
    if (min > array[index]) {
      min = array[index];
    }
    if (obj.get(array[index])) {
      let keyTimes = obj.get(array[index]) + 1;
      obj.set(array[index], keyTimes);
    } else {
      obj.set(array[index], 1);
    }
  }
  return obj.get(min);
};
//console.log(countMin([1, 2, 5, 1, 3, 1]));

const countMin2 = (array) => {
  //get min from array
  let min = Math.min(...array);
  return array.filter((num) => {
    return num === min;
  }).length;
};
//console.log(countMin2([1, 2, 1, 4, 8, 1]));

//this

function checkThis() {
  //console.log(this); //global obj. if it was arrow func so module.export
  let obj = {
    a: 0,
    f: function () {
      console.log(this, "ionner"); //the object
    },
  };
  obj.f();
  class Item {
    title = "ball";
    getItem() {
      console.log(this);
      let newThis = this;
      function testThis() {
        console.log("testThis", this, newThis); //undefined,Item { title: 'test' }
      }
      testThis();
      //another solution is arrow function
      const testThis2 = () => {
        console.log("testThis2", this); //Item { title: 'test' }
      };
      testThis2();
    }
    setItem(name) {
      this.title = name;
    }
  }

  const item = new Item();
  item.setItem("test");
  item.getItem(); //the instance of the class. title will be test and not ball
}
//checkThis();
// class Employee {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//   }
// }

// class Manager extends Employee {
//   setDepartment(dep) {
//     this.dep = dep;
//   }
// }
// const manager = new Manager("asd", "asd");
// console.log(manager);//Manager { name: 'asd', id: 'asd' }

//debounce

const testDebounce = () => {
  //function to activate after timer is done
  const saveInput = (name) => {
    console.log("save name = ", name);
  };
  const debounce = (func, timeOut) => {
    let timer;
    return (...args) => {
      //clearTimeout(timer) cancels the execution of the setTimeout function if it hasn't already been executed.
      //if 2 seconds didnt pass so we will cancel setTimeOut.
      //if 2 seconds pass so we will trigger setTimeOut
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeOut);
    };
  };
  const change = debounce(saveInput, 2000);
  change("1");
  change("2");
  change("3");
};
//testDebounce();

//Throttling is a technique used to limit the rate at which a function is called

const throttling = (func, dealy) => {
  let value = 0;
  let timeOut = null;
  return () => {
    //check timeOut Value
    value++;

    if (!timeOut) {
      //we will run the func only if time out is again null
      //value just to see which one is working
      func(value);
      timeOut = setTimeout(() => {
        timeOut = null;
      }, dealy);
    }
  };
};
const checkThrottling = (value) => {
  console.log("working " + value);
};

// const myFunc = throttling(checkThrottling, 1000);
// myFunc(); //will work: working 1
// myFunc(); //will not work
// setTimeout(() => {
//   myFunc(); //will work: working 3
// }, 1100);

//parallel async array: we will do sevral async calls and will console log the results

const method1 = () => {
  const p = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "p1");
  });
  const p2 = new Promise((resolve, reject) => {
    //"p2": The value to be passed to the resolve function when the timeout completes.
    setTimeout(resolve, 3000, "p2");
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "p3");
  });

  const promises = [p, p2, p3];
  Promise.allSettled(promises).then((results) =>
    results.forEach((result) => console.log(result.value))
  );
};
//method1();
//MAP 2 async func. 1 users 2. users status:
//we will do 2 api call and merge the results
const mapAsync = () => {
  const users = [
    { id: 1, name: "ran" },
    { id: 2, name: "ran2" },
    { id: 3, name: "ran3" },
  ];
  const userStatuses = [
    { id: 1, status: "ok" },
    { id: 2, status: "great" },
    { id: 3, status: "amazing" },
  ];
  const p = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, users);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, userStatuses);
  });

  Promise.all([p, p2]).then((results) => {
    //console.log(results); // will be the 2 arrays after the 2 api calls will finished
    //const [users, userStatuses] = results;:
    //users is assigned the value of results[0], which is the users array.
    //userStatuses is assigned the value of results[1], which is the userStatuses array.
    const [usersFromApi, userStatusesFromApi] = results;
    //merge the results
    const mergeResults = usersFromApi.map((user) => {
      const findStatus = userStatusesFromApi.find((userStatus) => {
        return userStatus.id === user.id;
      });
      return { ...user, status: findStatus.status };
    });
    console.log(mergeResults);
  });
};
//mapAsync();

const mapAsync2 = async () => {
  //here i will do it with async await
  const users = [
    { id: 1, name: "ran" },
    { id: 2, name: "ran2" },
    { id: 3, name: "ran3" },
  ];
  const userStatuses = [
    { id: 1, status: "ok" },
    { id: 2, status: "great" },
    { id: 3, status: "amazing" },
  ];
  const p = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, users);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, userStatuses);
  });

  const results = await Promise.all([p, p2]);
  //console.log(results);// here we will get the array with the 2 results
  const [usersFromApi, userStatusesFromApi] = results;
  //merge the results
  const mergeResults = usersFromApi.map((user) => {
    const findStatus = userStatusesFromApi.find((userStatus) => {
      return userStatus.id === user.id;
    });
    return { ...user, status: findStatus.status };
  });
  console.log(mergeResults);
};
//mapAsync2();

//try this on javaScript online: Throttling
// const fetch = require("node-fetch");
// const main = async()=>{
// const fetchAndRetry = (attempts,delay)=>{
//   return async()=>{
//     for (let i = 0; i < attempts; i++) {
//       try{
//         console.log("check")
//         // throw new Error("test");
//         const res =await fetch("https:2//swapi.dev/api/people/?page=2")
//         const data = await res.json();
//         return data
//       }catch(e){
//          if (i < attempts - 1) {
//           console.log(`Retrying in ${delay} milliseconds...`);
//           await new Promise(resolve => setTimeout(resolve, delay));
//         }else{
//                     console.log(`else`);

//           return "error"
//         }
//       }

//     }
//   }
// }
// const f = fetchAndRetry(3,1000)
// const data = await f();
// console.log(data)
// }

// main()
//shallow comparision

const shallowComparision = (obj1, obj2) => {
  //checking all tyes
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  if (Array.isArray(obj1) && obj1.length === obj2.length) {
    //array
    return obj1.every((element, index) => {
      return element === obj2[index];
    });
  }
  if (typeof obj1 === "object" && obj1 !== null) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    for (const property in obj1) {
      if (obj1[property] !== obj2[property]) {
        return false;
      }
    }
    return true;
  }
  //checking primetive types
  if (obj1 === obj2) {
    return true;
  }
  return false;
};
// console.log(shallowComparision({ a: "1", b: 2, c: 3 }, { a: "1", b: 2, c: 3 }));
// console.log(shallowComparision([1, 2, 3, 4, 2], [1, 2, 3, 4]));

const deepComparison = (obj1, obj2) => {
  //checking all tyes
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  if (Array.isArray(obj1) && obj1.length === obj2.length) {
    //array
    return obj1.every((element, index) => {
      //recursive call
      return deepComparison(element, obj2[index]);
    });
  }
  if (typeof obj1 === "object" && obj1 !== null) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    return Object.keys(obj1).every((key) => {
      return deepComparison(obj1[key], obj2[key]);
    });
  }
  //checking primetive types
  if (obj1 === obj2) {
    return true;
  }
  return false;
};
//console.log(deepComparison([1, 2, 3, 4, { a: 2 }], [1, 2, 3, 4, { a: 2 }]));
// console.log(
//   deepComparison(
//     { a: "1", b: 2, c: 3, d: { e: 5 } },
//     { a: "1", b: 2, c: 3, d: { e: 5 } }
//   )
// );
//count the vowels a, e, i, o, u in a sentence

const countVowels = (sentence) => {
  const map = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] in map) {
      map[sentence[index]]++;
    }
  }
  return map;
};
//console.log(countVowels("hello my name is ran"));

//capitalize correctly
//examples: hi my name => Hi My Name. hELLo THERe=> Hello There

const capitalize = (words) => {
  let sentence = words.toLowerCase().split("");
  console.log(sentence);
  for (let index = 0; index < sentence.length; index++) {
    if (index === 0) {
      console.log(sentence[index].toUpperCase());
      sentence[index] = sentence[index].toUpperCase();
    } else if (sentence[index - 1] === " ") {
      sentence[index] = sentence[index].toUpperCase();
    }
  }
  console.log(sentence.join(""));
};
//capitalize("hI thERE MOnsters");

//convert 12 hours time format to 24

const timeFormatChange = (time) => {
  let checkCase = time.includes("AM");
  let arr = time.split(":");
  console.log(arr);
  //AM CASE
  if (checkCase) {
    //just change 12
    if (arr[0] === "12") {
      arr[0] = "00";
    }
  } else {
    if (arr[0] !== "12") {
      let num = parseInt(arr[0]);
      num = num + 12;
      arr[0] = String(num);
    }
  }
  return arr.join(":").substring(0, 5);
};
// console.log(timeFormatChange("12:27AM"));

//mapping activity
//mapping with index of array

const MappingActivity = () => {
  const loc = [
    { location_key: [32, 22, 11], autoSign: 1 },
    { location_key: [332, 242, 141], autoSign: 2 },
  ];
  const bulk = [
    { data: { config_key: 100, configVal: 200 } },
    { data: { config_key: 300, configVal: 300 } },
  ];
  const newMapping = loc.map((val, index) => {
    return val.location_key.map((key, index2) => {
      return {
        location_key: key,
        autoSign: val.autoSign,
        config_key: bulk[index].data.config_key,
        configVal: bulk[index].data.configVal,
      };
    });
  });

  //result:[
  //   [
  //     { location_key: 32, autoSign: 1, config_key: 100, configVal: 200 },
  //     { location_key: 22, autoSign: 1, config_key: 100, configVal: 200 },
  //     { location_key: 11, autoSign: 1, config_key: 100, configVal: 200 }
  //   ],
  //   [
  //     { location_key: 332, autoSign: 2, config_key: 300, configVal: 300 },
  //     { location_key: 242, autoSign: 2, config_key: 300, configVal: 300 },
  //     { location_key: 141, autoSign: 2, config_key: 300, configVal: 300 }
  //   ]
  // ]
  //we can flat the array:
  let finalResponse = [];
  for (let index = 0; index < newMapping.length; index++) {
    finalResponse = finalResponse.concat(newMapping[index]);
  }
  console.log(finalResponse);
};
//MappingActivity();

// replace parameter in url:
const replaceParamsInUrl = () => {
  const url = "/posts/:postId/comments/:commentId";
  const replace = [
    { from: "postId", to: "123" },
    { from: "commentId", to: "8993" },
  ];

  const urlArray = url.split("/");
  let i = 0;
  const urlArrayReplace = urlArray.map((val, index) => {
    if (val === ":" + replace[i].from) {
      i++;
      return replace[i - 1].to;
    }
    return val;
  });
  return urlArrayReplace.join("/");
};
// console.log(replaceParamsInUrl());

//validation
// Format backend validation message to frontend format
//final results:
//// ["Email: Can't be blank", "Password: Must contain symbols, Must be at least 8 symbols", "passwordConfirmation: Must match with password"]

const checkValidation = () => {
  const backendErrors = {
    email: {
      errors: [
        {
          message: "Can't be blank",
        },
      ],
    },
    password: {
      errors: [
        {
          message: "Must contain symbols in different case",
        },
        {
          message: "Must be at least 8 symbols length",
        },
      ],
    },
    passwordConfirmation: {
      errors: [
        {
          message: "Must match with password",
        },
      ],
    },
  };
  const result = [];
  for (const property in backendErrors) {
    for (
      let index = 0;
      index < backendErrors[property]["errors"].length;
      index++
    ) {
      if (index === 0) {
        result.push(
          [property] +
            ": " +
            backendErrors[property]["errors"][index]["message"]
        );
      } else {
        result.push(backendErrors[property]["errors"][index]["message"]);
      }
    }
  }
  console.log(result);
};
//checkValidation();
// Transform flat list to nested list

//result
//[
// {
//    id: 1,
//    children: [
//      {
//        id: 3,
//        children: [
//          {
//            id: 4,
//            children: []
//          }
//        ]
//      }
//    ]
// },
// {
//    id: 2,
//    children: [
//      {
//        id: 5,
//        children: []
//      }
//    ]
// }
//]
const nestedList = () => {
  const flatList = [
    {
      id: 1,
      name: "lvl 1 item 1",
      parentId: null,
    },
    {
      id: 2,
      name: "lvl 1 item 2",
      parentId: null,
    },
    {
      id: 3,
      name: "lvl 2 item 3",
      parentId: 1,
    },
    {
      id: 4,
      name: "lvl 3 item 4",
      parentId: 3,
    },
    {
      id: 5,
      name: "lvl 2 item 5",
      parentId: 2,
    },
  ];
};
// function greeting() {
//   throw "Hello world!";
// }

// function sayHi() {
//   try {
//     const data = greeting();
//     console.log("It worked!", data);
//   } catch (e) {
//     console.log("Oh no an error:", e);
//   }
// }

// sayHi();

// const s = new Set();
// let a = [1, 2, 3];
// s.add(a);
// console.log(s);
// s.add(a);
// console.log(s);

//reverse string

const reverseString = (str) => {
  return str.split("").reverse().join("");
};
//console.log(reverseString("abcde"));
//palindrome

const checkPalindrom = (str) => {
  return str === str.split("").reverse().join("");
};
//console.log(checkPalindrom("ababaa"));

//reverseInt
//example 51 = 15, -30 = -3, -21 = -12
const reverseInt = (n) => {
  return n > -1
    ? parseInt(n.toString().split("").reverse().join(""))
    : -1 * parseInt(n.toString().split("").reverse().join(""));
};
//console.log(reverseInt(-122));

//return max char, example: "mmmmaesd" return m

const maxChar = (str) => {
  const map = {};
  for (let index = 0; index < str.length; index++) {
    if (map[str[index]] === 0 || map[str[index]]) {
      map[str[index]] = map[str[index]] + 1;
    } else {
      map[str[index]] = 1;
    }
  }
  let retrunKey = "";
  let maxNumber = 0;
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
      if (map[key] >= maxNumber) {
        retrunKey = key;
        maxNumber = map[key];
      }
    }
  }
  return retrunKey;
};
//console.log(maxChar("apple"));

//fizzbuzz
//Print integers one-to-N, but print “Fizz” if an integer is divisible by three, “Buzz” if an integer is divisible by five,
// and “FizzBuzz” if an integer is divisible by both three and five

const fizzbuzz = (n) => {
  for (let index = 1; index < n + 1; index++) {
    let print = "";

    if (index % 3 === 0) {
      print = "fizz";
    }
    if (index % 5 === 0) {
      print = print + "buzz";
    }
    if (!print) {
      console.log(index);
    } else {
      console.log(print);
    }
  }
};
//fizzbuzz(18);

//chank array. example: chunkArray([1,2,3,4,5,6],4)=> [[1,2,3,4],[5,6]]
//dividie the big array to small arrays of a given size

const chunkArray = (array, size) => {
  let returnArray = [];
  let start = 0;
  let end = size;
  for (let index = 0; index < array.length; index++) {
    if (end < array.length) {
      returnArray.push(array.slice(start, end));
      start = end;
      end = end + size;
    } else {
      returnArray.push(array.slice(start, array.length));
      return returnArray;
    }
  }
  return returnArray;
};
//console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));

//anagram
//only charaters, not punctuaation(!,?...), or capital
const anagram = (stringA, stringB) => {
  // const regex = /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g;
  // Replace punctuation with an empty string
  return (
    stringA
      .replace(/[^a-zA-Z0-9]/g, "")
      .trim()
      .toLowerCase()
      .split("")
      .sort()
      .join("") ===
    stringB
      .replace(/[^a-zA-Z0-9]/g, "")
      .trim()
      .toLowerCase()
      .split("")
      .sort()
      .join("")
  );
};
//console.log(anagram("hello", "lloeh"));

//capitalaize every first word

const capitaliaze = (str) => {
  let strArray = str.trim().split("");
  strArray[0] = strArray[0].toUpperCase();
  for (let index = 1; index < strArray.length; index++) {
    if (strArray[index - 1] === " ") {
      strArray[index] = strArray[index].toUpperCase();
    }
  }
  return strArray.join("");
};
//console.log(capitaliaze("hello lloeh my name is jabar"));
//printing steps. example steps(2):
//'* '
//'**'
const printSteps = (n) => {
  let str = "";
  for (let index = 0; index < n; index++) {
    str = str + "#";
    let str2 = "";
    for (let j = index + 1; j < n; j++) {
      str2 = str2 + " ";
    }
    console.log(str + str2);
  }
};
//printSteps(5);

//pyramid, example pyramid(5):
//     '#'

//    ' # '
//    '###'

//   '  #  '
//   ' ### '
//   '#####'

//  '   #   '
//  '  ###  '
//  ' ##### '
//  '#######'
const pyramid = (n) => {
  let col = n * 2 - 1;
  let numOfSigns = 1;
  let numOfSpaces = Math.floor(col / 2);
  //console.log(col, numOfSigns, numOfSpaces);
  for (let index = 0; index < n; index++) {
    let str = "";
    let tempNumOfSigns = numOfSigns;
    let tempNumOfSpaces = numOfSpaces;
    let count = 2;
    for (let index = 0; index < col; index++) {
      if (tempNumOfSpaces > 0) {
        str = str + " ";
        tempNumOfSpaces--;
        continue;
      }
      if (tempNumOfSpaces === 0 && tempNumOfSigns > 0) {
        if (count === 2) {
          count--;
        }
        str = str + "#";
        tempNumOfSigns--;
        continue;
      }
      if (count === 1) {
        tempNumOfSpaces = numOfSpaces;
        count--;
      }
      if (tempNumOfSpaces > 0) {
        str = str + " ";
        tempNumOfSpaces--;
        continue;
      }
    }
    numOfSigns = numOfSigns + 2;
    numOfSpaces--;
    console.log(str);
  }
};
//pyramid(7);

//count vowls: a, e, i, o, u in a sentence
const countVowls = (str) => {
  let count = 0;
  const map = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let index = 0; index < str.length; index++) {
    if (!isNaN(map[str[index]])) {
      map[str[index]]++;
      count++;
    }
  }
  return count;
  console.log(map);

  for (const key in map) {
    count = count + map[key];
  }
};
//console.log(countVowls("hi there"));

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//  matrix(5)
// [ 1,  2,  3,  4,  5]
// [16, 17, 18, 19,  6]
// [15, 24, 25, 20,  7]
// [14, 23, 22, 21,  8]
// [13, 12, 11, 10,  9]
function matrix(n) {
  //createArray
  let result = [];
  for (let index = 0; index < n; index++) {
    result.push([]);
  }
  let counter = 1;
  let startColunm = 0;
  let endColunm = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColunm <= endColunm && startRow <= endRow) {
    //first row
    for (let index = startColunm; index <= endColunm; index++) {
      result[startRow][index] = counter;
      counter++;
    }
    startRow++;
    //end colunm
    for (let index = startRow; index <= endRow; index++) {
      result[index][endRow] = counter;
      counter++;
    }
    endColunm--;
    // bottom row
    console.log(endColunm, startColunm);
    for (let index = endColunm; index >= startColunm; index--) {
      result[endRow][index] = counter;
      counter++;
    }
    endRow--;
    //start colunm
    for (let index = endRow; index >= startRow; index--) {
      result[index][startColunm] = counter;
      counter++;
    }
    startColunm++;
  }
  return result;
}
//console.log(matrix(3));

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  let num1 = 0;
  let num2 = 1;
  let sum = 0;
  for (let index = 2; index <= n; index++) {
    sum = num1 + num2;
    let temp = num2;
    num2 = temp + num1;
    num1 = temp;
  }
  return sum;
}
//console.log(fib(1));
// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;
//fifo: first in first out

class Queue {
  constructor() {
    this.array = [];
  }

  add(num) {
    this.array.push(num);
  }

  remove() {
    let num = this.array[0];
    this.array = this.array.slice(1);
    return num;
  }
  peek() {
    return this.array[0];
  }
}
const test = () => {
  let q = new Queue();
  q.add(3);
  q.add(4);
  q.add(66);
  q.add(1);
  console.log(q.remove());
  console.log(q.remove());
  console.log(q.peek());
  console.log(q.remove());
};
//test();
// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const weave = (q1, q2) => {
  let q3 = new Queue();
  while (q1.peek() || q2.peek()) {
    if (q1.peek()) {
      q3.add(q1.remove());
    }
    if (q2.peek()) {
      q3.add(q2.remove());
    }
  }
  return q3;
};
const weaveTest = () => {
  let q = new Queue();
  q.add(3);
  q.add(4);
  q.add(66);
  let q2 = new Queue();
  q2.add(113);
  q2.add(114);
  q2.add(1166);
  const qq = weave(q, q2);
  console.log(qq.remove());
  console.log(qq.remove());

  console.log(qq.remove());

  console.log(qq.remove());
};
//weaveTest();

//fifo
// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.array = [];
  }

  push(num) {
    this.array.push(num);
  }

  pop() {
    return this.array.pop();
  }
  peek() {
    return this.array[this.array.length - 1];
  }
}
const testStack = () => {
  let s = new Stack();
  s.push(1);
  s.push(13);
  s.push(155);
  console.log(s.peek());
  console.log(s.pop());
  console.log(s.peek());
};
//testStack();

//2 became 1. using 2 stack, simulate a queue

class QueueStack {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }
  add(val) {
    if (!this.s1.peek() && !this.s2.peek()) {
      //first var
      this.s1.push(val);
    } else {
      //move every vars to s2
      while (this.s1.peek()) {
        this.s2.push(this.s1.pop());
      }
      this.s1.push(val);
      while (this.s2.peek()) {
        this.s1.push(this.s2.pop());
      }
    }
  }
  peek() {
    return this.s1.peek();
  }
  remove() {
    return this.s1.pop();
  }
}
const testQueuStack = () => {
  const queuStack = new QueueStack();
  queuStack.add(1);
  queuStack.add(2);
  queuStack.add(3);
  queuStack.add(4);
  console.log(queuStack.peek());
  console.log(queuStack.remove());
  console.log(queuStack.peek());
};
//testQueuStack();

//linked list
// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.listSize = 0;
    this.tail = null;
  }
  insertFirst(data) {
    if (this.listSize === 0) {
      this.head = new Node(data);
      this.tail = this.head;
      this.listSize++;
    } else {
      let temp = this.head;
      this.head = new Node(data);
      this.head.next = temp;
      this.listSize++;
    }
  }
  size() {
    return this.listSize;
  }
  getFirst() {
    return this.head.data;
  }
  getLast() {
    return this.tail.data;
  }
  clear() {
    this.head = null;
    this.listSize = 0;
    this.tail = null;
  }
  removeFirst() {
    this.head = this.head.next;
    this.listSize--;
  }
  removeLast() {
    let pointer = this.head;
    while (pointer.next.next !== null) {
      pointer = pointer.next;
    }
    let temp = this.tail;
    this.tail = pointer;
    this.tail.next = null;
    this.listSize--;
    return temp.data;
  }
  printList() {
    let pointer = this.head;
    while (pointer.next !== null) {
      console.log(pointer.data);
      pointer = pointer.next;
    }
    console.log(pointer.data);
  }
  insertLast(data) {
    if (this.listSize === 0) {
      this.head = new Node(data);
      this.tail = this.head;
      this.listSize++;
    } else {
      let temp = this.tail;
      this.tail = new Node(data);
      temp.next = this.tail;
      this.listSize++;
    }
  }
  getAt(index) {
    if (index === 0) {
      return this.head.data;
    } else {
      let pointer = this.head;
      while (index > 0) {
        pointer = pointer.next;
        index--;
      }
      return pointer.data;
    }
  }
  removeAt(index) {
    let tempIndex = index;
    if (this.listSize === 0) {
      return;
    }
    if (index === 0) {
      return this.removeFirst();
    }
    let pointer = this.head;
    if (tempIndex === this.listSize - 1) {
      //remove last
      return this.removeLast();
    }

    while (index > 1) {
      pointer = pointer.next;
      index--;
    }
    let temp = pointer.next;

    pointer.next = pointer.next.next;

    this.listSize--;
    return temp.data;
  }
  insertAt(data, index) {
    if (index === 0) {
      this.insertFirst(data);
      return;
    }
    if (index === this.listSize - 1 || index > this.listSize) {
      this.insertLast(data);
      return;
    }
    let pointer = this.head;
    while (index > 1) {
      index--;
      pointer = pointer.next;
    }
    let temp = pointer.next;
    pointer.next = new Node(data);
    pointer.next.next = temp;
  }
  forEach(func) {
    let pointer = this.head;
    while (pointer !== null) {
      func(pointer);
      pointer = pointer.next;
    }
  }

  [Symbol.iterator]() {
    let current = this.head;
    return {
      next() {
        if (current) {
          const value = current;
          current = current.next;
          return { value, done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}
const testLinkedList = () => {
  const myList = new LinkedList();
  myList.insertLast(2);
  myList.insertLast(12);
  myList.insertLast(22);
  myList.insertLast(55);
  //console.log(myList.removeAt(2));
  myList.printList();
  myList.insertAt(111, 14);
  myList.printList();
  myList.forEach((node) => {
    node.data = node.data + 10;
  });
  myList.printList();
  for (let node of myList) {
    node.data += 10;
  }
  myList.printList();

  //console.log(myList.getLast());
};
//testLinkedList();

// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }
//sol: slowPointer will move by 1, fast pointer will move by 2. if fast pointer.next != null and  fast pointer.next.next != null continiue else stop, slow is in the middle
//tortoise and hare algorithm
function midpoint(list) {
  let slowPointer = list.head;
  let fastPointer = list.head;
  while (fastPointer.next !== null && fastPointer.next.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return slowPointer.data;
}
const testMidPoint = () => {
  const list = new LinkedList();
  list.insertLast(1);
  list.insertLast(2);
  list.insertLast(3);
  list.insertLast(4);
  list.insertLast(5);
  list.insertLast(6);

  console.log(midpoint(list));
};
//testMidPoint();

// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let slowPointer = list.head;
  let fastPointer = list.head;
  while (fastPointer.next !== null && fastPointer.next.next !== null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
    if (fastPointer === slowPointer) {
      return true;
    }
  }
  return false;
}
const testCircular = () => {
  const l = new LinkedList();
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;
  console.log(circular(l));
};
//testCircular();

// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'
// we will use 2 pointers, the second will start to move at forword n steps. after that
//the space pointer1 and pointer 2 will be n
// now we will get to the last node with p2 so p1 will be the node we need

function fromLast(list, n) {
  let p1 = list.head;
  let p2 = list.head;
  if (n === 0) {
    return list.head;
  }
  for (let index = 0; index < n; index++) {
    p2 = p2.next;
  }
  while (p2.next !== null) {
    p2 = p2.next;
    p1 = p1.next;
  }
  return p1;
}
const testFromLast = () => {
  const list = new LinkedList();
  list.insertLast("a");
  list.insertLast("b");
  list.insertLast("c");
  list.insertLast("d");
  console.log(fromLast(list, 2)); // 'b'
};
testFromLast();

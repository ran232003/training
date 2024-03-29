// //hoisting:

// function hoisting() {
//   console.log(x);
//   var x = 10;
// }
// //hoisting();
// function HoistError() {
//   console.log(x);
//   let x = 10;
//   //ReferenceError: Cannot access 'x' before initialization
// }
// //HoistError();

// //javaScript Initializations are Not Hoisted

// function Hoist2() {
//   console.log(x); //undefined
//   var x = 10;
// }
// //Hoist2();
// //functions
// hoisted(); // Output: "This function has been hoisted."

// function hoisted() {
//   console.log("This function has been hoisted.");
// }

// // notHoist();
// // //notHoist is not a function
// // var notHoist = () => {
// //   console.log("error.");
// // };

// //closure

// function counter() {
//   let x = 0;
//   return () => {
//     x++;
//     return x;
//   };
// }
// let privateCounter = counter();

// // console.log(privateCounter());
// // console.log(privateCounter());

// // let f = setTimeout(() => {
// //   console.log("in time out");
// // }, 2000);
// // console.log("after");
// //let a = 0;
// // const interval = setInterval(() => {
// //   a++;
// //   console.log("interval", a);
// //   if (a == 5) {
// //     console.log("stop");
// //     clearInterval(interval);
// //   }
// // }, 1000);

// //check if 2 numbers in array are returning the target
// //we put everything in a mapper, the key is this: target - num, value in num
// var twoSum = function (nums, target) {
//   let map = {};
//   for (let index = 0; index < nums.length; index++) {
//     let key = target - nums[index];
//     if (map[key]) {
//       map[key].push(index);
//     } else {
//       map[key] = [nums[index], index];
//     }
//   }
//   console.log(map);
//   let res = [];
//   for (let index = 0; index < nums.length; index++) {
//     if (map[nums[index]] && map[nums[index]][1] !== index) {
//       if (map[nums[index]].length > 2) {
//         res.push(map[nums[index]][1]);
//         res.push(map[nums[index]][2]);
//       } else {
//         res.push(map[nums[index]][1]);
//       }
//     }
//   }
//   console.log(res);
// };
// //twoSum([3, 3], 6);

// //The every() method executes a function for each array element
// const array1 = [1, 30, 39, 29, 102, 13];
// function checkArray(age) {
//   return age > 40;
// }
// //console.log(array1.every(checkArray));
// //this
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     //here this will be:
//     // {
//     //   firstName: 'John',
//     //   lastName: 'Doe',
//     //   id: 5566,
//     //   fullName: [Function: fullName]
//     // } the object itself
//     console.log(this);
//     return this.firstName + " " + this.lastName;
//   },
// };
// function myFunction() {
//   //this will be the global object
//   return this;
// }
// module.exports.foo = 5;

// //console.log(this); // { foo:5 } beacuse this is nodeJS
// //this arrow function

// const arrow = () => {
//   //this == module.exports
//   return this;
// };
// //console.log(arrow());

// let ob = {
//   name1: 2,
//   f: () => {
//     console.log(this); //this == module.exports arrow func
//   },
//   f2: function () {
//     console.log(this); //this == the object ob regular func
//   },
// };
// // ob.f();
// // ob.f2();
// //call,apply,bind
// //bind
// let car = {
//   color: "red",
//   name: "nice",
// };
// function carGetName() {
//   return this.name;
// }
// console.log(carGetName()); //we will get undefined, this.name not exist

// //fix:
// let fixName = carGetName.bind(car);
// console.log(fixName()); //nice, this = car
// //call

// let car2 = {
//   color: "red",
//   name: "nice",
// };
// function getColor(testParam) {
//   return this.color + testParam;
// }

// //console.log(getColor.call(car2, "test")); // print red test

// let car3 = {
//   color: "red",
//   name: "nice",
// };
// function getColor3(testParam, test2) {
//   return this.color + testParam + test2;
// }

// //console.log(getColor3.apply(car3, ["test", "test2"])); // print red test test2

// //var keyword
// // //
// //f();

// // function f1() {
// //   this.z = 11;
// // }
// // let t = new f1();
// // console.log(t);
// // f1.prototype.test = 20;
// // console.log(t.test, "asd"); // will get this new functunality
// // console.log(t);
// let s = {
//   a: "a",
//   ss: "ss",
//   f: function () {
//     this.aa = "aa";
//     console.log(this); //this will be the object s
//   },
// };
// //s.f();

// let as;

// // when activating g we are doing print hi.
// //if its ok i will activate res() now i will go to g.then()
// //if any error will come i will go to rej() so print err
// // const g = new Promise((res, rej) => {
// //   console.log("hi");
// //   // res();
// //   rej();
// // });
// // g.then(() => {
// //   console.log("then");
// // }).catch(() => {
// //   console.log("err");
// // });

// //api call
// //const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");// fetch returning promise
// // const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
// class A {
//   num = 10;
//   printA() {
//     console.log(this.num, "num is");
//   }
// }
// function thisTest() {
//   let a = new A();

//   let x = 11;
//   function c(func) {
//     let x = 20;

//     func.apply(a);
//   }
//   c(a.printA);
//   setTimeout(a.printA.bind(a));
//   //here the this will change and will be the this of c function
// }
// //thisTest();

// //adding property to array
// Array.prototype.last = function () {
//   console.log(this.pop());
//   console.log(this);
// };

// let array = [1, 2, 3];
// //array.last();
// //create counter when first time returning the number itseld and after that start increase
// var createCounter = function (n) {
//   let i = 0;
//   return function () {
//     n = n + i;
//     i = 1;
//     return n;
//   };
// };
// let counters = createCounter(2);
// // console.log(counters());
// // console.log(counters());
// // console.log(counters());

// //Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// async function sleep(millis) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("in");
//       resolve();
//     }, millis);
//   });

//   return promise;
// }

// //console.log(sleep(9000));
// // console.log(0.1 + 0.2); //0.30000000000000004
// // console.log(0.1 + 0.2 == 0.3); //false
// //
// // many decimal fractions, such as 0.1 and 0.2, cannot be represented exactly in binary form.
// //They end up being recurring fractions, similar to how 1/3 in decimal form is 0.3333333...
// //with an infinite number of 3s.

// // So when you perform the addition 0.1 + 0.2, the result is a number that is very close to 0.3,
// //but not exactly equal to it. The actual result is a tiny bit larger, something like 0.30000000000000004.

// function isInteger(num) {
//   console.log(num % 1);
//   return num % 1 === 0;
//   return Math.round(num) === num;
// }
// //isInteger(1.2);
// //In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
// (function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//   }, 1000);
//   setTimeout(function () {
//     console.log(3);
//   }, 0);
//   console.log(4);
// })();
// //1, 4, 3, 2
// //check class
// // class == function
// function classCheck() {
//   class A {
//     constructor(x) {
//       this.x = x;
//     }
//   }
//   class B extends A {
//     constructor(b, x) {
//       super(x);
//       this.b = b;
//     }
//   }
//   let b = new B(10, 12);
//   let number = 1;
//   console.log(typeof B); //function
//   let classFunction = B;
//   let obj = b;
//   let numberObject = new Object(number);
//   console.log(numberObject); //[Function: Number]
//   if (
//     obj === null ||
//     obj === undefined ||
//     typeof classFunction !== "function"
//   ) {
//     return false;
//   } else {
//     return new Object(obj) instanceof classFunction;
//   }
// }
// //classCheck();
// //callback

// function f1(a, callback) {
//   // Your code here

//   // Call the callback function
//   callback();
// }

// // Example of using the f1 function with a callback
// f1("someValue", () => {
//   console.log("Callback function executed!");
// });

// let value = 1;

// //async callback
// function doSomething(callback) {
//   setTimeout(() => {
//     callback();
//     console.log(value, "after callback"); //this will print second
//     //value = 2
//   }, 1000);
// }

// doSomething(() => {
//   value = 2;
// });

// console.log(value, "here"); //this will print first value = 1

// function performAsyncTask() {
//   return new Promise((resolve, reject) => {
//     // Simulate an asynchronous operation, e.g., fetching data from a server
//     setTimeout(() => {
//       const success = true; // Simulating a successful operation
//       if (success) {
//         resolve("Async operation completed successfully");
//       } else {
//         reject("Async operation failed");
//       }
//     }, 1000); // Simulating a delay of 1 second
//   });
// }

// // Using the Promise
// // performAsyncTask()
// //   .then((result) => {
// //     console.log(result);
// //   })
// //   .catch((error) => {
// //     console.error(error);
// //   });
// //foo(); // What happens here?
// var bar = function () {
//   console.log("Hello, hoisting!");
// };
// function foo() {
//   console.log("Foo function");
// }
// ///foo(); // What does this log?
// //bar();
// //

//The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
const p1 = { name: "ran", lastName: "far" };

const p2 = Object.create(p1);
//console.log(p2); //print:{}
p2.name = "yariv";
//console.log(p2); //{ name: 'yariv' }
//console.log(p1); //{ name: 'ran', lastName: 'far' }

var myObject = {
  price: 20.99,
  get_price: function () {
    return this.price;
  },
  setPrice: function () {
    this.price = 30;
  },
};

//when using create you inherent the properties from its father: myObject
//JavaScript consoles typically display the object's own enumerable properties.
//However, properties inherited from the prototype are not shown directly in the logged output.
// var customObject = Object.create(myObject);
// console.log(customObject, customObject.price); //{} 20.99
// customObject.price = 19.99;
// delete customObject.price;
// console.log(customObject.get_price(), customObject.price); //20.99 20.99
// customObject.setPrice();
// console.log(myObject.price, customObject.price); //20.99 30

//arguments is an array-like object //arguments={ '0': 5, '1': 9 }
//only in non arrow function
function t(a, b) {
  console.log(arguments);
  arguments[0] = 10;
  return a;
}
console.log(t(5, 9));

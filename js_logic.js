//hoisting:

function hoisting() {
  console.log(x);
  var x = 10;
}
//hoisting();
function HoistError() {
  console.log(x);
  let x = 10;
  //ReferenceError: Cannot access 'x' before initialization
}
//HoistError();

//javaScript Initializations are Not Hoisted

function Hoist2() {
  console.log(x); //undefined
  var x = 10;
}
//Hoist2();
//functions
hoisted(); // Output: "This function has been hoisted."

function hoisted() {
  console.log("This function has been hoisted.");
}

// notHoist();
// //notHoist is not a function
// var notHoist = () => {
//   console.log("error.");
// };

//closure

function counter() {
  let x = 0;
  return () => {
    x++;
    return x;
  };
}
let privateCounter = counter();

// console.log(privateCounter());
// console.log(privateCounter());

// let f = setTimeout(() => {
//   console.log("in time out");
// }, 2000);
// console.log("after");
//let a = 0;
// const interval = setInterval(() => {
//   a++;
//   console.log("interval", a);
//   if (a == 5) {
//     console.log("stop");
//     clearInterval(interval);
//   }
// }, 1000);

//check if 2 numbers in array are returning the target
//we put everything in a mapper, the key is this: target - num, value in num
var twoSum = function (nums, target) {
  let map = {};
  for (let index = 0; index < nums.length; index++) {
    let key = target - nums[index];
    if (map[key]) {
      map[key].push(index);
    } else {
      map[key] = [nums[index], index];
    }
  }
  console.log(map);
  let res = [];
  for (let index = 0; index < nums.length; index++) {
    if (map[nums[index]] && map[nums[index]][1] !== index) {
      if (map[nums[index]].length > 2) {
        res.push(map[nums[index]][1]);
        res.push(map[nums[index]][2]);
      } else {
        res.push(map[nums[index]][1]);
      }
    }
  }
  console.log(res);
};
//twoSum([3, 3], 6);

//The every() method executes a function for each array element
const array1 = [1, 30, 39, 29, 102, 13];
function checkArray(age) {
  return age > 40;
}
//console.log(array1.every(checkArray));
//this
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    //here this will be:
    // {
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   id: 5566,
    //   fullName: [Function: fullName]
    // } the object itself
    console.log(this);
    return this.firstName + " " + this.lastName;
  },
};
function myFunction() {
  //this will be the global object
  return this;
}
module.exports.foo = 5;

//console.log(this); // { foo:5 } beacuse this is nodeJS
//this arrow function

const arrow = () => {
  //this == module.exports
  return this;
};
//console.log(arrow());

let ob = {
  name1: 2,
  f: () => {
    console.log(this); //this == module.exports arrow func
  },
  f2: function () {
    console.log(this); //this == the object ob regular func
  },
};
// ob.f();
// ob.f2();
//call,apply,bind
//bind
let car = {
  color: "red",
  name: "nice",
};
function carGetName() {
  return this.name;
}
console.log(carGetName()); //we will get undefined, this.name not exist

//fix:
let fixName = carGetName.bind(car);
console.log(fixName()); //nice, this = car
//call

let car2 = {
  color: "red",
  name: "nice",
};
function getColor(testParam) {
  return this.color + testParam;
}

console.log(getColor.call(car2, "test")); // print red test

let car3 = {
  color: "red",
  name: "nice",
};
function getColor3(testParam, test2) {
  return this.color + testParam + test2;
}

//console.log(getColor3.apply(car3, ["test", "test2"])); // print red test test2

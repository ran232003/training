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

//call,apply,bind
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
twoSum([3, 3], 6);

//The every() method executes a function for each array element
const array1 = [1, 30, 39, 29, 102, 13];
function checkArray(age) {
  return age > 40;
}
console.log(array1.every(checkArray));
